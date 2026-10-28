---
title: Move your site to Yclas
description: Move listings, members and photos from Osclass, Flynax, LaraClassifier, WordPress plugins, another Yclas site or a CSV, with a preview and undo.
section: tools
order: 70
permalink: /how-to-migrate-osclass-to-yclas/
redirect_from:
  - /how-to-migrate-noahs-to-yclas/
keywords: migrate, migration, move, move my site, switch, switch platform, osclass, flynax, laraclassifier, laraclassifieds, wordpress, directorist, hivepress, classified listing, adforest, open classifieds, noahs, import, importer, database export, sql, sql.gz, phpmyadmin, csv, transfer, undo import, google places, property feed, paste text
updated: 2026-10-22
plans: Available on all plans
---

**Move your site to Yclas** brings an existing marketplace over in one guided flow: you upload an export from your
old platform, check what Yclas found, look at a preview, and then run the import. Listings, their sellers and their
photos come across, and if the result isn't what you wanted, you can undo the whole import.

It is on every plan, and only administrators can use it.

## Where you can move from

| Source | What you upload |
| --- | --- |
| **CSV file (listings or users)** | A spreadsheet saved as CSV, from any software. See [Import listings from a CSV file](/how-to-import-ads/) and [Import users from a CSV file](/how-to-import-users/). |
| **Another Yclas or Open Classifieds site** | A database export of the old site (a self-hosted install; self-hosted Yclas is no longer offered, so this is the way to bring one over). |
| **Osclass** | A database export. |
| **Flynax** | A database export. |
| **LaraClassifier** | A database export. |
| **WordPress: Directorist**, **HivePress**, **Classified Listing** or **AdForest** | A database export of the WordPress site. |

A **database export** is a `.sql` file (or a compressed `.sql.gz`) with your old site's tables. Most hosts let you
make one in phpMyAdmin (**Export**, format **SQL**) or from their control panel's backup page. Export the whole
database with its table structure; the default settings of phpMyAdmin work. The upload can be up to 25 MB, and a
compressed file up to 150 MB once uncompressed.

Anything else, such as Noah's Classifieds, a custom-built site or a big spreadsheet: export your listings to CSV and
use the CSV source.
{: .tip}

The same page has three more ways to add listings:

- **Add listings from text**: paste posts from a Facebook group, a WhatsApp chat or an old page, and AI splits them
  into listings. See [Add listings from text](/how-to-import-ads/#no-spreadsheet-add-listings-from-text).
- **Add businesses from open data**: fill a business directory with real local businesses from Overture Maps open
  data, included in your plan. See [Add businesses from open data](/import-businesses-open-data/).
- **Add businesses from Google**: fill a business directory with real local businesses from a Google Places search.
  See [Import businesses from Google](/import-businesses-from-google/).
- **Import from a property feed**: an estate agent's Kyero v3 or XML feed, with the property pack on. See
  [Import from a property feed](/property-pack/#import-from-a-property-feed).

## Before you start

- **Create your custom fields first** if you want listing details such as mileage or number of bedrooms to come
  across (CSV imports can fill them). See [Custom fields](/how-to-create-custom-fields/).
- **Check the number of photos per listing**: **Photos per listing** under **Listings › Settings › Form fields**.
  Photos beyond that number are left out.
- **Check your plan's listing limit.** The import stops when your site reaches the number of listings your plan
  allows. See [Plans and billing](/plans-and-billing/).
- **Keep the old site online** if you can. Photos are downloaded from it during the import.

If you are signing up now, choose **I already have a site** in the sign-up questions: Yclas skips the starter
categories and example content and opens **Move your site to Yclas** as soon as your site is ready. See
[Create your marketplace](/how-to-get-a-free-classifieds-site/).

## Run the import

1. In the admin panel, go to **Tools** and click **Start** in the **Move your site to Yclas** card.
2. Under **Where are you moving from?**, choose your old platform. Under **File**, choose your export (up to 25 MB),
   then click **Upload and continue**.
3. On **Map columns and fields**, check what Yclas found in the file and correct anything that looks wrong (see
   below). Then click **Continue: preview**.
4. On **Review before importing**, check the numbers, the first 10 listings and the rows that will be skipped.
   Nothing has been imported yet. If something is off, click **Back: fix the mapping**.
5. Click **Import … listings and … users**. Keep the page open while the progress bar fills.
{: .steps}

When it finishes you are taken back to **Move your site to Yclas**, which shows how many listings, users and photos
were imported, any notes, and the rows or photos that had a problem.

The import only moves forward while that page is open. If you close it or lose your connection, nothing is lost: go
back to **Tools › Move your site to Yclas** and click **Continue: importing…** to carry on where it stopped. An
import left unfinished for a week is stopped.
{: .note}

## The mapping step

| Setting | What it does |
| --- | --- |
| **This file has** (CSV only) | **Listings** or **Users**. Yclas guesses it from the column names. |
| Column choices (CSV only) | Which column of your file fills each field: title, price, category, seller email, photos and so on. Pick **— not used —** to leave a field out. |
| **… table** (database exports) | The tables Yclas found for listings, users, categories, locations and photos, with a guess already chosen. Change one only if the guess is wrong, for example on a customised install. |
| **Listing post type** and **Category taxonomy** (WordPress) | Where the plugin keeps its listings and categories. The guesses are right for a standard install. |
| **Listings that were not live (drafts, expired, waiting for approval)** | **Skip them** (the default), or **Import them as unpublished** so they come across hidden and you can publish them later. Listings marked as spam or deleted on the old site are never imported. |
| **Old site address for photos** (database exports) | The address of the old site, such as `https://old-site.com/`. A database export only holds the photos' file names, so Yclas downloads each photo from this address. |
| **Photos (optional)** (database exports) | If the old site is no longer online, upload a ZIP of its photos folder here (up to 100 MB) and Yclas matches the photos by file name. |

## What comes across

- **Listings** with their title, description, price, category, location, address, phone, website, language and the
  date they were published. Live listings are published straight away.
- **Sellers and members.** Each listing is attached to its seller by email address. A seller who isn't a member yet
  gets an account; an existing member with that email simply gets the listing. Database exports also bring over the
  members who have no listings.
- **Categories and locations** by name. A listing goes into the category or location with the same name on your
  site, wherever it is in the tree; a name your site doesn't have yet is created at the top level. Listings without
  a category go into a category called **General**, which is created if you don't have one.
- **Photos**, downloaded one by one after the listings. Each photo can be up to 10 MB, in JPG, PNG, GIF or WebP.

What doesn't come across:

- **Passwords.** Yclas never copies passwords from another platform. Imported members get a random password and set
  their own with **Forgot password** on the login page.
- **Pages, blog posts and settings.** Copy pages into **Pages** and posts into the [Blog](/how-to-create-a-blog/)
  by hand, and set up your categories' icons and descriptions on your site.
- Custom field values from database exports. To fill custom fields, use a CSV file.

## What to know about imported listings

- **Nothing is sent.** Imported sellers and members get no emails, imported listings aren't posted to your
  [social media](/auto-post-social-media/) channels, and they don't trigger listing alerts.
- **They start a full listing period.** A listing that was live on the old site keeps its original date, unless your
  [expiry setting](/ad-expiration/) would already have expired it: then it is dated today, so it doesn't vanish the
  moment it arrives.
- **Imported members count as subscribed** to your site's emails, so they receive [newsletters](/how-to-send-the-newsletter/)
  you send to all users. They don't get the email digest.
- **Up to 20,000 listings and 20,000 users per import.** For more, import in several files.
- **One import at a time.** While an import is in progress, finish, cancel or undo it before you upload the next file.

<div class="warning" markdown="1">
**Photos that can't be reached are skipped.** A photo behind a login, on a site that blocks downloads or no longer
online is left out, and its listing is imported without it. If one web address fails several times in a row, Yclas
stops trying that site for the rest of the import. The list of photos that had a problem is on **Move your site to
Yclas** when the import ends.
</div>

## Cancel or undo an import

- **Before it starts:** while you are on the mapping or review step, go back to **Move your site to Yclas** and
  click **Cancel it**. The uploaded file is deleted.
- **While it runs:** click **Stop and undo**.
- **After it finished:** click **Undo this import**, then **Undo the import** to confirm. You can undo only the
  latest import, for a week after it finished.

Undoing deletes the listings and the new members the import created, with their photos. Members and listings that
were already on your site are never touched, and imported members who have used their account since (signed in,
posted a listing, sent a message, left a review or bought something) keep it; only their imported listings go.
Categories and locations the import created stay: delete any you don't want under **Listings**.

Undoing can't be reversed. To try again, fix your file and run a new import.
{: .important}

Your uploaded files are kept only while an import is in progress, in a private folder, and are deleted when it ends.

## Tips for a smooth move

- **Do a test run.** Import a small file first, check the listings on your site, then undo it and import everything.
- **Use maintenance mode** while you import, so visitors don't see a half-filled site:
  [Maintenance mode](/how-to-activate-maintenance-mode/).
- **Switch the domain over last.** When everything looks right, [connect your domain](/custom-domain/) to Yclas.
- **Tell your members.** Send a [newsletter](/how-to-send-the-newsletter/) explaining the move and how to set a new
  password.
- **Search engines need time.** Old listing addresses change. Submit your new [sitemap](/sitemap-classifieds-website/)
  in Google Search Console to speed things up.

Stuck on a large or unusual site? [Open a support ticket](/use-yclas-support-system/) with the platform you're coming
from, roughly how many listings and members you have, and the message the importer showed.
{: .tip}

## Related guides

- [Import listings from a CSV file](/how-to-import-ads/) — the CSV columns in detail.
- [Add businesses from open data](/import-businesses-open-data/) — fill a new directory from open map data, included in your plan.
- [Import businesses from Google](/import-businesses-from-google/) — fill a new directory from a Google Places search.
- [Import users from a CSV file](/how-to-import-users/) — members without listings.
- [Import categories and locations](/use-import-tool-categories-locations/) — build your category tree first.
- [Back up, export or close your site](/export-site/) — the opposite direction: **Export everything**.
- [Launch checklist](/launch-checklist/) — what to check before you announce the new site.
{: .cards}
