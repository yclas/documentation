---
title: Listing expiry and renewal
description: Make listings go offline after a number of days, or on a date the seller picks, and let sellers renew them.
section: listings
order: 60
permalink: /ad-expiration/
keywords: expire, expiry, expiration, expiresat, days, renew, reactivate, reactivation, reminder, about to expire, expired email, unavailable, old listings
updated: 2026-10-07
---

Expiry keeps your marketplace fresh. Old listings for things that sold long ago put buyers off, so most marketplaces
take listings offline after 30, 60 or 90 days and let sellers renew the ones that are still current.

You can expire listings in two ways:

- **After a fixed number of days**, the same for every listing.
- **On a date the seller chooses**, with a special custom field.

## Expire listings after a number of days

1. In the admin panel, go to **Listings › Settings**.
2. In **Posting**, enter the number of days in **Listing Expiration Date**. Enter 0 for listings that never expire.
3. Decide whether sellers may renew: switch **Allow Listing Reactivation** on or off.
4. Click **Save changes** in the bar at the bottom.
{: .steps}

The days count from the listing's publication date. For a listing you approved in
[moderation](/how-ads-moderation-works/), that is the day you approved it.

## What happens when a listing expires

| When | What happens |
| --- | --- |
| The moment it passes its expiry | It disappears from lists, search results and the home page. |
| Two days before it expires | The seller gets the *about to expire* email (`ad-to-expire`) with a link to edit the listing. |
| Each morning | Listings past their expiry are set to **Unavailable** and each seller gets the *expired* email (`ad-expired`) with links to edit and to reactivate the listing. |

You can change the wording of both emails in your [email templates](/automatic-emails-sent-to-users/). In
[All listings](/how-to-manage-advertisements/), the **Not expired** and **Expired** filters show which listings are
which.

## Renewing an expired listing

| Who | How |
| --- | --- |
| The seller | The reactivate link in the email, or **Activate the listing** in **My Listings**. Only works when **Allow Listing Reactivation** is on and you don't use a moderation mode. |
| You | **Activate** in **Listings › All listings**, at any time. |

A renewed listing gets today's date as its new publication date, so it runs for a full period again and appears
among the newest listings.

If you sell **Go to top**, sellers can also pay to refresh a listing that is still live. See
[Featured listings and promotions](/how-to-create-featured-plan/).
{: .tip}

## Let sellers choose the expiry date

For events, job vacancies or rentals, the right end date depends on the listing. A custom field named `expiresat`
lets sellers pick it.

1. Go to **Listings › Custom Fields** and click **New field**.
2. Enter `expiresat` as the **Name** (exactly that, it can't be changed later).
3. Choose **Date** as the **Type**, and a **Label** such as *Show until*.
4. Switch on **Required** if every listing must have an end date.
5. Click **Create field**.
{: .steps}

From then on, each listing stops showing on the date the seller picked (it is visible up to the day before), and is
set to **Unavailable** the following morning.

<div class="warning" markdown="1">
As soon as an `expiresat` field exists, it replaces the **Listing Expiration Date** setting completely:

- Listings without a date in that field **never expire**, including every listing posted before you created it.
- Expired listings can't be reactivated by their sellers, because the date has passed. They need to edit the date
  first, or you can activate them from **All listings**.
</div>

## Before you change the number of days

Changing **Listing Expiration Date** applies to every listing at once, old ones included, not only to new ones.

- **Shortening it** (or switching it on for the first time) immediately hides every listing older than the new
  limit, and the next morning they are all set to **Unavailable** and every one of their sellers gets an
  *expired* email.
- **Lengthening it** brings back listings that were hidden but not yet set to Unavailable. Listings already set to
  Unavailable stay offline until they are reactivated.

If you have many listings, check how many are older than the new limit before you save, and warn your sellers.
{: .warning}

## Related guides

- [Publishing options](/how-to-configure-publish-options/) — the other posting settings.
- [Custom fields](/how-to-create-custom-fields/) — how custom fields work.
- [Listings disappeared](/listings-disappeared/) — expiry is a common reason.
- [Email templates](/automatic-emails-sent-to-users/) — edit the expiry emails.
{: .cards}
