---
title: Email settings
description: Choose how your marketplace sends email, who the emails come from, and where contact and moderation messages go.
section: settings
order: 50
permalink: /general-email-configuration/
keywords: email, email settings, sender, from address, notify email, notify name, contact email, moderation email, new listing notification, email service, smtp, mailgun, elastic email, test email
updated: 2026-10-07
---

Your marketplace sends a lot of email: welcome messages, password resets, messages between members, "your listing
is live", payment receipts and more. **Email settings** decides which service delivers those emails, who they appear
to come from, and where emails meant for you are sent.

Open it from **Email** in the admin panel sidebar.

## Choose a sending service

Under **Email Service**, pick how emails leave your site:

| Option | When to use it |
| --- | --- |
| **Yclas (default)** | Nothing to set up: Yclas sends your emails for you. Fine to start with. Test emails and [newsletters](/how-to-send-the-newsletter/) aren't available with it. |
| **Elastic Email** | You have an [Elastic Email](/configure-elasticemail-yclas/) account. |
| **Mailgun** | You have a [Mailgun](/mailgun/) account. |
| **SMTP** | Any mail server: Google Workspace, Microsoft 365, Zoho, your domain host, or an email-sending service. See [Send email through SMTP](/smtp-configuration/). |

With Elastic Email or Mailgun, add your key on the integration page first (**Open configuration** takes you there),
then come back, select the service and click **Save changes**.

### What changes when you use your own service

With **Yclas (default)**, emails are sent from a Yclas address, with your **Notify Name** as the sender name. When a
member replies, the reply goes to the "From" address of the email template, which is your own address.

With your own service, emails are sent from your **Notify Email** address. Members see your own address, and
you can check what was delivered in your provider's logs. You also get:

- the [newsletter](/how-to-send-the-newsletter/) tool,
- **Send a test email**, at the top of the page,
- file attachments on the contact form.

Once your marketplace runs on your own domain, the admin panel home page reminds you to set up your email service
until you do.

## Check that sending works

When you save your own service, Yclas immediately sends a test email to your **Notify Email** and tells you whether
it was sent. You can send another at any time with **Send a test email** at the top of the page.

"Email succesfully sent." means your provider accepted the email. If it doesn't arrive, look in your spam folder and
in your provider's activity log. With Elastic Email the message can appear even when Elastic Email later rejects the
email, so its log is the only place to see what happened.
{: .note}

## Addresses

| Setting | What it does |
| --- | --- |
| **Notify Name** | The sender name on your emails, for example your site name. Required. |
| **Notify Email** | The address your emails come from when you use your own service, and where test emails and some notices for you are sent. Use an address on your own domain, such as `hello@yourdomain.com`. |
| **Contact Email** | Where messages from your contact page go. If it's empty, they go to the **Notify Email**. |
| **Notify Moderation Email** | Gets an email each time a listing is waiting for your approval. Leave it empty if you check the [Moderation](/how-ads-moderation-works/) page yourself. |
| **Notify Me on New Listing** | Sends an email each time someone posts a listing. It goes to every active administrator and moderator who receives emails, not to the **Notify Email**. |

The **Notify Email** must be an address you are allowed to send from with the service you chose: verified in Elastic
Email or Mailgun, or the mailbox you sign in to with SMTP. Otherwise emails are rejected or land in spam. See
[Make sure your emails arrive](/emails-go-to-spam/).
{: .important}

## Email digest

The **Email digest** card sends your members a regular round-up of new listings. Switch it on, choose **Normal** or
**Featured** listings and how many to include, and click **Save digest**. See [Email digest](/email-digest/).

## Templates and newsletters

The last two cards are shortcuts:

- **Email templates** shows how many templates your site's language has and opens them for editing. If a language has
  none yet, **Copy templates to…** creates a copy you can translate. See [Email templates](/automatic-emails-sent-to-users/).
- **Newsletters** shows how many members are subscribed and opens the newsletter tool, once you use your own sending
  service. See [Newsletters and subscribers](/how-to-send-the-newsletter/).

## Related guides

- [Send email through SMTP](/smtp-configuration/) — settings for Gmail, Microsoft 365, Zoho and others.
- [Make sure your emails arrive](/emails-go-to-spam/) — SPF, DKIM and DMARC for your domain.
- [Emails aren't arriving](/troubleshooting-email-errors/) — what to check when members don't get emails.
- [Email addresses on your domain](/host-email-with-your-domain/) — get a mailbox like hello@yourdomain.com.
{: .cards}
