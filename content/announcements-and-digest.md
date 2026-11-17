---
title: Announcements
description: "Post news to every member once: on your site, pinned on the home page until a date, as a push notification and as an email, and in the digest."
section: content
order: 85
permalink: /announcements/
keywords: announcements, announcement, news, notice, pinned message, pin on home page, banner message, members only, notify members, email all members, push notification, community updates, digest, blog posts, forum topics, unsubscribe, club news, meeting, closure, rule change
updated: 2026-11-16
plans: Available on all plans
---

An announcement is news every member should see: a meeting, a rule change, a closure, a new feature of your site.
You write it once and post it, and it can:

- appear on your site's announcements page;
- stay pinned at the top of your home page until a date you choose;
- go to your members as a push notification and as an email.

Nothing is announced until you write and post the first one. Announcements are on every plan and work with every
theme.

## Write an announcement

1. In the admin panel, go to **Email**. In the **Newsletters** card, click **Announcements →**.
2. Click **New announcement**.
3. Fill in the **Title** and the **Text**.
4. To pin it on the home page, choose a date in **Pin on the home page until**. Leave it empty to not pin it.
5. Switch on **Members only** if only signed-in members should see it on the site.
6. Under **Send it**, switch on **Notification**, **Email**, or both.
7. Click **Save draft** to finish it later, or **Save and post** to post it now.
{: .steps}

A draft is seen by nobody. To post a draft later, click **Post** next to it in the list, or open it and click
**Save and post**.

Posting can't be undone: notifications and emails go out straight away. You can still edit the title, text, pin date
and **Members only** afterwards, but what was sent stays as it was. To take an announcement off the site, open it and
click **Remove announcement**.
{: .note}

## Where members see it

- **The announcements page.** Every posted announcement is listed at `/announcements` on your site, newest first.
  Emails, notifications and the home page link to it.
- **The home page.** A pinned announcement shows at the top of the home page, on every theme, through the last day of
  the pin. Up to three show at once. Long ones show the start with a **Read more** link.
- **Closing it.** Each member can close a pinned announcement with the × button. A signed-in member's choice is kept
  on any device; a visitor's is kept in their browser.

With **Members only** on, visitors who aren't signed in don't see the announcement on the site at all.

## Notifications and emails

**Notification** sends a push notification to every active member who turned notifications on in their browser.
It needs [web push notifications](/push-notifications/) switched on in **Settings › General**; otherwise the switch
is greyed out.

**Email** sends the announcement to your active members who agreed to receive emails. The form shows how many that
is. Emails go out in batches over the following minutes, and the list shows how many were sent, **Sending…** while
they go, and how many failed. A failed email is tried again later, up to three times.

The members who get the email are fixed at the moment you post: people who join afterwards, and accounts still
waiting for approval, don't get it. Each email has the member's own unsubscribe link. On a site with
[email preferences](/automatic-emails-sent-to-users/#let-members-choose-their-emails) on, members can also switch off
the **Announcements and newsletters** kind.

### Emails need your own email service

Announcement emails are sent only through your site's own email service, **Elastic Email** or **SMTP**. They aren't
sent through the shared default sender, nor through Mailgun. Without your own service, the **Email** switch is greyed
out and the list says why; the announcement still shows on your site and goes out as a notification. See
[Email settings](/general-email-configuration/), [SMTP](/smtp-configuration/) and
[Elastic Email](/configure-elasticemail-yclas/).

## Unsubscribing

The **Unsubscribe** link in an announcement email or a newsletter opens a page that asks first: the member clicks
**Unsubscribe** to confirm, or **Cancel**. Once confirmed, they get no more newsletters, announcements or digest
emails from your site; emails about their account, their orders and messages from other members still reach them.

Opening the link alone no longer unsubscribes anyone, so the link scanners some mail providers run don't unsubscribe
your members by accident.

## Announcements in the email digest

The [email digest](/email-digest/) can list your community's news as well as new listings.

1. Go to **Email**.
2. In the **Email digest** card, with **Send the digest** on, switch on **Community updates**.
3. Click **Save digest**.
{: .steps}

Each digest then also lists, when there is something new since the last digest:

- **Announcements** posted since then, and the ones still pinned on the home page;
- **New on the blog**: new [blog](/how-to-create-a-blog/) posts, if your blog is on;
- **New in the forum**: new [forum](/add-forums-section/) topics, if your forum is on.

A new announcement, blog post or forum topic sends the digest even in a period with no new listings. An
announcement that is only still pinned is listed when a digest goes out anyway, but never sends one by itself.
Members-only blog posts and topics in members-only forums are left out, because the digest is the same for everyone.

## Good to know

- **Pinned announcements and caching.** Pages your visitors see can be cached for a while, so a new or changed pin
  may take some time to show to visitors who aren't signed in.
- **Own email service only.** Emails need Elastic Email or SMTP, as above. If your site loses its service while emails
  are going out, the list shows **Waiting: no email service of your own** and sending carries on once it is back.
- **Mercury theme.** The pinned block sits below the large image at the top of the home page.
- **Moderators** can use announcements only if their role has access to them; administrators always can.
- If one of your categories already uses the address `announcements`, the category keeps it and the announcements
  page uses a different address, which every link points to.

## Related guides

- [Newsletters and automated emails](/how-to-send-the-newsletter/) — one-off emails and email series.
- [Email digest](/email-digest/) — the regular round-up of new listings.
- [Push notifications](/push-notifications/) — switch web push on.
- [Email settings](/general-email-configuration/) — set up your own email service.
{: .cards}
