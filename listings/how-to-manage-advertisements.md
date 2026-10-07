---
title: Manage listings
description: Find any listing on your marketplace, edit it, publish or hide it, mark it as sold or spam, and clean up in bulk.
section: listings
order: 10
permalink: /how-to-manage-advertisements/
keywords: listings, ads, all listings, search, filter, sort, edit, activate, deactivate, sold, spam, delete, bulk, featured, go to top, stats, status, unconfirmed, unavailable
updated: 2026-10-07
---

**Listings › All listings** is where you look after every listing on your marketplace, whoever posted it. You can
search and filter the list, open any listing to edit it, change its status, and act on many listings at once.

## Find a listing

1. In the admin panel, go to **Listings › All listings**.
2. Pick a status tab, type in **Search by title or ID…**, or click one of the filter chips.
3. Choose an order in the sort menu on the right.
{: .steps}

The list shows 50 listings per page, with the photo, title, category, location, ID, seller, price, status and date.
If **Count Visits Listings** is on in [listing settings](/how-to-manage-advertisement-fields/), a **Views** column
shows how often each listing has been opened.

| Tool | What it does |
| --- | --- |
| Status tabs | **All**, **Published**, and a tab for every other status that currently has listings, each with a count. |
| Search | Matches words in the title. Type a number to find a listing by its ID. If **Include Search by Description** is on in **Settings › General**, descriptions are searched too. |
| Seller | Click a seller's name to see only their listings. Click the **✕** chip to show everyone again. |
| **Featured** filter | Listings that are featured right now. Only shown when you [sell featured listings](/how-to-create-featured-plan/). |
| **Not expired** / **Expired** filters | Only shown when listings [expire](/ad-expiration/). |
| Sort | **Newest published**, **Oldest published**, **Newest created**, **Title A–Z**, **Price: high to low**, **Price: low to high**, **ID** or **Status**. |

A pill next to the status shows when a listing has an order attached, for example a paid category: **Paid** or
**Not paid**, with the amount. Click it to see the order.
{: .tip}

## What each status means

| Status | Meaning | Visible on the site? |
| --- | --- | --- |
| **Published** | Live. | Yes, until it expires. |
| **Needs review** (or **Not published** when moderation is off) | Waiting for your approval, or waiting for the seller to pay for a paid category. See [Moderation](/how-ads-moderation-works/). | No |
| **Unconfirmed** | The seller hasn't clicked the confirmation link in their email yet. | No |
| **Sold** | Marked as sold by you or the seller, or sold out through [stock control](/stock-control/). | No |
| **Unavailable** | Deactivated by you or the seller, or [expired](/ad-expiration/). | No |
| **Spam** | Marked as spam. | No |

## Edit a listing

Click the listing's title or **Edit**. The listing opens in the same edit page the seller uses, where you can change
the text, category, location, price, custom fields and photos (including which photo is the main one).

If you use a moderation mode, saving any change sends the listing back to the moderation queue, even when you make
the change yourself. Approve it again afterwards.
{: .warning}

## Actions on one listing

Open the **⋯** menu at the end of a row:

| Action | What happens |
| --- | --- |
| **View on site ↗** | Opens the public page of the listing. |
| **Activate** | Publishes the listing and emails the seller that it is live. If it had expired, it gets a new publication date, so it runs for a full period again. |
| **Mark as Sold** | Sets the status to Sold and the stock to zero. |
| **Deactivate** | Hides the listing without deleting it (status Unavailable). |
| **Spam** | Hides the listing and flags the seller's account as a spammer (see below). |
| **Featured** / **Remove Featured** | Makes a published listing featured through the checkout, or ends its featured period. Only when featured listings are on. |
| **Go to top** | Bumps a published listing to the top through the checkout. Only when "go to top" is on in **Settings › Payments**. |
| **Stats** | Visits and contacts for this listing, by day. |
| **Delete** | Deletes the listing permanently, with its photos, favourites, reviews and stats. Orders are kept, without the link to the listing. |

If you sell [membership plans](/membership-plans/) and the seller's plan has no listings left, **Activate** stops with
a message instead of publishing.
{: .note}

## Bulk actions

Tick the boxes next to the listings (or the box in the header to select the whole page). A bar appears at the bottom
with **Activate**, **Mark as Sold**, **Deactivate**, **Spam** and **Delete**. They work exactly like the single
actions above.

## What "Spam" does to the seller

Marking a listing as spam also sets the seller's account to *spam* (administrators and moderators are never
flagged). The account can still sign in, but if the [Blacklist add-on](/activate-blacklist-works/) is on, that member
can't post new listings. You can see and clear flagged accounts there. For all your options against spammers, see
[Fight spam](/how-to-avoid-spam-in-my-site/).

## Add listings yourself

- **New listing** opens the normal posting form, so you can post as yourself.
- **Import** lets you [import listings from a CSV file](/how-to-import-ads/).

Your plan sets the maximum number of listings your site can hold, counting listings of every status, including spam
and expired ones. If you get close to the limit, deleting old spam and expired listings frees up room.
See [Plans and billing](/plans-and-billing/).
{: .tip}

## Related guides

- [Moderation](/how-ads-moderation-works/) — approve listings before they go live.
- [How members post a listing](/how-members-post-listings/) — what your sellers see.
- [Listing expiry and renewal](/ad-expiration/) — when listings go offline by themselves.
- [Listings disappeared](/listings-disappeared/) — when listings are missing from the site.
{: .cards}
