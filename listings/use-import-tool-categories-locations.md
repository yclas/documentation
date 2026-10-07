---
title: Import categories and locations
description: Create a large category or location tree in one go by uploading a CSV spreadsheet.
section: listings
order: 100
permalink: /use-import-tool-categories-locations/
keywords: import, csv, spreadsheet, excel, google sheets, upload, bulk, categories, locations, sample, example, template, parent
updated: 2026-10-07
---

Typing a hundred categories or locations one by one takes an afternoon. With the import tool you prepare them in a
spreadsheet, save it as CSV and upload it in seconds. For locations, also look at importing
[a whole country](/how-to-add-locations/#import-a-whole-country), which needs no spreadsheet at all.

## Import categories

1. Prepare your file in the format below and save it as CSV.
2. Go to **Listings › Categories**.
3. In **Import from a spreadsheet**, click **Choose a CSV file** and pick your file.
4. Click **Upload**.
{: .steps}

### Categories file format

The first row must be exactly this header:

```
name,category_parent,price,order
Vehicles,,0,1
Cars,Vehicles,0,1
Motorbikes,Vehicles,0,2
Property,,0,2
Flats for rent,Property,5,1
```

| Column | What to put |
| --- | --- |
| `name` | The category name. |
| `category_parent` | The **name** of the parent category, exactly as written. Leave empty for a top-level category. |
| `price` | The [price to post](/how-to-add-categories/#charge-for-posting-in-a-category) in this category, or 0. Use a dot for decimals. |
| `order` | Its position among its sister categories (1, 2, 3…). |

## Import locations

1. Prepare your file in the format below and save it as CSV.
2. Go to **Listings › Locations** (stay at the top level).
3. In **Import**, under **Or a spreadsheet**, click **Choose a CSV file** and pick your file.
4. Click **Import**.
{: .steps}

### Locations file format

```
name,location_parent,latitude,longitude,order
Spain,,40.4168,-3.7038,1
Madrid,Spain,40.4168,-3.7038,1
Barcelona,Spain,41.3874,2.1686,2
```

| Column | What to put |
| --- | --- |
| `name` | The location name. |
| `location_parent` | The **name** of the parent location, or empty for the top level. |
| `latitude`, `longitude` | Coordinates in decimal degrees, or 0 if you don't have them. |
| `order` | Its position among its sister locations. |

The panel's **Download example** links give you a ready-made sample file for each.

## Rules the file must follow

- **The header row must match exactly**: lower case, in this order, no extra columns. Otherwise the import stops with
  *Something went wrong, please check format of the file!*
- **Commas** separate the columns. Put a name that contains a comma in double quotes: `"Bed, bath and table"`.
- **Parents come first.** A parent is looked up by its name when its row is read, so list parents above their
  children (or create them before you import). A parent name that isn't found puts the row at the top level.
- **Duplicates are skipped**: a row with the same name and parent as an existing category or location isn't added
  again, so you can safely re-upload a corrected file.
- **Size**: up to 1 MB and 10,000 rows per file. Split bigger lists into several files.
- Two places with the same name (a *Valencia* in Spain and in Venezuela) confuse the parent lookup. Give them
  distinct names, or add the deeper levels by hand.

<div class="tip" markdown="1">
Saving from Excel: use **CSV UTF-8 (Comma delimited)**. Excel adds an invisible marker at the start of UTF-8 files,
which can make the header not match; if the import complains about the format although the header looks right,
save the file from Google Sheets (**File › Download › Comma-separated values**) or LibreOffice instead.
</div>

## After importing

- Imported items always go to the top level of the tree (or under the parents named in the file), never inside the
  location you have open.
- If subcategories don't sit where you expect on your site, drag any category in the tree and drop it back: this
  refreshes the levels of the whole tree.
- Add icons, descriptions and SEO texts to the new items one by one from their edit pages.

If you click **Upload** and end up on a page called **Import tool for locations and categories** with nothing
imported, choose your file again on that page (under **import Categories** or **import Locations**) and click
**Upload** there.
{: .note}

## Related guides

- [Categories](/how-to-add-categories/) — organise and edit categories.
- [Locations](/how-to-add-locations/) — country and GeoNames imports.
- [Import listings from CSV](/how-to-import-ads/) — bring in listings too.
{: .cards}
