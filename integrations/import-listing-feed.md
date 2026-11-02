---
title: Import listings from an XML or JSON feed
nav_title: Import from a feed
description: Bring in listings from any XML or JSON feed, such as a dealer's stock, a job board or a product catalogue, choose which feed field goes where, and import it again later to update them.
section: integrations
order: 145
permalink: /import-listing-feed/
keywords: import feed, feed import, xml feed, json feed, xml import, json import, rss, product feed, google merchant feed, facebook catalogue feed, catalog feed, dealer feed, stock feed, inventory feed, car feed, job feed, supplier feed, api feed, feed url, import from url, map fields, feed reference, re-import, update listings, sync, sold, out of stock
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- Import listings from any XML or JSON feed: give its address or upload the file.
- You choose which feed field goes into the title, price, category, photos and your own custom fields.
- Import the same feed again later to update those listings instead of adding them twice. Listings the feed marks as sold or inactive are taken down.
- There's no automatic re-import yet: you run each import yourself.
</div>

Many businesses already have their listings in a feed: a car dealer's stock file, a job board's XML, a shop's Google
Merchant or Facebook catalogue feed, or a supplier's JSON export. **Import from a feed** reads any of them and turns
each entry into a listing on your site. It works for every kind of marketplace, not only property.

This is the opposite of [listing feeds](/listing-feeds/), which send your listings out to Google, job boards and Meta.
For estate agents' Kyero and XML property feeds, with automatic updates, see the
[property pack](/property-pack/#import-from-a-property-feed).
{: .note}

## What you need

- **The feed's address or file.** An address is the feed's `https://` address, reachable on the internet. A file can
  be an `.xml` file up to 25 MB or a `.json` file up to 10 MB.
- **One entry per listing.** In XML, a repeated element such as `<item>`, `<entry>`, `<product>`, `<vehicle>` or
  `<job>`. In JSON, a list of objects. Your site finds it by itself.
- **Your custom fields set up first.** To import values such as mileage or salary, the fields must already exist under
  **Listings › Custom Fields**.
- **Your categories, ideally.** Category names are matched as in a [CSV import](/how-to-import-ads/#what-to-know-about-imported-listings).

## Import a feed

1. In the admin panel, go to **Tools** and click **Start** in the **Move your site to Yclas** card.
2. In the **Import from a feed** card, enter the **Feed address**, or choose the file under **Or the feed file**.
3. Click **Read the feed and continue**.
4. On **Map columns and fields**, check the line at the top, for example *XML feed: 120 listings found (one per
   &lt;item&gt; element).*
5. Fill in the choices for the whole feed and match each listing field to a feed field (see below). Click
   **Continue: preview**.
6. On **Review before importing**, check the number of listings, the first ones and any notes. Nothing has been
   imported yet.
7. Click the import button and keep the page open until it finishes.
{: .steps}

## Match the feed's fields

The mapping step lists every field found in the feed's listings, with an example value, for example `price (19.99)`,
`location/city` or `enclosure/@url`. Fields with a prefix, such as Google's `<g:price>`, show without it (`price`). The
step starts filled in with guesses from the field names. Change anything that looks wrong, and pick **— not used —**
for fields you don't want.

### Choices for the whole feed

| Setting | What it does |
| --- | --- |
| **Listed under** | The email of the account the listings go under. Importing the feed again under the same email updates its listings. |
| **Put every listing in** | One category for every listing, or **From the feed (the field below), else "General"**. |
| **Feed name** | Keeps this feed's listings apart from other feeds'. It starts as a name made from the feed's address or file name. Keep it the same to update the listings an earlier import of it made. |
| **Listings with a seller email in the feed** | **Put them under the account above too**, or **Put them under that seller's account**: an account is created for a new email. Admin and moderator accounts are never used. |

### Listing fields

| Field | What to pick |
| --- | --- |
| **Feed reference** | The listing's own ID in the feed. It's how a later import finds the listing to update. |
| **Title** | Required. Entries without one are skipped. |
| **Description**, **Price**, **Address**, **Phone**, **Website** | The matching feed fields. |
| **Category**, **Location** | Names. A category path such as `Apparel > Shoes > Sneakers` uses its last part. |
| **Photos** and **More photos** | Fields with photo addresses. Every value of the field is a photo, up to your **Photos per listing**. |
| **Seller email**, **Seller name** | Only used when you chose to put listings under their seller's account. |
| **Date published** | When the listing was published. Empty means today. |
| **Status** | A field that says whether the entry is live. Words such as *sold*, *inactive*, *expired*, *out of stock* or *false* take the listing down. |
| **Latitude**, **Longitude** | The map position, if the feed has one. |
| Your custom fields | One line per custom field. Numbers, drop-down options, checkboxes and dates are converted for you. |

## Import the feed again to update it

To update your listings from a newer version of the feed, import it again the same way, with the same address (or the
same file name), the same **Listed under** email and the same **Feed name**. The mapping step remembers your last
choices for a feed with the same fields, so it's usually one click.

On a repeat import:

- **Listings already imported are updated**: their text, price, fields and so on. Their web address and dates stay
  the same, and they keep their photos.
- **New entries** become new listings.
- **Entries marked sold or inactive** take their listing down. Inactive entries that aren't on your site yet are
  skipped.
- **Entries no longer in the feed** stay on your site as they are. The preview tells you how many: unpublish them in
  **Listings** if they're gone.

This only works with a **Feed reference**. Without one, importing the feed again adds every listing a second time.
The preview warns you: *No feed reference is chosen…*
{: .warning}

Feeds aren't re-imported automatically yet. To keep listings up to date, import the feed again whenever it changes.
{: .note}

## What to know about imported listings

Imported listings are handled as in a [CSV import](/how-to-import-ads/#what-to-know-about-imported-listings): they go
live straight away, nobody is emailed, and they aren't posted to your [social media](/auto-post-social-media/) channels.
Photos are downloaded from their addresses after the listings are in.

- **Plan limit.** New listings stop at the number your plan allows. Updates to listings already on your site still go
  through, and the preview says so.
- **Up to 20,000 listings per import.**
- **Undo.** **Undo this import** on **Tools › Move your site to Yclas** removes the listings the import created, for a
  week. Listings it only updated stay as they are. See
  [Cancel or undo an import](/how-to-migrate-osclass-to-yclas/#cancel-or-undo-an-import).

## When something goes wrong

| Message | What to check |
| --- | --- |
| *Enter the feed's address or choose its file.* | Fill in one of the two. |
| *The feed could not be fetched: …* | The address must be public, with nothing to sign in to. Open it in a private browser window to check. |
| *That file is bigger than the 25 MB limit.* | Split the feed, or give its address instead. |
| *A JSON feed can be up to 10 MB.* or *This JSON feed is too big to read here…* | Split it into smaller files, or use an XML version of the feed. |
| *This is not an XML or JSON feed.* | Check the address points at the feed itself, not a web page. |
| *Feeds with a DOCTYPE are not accepted.* | For security, XML with a DOCTYPE line is refused. Ask the feed's provider for a version without it. |
| *No listings were found in this feed.* | The feed is empty, or has no repeated entry. |

## Related guides

- [Import listings from a CSV file](/how-to-import-ads/) — the same import from a spreadsheet.
- [Listing feeds](/listing-feeds/) — send your listings out to Google Shopping, job boards and car ads.
- [Property pack](/property-pack/#import-from-a-property-feed) — property feeds, with automatic updates.
- [Custom fields](/how-to-create-custom-fields/) — create the fields you want to fill.
- [Move your site to Yclas](/how-to-migrate-osclass-to-yclas/) — import from other platforms.
{: .cards}
