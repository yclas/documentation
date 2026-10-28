---
title: Connect a Hostinger domain
description: Point a Hostinger domain to your Yclas site with one CNAME record in hPanel's DNS editor, step by step.
section: account
order: 26
permalink: /custom-domain-hostinger/
keywords: hostinger, hostingr, hostinguer, hpanel, h panel, hostinger dns, dns zone editor, dns records, hostinger cname, alias, point domain, connect domain hostinger, dns-parking
updated: 2026-10-28
---

This guide shows you where to add the one record Yclas needs when your domain is at Hostinger.

## Before you start

- Read [Connect your own domain](/custom-domain/) once, so you know the three steps.
- Your domain must use Hostinger's name servers (they end in `dns-parking.com`). If it uses another company's, add
  the record there instead.

Hostinger accepts a CNAME record on your domain itself (`@`). It saves it as an **ALIAS** record, because a true CNAME
isn't allowed there, so don't worry when the list shows **ALIAS** instead of **CNAME**: it points to the same target.
{: .note}

## Add the record at Hostinger

1. Sign in to hPanel and click **Domains › DNS** in the sidebar, then your domain. (You can also go to **Domains**,
   click **Manage** next to the domain, then **DNS / Nameservers › DNS records**.)
2. In the list of records, find any **A**, **AAAA**, **ALIAS** or **CNAME** record whose **Name** is `@`. Click the
   bin icon next to each one and confirm with **Delete**. Leave **MX** and **TXT** records alone.
3. Under **Manage DNS records**, fill in:
   - **Type**: `CNAME`
   - **Name**: `@`
   - **Target** (some screens say **Content**): `transfer.yclas.com`
   - **TTL**: leave the default
4. Click **Add Record**.
{: .steps}

Your domain can only have one ALIAS record on `@`. If Hostinger says one already exists, delete it (step 2) or edit
it so it points to `transfer.yclas.com`.
{: .tip}

If the domain was showing a website hosted at Hostinger, deleting its `@` records disconnects that website. That's
what you want if your marketplace is replacing it.
{: .warning}

## Connect it in Yclas

Open **Domain & SSL** in your site's admin panel, type your domain without `www` and click **Connect my domain**. The
full details are in [Step 3: Connect it in Yclas](/custom-domain/#step-3-connect-it-in-yclas).

## How long it takes

DNS changes at Hostinger usually reach everyone within an hour, sometimes up to 24 hours. Once we see the record, a
free certificate is issued and your site switches to https on its own. See
[SSL (https) turns on by itself](/custom-domain/#ssl-https-turns-on-by-itself).

To send `www.yourdomain.com` to your site as well, set up a redirect from `www` to your domain at Hostinger, or
[open a ticket](/use-yclas-support-system/) and we'll help. See [www or no www?](/custom-domain/#www-or-no-www)
{: .note}

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Hostinger won't add the record | An A, AAAA or ALIAS record for `@` is still there. Delete it and add the CNAME again. |
| The DNS page says your domain uses other name servers | Your DNS is managed elsewhere. Add the record there, or set the domain back to Hostinger's name servers. |
| The SSL page keeps saying **Waiting for your DNS record** | Check the `@` record (shown as ALIAS) points to exactly `transfer.yclas.com`, with no A record left for your domain. |
| Email stopped working | An MX record was deleted. Add it back, or restore an earlier version from the **DNS history** tab. |

## Related guides

- [Connect your own domain](/custom-domain/) — the full setup, SSL and troubleshooting.
- [Connect a Cloudflare domain](/custom-domain-cloudflare/) — if your domain's DNS is on Cloudflare.
- [Email addresses on your domain](/host-email-with-your-domain/) — keep your email working.
- [Get help from Yclas support](/use-yclas-support-system/) — open a ticket if you're stuck.
{: .cards}
