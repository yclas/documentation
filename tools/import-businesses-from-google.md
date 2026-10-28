---
title: Import businesses from Google
description: Fill a new business directory with real local businesses from a Google Places search, with address, phone, website and hours, ready to claim.
section: tools
order: 25
permalink: /import-businesses-from-google/
keywords: google places, google maps businesses, import businesses, seed directory, fill directory, empty directory, places api, google api key, scrape google maps, add businesses, local businesses, bulk add businesses, claim listing
updated: 2026-10-22
plans: Available on all plans
---

A directory with no businesses in it doesn't attract visitors, and without visitors businesses have no reason to join.
The Google import breaks that circle: search Google Places for, say, *plumbers* near *Austin, TX*, check what it
found, and add those businesses to your site in one go. Each one becomes a business listing that the business itself
can then [claim](/directory-mode/#claims-let-businesses-take-over-their-listing) and keep up to date.

Switch on [directory mode](/directory-mode/) first. The import then fills in the business fields (**This is a
business** and **Opening hours**), and businesses can claim their listings.
{: .note}

## What you need: a Google API key

The search runs on your own Google Cloud account, and Google bills it for each search (a few cents per page of 20
results).

1. In the [Google Cloud console](https://console.cloud.google.com/), create a project or pick one, and make sure
   billing is set up.
2. Enable **Places API (New)** for the project.
3. Create an API key. Don't restrict it to websites (HTTP referrers): the search is sent from our servers, not from a
   browser. You can restrict it to the Places API (New).
{: .steps}

This is a different key from the one your site's [Google Maps](/how-to-configure-Google-Map-Settings/) use in
visitors' browsers. Yclas keeps it separately and never shows it again; it is only saved once Google has answered a
search with it.

## Search and import

1. In the admin panel, go to **Tools** and click **Start** in the **Move your site to Yclas** card.
2. Scroll to **Add businesses from Google**.
3. Paste **Your Google API key** (the first time only; afterwards it says *Saved. Enter another one to replace it.*).
4. Fill in **What** (for example *plumbers*), **Near** (a town or area), **Within (km)** (1 to 50, 10 by default) and
   **Up to** (how many businesses, up to 60).
5. Click **Search and continue**.
6. On **Map columns and fields**, choose the **Category**: one of your categories, or **A category per type of business (from
   Google)**, which files each business under its Google type and creates the categories you don't have yet. Check
   **Listed under**: the email of the administrator the listings belong to. Click **Continue: preview**.
7. On **Review before importing**, check the businesses that will be added. Nothing has been imported yet.
8. Click the import button and keep the page open until it finishes.
{: .steps}

Repeat with other searches (*electricians*, *cafés*, another town) to build up your directory.

## What each business gets

| Taken from Google | On your site |
| --- | --- |
| Name | The listing's title. |
| Short description | The description, when Google has one; otherwise the name. |
| Address and map point | The listing's address, so it appears on maps and in distance searches. |
| Phone and website | The listing's phone and website. |
| Opening hours | The **Opening hours** field, including hours past midnight. |

Listings are published straight away, with no price and no location from your location list. Businesses that Google
marks as permanently closed are left out, and so is a business already on your site with the same name and address
(the preview lists them).

Google's terms don't allow copying its photos, so **no photos are imported**. Listings without a photo look plainer:
invite the businesses to claim their listing and add their own.
{: .warning}

## Let the businesses take over

The listings belong to an administrator, so they count as unclaimed: each business sees **Claim this business** on its
listing. A business with an email address at its website's domain confirms with a code and gets the listing straight
away; other claims wait for you in **Listings › Claims**. Contact the businesses you imported to tell them they are
listed and invite them to claim it. See [Claims](/directory-mode/#claims-let-businesses-take-over-their-listing).

To take an import back, use **Undo** as for any import: see [Undo an import](/how-to-import-ads/#undo-an-import).

## Related guides

- [Run a business directory](/directory-mode/) — business listings, claims and quote requests.
- [Import listings from a CSV file](/how-to-import-ads/) — the same import steps for a spreadsheet.
- [Maps](/how-to-configure-Google-Map-Settings/) — show your businesses on a map.
- [Review replies, invitations and awards](/review-extras/) — let the businesses collect and answer reviews.
- [Deals on listings](/listing-deals/) — let businesses add offers once they have claimed their listing.
{: .cards}
