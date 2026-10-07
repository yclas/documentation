---
title: Emails aren't arriving
description: Work out why your site's emails aren't sending or arriving, and fix it — from switched-off templates and SMTP errors to bounces and characters that show wrongly.
section: troubleshooting
order: 10
permalink: /troubleshooting-email-errors/
keywords: emails not sending, email not working, emails stopped, transactional emails, email not sent, emails not arriving, not receiving, bounce, bounced, smtp, smtp error, bare lf, bare line feeds, 822.bis, character set, charset, utf-8, accents, strange characters, question marks, email template, email not sent please set up the smtp settings, spam, templates missing, email templates empty, en_US, confirmation email, contact form
updated: 2026-10-07
---

Your marketplace sends a lot of email: sign-up confirmations, password resets, messages between members, listing
notices. When people say they aren't getting them, the cause is almost always one of the few below. Work through them
in order.

## 1. Did the email go to the spam folder?

Ask the person to check their spam or junk folder, and the "Promotions" tab in Gmail. This is the most common answer.
If your emails often land there, see [Make sure your emails arrive](/emails-go-to-spam/).

## 2. Is that email switched on?

Every automatic email has a template, and a template can be switched off.

1. Go to **Email** in the sidebar and click **Open templates**.
2. Look for the email in question. Templates that are switched off have an **Off** label.
3. Open it, switch on **Send this email**, then click **Save changes**.
{: .steps}

See [Email templates](/automatic-emails-sent-to-users/) for what each template does.

## 3. "My email templates list is empty"

If **Email templates** says *No templates in en_US* (or another language) and the list is empty, nothing is broken.
Your site still sends every email, using the built-in templates of its default language. They aren't copied into
your site's language yet, so there is nothing to show.

To see and edit them, click **Copy templates from en_UK** on that page. The templates are copied into your language
and appear in the list. This happens most often on sites set to American English (`en_US`).

## 4. Is it going to the right address?

Messages meant for you go to the addresses under **Email › Addresses**:

| Setting | What arrives there |
| --- | --- |
| **Contact Email** | Messages sent through your site's contact form. |
| **Notify Moderation Email** | Notices about listings waiting for your approval. |
| **Notify Me on New Listing** | When switched on, an email to you each time someone posts. |

Check for typos, and make sure the mailbox exists and isn't full.

## 5. Is your own email service set up correctly?

Under **Email › Sending service** you choose who delivers your emails.

- **Yclas (default)** needs no setup and is the safest choice. If you use it and emails still don't arrive, go to step 6.
- **SMTP**, **Mailgun** or **Elastic Email** send through your own account. If anything in that account is wrong,
  emails fail.

After you save your own service, click **Send a test email** at the top of the Email settings page. If the test
doesn't arrive, the service settings are the problem.

### "Email not sent. Please set up the SMTP settings."

This message appears when your SMTP server refused the email. Check:

| Problem | Fix |
| --- | --- |
| Wrong host or port | Use exactly what your email provider documents. Common pairs: port `587` with **SMTP Secure** set to **TLS**, or port `465` with **SSL**. |
| Wrong user name or password | **SMTP User** is usually your full email address. Gmail, Outlook and Yahoo need an *app password* when two-step login is on, not your normal password. |
| A secure-connection error | Switch **SMTP Secure** from SSL to TLS and the port from 465 to 587, or the other way round. |
| The sender isn't allowed | Many providers only send from the mailbox you log in with. Set **Notify Email** to that address. |

See [Send email through SMTP](/smtp-configuration/) for provider-by-provider settings.

### Mailgun or Elastic Email

These services can accept an email and then refuse to deliver it, for example because your sending domain isn't
verified, your account is on a trial limited to a few recipients, or the credit has run out. Your site can't see that
happens, so log in to the service and check its activity or log page: it shows each email and why it was blocked.
See [Mailgun](/mailgun/) and [ElasticEmail](/configure-elasticemail-yclas/).

If you can't get your own service working, switch back to **Yclas (default)** while you sort it out, so your members
keep getting their emails.
{: .tip}

### Bounces that mention "bare LF" or "bare line feeds"

Some mail servers refuse emails whose lines don't end the way the email standard asks, with a bounce such as
*Message contains bare LF and is violating 822.bis section 2.3* or *BareLinefeedsAreIllegal*. Yclas ends every line
of your emails the standard way before sending them, so you don't need to change your templates.

If you still get these bounces:

- If you use your own sending service, look the email up in that service's activity log and send its support the
  bounce message: the service may be changing the email on its way out. Switching **Email › Sending service** to
  **Yclas (default)** for a while tells you whether the bounces stop.
- Otherwise, [open a support ticket](/use-yclas-support-system/) and paste the full bounce message, with the date
  and the address that bounced.

## 6. Letters or symbols show wrongly in emails

Your site sends every email in UTF-8, which covers accented letters (é, à, ç, ñ), other alphabets and emoji. If
members see `�`, `Ã©` or codes such as `=E7` instead:

- **Retype the text in the template.** Text pasted from Word or a PDF can bring hidden formatting with it. Open the
  template in **Email › Open templates**, delete the odd text, type it again and click **Save changes**.
- **Check the subject and the body separately.** If only the subject is wrong, and only in some mail apps (for
  example Mail on iPhone), and you use your own sending service, try **Yclas (default)** for a while to see whether
  the service is changing it.
- **Still wrong?** [Open a support ticket](/use-yclas-support-system/) with the template name, a screenshot of the
  email, and the mail app and device it was read on. If you can, add the email's original source (in Gmail: the
  **⋮** menu › **Show original**).

## 7. Did the member opt out?

Members can unsubscribe with the link at the bottom of emails, and choose how often they get the digest in their
profile. Newsletters and digests only go to members who are subscribed. Sign-up, password and message emails are
still sent.

## 8. Still stuck?

[Open a support ticket](/use-yclas-support-system/) with:

- which email is missing (for example "the confirmation email after sign-up");
- the recipient's address and roughly when it should have been sent;
- which sending service you use.

## Related guides

- [Email settings](/general-email-configuration/) — every setting on the Email page.
- [Make sure your emails arrive](/emails-go-to-spam/) — SPF, DKIM and staying out of spam.
- [Email templates](/automatic-emails-sent-to-users/) — every email your site sends, and how to edit or write your own wording.
{: .cards}
