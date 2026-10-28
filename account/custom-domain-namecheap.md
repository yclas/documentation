---
title: Connect a Namecheap domain
description: Point a Namecheap domain to your Yclas site with one ALIAS record in Advanced DNS, step by step.
section: account
order: 23
permalink: /custom-domain-namecheap/
keywords: namecheap, name cheap, namecheep, namecheap dns, advanced dns, alias record, namecheap alias, point domain, connect domain namecheap, url redirect record, parking page, basicdns
updated: 2026-10-28
---

This guide shows you exactly where to add the one record Yclas needs when your domain is at Namecheap.

## Before you start

- Read [Connect your own domain](/custom-domain/) once, so you know the three steps.
- Your domain must use Namecheap's own DNS. In Namecheap, on your domain's **Domain** tab, **Nameservers** should say
  **Namecheap BasicDNS** (or PremiumDNS). If it shows other name servers, add the record where those are managed.

Yclas asks for a CNAME record on your domain itself (`@`). Namecheap advises against a CNAME on `@` because it can
stop your email working, and offers an **ALIAS** record for exactly this case. Use the ALIAS record below: it points
your domain to the same target.
{: .note}

## Add the record at Namecheap

1. Sign in to Namecheap, open **Domain List** and click **Manage** next to your domain.
2. Open the **Advanced DNS** tab and find **Host Records**.
3. Delete any record whose **Host** is `@`, such as an **A Record**, a **CNAME Record** or a **URL Redirect Record**
   (new domains often have one pointing to a parking page). Click the bin icon next to each one. Leave your mail
   records alone.
4. Click **Add New Record** and fill in:
   - **Type**: `ALIAS Record`
   - **Host**: `@`
   - **Value**: `transfer.yclas.com`
   - **TTL**: `5 min`
5. Click the tick next to the record, or **Save All Changes**.
{: .steps}

## Connect it in Yclas

Open **Domain & SSL** in your site's admin panel, type your domain without `www` and click **Connect my domain**. The
full details are in [Step 3: Connect it in Yclas](/custom-domain/#step-3-connect-it-in-yclas).

## How long it takes

Namecheap says DNS changes take up to 30 minutes to reach everyone, occasionally longer. Once we see the record, a
free certificate is issued and your site switches to https on its own. See
[SSL (https) turns on by itself](/custom-domain/#ssl-https-turns-on-by-itself).

To send people who type `www.yourdomain.com` to your site, delete any record whose **Host** is `www` (often a CNAME
to Namecheap's parking page), then add a **URL Redirect Record** with **Host** `www`, **Value**
`https://yourdomain.com` and **Permanent (301)**. Namecheap's redirect doesn't come with its own certificate, so a
visitor who types `https://www.yourdomain.com` may see a warning. If that matters to you,
[open a ticket](/use-yclas-support-system/).
{: .note}

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Namecheap won't save the ALIAS record | Another record for `@` is still there (A, CNAME or URL Redirect). Delete it and try again. |
| You can't edit Host Records | Your domain isn't on Namecheap BasicDNS. Switch it back on the **Domain** tab, or add the record where your DNS is managed. |
| The SSL page keeps saying **Waiting for your DNS record** | Check the ALIAS record's **Host** is `@` and its **Value** is exactly `transfer.yclas.com`, with no old A record left. |
| Email stopped working | A mail record was deleted. Add your **MX** records back under **Mail Settings** on the same tab. |

## Related guides

- [Connect your own domain](/custom-domain/) — the full setup, SSL and troubleshooting.
- [Connect a Cloudflare domain](/custom-domain-cloudflare/) — if your Namecheap domain's DNS is on Cloudflare.
- [Email addresses on your domain](/host-email-with-your-domain/) — keep your email working.
- [Get help from Yclas support](/use-yclas-support-system/) — open a ticket if you're stuck.
{: .cards}
