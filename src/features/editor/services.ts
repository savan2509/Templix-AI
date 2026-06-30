import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel } from "docx";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

// 1. DOCX Exporter
export async function exportToDocx(docJson: any, title: string) {
  const docChildren: any[] = [];

  // Parse Tiptap blocks to DOCX nodes
  if (docJson && docJson.content) {
    docJson.content.forEach((node: any) => {
      if (node.type === "heading") {
        const text = node.content?.map((c: any) => c.text).join("") || "";
        const level = node.attrs?.level || 1;
        docChildren.push(
          new Paragraph({
            text,
            heading: level === 1 ? HeadingLevel.HEADING_1 : HeadingLevel.HEADING_2,
            spacing: { before: 240, after: 120 },
          })
        );
      } else if (node.type === "paragraph") {
        const childrenRuns =
          node.content?.map((c: any) => {
            const isBold = c.marks?.some((m: any) => m.type === "bold");
            const isItalic = c.marks?.some((m: any) => m.type === "italic");
            return new TextRun({
              text: c.text || "",
              bold: isBold,
              italics: isItalic,
            });
          }) || [];

        docChildren.push(
          new Paragraph({
            children: childrenRuns,
            spacing: { after: 120 },
          })
        );
      } else if (node.type === "table") {
        const rows =
          node.content?.map((rowNode: any) => {
            const cells =
              rowNode.content?.map((cellNode: any) => {
                // Table cell content mapping
                const cellText =
                  cellNode.content?.[0]?.content?.[0]?.text || "";
                return new TableCell({
                  children: [new Paragraph({ text: cellText })],
                });
              }) || [];
            return new TableRow({ children: cells });
          }) || [];

        docChildren.push(new Table({ rows }));
      } else if (node.type === "bulletList") {
        node.content?.forEach((li: any) => {
          const text = li.content?.[0]?.content?.[0]?.text || "";
          docChildren.push(
            new Paragraph({
              text,
              bullet: { level: 0 },
              spacing: { after: 60 },
            })
          );
        });
      }
    });
  }

  // Create document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: docChildren,
      },
    ],
  });

  // Pack and save
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title.replace(/\s+/g, "_")}.docx`;
  link.click();
  URL.revokeObjectURL(url);
}

// 2. PDF Exporter using pdf-lib
export async function exportToPdf(docJson: any, title: string) {
  // Create a blank PDF Document
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([595.276, 841.89]); // A4 Size dimensions
  const { width, height } = page.getSize();

  // Load fonts
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  let yPosition = height - 50;
  const margin = 50;
  const usableWidth = width - margin * 2;

  // Title draw
  page.drawText(title.toUpperCase(), {
    x: margin,
    y: yPosition,
    size: 20,
    font: helveticaBoldFont,
    color: rgb(0.1, 0.3, 0.8), // Corporate blue
  });
  yPosition -= 40;

  // Helper function to draw wrapped text
  const drawTextWrapped = (text: string, fontSize: number, isBold: boolean) => {
    const font = isBold ? helveticaBoldFont : helveticaFont;
    const words = text.split(" ");
    let line = "";
    
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      const widthTest = font.widthOfTextAtSize(testLine, fontSize);
      
      if (widthTest > usableWidth) {
        // Draw line
        page.drawText(line.trim(), {
          x: margin,
          y: yPosition,
          size: fontSize,
          font: font,
          color: rgb(0.15, 0.15, 0.15),
        });
        yPosition -= fontSize + 6;
        
        // Add new page if boundary crossed
        if (yPosition < 50) {
          page = pdfDoc.addPage([595.276, 841.89]);
          yPosition = height - 50;
        }
        line = words[i] + " ";
      } else {
        line = testLine;
      }
    }
    
    // Draw last line
    if (line) {
      page.drawText(line.trim(), {
        x: margin,
        y: yPosition,
        size: fontSize,
        font: font,
        color: rgb(0.15, 0.15, 0.15),
      });
      yPosition -= fontSize + 10;
    }
  };

  // Draw Tiptap content blocks
  if (docJson && docJson.content) {
    docJson.content.forEach((node: any) => {
      // Check page break
      if (yPosition < 60) {
        page = pdfDoc.addPage([595.276, 841.89]);
        yPosition = height - 50;
      }

      if (node.type === "heading") {
        const text = node.content?.map((c: any) => c.text).join("") || "";
        const level = node.attrs?.level || 1;
        const fontSize = level === 1 ? 16 : 13;
        
        page.drawText(text, {
          x: margin,
          y: yPosition,
          size: fontSize,
          font: helveticaBoldFont,
          color: rgb(0.05, 0.05, 0.05),
        });
        yPosition -= fontSize + 12;
      } 
      else if (node.type === "paragraph") {
        // Simple text runs join
        const text = node.content?.map((c: any) => c.text).join("") || "";
        if (text.trim()) {
          drawTextWrapped(text, 10, false);
        } else {
          yPosition -= 10; // spacing for blank line
        }
      } 
      else if (node.type === "bulletList") {
        node.content?.forEach((li: any) => {
          const text = li.content?.[0]?.content?.[0]?.text || "";
          page.drawText("•", {
            x: margin,
            y: yPosition,
            size: 10,
            font: helveticaBoldFont,
            color: rgb(0.1, 0.3, 0.8),
          });
          page.drawText(text, {
            x: margin + 12,
            y: yPosition,
            size: 10,
            font: helveticaFont,
            color: rgb(0.15, 0.15, 0.15),
          });
          yPosition -= 16;
          
          if (yPosition < 50) {
            page = pdfDoc.addPage([595.276, 841.89]);
            yPosition = height - 50;
          }
        });
        yPosition -= 6;
      }
      else if (node.type === "table") {
        // Draw simple table representation in PDF
        page.drawText("[Table Data Section]", {
          x: margin,
          y: yPosition,
          size: 9,
          font: helveticaBoldFont,
          color: rgb(0.4, 0.4, 0.4),
        });
        yPosition -= 12;

        node.content?.forEach((row: any) => {
          const rowText = row.content?.map((cell: any) => {
            return cell.content?.[0]?.content?.[0]?.text || "";
          }).join(" | ");
          
          page.drawText(rowText, {
            x: margin + 10,
            y: yPosition,
            size: 9,
            font: helveticaFont,
            color: rgb(0.2, 0.2, 0.2),
          });
          yPosition -= 14;

          if (yPosition < 50) {
            page = pdfDoc.addPage([595.276, 841.89]);
            yPosition = height - 50;
          }
        });
        yPosition -= 10;
      }
    });
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // Create blob and download
  const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title.replace(/\s+/g, "_")}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
}
