---
title: Dealer stock import, stock feeds and Google store codes
nav_title: Dealer stock import
description: Let dealers upload up to 10,000 listings from a CSV file with a ready-made template and a check of every row, keep their stock in sync with a feed, and give each dealer their own Google vehicle ads store code.
section: users
order: 46
permalink: /dealer-stock-import/
keywords: dealer import, stock import, bulk import, csv import, csv template, import template, check rows, import errors, 10000 rows, big import, inventory upload, dealer inventory, stock feed, inventory feed, dms feed, feed sync, feed removed listings, nothing was removed, reference, sku, stock number, custom fields import, multilingual import, listing language, google vehicle ads, store code, dealers' own store codes, dealership name, merchant center, many dealers
updated: 2026-11-17
plans: Available on all plans, for sellers with an approved business account.
---

<div class="summary" markdown="1">
- Dealers (business sellers) upload their stock from a CSV file of up to 5 MB and 10,000 rows.
- **Download the CSV template** gives them a file whose columns match your site, and **Check every row first** shows what would be refused before anything is imported.
- A stock feed keeps their listings in sync, and only takes listings down when the feed looks complete.
- On the Google vehicle ads feed, each dealer can have their own store code.
</div>

Business sellers add listings in bulk from their **Business dashboard** (in the account menu at the top of the site).
This guide is about the import and the feed on a marketplace with many dealers. Switching business accounts on and
approving them is in [Business sellers](/business-sellers/).

If your seller plans include **Stock import (CSV)** or **Scheduled stock feed** as a perk, only sellers on such a plan
can use it. While no plan includes it, every business seller can.
{: .note}

## Import a CSV file

1. On the **Business dashboard**, the dealer clicks **Bulk import**.
2. Optional, the first time: they click **Download the CSV template** and **What each column takes**, and fill in
   the template.
3. They upload the CSV file (up to 5 MB and 10,000 rows, with the column headers in the first row) and click
   **Upload**.
4. Under **Match your columns**, they choose which listing field each column fills, and check the **Preview (first
   rows)**.
5. Optional: they click **Check every row first** (see below), fix the file and upload it again if needed.
6. They click **Import**.
{: .steps}

The import carries on in the background, so the dealer can leave the page. A big file is read 1,000 rows at a time
and can take a long time when every row has photos to fetch: up to a day or more for 10,000 rows. Rows past 10,000
are left out, and the result says so.

Include a **Reference / SKU** column (the dealer's own stock number). A later import with the same reference updates
that listing instead of creating a new one.
{: .tip}

### The CSV template

**Download the CSV template** gives a CSV file with one column for every field a dealer can import on your site,
named so that the matching step picks each column by itself. **What each column takes** is a second CSV file with one
row per column: what it is, whether it is required, and its allowed values (your categories, locations, the choices
of each select field, and formats such as dates).

Both are built from your own site, so they change when you add categories or fields.

### Your custom fields

Besides title, price, category, photos and the other built-in columns, a dealer can import your site's own custom
fields, including the [vehicle fields](/vehicle-fields/) (marked *(vehicle)* in the list). Fields only your team may
fill are left out.

| Field type | What a cell must hold |
| --- | --- |
| Select or radio | One of the field's choices; upper or lower case doesn't matter |
| Number, decimal | A number |
| Yes / no (checkbox) | *yes*, *no*, *1*, *0*, *true*, *false*, *x* and the like, also in Spanish, French, German and Portuguese |
| Date | A date, for example 2026-11-14 |
| Email, web address | An email address, or a web address starting with `https://` |

A blank cell is never an error: it leaves the field empty. A value that doesn't fit the field also leaves it empty,
and the row says why, for example *Fuel: "Gas" is not one of the choices (Petrol, Diesel, …), so it was left empty.*

### Check every row first

**Check every row first** reads the file with the columns as matched and lists, per row:

- **Refused**: rows that wouldn't import, for example with no title, an unknown category or location, or a bad
  price;
- **Imported, with a note**: rows that would import with something left empty, for example a value that isn't one of
  a field's choices, a required custom field left empty, or a bad photo address.

Nothing is imported, and no category or location is added while checking. Only the first problems are listed. A very
big file may be checked only partly in the time allowed (the page says so); the import itself reads every row.

### Listing language on multilingual sites

On a [multilingual site](/how-to-activate-multilingual-mode/), every listing needs a language. Imported and feed
listings get your site's main language.

## Stock feed

A feed keeps a dealer's listings in sync with their own stock software, with no uploads at all. The dealer sets it up
from **Stock feed** on the Business dashboard; see [Stock feed](/business-sellers/#stock-feed) for the steps. A feed
file can be up to 5 MB and 10,000 rows.

Each time the feed is read, new items become listings, changed items are updated, and listings for items the feed no
longer carries are unpublished, never deleted. To protect a dealer from a broken feed, **nothing is taken down** on a
run when:

- the feed had no rows;
- it has more than 10,000 rows (only the first 10,000 are read, so the rest are still for sale);
- no row, or fewer than half of the rows, had a reference (check the column matched to **Reference / SKU**);
- the run read fewer than half the rows of the last finished run (when that one had 10 or more). If the stock really
  went down, the next run takes down what is gone.

The feed's last run shows the reason. A listing that you or the dealer deleted is never created again by the feed.

## Import stock for a dealer

As the site's owner you can import a dealer's stock for them, from a CSV file or a feed, into an account you prepare
for them or one they already have. See [Prepare dealer pages](/run-a-vehicle-marketplace/#prepare-dealer-pages). Your
import page has the same **Download the CSV template**, **What each column takes** and **Check every row first** as
the dealer's own **Bulk import** page.

## Google vehicle ads for many dealers

The [Google vehicle ads](/listing-feeds/#google-vehicle-ads) feed normally says every vehicle is at one store, which
suits a site that is one dealer. A marketplace can give each dealer their own store code:

1. In your admin panel, go to **Add-ons**, open the **Other** tab and click **Listing feeds**.
2. On the **Google vehicle ads** card, fill in **Dealers' own store codes**: one line per dealer, their account email,
   a comma, then their store code. For example: `dealer@example.com, STORE-001`.
3. Choose **Sellers without a code**: **Use the store code above** or **Leave their vehicles out**.
4. Click **Save**.
{: .steps}

A dealer's vehicles then go out with their own store code and their dealership name. The codes must match the store
feed or the Google Business Profile locations you registered with Google. Each code can belong to one dealer only,
and the email must belong to an account on your site; a wrong line is refused with its line number. **Sellers without
a code** only applies once at least one dealer has a code. With no dealer codes, the feed is the same as before.

Check Merchant Center's diagnostics after the first fetch. Yclas doesn't send dealership addresses: Google takes them
from your store feed or Business Profile.
{: .note}

## Related guides

- [Business sellers](/business-sellers/) — business accounts, approval and the business dashboard.
- [Run a vehicle marketplace](/run-a-vehicle-marketplace/) — prepare dealer pages, the dealer directory and the launch checklist.
- [Listing feeds](/listing-feeds/) — Google vehicle ads, Meta's automotive catalog and other feeds.
- [Import listings](/how-to-import-ads/) — the admin's own CSV import.
{: .cards}
