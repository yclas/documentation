---
title: Email addresses on your domain
description: Get a mailbox such as you@yourdomain.com with an email provider like Google Workspace or Zoho Mail, without affecting your marketplace.
section: account
order: 30
permalink: /host-email-with-your-domain/
keywords: email, mailbox, email address, custom email, domain email, business email, professional email, zoho, zoho mail, google workspace, g suite, gsuite, google apps, gmail, gmail with my domain, microsoft 365, outlook, mx, mx records, dns
updated: 2026-10-07
---

Once your marketplace runs on your own domain, you'll probably want an email address to match, such as
`hello@yourdomain.com`. Yclas hosts your website but not mailboxes, so you get email from an email provider. The two
work side by side: your website's DNS records and your email's DNS records don't get in each other's way.

## Choose an email provider

Popular choices are:

- **Google Workspace** — Gmail with your domain.
- **Microsoft 365** — Outlook with your domain.
- **Zoho Mail** — a low-cost option for small teams.

Many domain registrars also sell mailboxes or offer free email forwarding (mail to `hello@yourdomain.com` lands in
your existing inbox). Forwarding is a good start if you only need to receive mail.

## Set it up

The exact screens depend on the provider, but the steps are always the same:

1. Sign up with the provider and add your domain.
2. Prove you own the domain. The provider asks you to add a **TXT** (or sometimes **CNAME**) record to your DNS.
3. Add the provider's **MX** records. These tell the internet where to deliver your email.
4. Add the provider's **SPF** record (a TXT record) and, if offered, **DKIM**, so your mail isn't marked as spam.
5. Create your mailboxes, such as `hello@` or `support@`.
{: .steps}

If you followed [Connect your own domain](/custom-domain/), your domain's DNS is managed in **Cloudflare**, so add
these records there, under **DNS**, not at your registrar.

## Google Workspace

Google Workspace (once called G Suite) gives you Gmail, Calendar and Drive with your own domain. It works alongside
your Yclas site; the setup is the same as above, with Google's values:

1. Sign up at [workspace.google.com](https://workspace.google.com/) with your domain.
2. When Google asks you to verify the domain, choose the **TXT record** method and add the record in Cloudflare,
   under **DNS**.
3. Add the MX record Google shows you in the setup (for new accounts a single record, `smtp.google.com`, priority 1).
   Delete any MX records left over from an earlier email provider.
4. Add or update your SPF record: a TXT record on `@` containing `include:_spf.google.com`, for example
   `v=spf1 include:_spf.google.com ~all`.
5. In the Google Admin console, turn on DKIM (**Apps › Google Workspace › Gmail › Authenticate email**), add the
   TXT record it gives you in Cloudflare, then click **Start authentication**.
{: .steps}

Google's setup wizard shows the exact records for your account; follow it if they differ from these. Leave your
site's `@` and `www` CNAME records alone.

To send your marketplace's own emails through your Workspace mailbox, choose **SMTP** under **Email › Sending
service** and use `smtp.gmail.com` with an app password. See [Send email through SMTP](/smtp-configuration/).
{: .tip}

## Keep your website and email records apart

- **Don't touch the website records.** Leave the `@` and `www` CNAME records that point to `yclas.ovh` as they are.
  Email uses separate MX and TXT records.
- **MX records can't be proxied.** Cloudflare shows them as **DNS only**, which is correct.
- **Mail subdomains must be DNS only.** If the provider asks for a record such as `mail` or `autodiscover`, set its
  proxy status to **DNS only** (grey cloud), not **Proxied**.
- **One SPF record only.** If you already have a TXT record starting with `v=spf1`, add the new provider to it
  instead of creating a second one.
{: .note}

## Use your new address on your marketplace

Once your mailbox works, you can use it on your site:

- As the address your site's emails come from, and where notifications go to: see
  [Email settings](/general-email-configuration/).
- On your contact page: see [Contact page](/how-to-add-text-contact-page/).

Sending your site's emails "from" your domain needs a little more setup so they don't land in spam. See
[Make sure your emails arrive](/emails-go-to-spam/).

## Related guides

- [Connect your own domain](/custom-domain/) — set up your domain and Cloudflare first.
- [Email settings](/general-email-configuration/) — the sender name and address of your site's emails.
- [Make sure your emails arrive](/emails-go-to-spam/) — SPF, DKIM and DMARC for your site's emails.
- [Send email through SMTP](/smtp-configuration/) — send your site's emails from your Google Workspace or other mailbox.
{: .cards}
