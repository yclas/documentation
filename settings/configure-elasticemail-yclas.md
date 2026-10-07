---
title: Elastic Email
description: Send your marketplace's emails through your Elastic Email account and add new members to an Elastic Email contact list automatically.
section: settings
order: 70
permalink: /configure-elasticemail-yclas/
redirect_from:
  - /configure-elasticemail-open-classifieds/
keywords: elastic email, elasticemail, api key, email service, contact list, newsletter list, send email
updated: 2026-10-07
---

[Elastic Email](https://elasticemail.com) is an email-sending service. Connecting it means your marketplace's
emails go out through your own Elastic Email account, from your own address, and you can see every email that was
sent, delivered, opened or bounced in Elastic Email's reports.

It can also add each new member to a contact list in Elastic Email, which is handy if you write your newsletters
there.

## What you need

- An Elastic Email account.
- Your domain verified in Elastic Email, so you can send from an address on it, such as `hello@yourdomain.com`.
  Elastic Email walks you through adding the SPF, DKIM and DMARC records to your domain's DNS. See also
  [Make sure your emails arrive](/emails-go-to-spam/).
- An Elastic Email API key. Create one in Elastic Email's settings, under API keys, with permission to send email
  (and to manage contacts if you want to use a contact list).

## Connect Elastic Email

1. In the admin panel, go to **Integrations** and open **ElasticEmail** (it's under **Email**).
2. Paste your key into **API Key**.
3. Optional: in **List name to subscribe users after register**, type the name of an Elastic Email contact list,
   exactly as it is in Elastic Email.
4. Click **Save**.
5. Open **Email** in the sidebar. Under **Email Service**, choose **Elastic Email**.
6. Under **Addresses**, set **Notify Email** to an address on the domain you verified in Elastic Email.
7. Click **Save changes**.
{: .steps}

Yclas sends a test email to your **Notify Email** as soon as you save. Check that it arrives, then look for it in
Elastic Email's activity log.

| Setting | What it does |
| --- | --- |
| **API Key** | Lets your site send through your Elastic Email account. |
| **List name to subscribe users after register** | Each new member is added to this contact list when they register, and removed when they unsubscribe or stop receiving emails in their profile. Leave it empty to keep Elastic Email for sending only. |

## Check the activity log, not the panel

Your site counts an email as sent as soon as Elastic Email answers, even if Elastic Email then refuses it (for
example because the sender address isn't verified or your account is out of credit). The test message in the panel
can say "Email succesfully sent." while nothing was delivered.
{: .warning}

So after connecting, and whenever members say emails are missing, look at Elastic Email's activity or reports page.
It shows each email with its status and the reason it failed.

Common reasons emails are refused:

- The **Notify Email** isn't on a verified domain.
- The account has no credit left, or is still under Elastic Email's review for new accounts.
- The API key was deleted, or doesn't have permission to send.

## Stop using Elastic Email

Open **Email**, choose another **Email Service** and click **Save changes**. Your key stays on the integration page in case
you switch back; clear the **API Key** field and save to remove it.

## Related guides

- [Email settings](/general-email-configuration/) — all sending services and addresses.
- [Make sure your emails arrive](/emails-go-to-spam/) — SPF, DKIM and DMARC.
- [Emails aren't arriving](/troubleshooting-email-errors/) — what to check when members don't get emails.
- [Newsletters and subscribers](/how-to-send-the-newsletter/) — send newsletters from your admin panel.
{: .cards}
