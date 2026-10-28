---
title: Support tools for administrators
description: See what needs your attention, log in as a member to see what they see, read conversations that members report, check the audit log, and try changes on a private staging copy of your site.
section: users
order: 15
permalink: /admin-support-tools/
keywords: log in as user, login as user, impersonate, impersonation, see what a member sees, act as user, reported conversations, dispute, disputes, decide dispute, report conversation, audit log, who changed this setting, who deleted, activity log, needs your attention, to do, waiting, staging, staging copy, test site, copy of my site, try changes, report email, conversation reported email, reason for report, already reported, accounts to approve
updated: 2026-10-27
---

When a member writes "it doesn't work for me", the quickest way to help is often to see the site through their eyes.
Yclas gives administrators a few support tools for this, each recorded in an audit log so your team stays
accountable:

- **Needs your attention**: what is waiting for your team, on the dashboard.
- **Log in as this user**: see the site exactly as one member sees it.
- **Reported conversations**: read a conversation only when one of the people in it asks you to.
- **Audit log**: who used these tools, and who changed settings, roles, users, listings, orders, reviews, disputes,
  banners and deposit claims.
- **Staging copy**: a private copy of your site to try themes and settings on.

These tools are for administrators only. Moderators can't use them, except the parts of **Needs your attention**
their role covers.

## Needs your attention

The admin panel's dashboard (the first page you see after signing in) shows a **Needs your attention** card when
something is waiting for your team. Each line has a count and takes you to the page that deals with it:

| Line | What is waiting |
| --- | --- |
| **Listings to review** | Listings waiting for [moderation](/how-ads-moderation-works/), or held by AI moderation. |
| **New listing reports** | Reports about listings nobody has looked at yet. |
| **Reported conversations and disputes** | Conversations and [disputes](/disputes/) still open (see below). |
| **Business accounts to approve** | [Business accounts](/account-types/) waiting for your approval, and accounts of [your own types](/account-types/#accounts-to-approve) that need it. |
| **Listing claims to check** | Claims on listings, on a [business directory](/directory-mode/). |
| **Reviews to check** | Reviews held by [fake-review protection](/review-extras/#fake-review-protection). |
| **Banners to approve** | Banners members [bought](/how-to-add-banner/#sell-banners-to-advertisers), waiting for approval. |
| **Seller plan renewals that failed** | Plan renewals that failed in the last two weeks. |
| **Security deposit claims to decide** | Claims on a booking's [security deposit](/paid-bookings/#security-deposits). |

Only lines with something waiting are shown, and the card disappears when nothing is. Moderators see the listings
to review and the listing reports, if their role lets them open those pages. The counts are refreshed every two
minutes.

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
  dispute about it. A buyer whose order hasn't been received yet gets a short form to say what went wrong, the same
  as **Report a problem** in **My Payments**: see [Disputes about an order](/disputes/).

When a member clicks **Report** or **Open a dispute**, they're asked for a reason. It's optional: they can leave it
empty and still report, or click **Cancel** to stop. If they've already reported that conversation and you haven't
resolved it yet, they see *You already reported this conversation.* and nothing new reaches you.

Each new report is emailed to the **Sender email** in [Email settings](/general-email-configuration/), with the
reason, a link to that conversation and how many reported conversations are waiting. It's the
*conversation-report-new* template, which you can reword in [Email templates](/automatic-emails-sent-to-users/#reports).
To protect your inbox, at most 10 of these emails go out in an hour; the rest still wait in the list. A problem with
an order reported through the buyer's dispute form sends the [dispute emails](/disputes/) instead.

Reported and disputed conversations appear under **Reported conversations** in the admin panel menu, with the type,
who reported it, their reason and when; a dispute about an order also shows the order number. Click **Open** to read the whole
conversation, from both sides. When you have dealt with it, click **Resolve**: the conversation becomes private again
and you can no longer open it.

For a dispute about an order, the conversation page also shows the order and what the buyer says, with buttons to
**Refund the buyer**, **Pay the seller** or **Close without a payment change**. Both sides are emailed your decision.
See [Disputes about an order](/disputes/#decide-a-dispute).

Each time you open a conversation it is recorded in the audit log. The **Report** and **Open a dispute** options are
in the Nova and Default themes; other themes with their own message pages may not show them yet.

## Audit log

**Audit log** in the admin panel menu lists every time an administrator on your site:

- logged in as a member, and returned to their own account;
- opened a reported conversation, resolved a report, or decided a dispute about an order;
- made a change through the [MCP server](/mcp-server/) (an AI assistant), with the API key's name;
- made a staging copy of the site.

It also records what administrators and moderators change in the admin panel:

| Action | What the row shows |
| --- | --- |
| **Changed a setting** | The setting, with its old and new value. Passwords, keys and other secrets are never written: their values are hidden. |
| **Changed a role's rights** | The role whose permissions were changed. |
| **Changed a user's role** | The member, with their old and new role. |
| **Deleted a user** | The member who was deleted. |
| **Deleted a listing** | The listing that was deleted. |
| **Refunded an order** | The order that was refunded. |

It also records, each with a readable label: **Deleted a review**, **Published a held review**, **Kept a review
hidden**, **Put a consumer alert on a listing**, **Removed a consumer alert**, **Resolved a dispute**, **Sent a
listing back with a reason**, **Approved a paid banner**, **Rejected a paid banner**, **Decided a security deposit
claim** and **Added members to the weekly digest**. Changes a [store team](/storefronts/#store-teams) member makes
for a store show as **Store team member made a change**.

Each row shows when, which administrator, which member, and the IP address used. Nobody can edit or delete these rows
from the admin panel. If a support tool can't record its entry, it refuses to run, so nothing goes unrecorded.

Only changes made by someone signed in to the admin panel are recorded. Scheduled jobs and the site's own updates
aren't, and what you do while logged in as a member is covered by the **Logged in as a user** row itself.

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
- [Disputes about an order](/disputes/) — refund the buyer or pay the seller from a dispute.
- [Roles](/roles-work-classified-ads-script/) — what administrators and moderators can do.
- [My sites](/my-sites/) — everything else you can do with your sites.
{: .cards}
