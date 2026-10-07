---
title: Import listings from a CSV file
description: Load hundreds of listings at once from a spreadsheet, with their sellers, categories, locations, photos and custom fields.
section: tools
order: 20
permalink: /how-to-import-ads/
keywords: import, csv, bulk, upload, spreadsheet, excel, listings, ads, migrate, sample file, custom fields, images
updated: 2026-10-07
---

The listing import turns a spreadsheet into live listings. It is the quickest way to fill a new marketplace, move
listings over from another website, or add a supplier's catalogue in one go.

For every row, Yclas:

- finds the seller by email address, or creates a member account for them;
- finds the category and location by name, or creates them;
- downloads the photos from the web addresses you give;
- publishes the listing.

## Before you start

- **Set up your custom fields first.** If you want to import custom field values, the fields must already exist
  under **Listings › Custom Fields**.
- **Check the number of photos.** The file needs one photo column for every photo a listing can have, set in
  **Listings › Settings › Form fields › Number of Images**.
- **Think about social media.** If you have [auto-posting](/auto-post-social-media/) switched on, every imported
  listing is posted to your social accounts too. Switch it off before a big import.
- **Check your plan.** Imports stop when you reach the number of listings your plan allows.

## Build the file

Save your spreadsheet as **CSV** (comma-separated values), encoded as UTF-8. The first row holds the column names,
in lower case and exactly in this order:

```
user_name,user_email,title,description,date,category,location,price,address,phone,website,image_1,image_2,image_3,image_4
```

That example is for a site that allows four photos per listing. Add or remove `image_` columns so they match your
**Number of Images** setting.

| Column | What to put in it |
| --- | --- |
| `user_name` | The seller's name. Required. |
| `user_email` | The seller's email. If no member has it, an account is created. Required. |
| `title` | The listing title. Required. |
| `description` | The listing text. Required. Basic HTML is converted to the site's formatting. |
| `date` | The publish date, as `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS`. |
| `category` | The category name, exactly as on your site. A new name creates a new top-level category. Required. |
| `location` | The location name. A new name creates a new top-level location. Required. |
| `price` | A number, without a currency symbol. Use `0` for no price. Required. |
| `address`, `phone`, `website` | Optional. |
| `image_1`, `image_2`… | The full web address of each photo (starting with `https://`). Leave empty if there is none. |

Two more columns are needed only in some cases. They go after `website` and before the photos:

- `locale` (for example `en_US`) if your site is [multilingual](/how-to-activate-multilingual-mode/);
- `stock` (a whole number) if **Stock Control** is on under **Settings › Payments**.

### Custom fields

To fill in custom fields, add one column per custom field after the photo columns. Name each column `cf_` followed by
the field's name, for example `cf_currency` or `cf_bedrooms`. Include every custom field your site has, even the
ones you leave empty. Use `1` or `0` for checkboxes, `YYYY-MM-DD` for dates, and the option text exactly as it is
set up for drop-down fields.

If your file doesn't match, the upload is refused with a message that lists the exact column names your site
expects. Uploading a file once is a quick way to get that list.
{: .tip}

## Import the file

1. In the admin panel, go to **Tools**.
2. In the **Import listings** card, choose your CSV file and click **Upload**. The card now says how many listings
   are waiting to be imported.
3. Click **Process**. Yclas imports the listings a few at a time and shows the progress. Keep the page open until it
   finishes.
4. Check the result in **Listings › All listings**.
{: .steps}

You can also reach the importer from **Listings › All listings › Import**.

## What to know about imported listings

- **They go live straight away.** Imported listings skip [moderation](/how-ads-moderation-works/) and payment.
- **Nobody is emailed.** Sellers don't get a "listing published" email, and new member accounts don't get a welcome
  email. New accounts get a random password: the sellers can set their own with **Forgot password** on the login page.
- **The publish date sets the expiry.** If [listings expire](/ad-expiration/) after, say, 30 days, a listing dated
  two months ago is expired the moment it is imported and won't show on the site. Use recent dates, or set **Listing Expiration Date** to 0 under **Listings › Settings › Posting** while you
  import.
- **Photos must be online.** Each photo is downloaded from its address. Photos behind a login, or on a site that
  blocks downloads, are skipped and the listing is imported without them.
- **Names must match.** "Car" and "Cars" are different categories, and so are "New York" and "New York City". Check
  the category and location names against your site before you import, or you'll end up with duplicates. A new name
  is always created at the top level, so create subcategories first if you want listings filed under them.

<div class="warning" markdown="1">
**One file at a time.** Uploading a new file replaces any rows still waiting in the queue. Process each file before
you upload the next one.
</div>

## When the upload is refused

| Message | What to check |
| --- | --- |
| *Make sure your CSV file has these headers: …* | The first row must match that list exactly: same names, same order, lower case, nothing extra. Spreadsheet apps sometimes add an invisible marker to the start of a "CSV UTF-8" file; if the names look right but the upload still fails, save the file again as plain "CSV" or export it from Google Sheets. |
| *1 MB file* | The file is bigger than 1 MB. Split it into several files. |
| *limited to 10.000 at a time* | The file has more than 10,000 rows. Split it. |
| *You have reached the limit of … ads that your Yclas Plan allows* | Your plan's listing limit. See [Plans and billing](/plans-and-billing/). |

A row with an empty required column (name, email, title, description, category, location or price) stops the
upload, so fill those in on every row.

## Related guides

- [Import categories and locations](/use-import-tool-categories-locations/) — build the tree before you import listings.
- [Import users](/how-to-import-users/) — bring in members without listings.
- [Move to Yclas from another platform](/how-to-migrate-osclass-to-yclas/) — plan a full move.
- [Custom fields](/how-to-create-custom-fields/) — create the fields you want to fill.
{: .cards}
