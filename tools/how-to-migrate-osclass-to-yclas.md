---
title: Move to Yclas from another platform
description: Bring your categories, members and listings over from Osclass, Noah's Classifieds, WordPress plugins or any other classifieds software.
section: tools
order: 70
permalink: /how-to-migrate-osclass-to-yclas/
redirect_from:
  - /how-to-migrate-noahs-to-yclas/
keywords: migrate, migration, move, switch, osclass, noahs, wordpress, import, export, csv, transfer
updated: 2026-10-07
---

Moving a marketplace to Yclas comes down to getting your data out of the old software as spreadsheets, and loading
those spreadsheets with the Yclas import tools. It works the same way whatever you used before: Osclass, Noah's
Classifieds, a WordPress classifieds plugin, a custom-built site or even a big spreadsheet.

The old one-click migration tools for Osclass and Noah's Classifieds no longer exist. The CSV import below replaces
them and handles any source.
{: .note}

## What you can bring over

| Data | How |
| --- | --- |
| Categories and locations | [Import categories and locations](/use-import-tool-categories-locations/), or let the listing import create them. |
| Members | [Import users](/how-to-import-users/). |
| Listings, with photos and custom fields | [Import listings](/how-to-import-ads/). |
| Pages (About, Terms…) | Copy and paste them into **Pages**. See [Pages](/how_to_add_pages/). |
| Blog posts | Copy them into the [Blog](/how-to-create-a-blog/). |

Members' passwords usually can't be moved, because good software stores them scrambled in a way only it can read.
Plan to ask members to choose a new password with **Forgot password**.

## Step by step

1. **Set up the structure.** Create your marketplace, choose a theme, and create your
   [custom fields](/how-to-create-custom-fields/). Import or create the category and location tree you want to keep.
2. **Export from the old site.** Most platforms have an export to CSV, or a plugin that adds one. If yours doesn't,
   whoever hosts it can export the database tables for listings and users to CSV.
3. **Reshape the spreadsheets.** Rename and reorder the columns to match what Yclas expects (the import articles list
   them). Put the full web address of each photo in the `image_` columns: the photos must still be online on your
   old site while you import.
4. **Do a test run.** Import five or ten listings first and check them on the site: categories, prices, photos,
   custom fields. Delete them and fix your file if something is off.
5. **Import members, then listings.** Import users first if you want them to have their profile details; then import
   the listings, which attach to the members by email.
6. **Switch the domain over.** When everything looks right, [connect your domain](/custom-domain/) to Yclas.
7. **Tell your members.** Send a [newsletter](/how-to-send-the-newsletter/) explaining the move and how to set a
   new password.
{: .steps}

## Tips for a smooth move

- **Keep the old site running until the import is done.** Photos are downloaded from it during the import.
- **Watch the publish dates.** If listings on your new site [expire](/ad-expiration/) after a number of days,
  old listings may be expired as soon as they arrive. Either import only recent listings or set the expiry to zero
  for the import.
- **Switch off auto-posting** to social media before importing, or every old listing is posted again.
- **Use maintenance mode** while you import, so visitors don't see a half-filled site:
  [Maintenance mode](/how-to-activate-maintenance-mode/).
- **Search engines need time.** Old listing addresses will change. Submit your new [sitemap](/sitemap-classifieds-website/)
  in Google Search Console to speed things up.

Stuck on a large or unusual site? [Open a support ticket](/use-yclas-support-system/) with the platform you're coming
from, roughly how many listings and members you have, and a few rows of your spreadsheet.
{: .tip}

## Related guides

- [Import listings from CSV](/how-to-import-ads/) — the column format in detail.
- [Import users](/how-to-import-users/) — members without listings.
- [Launch checklist](/launch-checklist/) — what to check before you announce the new site.
{: .cards}
