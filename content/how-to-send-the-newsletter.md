---
title: Newsletters and automated emails
nav_title: Newsletters
description: Send one email to all your members or a group of them, or set up email series that go out by themselves after someone signs up, posts or goes quiet.
section: content
order: 70
permalink: /how-to-send-the-newsletter/
keywords: newsletter, mailing, email members, email users, announcement, bulk email, mass email, subscribers, unsubscribe, marketing email, send email to all users, automated emails, email series, drip campaign, welcome series, welcome email, onboarding emails, nudge, come back email, win back, re-engagement, open rate, click rate, email tracking
updated: 2026-10-27
---

A newsletter is an email you write once and send to many members: a new feature, a holiday promotion, a reminder
to renew, a nudge to post a first listing. You choose who receives it from a few ready-made groups, and your site
sends each member their own copy.

Newsletters live on the **Email** page of your admin panel, in the **Newsletters** card. For emails that go out by
themselves, see [Automated emails](#automated-emails).

## Before you start: use your own email service

Newsletters go out through your own email service, not through Yclas's built-in sending. Sending hundreds of emails
at once from a shared service would hurt delivery for everyone, and your own service lets you track and protect
your sender reputation.

Go to **Email**. If the **Newsletters** card says **Needs your own email service**, choose SMTP, Mailgun or
Elastic Email under **Email Service** first. See [Email settings](/general-email-configuration/),
[SMTP](/smtp-configuration/), [Mailgun](/mailgun/) and [Elastic Email](/configure-elasticemail-yclas/).

## Who receives newsletters

Only members who agreed to receive emails get newsletters. Each member controls this with **Subscribed to emails**
in their profile, and every email has an **Unsubscribe** link in its footer that switches it off. Members are
subscribed when they create an account.

The **Newsletters** card shows how many subscribed members you have, and how many of them have featured listings,
have no published listings, or haven't signed in for three months. Check these numbers before you write, so you know
how big each group is.

## Send a newsletter

1. Go to **Email** and, in the **Newsletters** card, click **Write a newsletter**.
2. Under **To**, tick one or more groups (see the table below).
3. Fill in **From** (the name members see as the sender) and **From Email** (where replies go).
4. Write the **Subject** and the **Message**.
5. Click **Send**.
{: .steps}

You'll see **Email sent** when the newsletter has gone out, or an error if your email service refused it.

If **Write a newsletter** takes you back to the **Email** page instead of opening the form, contact
[Yclas support](/use-yclas-support-system/) and we'll help you get your newsletter out.
{: .note}

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
{: .warning}

## Write a newsletter people read

- **One message per email.** Say what's new and what you'd like members to do, with one link.
- **A clear subject.** "New: free featured listings this weekend" beats "Newsletter #12".
- **Short and personal.** Write as the owner of the marketplace, not as a company.
- **Check it before you send.** There is no preview or undo, so write the text in your own email program first,
  send it to yourself and read it on your phone.
- **Not too often.** Once or twice a month is plenty for most marketplaces. Send more and members unsubscribe or
  mark you as spam, which hurts all your emails.

Send newsletters only to people who signed up on your marketplace, follow the anti-spam rules of your country, and
never import addresses you bought or collected elsewhere. See [Make sure your emails arrive](/emails-go-to-spam/).
{: .important}

## Automated emails

A newsletter goes out once, when you click **Send**. Automated emails are a series you write once that keeps
working: each new member gets a welcome a few minutes after signing up, a nudge a week later if they still haven't
posted, a "here's what's new" when they haven't visited for two months.

Go to **Email** and, in the **Newsletters** card, click **Automated emails** (it shows once your site has its own
email service). The newsletter form has the same link at the top.

### Start from an example

Under **Start from an example**, three ready-made series are waiting for you to adapt:

| Example | Starts | Emails |
| --- | --- | --- |
| **Welcome series** | After signing up | A welcome on the same day, and three tips for a good listing on day 3. |
| **Nudge to post** | No listing yet | A reminder on day 7 that their first listing is waiting. |
| **Come back** | Not signed in for a while | A "what's new" email on day 60. |

Click one to open it as a new series, change the text to sound like you, and save. Or click **New series** to write
your own.

### Write a series

1. Give it a **Name** (only you see it).
2. Choose when it **Starts**:
   - **After signing up**: days after the member creates their account.
   - **After their first listing**: days after they post their first listing.
   - **No listing yet**: days after signing up, only while they haven't posted anything. It stops once they post.
   - **Not signed in for a while**: days after their last sign-in, only while they stay away. It stops once they
     sign in.
3. For each email, set the **Day** (0 sends it straight away), the **Subject** and the **Text**. Use **Add another
   email** for the next one, up to 10 emails in a series.
4. Switch it **On** and click **Save**.
{: .steps}

Each email's day counts from the moment the series starts for that member. A member gets each email once, and a
later email only after they got the one before it. To remove an email, empty its subject and text. **Remove series**
deletes the series and its numbers.

You can put these placeholders in the subject and text; each member's email gets their own values:

| Placeholder | Becomes |
| --- | --- |
| `[USER.NAME]` | The member's name. |
| `[SITE.NAME]` | Your site's name. |
| `[URL.SITE]` | Your home page. |
| `[URL.POST]` | The page to post a listing. |
| `[URL.ACCOUNT]` | The member's account page. |

A new series never mails your existing members in one go: only members whose day comes after you switch it on get
its emails. Someone who signed up last year doesn't get your new welcome email.
{: .note}

### Who gets them

Automated emails go to active members who are subscribed to emails, like newsletters, but never to your own team.
With [email preferences](/automatic-emails-sent-to-users/#let-members-choose-their-emails) on, members can also
untick **Tips and news from the site** on their **Email notifications** page to stop them, and keep getting your
other emails.

Like newsletters, automated emails need your own email service. Until you set one up, the page says **Needs your own
email service**: you can write series, but nothing is sent. Emails go out every 15 minutes, in batches.

### See how they do

The **Automated emails** page lists each series, **On** or **Paused**, with every email's **Sent**, **Opened** and
**Clicked** numbers. A click counts as an open too. Opens are counted when the email's pictures load, so some opens
are missed: many email programs don't load pictures until asked. Clicks are more reliable.

## Let your site send updates for you

If you want to keep members up to date with new listings, you don't need to write anything:

- The [email digest](/email-digest/) sends members a daily, weekly or monthly email with the latest listings.
- [Listing alerts](/notification-system/) email members the moment a listing matching their search is posted.

## Related guides

- [Email settings](/general-email-configuration/) — set up your own email service.
- [Email digest](/email-digest/) — a regular round-up of new listings, sent for you.
- [Listing alerts and notifications](/notification-system/) — subscribers and their alerts.
- [Email templates](/automatic-emails-sent-to-users/) — the emails your site sends on its own.
{: .cards}
