---
title: Moderation
description: Decide how new listings go live — straight away, after you approve them, after the seller confirms by email or after they pay — and work through the moderation queue.
section: listings
order: 20
permalink: /how-ads-moderation-works/
keywords: moderation, approve, review, queue, pending, post directly, email confirmation, payment, paid category, needs review, unconfirmed, publish
updated: 2026-10-07
---

Moderation controls what happens between a member clicking **Publish ad** and the listing appearing on your site.
You can let listings go live straight away, check each one yourself first, ask sellers to confirm their email
address, or charge them to post — or combine these.

Approving listings yourself is the surest way to keep spam and unsuitable listings off a new marketplace. Once you
trust your members, posting directly is less work for you and faster for them.

## Choose how new listings go live

1. In the admin panel, go to **Settings › General**.
2. In **How new listings go live**, pick one of the six options.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

| Option | What happens to a new listing |
| --- | --- |
| **Post directly** | Goes live as soon as it is posted. |
| **Moderation on** | Waits in the moderation queue until you approve it. |
| **Payment on** | Goes live once the seller pays the price of its category. |
| **Email confirmation on** | The seller gets an email with a confirmation link; the listing goes live when they click it. |
| **Email confirmation with Moderation** | The seller confirms by email, then the listing waits for your approval. |
| **Payment with Moderation** | The seller pays, then the listing waits for your approval. |

### Payment modes and free categories

The payment modes charge the **Price** you set on each [category](/how-to-add-categories/). A subcategory without
a price uses its parent's price. When neither has a price, posting there is free and the listing is handled as
**Post directly** (with **Payment on**) or **Moderation on** (with **Payment with Moderation**). The same choice is
also offered as **Charge for posting** in **Settings › Payments**, under **Pay to post**. To take payments you need a
payment gateway: see [Take payments on your site](/setup-payment-gateways/).

## The moderation queue

When you use one of the three modes with moderation, a **Moderation** item appears under **Listings** in the sidebar,
with a badge counting the listings waiting for you.

1. Go to **Listings › Moderation**.
2. Read each card: photo, title, price, category, location, seller, date and the start of the description.
3. Click **Approve** to publish it, **Edit** to correct it first, or **Spam** to reject it as spam.
{: .steps}

The **⋯** menu on each card has **Preview on site ↗**, **Stats** and **Delete**, plus **Featured** and **Go to top**
when you sell those. To handle many listings at once, tick them (or **Select all on this page**) and use **Approve**,
**Spam** or **Delete** in the bar at the bottom. When the queue is empty you'll see **All caught up**.

There is no "reject with a reason" button. To turn a listing down, delete it (or mark it as spam if it is spam) and,
if you want to explain why, write to the seller yourself.
{: .note}

Approved listings get today's date as their publication date, so they appear at the top of the newest listings and
their [expiry](/ad-expiration/) starts counting from the day you approve them.

## Edits go back to the queue

With any of the moderation modes, every time a listing is edited and saved — by the seller, a moderator or you — it
goes back to **Needs review** and disappears from the site until it is approved again. The seller sees *Listing is
updated, but first administrator needs to validate*. Keep this in mind before you tidy up a published listing
yourself.

With moderation on, sellers also can't reactivate their own sold or deactivated listings; only you can, with
**Activate** in [All listings](/how-to-manage-advertisements/).

## Emails that are sent

| When | Who gets it | Email template |
| --- | --- | --- |
| A listing is posted directly | The seller, with a link to the listing | *ads-user-check* |
| A listing enters the queue (Moderation on) | The seller, with a link to edit it | *ads-notify* |
| A listing enters the queue (Moderation on) | The address in **Notify Moderation Email**, if you filled it in | *awaiting-moderation* |
| Email confirmation is needed | The seller, with the confirmation link | *ads-confirm* |
| You approve a listing | The seller, with a link to the live listing | *ads-activated* |
| Any new listing, if **Notify Me on New Listing** is on | Every administrator and moderator who accepts emails | *ads-to-admin* |

**Notify Moderation Email** and **Notify Me on New Listing** are on the **Email** settings page, in the
**Addresses** section. You can change the wording of every email in your
[email templates](/automatic-emails-sent-to-users/).

A seller who posts without an account under **Email confirmation on** gets an account automatically; the
confirmation link also signs them in.
{: .tip}

## Who can moderate

Administrators can always moderate. Members with the **Moderator** role can use the queue too, as long as their role
allows the moderation action. See [Roles and permissions](/roles-work-classified-ads-script/).

## Related guides

- [Manage listings](/how-to-manage-advertisements/) — statuses and actions on every listing.
- [Publishing options](/how-to-configure-publish-options/) — who may post and how often.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — every anti-spam tool in one place.
- [Categories](/how-to-add-categories/) — set a price to post in a category.
{: .cards}
