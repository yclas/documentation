---
title: Connect your own domain
description: Show your marketplace at your own address, such as yourdomain.com, with free SSL - the one DNS record to add, how the certificate turns on, and what changes for domains already connected.
section: account
order: 20
permalink: /custom-domain/
redirect_from:
  - /redirect-www-to-non-www/
  - /move-classifieds-site-http-https/
keywords: custom domain, own domain, domain name, dns, cname, cname record, one record, cloudflare, ssl, https, certificate, www, non-www, redirect, registrar, godaddy, namecheap, hover, nameservers, dns provider
updated: 2026-10-16
---

Every Yclas site starts at an address like `yourname.yclas.com`. When you're ready, you can show it at your own
domain instead, such as `yourdomain.com`. Members, search engines and your emails then use your address, and the
site runs on https with a free SSL certificate.

Connecting a domain is included on every paid plan. It takes about 5 minutes of work: you add **one DNS record**
where you bought your domain, and we take care of the certificate. You don't need a Cloudflare account or any other
service.

Connect your domain before you promote your site. Links people share and pages search engines index then use the
final address from the start.
{: .tip}

## Before you start

You need **a domain name**. If you don't have one, buy it from any domain registrar.

Open the setup page from either place:

- In your site's admin panel, click **Domain & SSL** at the bottom of the sidebar.
- At yclas.com, open **My sites**, click **Settings** next to the site, then **Use your own domain**.

The page, **Use your own domain**, walks you through the same three steps as below.

Already connected a domain before? Your setup stays exactly as it is. See
[Sites connected before](#sites-connected-before) at the end of this guide.
{: .note}

## Step 1: Get a domain name

If you already own the domain, skip this step. Otherwise buy one from any registrar; the setup page links to one
option.

## Step 2: Add one DNS record

Sign in where your domain's DNS is managed (usually the company you bought the domain from) and open its DNS
settings. Delete any **A** record for your domain itself, then add this record:

| Type | Name | Target |
| --- | --- | --- |
| CNAME | `@` (your domain) | the address shown on the **Use your own domain** page |

Copy the target exactly as the setup page shows it. That's the only record you need: there's no SSL setting to
choose and no verification record to add.

Some DNS providers don't allow a CNAME record on the domain itself (`@`) and only offer A records there. If yours
refuses it, look for an **ALIAS**, **ANAME** or "CNAME flattening" option, or [open a ticket](/use-yclas-support-system/)
and tell us who manages your DNS.
{: .note}

Leave your email (MX) records as they are, so your email keeps working. See
[Email addresses on your domain](/host-email-with-your-domain/).

## Step 3: Connect it in Yclas

1. Back on the **Use your own domain** page, type your domain without `www`, for example `yourdomain.com`.
2. Click **Connect my domain**.
{: .steps}

You're taken back to **My sites** with the message *Domain name for your site changed!*. Your site now uses your
domain, and your old `.yclas.com` address stops working, so update any links you've shared.

You can add the DNS record before or after this step, but it's best to add it first: your site moves to the new
address as soon as you click, and visitors can only reach it there once the record is live. DNS changes usually
take a few minutes, sometimes up to 48 hours.
{: .tip}

## SSL (https) turns on by itself

Once your DNS record is live, we detect it, a free certificate is issued for your domain, and your site switches to
https on its own. There's nothing to buy, renew or switch on.

Until then your site opens with http, and its settings page on yclas.com shows **SSL certificate: Off**. To see how
far it has got, open **My sites › Settings** and click **Activate SSL**. The page shows one of two states:

| You see | What it means |
| --- | --- |
| **Waiting for your DNS record** | We haven't seen your record yet, or the certificate is still being issued. No action needed: it turns on by itself once it's ready. |
| **Your certificate is ready** | The certificate is issued. Click **Check now** to turn https on straight away, or wait a few minutes and it turns on by itself. |

When https is on, **My sites** shows **Own domain · SSL on** on the site's card.

## www or no www?

Your site's main address is the domain without `www`, and that's the address this setup connects. If you also want
people who type `www.yourdomain.com` to reach your site, set up a redirect from `www` to your domain at your registrar
(most call it "domain forwarding"), or [open a ticket](/use-yclas-support-system/) and we'll help.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| The SSL page keeps saying **Waiting for your DNS record** | The `@` record is a CNAME with the exact target from the setup page, and there's no old A record left for your domain. DNS changes can take up to 48 hours. |
| My DNS provider won't accept a CNAME on `@` | Use its ALIAS, ANAME or CNAME flattening option, or [open a ticket](/use-yclas-support-system/). |
| "Domain name in use or invalid" | The domain is already connected to another Yclas site, or it's not a valid domain name. Type it without `http://` and without `www`. |
| Some images or links still use the old address | Clear your site's cache (**Tools › Cache**) and your browser's cache. See [Cache](/modify-cache-time/). |
| Email stopped working | Your MX records were changed or deleted. Add them back in your DNS settings. |

Still stuck? [Open a ticket](/use-yclas-support-system/) and tell us which step you're on.

## Sites connected before

If your site was already on its own domain before the one-record setup arrived, nothing changes: it keeps running
through your own Cloudflare account, with the records and the **Flexible** SSL setting you chose then. Don't change
those settings.

If you change the domain of such a site, the **Use your own domain** page shows the original steps instead:

1. Add the domain to a free [Cloudflare](https://www.cloudflare.com/) account and set Cloudflare's two name servers
   at your registrar.
2. In Cloudflare, open **DNS**, delete any **A** records for your domain and for `www`, and add a proxied (orange
   cloud) **CNAME** for `@` pointing to `yclas.ovh`, plus an optional proxied **CNAME** for `www` pointing to your
   domain.
3. In Cloudflare, open **SSL/TLS** and choose **Flexible** (not **Full** or **Full (strict)**, which can stop your
   site from loading).
4. Type your domain, click **Test domain**, and when you see *Your domain points to Yclas. You can switch your site to
   it.*, click **Switch to my domain**.
{: .steps}

On these sites, SSL comes from Cloudflare and is switched on when you switch domain. You can turn it off and on from
**My sites › Settings** with **Deactivate SSL** and **Activate SSL**; before turning it back on, make sure **SSL/TLS**
in Cloudflare is still set to **Flexible**. If you see too many redirects or an SSL error, check that setting first.

## Related guides

- [Email addresses on your domain](/host-email-with-your-domain/) — use `you@yourdomain.com` for your email.
- [Make sure your emails arrive](/emails-go-to-spam/) — send your site's emails from your domain.
- [Plans and billing](/plans-and-billing/) — your own domain is included on every paid plan.
- [Sitemap](/sitemap-classifieds-website/) — regenerate it after switching, then tell Google.
{: .cards}
