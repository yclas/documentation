---
title: Support tools for administrators
description: Log in as a member to see what they see, read conversations that members report, check the audit log, and try changes on a private staging copy of your site.
section: users
order: 15
permalink: /admin-support-tools/
keywords: log in as user, login as user, impersonate, impersonation, see what a member sees, act as user, reported conversations, dispute, report conversation, audit log, staging, staging copy, test site, copy of my site, try changes
updated: 2026-10-16
---

When a member writes "it doesn't work for me", the quickest way to help is often to see the site through their eyes.
Yclas gives administrators a few support tools for this, each recorded in an audit log so your team stays
accountable:

- **Log in as this user**: see the site exactly as one member sees it.
- **Reported conversations**: read a conversation only when one of the people in it asks you to.
- **Audit log**: who used these tools, on whom and when.
- **Staging copy**: a private copy of your site to try themes and settings on.

These tools are for administrators only. Moderators can't use them.

## Log in as a member

1. In the admin panel, go to **Users**.
2. Open the menu on the member's row and click **Log in as this user**.
3. Confirm. The message warns you that it is recorded in the audit log.
{: .steps}

You're now signed in as that member and can browse the site, open their listings, favourites and account pages, and
reproduce what they describe. A bar on every page says **You are logged in as** *name*. Click **Back to your account**
in that bar to return to your own account.

While you're logged in as a member:

- **Their messages stay hidden.** Private conversations are private, even from you. If you need to read one, the
  member can report it (see below).
- **They don't get a login code.** If your site uses [two-step login](/2-step-authentication/) or
  [SMS codes](/2-step-sms-authentication/), you aren't asked for theirs and no text message is sent to them.
- **They can't download their data or delete their account** through you: those stay with the member themselves.

You can't log in as another administrator, a moderator, or a member who is marked as spam or inactive.
{: .note}

## Reported conversations

Messages between members are private. A conversation only reaches you when someone in it asks:

- **Report**: any member can report a conversation from its menu (the **⋯** button in Nova), for example for
  harassment or a scam attempt.
- **Open a dispute**: when there is a paid order between the two members for that listing, either of them can open a
  dispute about it.

Reported and disputed conversations appear under **Reported conversations** in the admin panel menu, with the type,
who reported it and when. Click **Open** to read the whole conversation, from both sides. When you have dealt with it,
click **Resolve**: the conversation becomes private again and you can no longer open it.

Each time you open a conversation it is recorded in the audit log. The **Report** and **Open a dispute** options are
in the Nova and Default themes; other themes with their own message pages may not show them yet.

## Audit log

**Audit log** in the admin panel menu lists every time an administrator on your site:

- logged in as a member, and returned to their own account;
- opened a reported conversation, or resolved a report;
- made a staging copy of the site.

Each row shows when, which administrator, which member, and the IP address used. Nobody can edit or delete these rows
from the admin panel. If a tool can't record its entry, it refuses to run, so nothing goes unrecorded.

## Try changes on a staging copy

A staging copy is a private copy of your site where you can try a new theme, a page builder design or different
settings without your visitors seeing anything.

1. Sign in to your Yclas account and open **My sites**.
2. Open the **⋯** menu of your site and click **Create a staging copy**.
3. Confirm. After a short wait you see **Staging copy ready** with its address.
4. To work on it, open the same menu and click **Open staging admin**.
{: .steps}

What the copy has, and doesn't:

- It copies your settings, categories, locations, pages, email templates and page builder designs.
- It doesn't copy members, listings, orders, messages, reviews or blog posts. Category icons aren't copied either.
- It's private and hidden from search engines, sends no emails and runs no scheduled jobs.
- Payment, email and other service keys are left empty, so it can never take a payment or contact your members.
- It's free and doesn't count towards your free sites. You can have one staging copy per site.

The staging copy doesn't copy anything back. When you're happy with a change, make the same change on your live site.
To start again, click **Remove staging copy** in the same menu, then create a new one.
{: .important}

## Related guides

- [Manage users](/manage-users/) — find a member, change their status or password.
- [Messaging](/how-to-use-messaging-system/) — how members talk to each other.
- [Roles](/roles-work-classified-ads-script/) — what administrators and moderators can do.
- [My sites](/my-sites/) — everything else you can do with your sites.
{: .cards}
