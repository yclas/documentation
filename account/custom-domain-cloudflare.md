---
title: Connect a Cloudflare domain
description: Point a domain registered at Cloudflare, or with its DNS on Cloudflare, to your Yclas site with one DNS-only CNAME record.
section: account
order: 21
permalink: /custom-domain-cloudflare/
keywords: cloudflare dns, cloud flare, cloudfare, cloudflair, cloudflare registrar, grey cloud, gray cloud, dns only, orange cloud, proxied, too many redirects, point domain, cname flattening, connect domain cloudflare
updated: 2026-10-28
---

If you bought your domain from Cloudflare, or your domain's DNS is managed in a Cloudflare account, this guide shows
you exactly where to add the one record Yclas needs.

## Before you start

- Read [Connect your own domain](/custom-domain/) once, so you know the three steps.
- Your domain must use Cloudflare's name servers. Domains registered at Cloudflare always do. If you bought the
  domain elsewhere and added it to Cloudflare, check that the domain shows as **Active** in your Cloudflare account.

Did you connect your domain to Yclas before the one-record setup, with a proxied record pointing to `yclas.ovh` and
the **Flexible** SSL setting? Leave it exactly as it is. This guide is for new connections. See
[Sites connected before](/custom-domain/#sites-connected-before).
{: .note}

## Add the record at Cloudflare

1. Sign in to Cloudflare and click your domain.
2. Open **DNS › Records**.
3. Find any **A** or **AAAA** records whose **Name** is your domain itself (shown as your domain or `@`). Click
   **Edit** on each one, then **Delete**. Leave **MX** and **TXT** records alone, so your email keeps working.
4. Click **Add record** and fill in:
   - **Type**: `CNAME`
   - **Name**: `@`
   - **Target**: `transfer.yclas.com`
   - **Proxy status**: switched off, so it says **DNS only** (grey cloud)
   - **TTL**: leave it on **Auto**
5. Click **Save**.
{: .steps}

**DNS only (grey cloud) is the setting that matters.** If the record is **Proxied** (orange cloud), our certificate
can't be issued and visitors can see a "too many redirects" error. Cloudflare's **SSL/TLS** setting doesn't matter
for this record, so you don't need to change it.
{: .important}

Cloudflare accepts a CNAME record on your domain itself and handles it for you behind the scenes (it calls this
"CNAME flattening"), so there's nothing else to switch on.

## Connect it in Yclas

Open **Domain & SSL** in your site's admin panel, type your domain without `www` and click **Connect my domain**. The
full details are in [Step 3: Connect it in Yclas](/custom-domain/#step-3-connect-it-in-yclas).

## How long it takes

Cloudflare publishes the record within a few minutes. Once we see it, a free certificate is issued and your site
switches to https on its own. See [SSL (https) turns on by itself](/custom-domain/#ssl-https-turns-on-by-itself).

The record above connects `yourdomain.com`. To send people who type `www.yourdomain.com` to your site, set up a
redirect from `www` to your domain: Cloudflare's **Rules** section can do this. If you're not sure how,
[open a ticket](/use-yclas-support-system/) and we'll help.
{: .note}

## Troubleshooting

| Problem | What to check |
| --- | --- |
| "Too many redirects" | The `@` CNAME to `transfer.yclas.com` must be **DNS only** (grey cloud), not **Proxied**. |
| Cloudflare says a record with that host already exists | An A, AAAA or CNAME record for `@` is still there. Delete it, then add the CNAME again. |
| The SSL page keeps saying **Waiting for your DNS record** | Check the record is **DNS only**, its **Name** is `@` (not `www`) and no A or AAAA record is left for your domain. |
| Your domain isn't listed in your Cloudflare account | Its DNS is managed somewhere else. Add the record there instead, or see the other guides below. |

## Related guides

- [Connect your own domain](/custom-domain/) — the full setup, SSL and troubleshooting.
- [Connect a GoDaddy domain](/custom-domain-godaddy/) — move a GoDaddy domain's DNS to Cloudflare.
- [Connect a Namecheap domain](/custom-domain-namecheap/) — the record to add at Namecheap.
- [Email addresses on your domain](/host-email-with-your-domain/) — keep your email working.
{: .cards}
