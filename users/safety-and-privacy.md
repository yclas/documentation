---
title: Member safety and privacy
description: Let members block and report each other, choose who sees their profile, close the members list, keep profiles out of search engines, and clear out inactive accounts.
section: users
order: 37
permalink: /member-safety-privacy/
keywords: block member, block user, unblock, report member, report user, reported members, harassment, abuse, scam, impersonation, profile privacy, profile visibility, hide profile, members only profile, member directory, members list, close members list, noindex profiles, search engines, inactive users, inactive accounts, anonymise, anonymize, gdpr, data cleanup
updated: 2026-11-16
plans: Available on all plans
---

As your community grows, members need ways to protect themselves, and you need to decide how public your members
are. These tools are in a **Members** section of **Settings › General**:

| Switch | What it does |
| --- | --- |
| **Members can block each other** | A member blocks another, and the two can no longer contact each other. |
| **Report a member** | Visitors and members report a member, with a reason, to a queue in your admin panel. |
| **Members choose who sees their profile** | Each member picks who can open their profile page. |
| **Close the public members list** | The page that lists every member (`/user`) answers "not found". |
| **Keep member profiles out of search engines** | Profile pages ask search engines not to index them, and leave your sitemap. |
| **Anonymise inactive accounts in bulk** | Erase the personal data of long-inactive accounts from the **Users** page. |

Every switch is off until you turn it on. To change them:

1. Go to **Settings › General**.
2. Scroll to **Members** and switch on the ones you want.
3. Click **Save changes**.
{: .steps}

## Blocking

With **Members can block each other** on, a signed-in member sees **Block** with the other member's name under that
member's profile and under a conversation with them. They confirm, and the block starts.

While one of two members has blocked the other, in either direction, neither can:

- send the other a message ("You can't contact this member: one of you blocked the other.");
- make an offer or a counter-offer, ask for a quote or send one;
- send a booking request;
- send a job application, or email through a listing's or profile's contact form while signed in.

In one direction only, the blocked member also can't reply to the blocker's forum topics or ask questions on the
blocker's listings.

A block does **not** stop:

- messages about a deal the two have in progress: a sale paid in the last 90 days and not yet received, an accepted
  offer, or a booking the seller accepted that hasn't ended. Nothing one member can do alone counts as a deal, so a
  blocked member can't lift a block themselves;
- a dispute about an order;
- seeing each other's listings and profiles;
- visitors who aren't signed in and use a contact form.

Your team (administrators and moderators) can't be blocked. A member can block up to 500 members.

To unblock, a member clicks **Unblock** on the other member's profile, or opens **Profile privacy** (from their own
profile, or the account menu in Nova) and clicks **Unblock** in **Blocked members**.

If you switch blocking off, blocks stop applying but are kept, and members can still unblock. They apply again if you
switch it back on.

## Reporting members

With **Report a member** on, **Report this member** shows under every member's profile and under a conversation. The
person reporting chooses a reason (Harassment or abuse, Spam, Scam or fraud, Pretending to be someone else,
Inappropriate profile, or Other), can add what happened, and clicks **Send report**. Visitors who aren't signed in
fill in a captcha and can leave their email so you can follow up.

The form only opens for someone who can already see that member. A signed-in member can have one waiting report per
member, and the same hourly and daily limits as listing reports apply.

### Handle reports

You get a push notification (if you keep the reports alert on) and an email, at most one an hour, at your **Sender
email**, or to up to five administrators if none is set. The dashboard shows **Reported members to check**.

1. In the admin panel, go to **Reports** and click **Reported members**.
2. Open a report. It shows the member, who reported them, the reason and details, and other reports about the same
   member.
3. Choose what to do:
   - **Dismiss report**: no action taken.
   - **Close with this note**: you dealt with it yourself (a warning, an edit); the note is for your team, the member
     isn't emailed.
   - **Deactivate account**: the member can no longer sign in. Only administrators can do this.
{: .steps}

Reports about forum posts land in the same queue; see [Forum moderation and polls](/forum-moderation-polls/).

## Profile visibility

With **Members choose who sees their profile** on, each member opens **Profile privacy** and picks, in **Who can see
my profile**:

| Choice | Who sees the profile |
| --- | --- |
| **Everyone** | Anyone, as before. This is the default. |
| **Signed-in members only** | Members who are signed in. Visitors are asked to sign in. |
| **Nobody (hidden)** | Only the member and your team. Everyone else gets "page not found". |

The choice covers the profile page, the member's reviews and store page, the members list, the stores directory, the
vehicle dealer directory and your sitemap. Listings stay visible to everyone, with the seller's name on them.

While the switch is off, every profile is public again; members' choices are kept for when you switch it back on.

## Members list and search engines

- **Close the public members list**: `/user` answers "not found", and the API no longer lists members. Profile pages
  still open from a listing. See [Member profiles](/member-profiles/).
- **Keep member profiles out of search engines**: every profile page asks search engines not to index it, and
  profiles leave your sitemap. Listings are not affected.

## Inactive members

On every site, the **Users** page has an **Inactive for** filter (3, 6, 12, 24 or 36 months). An account counts as
inactive when it has had no sign-in on the website, and no listing, message, order or account change, in that time.
Accounts that have signed in with the mobile app are never counted as inactive. **Export CSV** follows the filter.

On a large site, the list can take a few seconds to load with this filter.

### Anonymise inactive accounts

With **Anonymise inactive accounts in bulk** on, administrators can erase the personal data of inactive accounts:

1. Go to **Users** and choose **Inactive for** a number of months.
2. Tick the accounts and click **Anonymise selected…**.
3. Check the list: who will be anonymised, how many listings are removed and orders kept, and who is left out.
4. Type `ANONYMISE` and click the button to confirm.
{: .steps}

Name, email, phone, photo, description and custom fields are erased; listings, favourites and reviews are removed;
messages they wrote are blanked. Orders and invoices are kept without personal details. **This can't be undone.**

Left out, always: anyone with a role other than plain member, your own account, accounts waiting for approval,
unclaimed dealer pages, and accounts with published listings, an active plan, a booking ahead, a payout account or a
paid order in progress. Each account is checked again when you confirm. Up to 20 accounts are done per run; if some
weren't reached in time, select them again. Every run is recorded in the
[Audit log](/admin-support-tools/#audit-log).

## Good to know

- Deactivating a member from a report stops them signing in again, but doesn't end a session they already have open.
- A dealer who hides their profile leaves the dealer directory when its stored list next refreshes.
- Only the Default and Nova themes have been checked with these buttons.
- These pages are in English for now; translations follow.

## Related guides

- [Member profiles](/member-profiles/) — profile pages and the members list.
- [Admin support tools](/admin-support-tools/) — reported conversations and the audit log.
- [Manage users](/manage-users/) — find, edit and delete members.
{: .cards}
