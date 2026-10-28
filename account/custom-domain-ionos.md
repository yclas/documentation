---
title: Connect an IONOS domain
description: Point an IONOS domain to your Yclas site with one CNAME record, and what to do if IONOS won't accept it.
section: account
order: 25
permalink: /custom-domain-ionos/
keywords: ionos, 1&1, 1and1, 1und1, one and one, ionos dns, ionos cname, domains & ssl, point domain, connect domain ionos, aaaa record
updated: 2026-10-28
---

This guide shows you where to add the one record Yclas needs when your domain is at IONOS (formerly 1&1).

## Before you start

- Read [Connect your own domain](/custom-domain/) once, so you know the three steps.
- Your domain must use IONOS's own name servers. If it uses another company's, add the record there instead.

Yclas needs a **CNAME** record on your domain itself (`@`). IONOS treats a CNAME as clashing with any other record of
the same name, including the **MX** records your email needs, and it has no ALIAS record to use instead. If IONOS
refuses the record, or asks you to delete your MX records, stop: don't delete them. See
[If IONOS refuses the record](#if-ionos-refuses-the-record) below.
{: .important}

## Add the record at IONOS

1. Sign in to IONOS and open **Domains & SSL**.
2. Click the three-dots menu under **Actions** next to your domain and choose **DNS**.
3. Delete any **A** and **AAAA** records whose **Host name** is `@`: click the bin icon next to each one. Leave **MX**
   and **TXT** records alone.
4. Click **Add record** and choose **CNAME**. Fill in:
   - **Host name**: `@`
   - **Points to**: `transfer.yclas.com`
   - **TTL**: leave the default
5. Click **Save**.
{: .steps}

Type `@` (or leave **Host name** empty), never your full domain: IONOS would read `yourdomain.com` as
`yourdomain.com.yourdomain.com`.
{: .tip}

## If IONOS refuses the record

You have two options, and you keep your domain at IONOS with either:

- Manage your domain's DNS in a free Cloudflare account, which accepts this record next to your email records. The
  steps are the same as for GoDaddy: see [Move your DNS to Cloudflare](/custom-domain-godaddy/#move-your-dns-to-cloudflare),
  changing the name servers in IONOS instead of GoDaddy.
- [Open a ticket](/use-yclas-support-system/), tell us your domain is at IONOS, and we'll help you choose.

## Connect it in Yclas

Open **Domain & SSL** in your site's admin panel, type your domain without `www` and click **Connect my domain**. The
full details are in [Step 3: Connect it in Yclas](/custom-domain/#step-3-connect-it-in-yclas).

## How long it takes

IONOS applies the change straight away, and it usually reaches everyone within an hour. Once we see the record, a
free certificate is issued and your site switches to https on its own. See
[SSL (https) turns on by itself](/custom-domain/#ssl-https-turns-on-by-itself).

To send `www.yourdomain.com` to your site as well, set up a redirect from `www` to your domain at IONOS, or open a
ticket. See [www or no www?](/custom-domain/#www-or-no-www)
{: .note}

## Troubleshooting

| Problem | What to check |
| --- | --- |
| IONOS says the record conflicts with an existing one | An A or AAAA record for `@` is still there. Delete it. If the conflict is with MX or TXT records, keep them and see [If IONOS refuses the record](#if-ionos-refuses-the-record). |
| The SSL page keeps saying **Waiting for your DNS record** | Check the CNAME's **Host name** is `@` and it points to exactly `transfer.yclas.com`, with no A or AAAA record left for your domain. |
| Your domain also showed an IONOS website | Deleting its A records disconnects that website. That's expected if your marketplace replaces it. |
| Email stopped working | An MX record was deleted. Add it back in the same **DNS** page. |

## Related guides

- [Connect your own domain](/custom-domain/) — the full setup, SSL and troubleshooting.
- [Connect a Cloudflare domain](/custom-domain-cloudflare/) — add the record once your DNS is on Cloudflare.
- [Email addresses on your domain](/host-email-with-your-domain/) — keep your email working.
- [Get help from Yclas support](/use-yclas-support-system/) — open a ticket if you're stuck.
{: .cards}
