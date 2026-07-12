// No-op stand-in for the native `canvas` package. pdfjs-dist only requires
// `canvas` for server-side (Node) rendering, guarded behind runtime checks.
// We render PDFs in the browser, so this stub is never actually used at runtime.
module.exports = {};
