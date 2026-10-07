---
title: Custom fields
description: Add your own fields to the posting form — mileage, number of rooms, size, salary — show them on listings, use them as search filters, and limit them to certain categories.
section: listings
order: 110
permalink: /how-to-create-custom-fields/
redirect_from:
  - /how-to-integrate-your-custom-fields-into-selected-categories/
  - /video-custom-field/
keywords: custom fields, extra fields, attributes, specifications, filter, searchable, required, select, checkbox, date, video, categories, template, cars, real estate, jobs, dating, order
updated: 2026-10-07
---

Custom fields are the details that make your marketplace specific: *Make*, *Mileage* and *Fuel* for cars, *Bedrooms*
and *Furnished* for flats, *Salary* and *Contract type* for jobs. Sellers fill them in when they post, buyers see them
on the listing and can filter by them in search.

Manage them in **Listings › Custom Fields**. You can have up to 65.

## Start from a template

For the most common marketplaces there is a ready-made set of fields. In **Start from a template**, click one and
confirm:

| Template | Fields it adds |
| --- | --- |
| **Cars** | For sale by, ad type, year, make, model, other make, kilometres, body type, transmission, drivetrain, colour, fuel type, type. |
| **Real Estate** | Furnished, bedrooms, bathrooms, pets, agency/broker fee, square metres, price negotiable. |
| **Jobs** | Job type, experience in years, salary, salary type, extra information, company, company description. |
| **Friendship and Dating** | Age, body, height, status, occupation, hair, eye colour and more. |

The fields are added for every category. Edit each one afterwards to limit it to the right categories, rename it or
delete what you don't need. If a field with the same name already exists, it is skipped.

## Create a field

1. Go to **Listings › Custom Fields** and click **New field**.
2. Fill in the form (see the table below).
3. Click **Create field**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Name** | The internal name, for example `mileage`. Lower-case letters, numbers and underscores, 3 to 60 characters (spaces become underscores, other characters are dropped). **It can't be changed later.** A few names switch on special behaviour: see [Special-purpose fields](/special-custom-fields/). |
| **Type** | What kind of answer the field takes (see below). **It can't be changed later.** |
| **Label** | What sellers and buyers see, for example *Mileage*. You can change it at any time. |
| **Tooltip** | An optional hint shown next to the field on the form. |
| **Values** | The choices, separated by commas, for **Select**, **Radio** and **Checkbox Group**: `Petrol, Diesel, Electric`. |
| **Categories** | The categories that use this field. Leave empty for every category. See below. |
| **Required** | Sellers can't publish without filling it in. |
| **Searchable** | The field appears as a filter in search. |
| **Text searchable** | (When searchable) words typed in the search box also match this field, not only the filter. |
| **Admin Privileged** | Only administrators can see and edit it. Useful for internal notes. |
| **Show Listing** | Shows the value in lists of listings (cards and search results), not only on the listing page. |

## Field types

| Type | Sellers enter… | Shown as |
| --- | --- | --- |
| **Text 256 Chars** | A short line of text. | Text |
| **Text Long** | Several lines of text. | Text |
| **Text Long with BBCode editor** | Formatted text (bold, lists, links). | Formatted text |
| **Number** | A whole number. | Number |
| **Number Decimal** | A number with decimals. | Number |
| **Numeric Range** | A number; buyers filter it with a from–to range. | Number |
| **Money** | An amount. | Price in your currency format |
| **Date** | A date from a date picker. | Date in your date format |
| **Select** | One choice from a drop-down list. | The choice |
| **Radio** | One choice from radio buttons. | The choice |
| **Checkbox** | Yes or no. | A tick or a cross |
| **Checkbox Group** | Any number of choices from a list of tick boxes. | The ticked choices |
| **Email** | An email address (checked). | Text |
| **Country** | A country from a list of all countries. | The country |
| **URL** | A web address. | Link |
| **File Dropbox** | A file picked from Dropbox. Needs the Dropbox integration. | Download link |
| **File Google Drive** | A file picked from Google Drive. Needs the Google Picker integration. | Download link |
| **Video** | A video uploaded from the seller's device. Needs the [Cloudinary integration](/cloudinary/). | Video player |
| **JSON** | Used by the special `openinghours` field. See [Special-purpose fields](/special-custom-fields/). | Opening hours |

For Dropbox and Google Drive set-up, see [Upload photos from Google Drive and Dropbox](/cloud-photo-uploads/).

The type list also shows **Youtube**, but current themes don't show that field on the posting form. To let sellers
add a YouTube video, use a **URL** field instead.
{: .note}

## Limit a field to some categories

A field for *Mileage* has no place on a listing for a sofa. In **Categories**, select the categories that should use
the field; hold Ctrl (⌘ on a Mac) to pick several. *Picking a parent also covers its subcategories.* Leave the list
empty to use the field everywhere.

On the posting form, the fields change as soon as the seller chooses a category.

Subcategories you create **after** the field only get it if you add them. Open the new category and, in its
**Custom Fields** card, click **+ Add** next to the field. The same card shows which fields a category uses, and
**Remove** takes one away.
{: .warning}

## Change the order

Drag fields by their handle in **Listings › Custom Fields**. The new order is saved when you drop the field and is
used on the posting form, on the listing page and in the search filters.

## Edit or delete a field

Click a field to change its label, tooltip, values, categories and switches. On a multilingual site the edit page also
has **Translations** for the label, tooltip and values in each language.

- Adding a value to a **Select** is safe. Renaming a value doesn't update listings that already use the old one.
- For **Radio** fields, add new values at the end: listings remember the position of their choice, so reordering
  the values changes what existing listings show.
- Removing a value from a **Checkbox Group** deletes what sellers ticked for that value.

**Delete field** removes the field and everything sellers entered in it from every listing. It can't be undone.
{: .warning}

## Related guides

- [Special-purpose fields](/special-custom-fields/) — names that switch on extra features.
- [Search and filters](/search-and-filters/) — how searchable fields work for buyers.
- [User custom fields](/users-custom-fields/) — extra fields on member profiles.
- [Listing page and form fields](/how-to-manage-advertisement-fields/) — the built-in fields.
{: .cards}
