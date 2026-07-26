# Email Security & SPF Record Configuration Guide

To prevent spammers from spoofing emails from `@templix-ai.whitesparksoft.com` or `@whitesparksoft.com` and to ensure high deliverability for system notifications and support emails, publish an SPF (Sender Policy Framework) TXT record on your domain's DNS provider.

---

## 1. Primary SPF TXT Record Specification

Add the following TXT record to your root domain (`whitesparksoft.com`) or subdomain DNS settings:

| Record Type | Host / Name | TXT Value / Content | TTL |
| :--- | :--- | :--- | :--- |
| **TXT** | `@` (or `templix-ai`) | `v=spf1 include:resend.com ~all` | 3600 |

> [!NOTE]
> If your application uses **Resend** or **Nodemailer** with a custom SMTP relay (e.g. Google Workspace, SendGrid, Amazon SES), append the corresponding include directives:

### Common Service Mixes:

- **Resend + Google Workspace**:
  ```text
  v=spf1 include:resend.com include:_spf.google.com ~all
  ```
- **Resend + Microsoft 365**:
  ```text
  v=spf1 include:resend.com include:spf.protection.outlook.com ~all
  ```

---

## 2. DKIM & DMARC Recommendations

For maximum email security and 100% inbox placement:

### DMARC TXT Record:
- **Host**: `_dmarc.whitesparksoft.com`
- **Value**: `v=DMARC1; p=none; rua=mailto:dmarc-reports@whitesparksoft.com; fo=1`

### DKIM:
- Ensure the CNAME / TXT selector records generated in your email service provider (e.g., Resend Dashboard) are published on your DNS host.

---

## 3. Verification Commands

Verify your DNS records using `dig` or `nslookup`:

```bash
# Check SPF TXT Record
dig TXT whitesparksoft.com +short

# Check DMARC TXT Record
dig TXT _dmarc.whitesparksoft.com +short
```
