# Email Security & DNS Setup Guide: SPF, DMARC, DKIM & Canonicalization

This guide provides the exact copy-paste DNS records required to pass the **SPF Records Test**, **Canonicalization Test**, and secure emails for `templix-ai.whitesparksoft.com` and `whitesparksoft.com`.

---

## 1. SPF (Sender Policy Framework) TXT Record

SPF specifies which mail servers are authorized to send emails on behalf of your domain.

### For `whitesparksoft.com` (Apex Root Domain)
Add or update the TXT record in your DNS provider (Cloudflare, GoDaddy, Namecheap, Route 53, etc.):

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **TXT** | `@` (or `whitesparksoft.com`) | `v=spf1 include:resend.com include:_spf.google.com ~all` | Auto / 3600 |

### For `templix-ai.whitesparksoft.com` (Subdomain)
If your DNS provider requires subdomain TXT records specifically:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **TXT** | `templix-ai` | `v=spf1 include:resend.com include:_spf.google.com ~all` | Auto / 3600 |

> [!TIP]
> - `include:resend.com` authorizes Resend transactional emails.
> - `include:_spf.google.com` authorizes Google Workspace / Gmail SMTP relays.
> - `~all` specifies a soft fail for unauthorized senders, preventing spam abuse while maintaining high deliverability.

---

## 2. DMARC TXT Record

DMARC specifies policy handling for emails that fail SPF/DKIM authentication.

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **TXT** | `_dmarc` (or `_dmarc.whitesparksoft.com`) | `v=DMARC1; p=none; sp=none; rua=mailto:support@whitesparksoft.com; fo=1` | Auto / 3600 |
| **TXT** | `_dmarc.templix-ai` | `v=DMARC1; p=none; sp=none; rua=mailto:support@whitesparksoft.com; fo=1` | Auto / 3600 |

---

## 3. URL Canonicalization & `www` CNAME Record

To pass the **URL Canonicalization Test** (ensuring `https://www.templix-ai.whitesparksoft.com/en` resolves and 301-redirects to `https://templix-ai.whitesparksoft.com/en`), add a CNAME record:

| Type | Name / Host | Value / Target | TTL | Proxy Status |
| :--- | :--- | :--- | :--- | :--- |
| **CNAME** | `www.templix-ai` | `templix-ai.whitesparksoft.com` (or Vercel CNAME `cname.vercel-dns.com`) | Auto / 3600 | Proxied / DNS only |

Next.js (`next.config.ts` and `src/proxy.ts`) will automatically catch incoming requests to `www.templix-ai.whitesparksoft.com` and issue an immediate 301 Permanent Redirect to `https://templix-ai.whitesparksoft.com`.

---

## 4. Verification Commands

Run these commands in PowerShell or Terminal to verify your DNS propagation:

```bash
# Verify SPF record on apex domain
nslookup -type=TXT whitesparksoft.com

# Verify SPF record on subdomain
nslookup -type=TXT templix-ai.whitesparksoft.com

# Verify DMARC record
nslookup -type=TXT _dmarc.whitesparksoft.com

# Verify www CNAME record
nslookup -type=CNAME www.templix-ai.whitesparksoft.com
```
