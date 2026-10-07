---
title: Connect your own domain
description: Show your marketplace at your own address, such as yourdomain.com, with free SSL - the DNS records to add, how to test them and how to switch.
section: account
order: 20
permalink: /custom-domain/
redirect_from:
  - /redirect-www-to-non-www/
  - /move-classifieds-site-http-https/
keywords: custom domain, own domain, domain name, dns, cname, cloudflare, ssl, https, certificate, www, non-www, redirect, registrar, godaddy, namecheap, hover, nameservers
updated: 2026-10-07
---

Every Yclas site starts at an address like `yourname.yclas.com`. When you're ready, you can show it at your own
domain instead, such as `yourdomain.com`. Members, search engines and your emails then use your address, and the
site runs on https with a free SSL certificate.

Connecting a domain is included on every paid plan. Setup takes about 15 minutes of work, plus however long your
DNS changes take to spread (usually minutes, sometimes up to 48 hours).

Connect your domain before you promote your site. Links people share and pages search engines index then use the
final address from the start.
{: .tip}

## Before you start

You need:

- **A domain name.** If you don't have one, buy it from any domain registrar.
- **A free Cloudflare account.** Your domain's DNS is managed in Cloudflare, which also provides the SSL certificate.

Open the setup page from either place:

- In your site's admin panel, click **Domain & SSL** at the bottom of the sidebar.
- At yclas.com, open **My sites**, click **Settings** next to the site, then **Use your own domain**.

The page, **Use your own domain**, walks you through the same five steps as below.

## Step 1: Get a domain name

If you already own the domain, skip this step. Otherwise buy one from any registrar; the setup page links to one
option.

## Step 2: Add the domain to Cloudflare

1. Create a free account at [cloudflare.com](https://www.cloudflare.com/) and add your domain.
2. Cloudflare gives you two name servers. At the company where you bought the domain, replace the domain's name
   servers with Cloudflare's.
{: .steps}

When you add the domain, Cloudflare copies the DNS records it finds. Check that any email (MX) records came across,
so your email keeps working. See [Email addresses on your domain](/host-email-with-your-domain/).
{: .note}

## Step 3: Point the domain to Yclas

In Cloudflare, open **DNS**. Delete any existing **A** records for your domain and for `www`, then add these two
records:

| Type | Name | Target | Proxy status |
| --- | --- | --- | --- |
| CNAME | `@` (your domain) | `yclas.ovh` | Proxied |
| CNAME | `www` (optional) | your domain, e.g. `yourdomain.com` | Proxied |

The cloud next to each record must be orange (**Proxied**). The `www` record makes `www.yourdomain.com` open your
site too.

## Step 4: Set SSL to Flexible

In Cloudflare, open **SSL/TLS** and choose **Flexible**. This lets your site open with https.

Choose **Flexible**, not **Full** or **Full (strict)**. The connection is set up for Flexible, and the other modes
can stop your site from loading.
{: .warning}

## Step 5: Connect it in Yclas

1. Back on the **Use your own domain** page, type your domain without `www`, for example `yourdomain.com`.
2. Click **Test domain**. Yclas checks that your domain already points to it.
3. When you see *Your domain points to Yclas. You can switch your site to it.*, click **Switch to my domain**.
{: .steps}

Your site now opens at your domain, with SSL switched on. Your old `.yclas.com` address stops being used, so
update any links you've shared.

If the test says *We could not verify that your DNS is pointing to us yet*, your DNS changes haven't spread yet, or
one of the records is different. Check steps 2 to 4, wait a little and click **Test domain** again.

## SSL (https)

SSL is switched on automatically when you switch to your domain. Your site's settings page on yclas.com shows
**SSL certificate: On**. The certificate itself comes from Cloudflare, so there's nothing to buy or renew.

If you ever need to, you can turn it off and on from **My sites › Settings** with **Deactivate SSL** and
**Activate SSL**. Before turning it back on, make sure **SSL/TLS** in Cloudflare is still set to **Flexible**.

## www or no www?

Your site's main address is the domain without `www`. With the optional `www` record from step 3, people who type
`www.yourdomain.com` reach your site too, so you don't lose any visitors either way. There's nothing else to set up.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| **Test domain** keeps failing | The name servers at your registrar are Cloudflare's; the `@` record is a proxied CNAME to `yclas.ovh`; there's no old A record left. DNS changes can take up to 48 hours. |
| "Domain name in use or invalid" when switching | The domain is already connected to another Yclas site, or it's not a valid domain name. Type it without `http://` and without `www`. |
| Too many redirects, or an SSL error | **SSL/TLS** in Cloudflare must be **Flexible**. |
| Some images or links still use the old address | Clear your site's cache (**Tools › Cache**) and your browser's cache. See [Cache](/modify-cache-time/). |
| Email stopped working | Your MX records weren't copied to Cloudflare. Add them back in **DNS**. |

Still stuck? [Open a ticket](/use-yclas-support-system/) and tell us which step you're on.

## Related guides

- [Email addresses on your domain](/host-email-with-your-domain/) — use `you@yourdomain.com` for your email.
- [Make sure your emails arrive](/emails-go-to-spam/) — send your site's emails from your domain.
- [Plans and billing](/plans-and-billing/) — your own domain is included on every paid plan.
- [Sitemap](/sitemap-classifieds-website/) — regenerate it after switching, then tell Google.
{: .cards}
