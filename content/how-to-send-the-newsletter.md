---
title: Newsletters
description: Send a one-off email to your members, or to a group of them such as sellers with featured listings or people who haven't signed in for a while.
section: content
order: 70
permalink: /how-to-send-the-newsletter/
keywords: newsletter, mailing, email members, email users, announcement, bulk email, mass email, subscribers, unsubscribe, marketing email
updated: 2026-10-07
---

A newsletter is an email you write once and send to many members: a new feature, a holiday promotion, a reminder
to renew, a call to post their first listing. You pick who receives it from a few ready-made groups, write it, and
your site sends each member their own copy.

## Before you start: use your own email service

Newsletters go out through your own email service, not through Yclas's built-in sending. Sending hundreds of emails
at once from a shared service would hurt delivery for everyone, and your own service lets you track and protect
your sender reputation.

In the admin panel, go to **Email**. If the **Newsletters** card says **Needs your own email service**, choose
SMTP, Mailgun or Elastic Email under **Email Service** first. See [Email settings](/general-email-configuration/),
[SMTP](/smtp-configuration/), [Mailgun](/mailgun/) and [Elastic Email](/configure-elasticemail-yclas/).

## Who can receive newsletters

Only members who agreed to receive emails get newsletters. Each member controls this with **Subscribed to emails**
in their profile, and every email has an **Unsubscribe** link in its footer that switches it off. Members are
subscribed when they create an account.

The **Newsletters** card on the **Email** page shows how many subscribed members you have, and how many of them
have featured listings, have no published listings, or haven't signed in for three months.

## Send a newsletter

1. Go to **Email** and, in the **Newsletters** card, click **Write a newsletter**.
2. Under **To**, tick one or more groups (see the table below).
3. Fill in **From** (the name members see as the sender) and **From Email** (where replies go).
4. Write the **Subject** and the **Message**.
5. Click **Send**.
{: .steps}

You'll see **Email sent** when the newsletter has gone out, or an error if your email service refused it.

| Group under **To** | Who it includes |
| --- | --- |
| **All active users.** | Every active member who is subscribed to emails. |
| **Users with featured ads.** | Members with a published listing that is, or has been, featured. |
| **Users with featured ads expired.** | Members with a published listing whose featured period has ended: a good group for a "feature it again" offer. |
| **Users without published ads.** | Active members who have never had a listing on your site: a good group for a "post your first listing" nudge. |
| **Users not logged last 3 months** | Members who haven't signed in for three months: a good group for a "here's what's new" email. |
| **Users marked a spam** | Members you marked as spammers. You'll rarely need this one. |

Groups overlap: a member with a featured listing is also in **All active users.** Tick only the groups you need,
because a member who belongs to several ticked groups can receive the newsletter more than once.
{: .note}

## Write a newsletter people read

- **One message per email.** Say what's new and what you'd like them to do, with one link.
- **A clear subject.** "New: free featured listings this weekend" beats "Newsletter #12".
- **Short and personal.** Write as the owner of the marketplace, not as a company.
- **Check it before you send.** There is no preview or undo, so write the text in your own email program first,
  send it to yourself, and read it on your phone.
- **Not too often.** Once or twice a month is plenty for most marketplaces. Too many and members unsubscribe or
  mark you as spam, which hurts all your emails.

Newsletters are bulk email. Send them only to people who signed up on your marketplace, follow the anti-spam rules
of your country, and never import addresses you bought or collected elsewhere. See also
[Make sure your emails arrive](/emails-go-to-spam/).
{: .warning}

## Automatic alternatives

If what you want is to keep members up to date with new listings, you don't need to write anything:

- The [email digest](/email-digest/) sends members a daily, weekly or monthly email with the latest listings.
- [Listing alerts](/notification-system/) email members the moment a listing matching their search is posted.

## Related guides

- [Email settings](/general-email-configuration/) — set up your own email service.
- [Email digest](/email-digest/) — a regular round-up of new listings, sent for you.
- [Listing alerts and notifications](/notification-system/) — subscribers and their alerts.
- [Email templates](/automatic-emails-sent-to-users/) — the emails your site sends on its own.
{: .cards}
