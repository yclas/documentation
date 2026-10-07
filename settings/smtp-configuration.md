---
title: Send email through SMTP
description: Connect your marketplace to any mail server, such as Google Workspace, Zoho, Microsoft 365 or an email-sending service, with the right host, port and security settings.
section: settings
order: 60
permalink: /smtp-configuration/
keywords: smtp, mail server, gmail, google workspace, outlook, office 365, microsoft 365, zoho, amazon ses, sendgrid, brevo, mailgun, port, 465, 587, ssl, tls, app password, email not sent
updated: 2026-10-07
---

SMTP is the standard way programs hand email to a mail server. Choosing **SMTP** as your sending service lets your
marketplace send its emails through almost any provider: the mailbox you already use for your domain, or a service
built for sending lots of email.

## Which mail server to use

- **An email-sending service** (Amazon SES, Brevo, Mailgun, SendGrid, Postmark…) is the best choice once your
  marketplace is busy. They are built for automatic emails, have generous limits and show you what was delivered.
- **Your business mailbox** (Google Workspace, Zoho Mail, Microsoft 365, your domain host) is fine for a small site.
  These services limit how many emails you can send per day, often a few hundred to a couple of thousand, and stop
  sending when you reach it.
- **A free address** (@gmail.com, @outlook.com, @yahoo.com) is the worst choice: low limits, and emails "from" a free
  address sent by a website often end up in spam. Use an address on your own domain instead. See
  [Email addresses on your domain](/host-email-with-your-domain/).

## Set up SMTP

1. Get the SMTP details from your provider: host, port, security type, user name and password.
2. In the admin panel, open **Email** in the sidebar.
3. Under **Email Service**, choose **SMTP**.
4. Fill in the fields (see the table below).
5. Under **Addresses**, set **Notify Email** to the address you send from. With most providers it must be the
   mailbox you sign in with, or an address verified with them.
6. Click **Save changes**.
{: .steps}

Yclas sends a test email to your **Notify Email** straight away and tells you whether it worked. Use **Send a test
email** at the top of the page to try again after a change.

| Setting | What to enter |
| --- | --- |
| **SMTP Host** | The server name, for example `smtp.zoho.com`. |
| **SMTP Port** | Usually `587` (with TLS) or `465` (with SSL). |
| **SMTP Secure** | **TLS** for port 587, **SSL** for port 465, **None** only if your provider says so. |
| **SMTP Auth** | **Enabled** for almost every provider: the server needs your user name and password. |
| **SMTP User** | Usually your full email address, or the user name your provider gives you. |
| **SMTP Password** | Your password, or an app password or SMTP key (see below). |

Port 465 always goes with **SSL** and port 587 with **TLS**. Mixing them up is the most common reason the test
email fails.
{: .tip}

## Settings for common providers

Check your provider's own help pages too, as they sometimes change.

| Provider | Host | Port and security | User and password |
| --- | --- | --- | --- |
| Google Workspace or Gmail | `smtp.gmail.com` | 465 SSL or 587 TLS | Your full address, and an [app password](https://support.google.com/accounts/answer/185833) (your normal password won't work). |
| Zoho Mail | `smtp.zoho.com` (`smtp.zoho.eu` for EU accounts) | 465 SSL or 587 TLS | Your full address and password, or an app-specific password if you use two-factor sign-in. |
| Microsoft 365 or Outlook | `smtp.office365.com` | 587 TLS | Your full address and password. SMTP sign-in must be allowed for the mailbox. |
| Amazon SES | `email-smtp.<region>.amazonaws.com` | 587 TLS | The SMTP credentials you create in the SES console (not your AWS password). |
| Brevo | `smtp-relay.brevo.com` | 587 TLS | Your Brevo login and an SMTP key. |
| SendGrid | `smtp.sendgrid.net` | 587 TLS | The word `apikey` as the user, and an API key as the password. |
| Mailgun | `smtp.mailgun.org` (`smtp.eu.mailgun.org` for EU domains) | 587 TLS | The SMTP login and password of your Mailgun domain. Or use the [Mailgun integration](/mailgun/). |

Google needs **2-Step Verification** turned on before it lets you create an app password. Microsoft is gradually
turning off password sign-in for SMTP; if Microsoft 365 refuses your details, use an email-sending service instead.
{: .note}

## When sending fails

If the test email fails, or you see "Email not sent. Please set up the SMTP settings." in the admin panel:

- **Check host, port and security together.** 465 with SSL, 587 with TLS.
- **Check the password.** Gmail and Zoho with two-factor sign-in need an app password. Copy it without spaces.
- **Check the sender.** Your **Notify Email** must be an address the server lets you send from, usually the same one
  as **SMTP User**.
- **Check your provider's limits.** A mailbox that has hit its daily limit refuses emails until the next day.
- **Look at your provider's dashboard.** Many providers block a first sign-in from a new server and ask you to
  confirm it was you.

Members still not getting emails that were sent? See [Make sure your emails arrive](/emails-go-to-spam/) and
[Emails aren't arriving](/troubleshooting-email-errors/).

## Related guides

- [Email settings](/general-email-configuration/) — sender name, addresses and the other sending services.
- [Make sure your emails arrive](/emails-go-to-spam/) — SPF, DKIM and DMARC.
- [Mailgun](/mailgun/) and [Elastic Email](/configure-elasticemail-yclas/) — send through their API instead of SMTP.
{: .cards}
