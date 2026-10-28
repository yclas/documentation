---
title: Connect a GoDaddy domain
description: GoDaddy can't hold the record Yclas needs on your domain itself. Here's how to connect a GoDaddy domain anyway.
section: account
order: 22
permalink: /custom-domain-godaddy/
keywords: godaddy, go daddy, godady, goddady, godaddy dns, godaddy cname, godaddy nameservers, point domain, point godaddy domain, connect domain godaddy, record name @ conflicts, domain portfolio
updated: 2026-10-28
---

This guide shows you how to connect a domain you bought from GoDaddy to your Yclas site.

## Before you start

- Read [Connect your own domain](/custom-domain/) once, so you know the three steps.
- Yclas needs one **CNAME** record on your domain itself (`@`) pointing to `transfer.yclas.com`.

**GoDaddy's DNS doesn't accept a CNAME record on `@`**, and it has no ALIAS option to use instead. So the record
can't be added at GoDaddy directly. You have two options: manage your domain's DNS in a free Cloudflare account
(below), or [open a ticket](/use-yclas-support-system/), tell us your domain is at GoDaddy, and we'll help you
choose.
{: .important}

You keep your domain at GoDaddy either way: only the place where its DNS records are edited moves.

## Move your DNS to Cloudflare

1. Create a free account at [Cloudflare](https://www.cloudflare.com/). Go to **Domains**, click **Onboard a domain**,
   type your domain and choose the **Free** plan.
2. Cloudflare copies your existing records. Check that your **MX** and **TXT** records are in the list, so your
   email keeps working, and add any that are missing.
3. Cloudflare shows you two name servers. Keep that page open.
4. In another tab, sign in to GoDaddy and open your **Domain Portfolio**. Click your domain, then **DNS ›
   Nameservers**.
5. Click **Change Nameservers**, choose **I'll use my own nameservers**, type Cloudflare's two name servers and click
   **Save**, then **Continue**. GoDaddy may ask for a verification code if your domain has Domain Protection.
{: .steps}

If DNSSEC is switched on for your domain at GoDaddy, switch it off before you change the name servers, or your domain
can stop working until it's fixed.
{: .warning}

## Add the record and connect it in Yclas

Once Cloudflare says your domain is active, add the CNAME record there, with its proxy status set to **DNS only**
(grey cloud). [Connect a Cloudflare domain](/custom-domain-cloudflare/) walks you through it.

Then open **Domain & SSL** in your site's admin panel, type your domain without `www` and click **Connect my domain**.
See [Step 3: Connect it in Yclas](/custom-domain/#step-3-connect-it-in-yclas).

## How long it takes

Changing name servers usually takes under an hour at GoDaddy, sometimes up to 48 hours. After that, the record is
live within minutes, and your site switches to https on its own. See
[SSL (https) turns on by itself](/custom-domain/#ssl-https-turns-on-by-itself).

Once your DNS is on Cloudflare, any forwarding you set up at GoDaddy stops working. To send `www` to your site, see
[Connect a Cloudflare domain](/custom-domain-cloudflare/)
{: .note}

## Troubleshooting

| Problem | What to check |
| --- | --- |
| GoDaddy won't save a CNAME record with the name `@` | That's expected: GoDaddy doesn't allow it. Move your DNS to Cloudflare as above, or open a ticket. |
| Cloudflare still says your domain is pending | The name servers at GoDaddy must match Cloudflare's two exactly. Allow up to 48 hours, and check DNSSEC is off. |
| Email stopped after the move | An MX record wasn't copied to Cloudflare. Add it under **DNS › Records** in Cloudflare. |
| "Too many redirects" | The `@` CNAME in Cloudflare is **Proxied** (orange cloud). Set it to **DNS only**. |

## Related guides

- [Connect your own domain](/custom-domain/) — the full setup, SSL and troubleshooting.
- [Connect a Cloudflare domain](/custom-domain-cloudflare/) — add the record once your DNS is on Cloudflare.
- [Email addresses on your domain](/host-email-with-your-domain/) — keep your email working.
- [Get help from Yclas support](/use-yclas-support-system/) — open a ticket if you'd like us to help.
{: .cards}
