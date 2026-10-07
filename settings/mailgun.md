---
title: Mailgun
description: Send your marketplace's emails through your Mailgun account, from your own domain, with delivery logs for every message.
section: settings
order: 80
permalink: /mailgun/
keywords: mailgun, api key, sending domain, email service, send email, mg subdomain, eu region
updated: 2026-10-07
---

[Mailgun](https://www.mailgun.com) is an email-sending service for websites and apps. Connecting it means every email
your marketplace sends goes through your Mailgun account, from an address on your own domain, and Mailgun's logs show
you what was delivered, what bounced and why.

## What you need

- A Mailgun account.
- A **sending domain** added and verified in Mailgun. Mailgun suggests a subdomain such as `mg.yourdomain.com` and
  gives you the DNS records (SPF, DKIM, MX and tracking) to add at your domain host. Wait until Mailgun shows the
  domain as verified.
- A Mailgun **API key**. Create one in Mailgun under API keys. A domain sending key for your sending domain is enough.

Mailgun has a US and an EU region. The Mailgun integration in Yclas talks to the US region, so it only works with
domains created in the US region. If your domain is in the EU region, connect it through
[SMTP](/smtp-configuration/) with the host `smtp.eu.mailgun.org` instead.
{: .important}

## Connect Mailgun

1. In the admin panel, go to **Integrations** and open **Mailgun** (it's under **Email**).
2. Paste your key into **Mailgun API Key**.
3. In **Mailgun Domain**, type your sending domain exactly as it is in Mailgun, for example `mg.yourdomain.com`.
4. Click **Save**.
5. Open **Email** in the sidebar. Under **Email Service**, choose **Mailgun**.
6. Under **Addresses**, set **Notify Name** and **Notify Email**. Use an address on your Mailgun domain or on the main
   domain it belongs to, for example `hello@yourdomain.com`.
7. Click **Save changes**.
{: .steps}

Yclas sends a test email to your **Notify Email** as soon as you save. If Mailgun refuses it, the panel shows
Mailgun's error message, which usually says exactly what's wrong.

| Setting | What it does |
| --- | --- |
| **Mailgun API Key** | Lets your site send through your Mailgun account. Keep it secret. |
| **Mailgun Domain** | The sending domain the emails go out through. It must match a verified domain in your Mailgun account. |

## Common errors

| If the error mentions | What to do |
| --- | --- |
| Forbidden or unauthorized | The API key is wrong, deleted, or belongs to another domain. Create a new key and paste it again. |
| Domain not found | **Mailgun Domain** doesn't match a domain in your account, or the domain is in the EU region (see above). |
| Sandbox or authorized recipients | Mailgun's sandbox domain can only send to addresses you have authorised. Add and verify your own domain. |

## Stop using Mailgun

Open **Email**, choose another **Email Service** and click **Save changes**. Your key stays on the integration page in case
you switch back; clear the fields and save to remove it.

## Related guides

- [Email settings](/general-email-configuration/) — all sending services and addresses.
- [Make sure your emails arrive](/emails-go-to-spam/) — SPF, DKIM and DMARC.
- [Send email through SMTP](/smtp-configuration/) — the alternative for EU-region Mailgun domains.
{: .cards}
