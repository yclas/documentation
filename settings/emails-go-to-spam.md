---
title: Make sure your emails arrive
description: Set up SPF, DKIM and DMARC for your domain, choose the right sender address and keep your marketplace's emails out of spam folders.
section: settings
order: 90
permalink: /emails-go-to-spam/
keywords: spam, junk, deliverability, spf, dkim, dmarc, dns, sender, from address, reply-to, bounce, gmail, outlook, emails not received
updated: 2026-10-07
---

Gmail, Outlook and other mailbox providers decide for every email whether it lands in the inbox, in spam, or is
refused. They look at two things above all: whether the email can prove it really comes from the domain in its
"From" address, and whether people want it. This guide covers both.

## If you use the Yclas default service

With **Yclas (default)** as your sending service, emails go out from a Yclas address, with your **Notify Name** as
the sender name. Yclas looks after that address's setup, so you don't need to change any DNS records. Replies
from members go to the "From email" of each template, which is your own address.

The rest of this guide is for when you send through your own service: [SMTP](/smtp-configuration/),
[Mailgun](/mailgun/) or [Elastic Email](/configure-elasticemail-yclas/).

## Send from your own domain

Use an address on your own domain, such as `hello@yourdomain.com`, as your **Notify Email** (in **Email ›
Addresses**). Never use a free address such as @gmail.com or @yahoo.com: Gmail and Yahoo publish rules that make
other servers reject or bin emails claiming to come from their domains. If you don't have a mailbox on your domain
yet, see [Email addresses on your domain](/host-email-with-your-domain/).

## Set up SPF, DKIM and DMARC

These are three DNS records on your domain. Since 2024, Gmail and Yahoo require them from anyone who sends a lot of
email, and everyone else treats emails without them with suspicion.

| Record | What it proves | Where it comes from |
| --- | --- | --- |
| **SPF** | Which servers may send email for your domain. | Your sending service tells you what to add, for example `include:mailgun.org`. A domain has **one** SPF record: if you already have one (for your mailbox), add the new `include:` to it instead of creating a second record. |
| **DKIM** | That the email wasn't changed on the way, with a signature only your service can make. | Your sending service gives you one or more records to copy, usually TXT or CNAME. |
| **DMARC** | What receivers should do with emails that fail SPF and DKIM, and where to send reports. | You write it yourself. Start with `v=DMARC1; p=none; rua=mailto:you@yourdomain.com`, a monitoring-only policy. |

1. In your sending service, add your domain and copy the records it shows you.
2. Add them at the company that manages your domain's DNS. If you connected your domain to Yclas, that is still your
   domain registrar or DNS host: these records don't affect your website.
3. Go back to your sending service and click its verify button. DNS changes can take from a few minutes to a day.
4. Send a test email from **Email › Send a test email** to a Gmail address, open it, and use **Show original**.
   **SPF**, **DKIM** and **DMARC** should all say **PASS**.
{: .steps}

Add the DMARC record last, after SPF and DKIM pass. Once you have watched the reports for a few weeks, you can
tighten the policy to `p=quarantine`.
{: .tip}

## Keep the From and reply addresses consistent

Two addresses matter:

- **Notify Email** (in **Email › Addresses**) is the sender of every email when you use your own service.
- **From email** on each [email template](/automatic-emails-sent-to-users/) is where members' replies go. To change it
  on every template at once, open the templates and use **Sender address for every email** with **Apply to all**.

Keep both on your own domain, and don't change them often: providers build up trust in a sender over time.

## Write emails people want

Authentication proves who you are; the content decides whether people want it. A few habits help:

- **Send newsletters only to members who agreed to them**, and keep the unsubscribe link (Yclas adds one).
- **Remove inactive members** from newsletters. Many emails to addresses that never open them, or that bounce, hurt
  your reputation. The newsletter tool lets you choose which group of members to write to, for example
  only members with featured listings.
- **Avoid link shorteners** such as bit.ly, and emails that are just one big image.
- **Don't send too often.** A weekly or monthly [email digest](/email-digest/) is usually enough.
- **Ask new members to add your address to their contacts.** Mention it in your welcome email.

## When emails still go to spam

- Check SPF, DKIM and DMARC again with **Show original** in Gmail.
- Look up your domain and your provider's sending server on a blacklist checker such as MXToolbox.
- Look at your sending service's logs for bounces and complaints.
- See [Emails aren't arriving](/troubleshooting-email-errors/) for other causes.

## Related guides

- [Email settings](/general-email-configuration/) — choose your sending service and addresses.
- [Send email through SMTP](/smtp-configuration/) — settings for common providers.
- [Email templates](/automatic-emails-sent-to-users/) — subjects, text and the From email of each email.
- [Newsletters and subscribers](/how-to-send-the-newsletter/) — writing and sending newsletters.
{: .cards}
