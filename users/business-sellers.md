---
title: Business sellers
description: Let dealers and shops sell on your marketplace with a business account, a Business badge, their trader details, bulk import from a CSV file and an automatic stock feed.
section: users
order: 45
permalink: /business-sellers/
keywords: business, business account, account type, business only, business price, business seller, dealer, shop, store, trader, professional seller, company, VAT, DSA, trader details, bulk import, csv, stock feed, xml feed, inventory, sync, approve business, listing performance, contact clicks, calls, website clicks, search terms, statistics, stats per listing, car dealer, estate agency, agency page, dealer page, machinery dealer
updated: 2026-10-22
---

Many marketplaces mix private sellers with businesses: car dealers, shops, agencies. Business accounts give those
sellers what they need. Buyers see a **Business** badge and the company's details, and the business gets a dashboard
to upload its whole stock from a spreadsheet or keep it in sync automatically with a feed from its own software.

Business seller accounts are part of the **Professional** and **Marketplace** plans.
{: .note}

## Switch business accounts on

Newer sites have business accounts on. To check, or to switch them on:

1. Go to **Settings › General**.
2. In **Business sellers**, switch on **Business accounts**.
3. Set the other options you need (see the table).
4. Click **Save changes** in the bar at the bottom.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Business accounts** | Sellers can mark their account as a business. |
| **Approve business accounts** | Off by default. When on, a new business account can't post until you approve it. |
| **Ask the account type at sign-up** | Off by default. New members choose private or business on the sign-up form. See [Private and business accounts](/account-types/). |
| **Only business accounts can post** | Off by default. Other members can browse and message sellers but not post. See [Private and business accounts](/account-types/#only-business-accounts-can-post). |
| **Imports can add categories and locations** | Off by default: an imported row whose category or location isn't on your site is reported as a problem and skipped. When on, it is added to your site as a new top-level category or location. |

The same section also has **Sales dashboard for every seller** (see [Sales dashboard for sellers](/sales-dashboard/))
and, on the Marketplace plan, **Seller storefronts** (see [Seller storefronts](/storefronts/)).

## How a seller becomes a business

The seller opens **Edit profile** and sets **Account type** to **Business** instead of **Private seller**, then saves.
This field is in the Nova theme and Atlantic-based themes.

With **Ask the account type at sign-up** on, new members can also choose the business type when they sign up.
See [Private and business accounts](/account-types/).

With **Approve business accounts** on, the account waits for you, and the seller sees *Your business account is
waiting for the site owner's approval before you can post.*

## Approve business accounts

Click **Business** in the sidebar (it appears once business accounts are on). The page lists the sellers who marked
their account as a business, in three tabs: **Pending**, **Approved** and **Rejected**. Click **Approve** or
**Reject** next to each one.

While an account is pending or rejected, the seller can't post, import or run a feed, and buyers don't see the
Business badge or the business details.

With **Ask the account type at sign-up** on, you're emailed about each new business account waiting for you, and the
seller is emailed when you approve or reject it.

## What buyers see

For an approved business account:

- a **Business** badge on the seller's public profile;
- a **Business seller** block on their profile and listings, with the **Business name**, **Address**,
  **Registration or VAT number**, **Email** and **Phone** the seller filled in.

Sellers fill in these details under **Your business details** on their **Trust & verification** page (account menu
in Nova). Name, address and email are required, and they're shown publicly. These are the trader details that EU
consumer law and the Digital Services Act ask marketplaces to show for business sellers.

The badge shows in the Nova, Atlantic and default themes; the business details block in Nova and the default theme.
{: .note}

## The business dashboard

Business sellers find **Business dashboard** in the account menu at the top of the site. It shows views, contacts and
favourites for each of their listings, and has two ways to add listings in bulk.

### Bulk import from a CSV file

1. On the dashboard, the seller clicks **Bulk import**.
2. They upload a CSV file (up to 1 MB and 1,000 rows, with column headers in the first row) and click **Upload**.
3. Under **Match your columns**, they choose which listing field each column fills (see below) and check the
   preview.
4. They click **Import**.
{: .steps}

The import carries on in the background, a few rows at a time, so the seller can leave the page. Progress is shown on
the dashboard, with **Continue now** and **Stop**. At the end they see how many listings were created and updated,
and which rows had a problem and why.

Columns can fill: **Reference / SKU**, **Title**, **Description**, **Price**, **Category (name)**, **Location
(name)**, **Address**, **Phone**, **Website**, **Stock**, and one **Photo (URL)** per photo your site allows. Categories
and locations are matched by name.

Include a **Reference / SKU** column (the seller's own stock number). A later import with the same reference updates
that listing instead of creating a new one.
{: .tip}

### Stock feed

A feed keeps a seller's listings in sync with their own stock software, with no uploads at all. Most dealer and shop
systems can publish their stock as a CSV or XML file at a web address.

1. On the dashboard, the seller clicks **Stock feed**.
2. They enter the **Feed URL**, choose the **Format** (**CSV** or **XML**) and how often to read it (**Check every
   (hours)**, from 1 hour to 30 days).
3. Under **Column / tag mapping**, they match each column header or XML tag to a listing field. A Reference / SKU is
   required.
4. They tick **Enabled** and click **Save**.
{: .steps}

Each time the feed is read, new items become new listings (with their photos), changed items are updated, and
listings for items the feed no longer carries are unpublished, never deleted. If the feed is empty or can't be
read, nothing is removed. A listing that you or the seller deleted on your site is never created again by the feed.
The seller can click **Run now** to read it straight away (once every 10 minutes).

### Dealers and agencies on vehicle, property and machinery sites

With a listing-type pack on, business sellers get more:

- **Vehicles pack**: a dealer stock page with make, model and sort filters, a **Dealer** badge, and vehicle fields in
  the CSV and feed mapping (marked *(vehicle)*), with feed values converted. See [Dealers](/vehicles-pack/#dealers).
- **Property pack**: an agency page with its agents, licence number and properties, and an **Agency** badge. See
  [Agency pages](/property-pack/#agency-pages).
- **Equipment pack**: a dealer stock page with make, model, year and hours filters, a **Dealer** badge, and equipment
  fields in the mapping (marked *(equipment)*). See [Dealers](/equipment-pack/#dealers).

## Listing performance

Businesses want to know what a listing brings them. With **Listing performance for sellers** on, every seller (not
only business accounts) gets a **Performance** page for each listing, which counts:

| Figure | What it counts |
| --- | --- |
| **Views** | Visits to the listing page, with a chart of **Views per day**. |
| **Contact clicks** | Clicks on the listing's buttons: **Calls**, **Website visits**, **WhatsApp**, **Telegram**, **Directions** and **Message button**. |
| **Messages** | Messages sent about the listing. |
| **Clicks per 100 views** | How often a visit turns into a contact click. |
| **Searches that found it** | The words people searched when the listing was among the first results. |

Sellers open it from their own listing page with **See how this listing performs**, and choose the last 7, 30 or
90 days.

1. Go to **Settings › General**.
2. In **Access & privacy**, switch on **Listing performance for sellers**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

Clicks are counted with the **Nova** theme, and visits from search engine robots are left out. Counting starts when
you switch it on. Searches are approximate: a results page your site serves from its cache isn't counted.
{: .note}

## Your rules still apply

Imported and feed listings follow the same rules as listings posted through the form:

- [moderation](/how-ads-moderation-works/): with a moderation mode on, they wait in the moderation queue, and changed
  listings go back to it;
- [pay to post](/pay-to-post/): a listing in a paid category stays unpublished until it is paid, at the category's
  [business price](/account-types/#charge-businesses-a-different-price) if you set one;
- [who can post in each category](/account-types/#who-can-post-in-each-category): a row for a category the seller
  can't post in is skipped;
- banned words, spam checks and the limit on listings per day;
- the seller's [membership plan](/membership-plans/), if you use them;
- your Yclas plan's listing limit.

Imported listings don't send the usual "listing received" emails one by one.

## Related guides

- [Private and business accounts](/account-types/) — account type at sign-up, who can post where, business prices.
- [Sales dashboard for sellers](/sales-dashboard/) — each seller's sales, payouts and views on one page.
- [Seller storefronts](/storefronts/) — a store page for each seller and a directory of stores.
- [Reviews and ratings](/review-system-works/) — verification requests and earned trust badges.
- [Verified members](/verified-user/) — mark trusted sellers with a tick.
- [Moderation](/how-ads-moderation-works/) — review listings before they go live.
- [Manage users](/manage-users/) — find and edit any member.
{: .cards}
