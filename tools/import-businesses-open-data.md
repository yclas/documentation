---
title: Add businesses from open data
description: Fill a new business directory with real local businesses from Overture Maps open data, included in your plan, with no API key and no bill per search.
section: tools
order: 24
permalink: /import-businesses-open-data/
keywords: open data, overture maps, import businesses, seed directory, fill directory, empty directory, add businesses, local businesses, bulk add businesses, free business data, business records, claim listing, no api key
updated: 2026-10-28
plans: Available on all plans
---

A directory with no businesses in it doesn't attract visitors, and without visitors businesses have no reason to join.
**Add businesses from open data** fills it for you: search for, say, *plumbers* near *Austin, TX*, check what it found,
and add those businesses to your site in one go. Each one becomes a business listing that the business itself can then
[claim](/directory-mode/#claims-let-businesses-take-over-their-listing) and keep up to date.

The businesses come from [Overture Maps](https://overturemaps.org/), an open map dataset built from Meta, Microsoft,
Foursquare and other sources. It's included in your plan: you don't need an API key, and nothing is billed per search.

Switch on [directory mode](/directory-mode/) first. The search only shows on a site that lists businesses, and the
import then fills in the business fields so that businesses can claim their listings.
{: .note}

## How many businesses you can add

Each plan includes a number of business records a month. Every business a search brings back counts as one record,
and the count starts again on the 1st of each month.

| Plan | Business records a month |
| --- | --- |
| Free trial | 200 |
| Starter | 1,000 |
| Professional | 5,000 |
| Marketplace | 20,000 |

Need more for a launch? [Contact support](/use-yclas-support-system/) and we can add extra records to your site.

## Search and import

1. In the admin panel, go to **Tools** and click **Start** in the **Move your site to Yclas** card.
2. Scroll to **Add businesses from open data**.
3. Fill in **What**: the kind of business, in English (*plumbers*, *restaurants*, *dentists*, *car repair*).
4. Fill in **Near** (a town or city), **Within (km)** (1 to 50, 10 by default) and **Up to** (how many businesses,
   up to 1,000; 100 by default).
5. Click **Search and continue**. The search takes up to a few minutes; keep the page open until it says
   *Found. Opening the next step…*
6. On **Map columns and fields**, choose the **Category**: one of your categories, or **A category per type of
   business (from the data)**, which files each business under its type and creates the categories you don't have
   yet. Check **Listed under**: the email of the administrator the listings belong to. Click **Continue: preview**.
7. On **Review before importing**, check the businesses that will be added. Nothing has been imported yet.
8. Click the import button and keep the page open until it finishes.
{: .steps}

Repeat with other searches (*electricians*, *cafés*, another town) to build up your directory.

Search for the trade the way a map would file it: *plumbers*, *roofers* and *hair salons* work well. If a search
finds nothing, try a broader word (*car repair* rather than *brake specialists*) or a larger **Within (km)**.
{: .tip}

## What each business gets

| Taken from the data | On your site |
| --- | --- |
| Name | The listing's title. |
| Address and map point | The listing's address, so it appears on maps and in distance searches. |
| Phone and website | The listing's phone and website, when the data has them. |
| Type of business | The category, if you chose **A category per type of business**. |

Each listing's text invites its business to claim it, and ends with a short credit line naming the data's sources, as
the open licences require. Listings are published straight away, with no price and no location from your location
list. Businesses marked as closed, and records the data isn't confident about, are left out. A business already on
your site with the same name and address is skipped (the preview lists them), but it still counts towards your
monthly records.

The data has **no photos and no opening hours**. Listings without a photo look plainer: invite the businesses to claim
their listing and add their own.
{: .warning}

## Let the businesses take over

The listings belong to an administrator, so they count as unclaimed: each business sees **Claim this business** on its
listing. A business with an email address at its website's domain confirms with a code and gets the listing straight
away; other claims wait for you in **Listings › Claims**. Contact the businesses you imported to tell them they are
listed and invite them to claim it: [Recruit sellers](/recruit-sellers/) keeps that list for you. See
[Claims](/directory-mode/#claims-let-businesses-take-over-their-listing).

To take an import back, use **Undo** as for any import: see [Undo an import](/how-to-import-ads/#undo-an-import).

## If the search doesn't work

| Message | What to do |
| --- | --- |
| *We couldn't find "…" on the map. Try a city name.* | Type the name of a town or city, with its state or country if it's ambiguous. |
| *Say what kind of business, in English* | **What** needs a word in English, such as *plumbers* or *restaurants*. |
| *This month's business records for your plan are used up.* | Wait for the 1st of the month, move to a bigger plan, or ask support for extra records. |
| *It is taking too long. Please try again later.* | Very large areas take longest: try a smaller **Within (km)** or a lower **Up to**. |

## Open data or Google?

You can also [import businesses from Google](/import-businesses-from-google/). Google's results include opening hours
and are often more complete, but the search runs on your own Google Cloud account, which Google bills per search.
Open data is included in your plan. Neither imports photos.

## Related guides

- [Run a business directory](/directory-mode/) — business listings, claims and quote requests.
- [Import businesses from Google](/import-businesses-from-google/) — the same import from a Google Places search.
- [Recruit your first sellers](/recruit-sellers/) — find businesses near you and invite them one by one.
- [Import listings from a CSV file](/how-to-import-ads/) — the same import steps for a spreadsheet.
- [Maps](/how-to-configure-Google-Map-Settings/) — show your businesses on a map.
{: .cards}
