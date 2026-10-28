---
title: Connect a Squarespace domain
description: Point a Squarespace domain, including one moved over from Google Domains, to your Yclas site with one ALIAS record.
section: account
order: 24
permalink: /custom-domain-squarespace/
keywords: squarespace, square space, squarspace, squarespace domains, google domains, google domain, squarespace dns, alias record, squarespace defaults, point domain, connect domain squarespace, custom records
updated: 2026-10-28
---

This guide shows you where to add the one record Yclas needs when your domain is at Squarespace Domains. That
includes domains that were bought from Google Domains, which moved to Squarespace.

## Before you start

- Read [Connect your own domain](/custom-domain/) once, so you know the three steps.
- You manage the domain in Squarespace's domains dashboard. You don't need a Squarespace website.

Yclas asks for a CNAME record on your domain itself (`@`), but Squarespace doesn't allow a CNAME there. It offers an
**ALIAS** record instead, which points your domain to the same target. Use the ALIAS record below.
{: .note}

## Add the record at Squarespace

1. Sign in to Squarespace, open your domains dashboard and click your domain.
2. Click **DNS** in the side panel. Squarespace may ask for your password again before you change anything.
3. Delete any **A** or **AAAA** record whose host is `@`. If you see a **Squarespace Defaults** group, it holds these
   records and pointed the domain at a Squarespace site: delete it with the bin icon and confirm. Leave your email
   records (**MX**, and **TXT** for SPF or DKIM) alone.
4. Under **Custom records**, click **Add record** and fill in:
   - **Type**: `ALIAS`
   - **Host**: `@`
   - **Data**: `transfer.yclas.com`
   - **TTL**: leave the default
5. Click **Save**.
{: .steps}

Deleting **Squarespace Defaults** disconnects the domain from any Squarespace website it was showing. That's what you
want if your marketplace is replacing that site.
{: .warning}

## Connect it in Yclas

Open **Domain & SSL** in your site's admin panel, type your domain without `www` and click **Connect my domain**. The
full details are in [Step 3: Connect it in Yclas](/custom-domain/#step-3-connect-it-in-yclas).

## How long it takes

It often works within an hour, but Squarespace says DNS changes can take 24 to 48 hours. Once we see the record, a
free certificate is issued and your site switches to https on its own. See
[SSL (https) turns on by itself](/custom-domain/#ssl-https-turns-on-by-itself).

To send `www.yourdomain.com` to your site, delete the `www` record and set up a forward from `www` to
`https://yourdomain.com` with Squarespace's domain forwarding. Squarespace's forwarding doesn't always work for
`www` while the domain itself points elsewhere: if it doesn't, [open a ticket](/use-yclas-support-system/) and we'll
help.
{: .note}

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Squarespace refuses a CNAME with host `@` | That's expected. Use an **ALIAS** record as above. |
| Squarespace won't save the ALIAS record | An A, AAAA or CNAME record for `@` is still there, often inside **Squarespace Defaults**. Delete it and try again. If it still refuses, open a ticket. |
| The SSL page keeps saying **Waiting for your DNS record** | Check the ALIAS record's host is `@` and its data is exactly `transfer.yclas.com`. Allow up to 48 hours. |
| Email stopped working | An email record was deleted with the defaults. Add your provider's **MX** records back under **Custom records**. |

## Related guides

- [Connect your own domain](/custom-domain/) — the full setup, SSL and troubleshooting.
- [Connect a Cloudflare domain](/custom-domain-cloudflare/) — if your domain's DNS is on Cloudflare.
- [Email addresses on your domain](/host-email-with-your-domain/) — keep your email working.
- [Get help from Yclas support](/use-yclas-support-system/) — open a ticket if you're stuck.
{: .cards}
