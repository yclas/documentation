---
title: Import listings from a CSV file
description: Load thousands of listings at once from a spreadsheet, with their sellers, categories, locations, photos and custom fields, after checking a preview, or turn pasted Facebook group or WhatsApp posts into listings.
section: tools
order: 20
permalink: /how-to-import-ads/
keywords: import, import listings, import ads, csv, bulk, bulk upload, upload, spreadsheet, excel, google sheets, listings, ads, migrate, custom fields, images, photos, columns, paste, pasted text, facebook group, whatsapp, ai import, text to listings, facebook group posts, turn posts into listings
updated: 2026-10-27
---

A CSV import turns a spreadsheet into live listings. It is the quickest way to fill a new marketplace, move listings
over from software that isn't listed in [Move your site to Yclas](/how-to-migrate-osclass-to-yclas/), or add a
supplier's catalogue in one go.

For every row, Yclas:

- finds the seller by email address, or creates a member account for them;
- finds the category and location by name, or creates them;
- publishes the listing;
- downloads its photos from the web addresses you give.

CSV imports run in **Move your site to Yclas**, under **Tools**. You check a preview before anything is written, and
you can undo the import afterwards.

## Before you start

- **Set up your custom fields first.** To import custom field values, the fields must already exist under
  **Listings › Custom Fields**.
- **Check the number of photos.** The import takes as many photo columns as **Photos per listing** allows, under
  **Listings › Settings › Form fields**.
- **Check your plan.** The import stops when you reach the number of listings your plan allows.

## Build the file

Save your spreadsheet as **CSV** (comma-separated values), encoded as UTF-8, with the column names in the first row.
The names and the order of the columns are up to you: on the next step you tell Yclas which column is which. Use
these names and Yclas matches them for you:

```
title,description,price,category,location,address,phone,website,user_email,user_name,date,image_1,image_2,image_3
```

| Field | What to put in it |
| --- | --- |
| **Title** | The listing title. Rows without one are skipped. |
| **Seller email** | The seller's email. If no member has it, an account is created. Rows without a valid email are skipped. |
| **Seller name** | The seller's name, for new accounts. Without it, the part of the email before the @ is used. |
| **Description** | The listing text. Basic HTML is converted to the site's formatting. |
| **Price** | A number. Currency symbols and thousands separators are removed: `1.500,00`, `$ 20` and `1500` all work. Empty means no price. |
| **Category** | The category name, exactly as on your site. A new name creates a new top-level category; empty puts the listing in **General**. |
| **Location** | The location name. A new name creates a new top-level location. Optional. |
| **Address**, **Phone**, **Website** | Optional. |
| **Language** | A language code such as `en_US`, if your site is [multilingual](/how-to-activate-multilingual-mode/). Rows without one, or with a language your site doesn't offer (such as `English` or `en`), get your site's main language. |
| **Date published** | When the listing was published, for example `2026-10-01` or `2026-10-01 14:30:00`. Empty means today. |
| **Photo 1 (URL)**, **Photo 2 (URL)**… | The full web address of each photo, starting with `https://`. Leave empty if there is none. |

Columns that match none of these are ignored. Stock levels can't be imported: set them on the listings afterwards.
{: .note}

### Custom fields

Add one column per custom field you want to fill. Name it `cf_` followed by the field's name, for example
`cf_bedrooms`, and Yclas matches it; any other name you can pick on the next step. You don't need a column for every
field. Use `1` or `0` for checkboxes, `YYYY-MM-DD` for dates, and the option text exactly as it is set up for
drop-down fields.

## Import the file

1. In the admin panel, go to **Tools** and click **Start** in the **Move your site to Yclas** card. (**Import** on
   **Listings › All listings** opens the same page.)
2. Under **Where are you moving from?**, choose **CSV file (listings or users)**. Choose your file (up to 25 MB) and
   click **Upload and continue**.
3. On **Map columns and fields**, check that **This file has** says **Listings**, and that each field shows the right
   column. Pick **— not used —** for any field your file doesn't have. Fields marked **Required** (the title and
   the seller email) need a column. Click **Continue: preview**.
4. On **Review before importing**, check the number of listings, the first 10 listings and the rows that will be
   skipped. Nothing has been imported yet. If every row would be skipped, fix the mapping or the file and click
   **Start over**.
5. Click **Import … listings and … users** (**Import listings** when no new members are created) and keep the page
   open until it finishes.
6. Check the result in **Listings › All listings**.
{: .steps}

If you leave the page, go back to **Tools › Move your site to Yclas** and click **Continue: importing…**.

## What to know about imported listings

- **They go live straight away.** Imported listings skip [moderation](/how-ads-moderation-works/) and payment.
- **Nobody is emailed.** Sellers don't get a "listing published" email and new members don't get a welcome email.
  Listings aren't posted to your [social media](/auto-post-social-media/) channels and don't trigger listing alerts.
- **New members get a random password.** They set their own with **Forgot password** on the login page.
- **Old dates don't expire listings.** A listing keeps its date unless your [expiry setting](/ad-expiration/) would
  already have expired it; then it is dated today and gets a full listing period.
- **Photos must be online.** Each photo is downloaded from its address after the listings are in. Photos behind a
  login, on a site that blocks downloads, bigger than 10 MB or not in JPG, PNG, GIF or WebP are skipped, and the
  listing is imported without them.
- **Names must match.** "Car" and "Cars" are different categories, and so are "New York" and "New York City". A name
  is matched wherever it is in your category or location tree, and a new name is created at the top level, so create
  subcategories first if you want listings filed under them.
- **Up to 20,000 listings per file.** Split bigger files.

## No spreadsheet? Add listings from text

A new site's first listings often already exist somewhere else: posts in your Facebook group or WhatsApp chat, a list
of things for sale, or a page of your old site. Instead of typing them in one by one, paste the text and let AI split
it into separate listings.

1. Create your [categories](/how-to-add-categories/) first: the AI files each listing in one of them.
2. Go to **Tools** and click **Start** in the **Move your site to Yclas** card.
3. In the **Add listings from text** card, paste the text (up to 12,000 characters).
4. Tick the box to confirm the listings are your own, or that the people who posted them agreed to have them on your
   site, and click **Make listings and continue**.
5. On **Map columns and fields**, choose the **Category**: **The category the AI chose for each**, or one category for
   all of them. In **Listed under**, keep your own email or enter the email of an existing account on your site.
   Click **Continue: preview**.
6. On **Review before importing**, check the listings, then import them as for a CSV file.
{: .steps}

What to know:

- **Up to 20 listings per paste.** Paste the rest in another go, up to 10 times a day.
- **Contact details are left out.** The AI copies no phone numbers, emails, addresses, names or links, so other
  people's details from a group don't end up on your site. It never guesses a price, and writes in your site's
  language.
- **No photos or locations.** Add them to the listings afterwards if you need them.
- **Titles already on your site are skipped**, so pasting the same posts twice doesn't duplicate them.
- **It uses your AI allowance.** Each listing written counts as one [listing from a photo](/listing-from-a-photo/#monthly-allowance)
  for the month.
- The listings are published like any other import, and you can [undo it](#undo-an-import).

## Undo an import

On **Tools › Move your site to Yclas**, **Undo this import** deletes the listings the import created and the members
it created for them, with their photos. You can undo the latest import for a week after it finished. Members who have
used their account since keep it. See [Cancel or undo an import](/how-to-migrate-osclass-to-yclas/#cancel-or-undo-an-import).

## When something goes wrong

| Message | What to check |
| --- | --- |
| *Could not read this file as CSV.* | Save the file again as CSV, comma-separated, UTF-8. |
| *That file is bigger than the 25 MB limit.* | Split it into several files. |
| *Row …: no title, skipped.* | That row's title column is empty, or the wrong column is mapped to **Title**. |
| *Row … (…): no valid seller email, skipped.* | That row's seller email is empty or not a valid address. |
| *Your plan allows … listings: the import stopped there…* | Your plan's listing limit. See [Plans and billing](/plans-and-billing/). Upgrade, then import the rest. |
| *Photo …: …* | That photo couldn't be downloaded. The message says why. |

## Related guides

- [Move your site to Yclas](/how-to-migrate-osclass-to-yclas/) — import from Osclass, WordPress and other platforms.
- [Import categories and locations](/use-import-tool-categories-locations/) — build the tree before you import listings.
- [Import users from a CSV file](/how-to-import-users/) — bring in members without listings.
- [Custom fields](/how-to-create-custom-fields/) — create the fields you want to fill.
- [Business sellers](/business-sellers/) — dealers import their own listings from a CSV file or a stock feed.
- [Add businesses from open data](/import-businesses-open-data/) — fill a new directory from open map data, included in your plan.
- [Import businesses from Google](/import-businesses-from-google/) — fill a new directory from a Google Places search.
- [Property pack](/property-pack/#import-from-a-property-feed) — import an estate agent's Kyero or XML property feed.
{: .cards}
