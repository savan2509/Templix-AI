# Email Security & SPF Configuration Guide

To prevent email spoofing, maintain high domain reputation, and ensure high deliverability of transactional emails (such as new user sign-up notifications and magic login links), publish the following DNS TXT records for **`templix-ai.whitesparksoft.com`**.

---

## 1. SPF (Sender Policy Framework) Record

SPF specifies which mail servers are authorized to send email on behalf of your domain.

- **Record Type**: `TXT`
- **Host / Name**: `@` (or `templix-ai.whitesparksoft.com`)
- **TTL**: `3600` (or Auto)
- **TXT Value**:
  ```text
  v=spf1 include:resend.com include:_spf.google.com ~all
  ```

> [!NOTE]
> If using another SMTP provider (e.g. SendGrid, Mailgun, or Postmark), replace or append their SPF `include:` directive (e.g., `include:sendgrid.net`).

---

## 2. DKIM (DomainKeys Identified Mail) Record

DKIM adds a cryptographic signature to outbound emails to verify sender authenticity.

- **Record Type**: `CNAME` or `TXT` (Provided by your email gateway, e.g. Resend / Google Workspace)
- **Host / Name**: `resend._domainkey` (or provider specific selector)
- **TXT / CNAME Value**: `[Key provided by email provider]`

---

## 3. DMARC (Domain-based Message Authentication, Reporting & Conformance) Record

DMARC specifies how receiving mail servers should handle emails that fail SPF or DKIM checks.

- **Record Type**: `TXT`
- **Host / Name**: `_dmarc` (or `_dmarc.templix-ai.whitesparksoft.com`)
- **TTL**: `3600`
- **TXT Value**:
  ```text
  v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc@whitesparksoft.com; fo=1
  ```

---

## Application Mail Sender Alignment

Outbound emails sent by `src/lib/email.ts` use the authorized domain sender:

```typescript
const from = process.env.EMAIL_FROM || "no-reply@templix-ai.whitesparksoft.com";
```

Ensure `EMAIL_FROM` in your `.env` file matches the domain authorized by your SPF and DKIM records.
