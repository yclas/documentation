---
title: Custom fields
description: Add your own fields to the posting form — mileage, number of rooms, size, salary — show them on listings, use them as search filters, and limit them to certain categories.
section: listings
order: 110
permalink: /how-to-create-custom-fields/
redirect_from:
  - /how-to-integrate-your-custom-fields-into-selected-categories/
  - /video-custom-field/
keywords: custom fields, extra fields, attributes, specifications, filter, searchable, required, select, checkbox, date, video, youtube, youtube embed, embed video, vimeo, categories, remove field, hide field, template, cars, real estate, jobs, dating, directory, property pack, jobs pack, order, conditional fields, conditional, show only when, depends on, dependent field, show field if, equipment, machinery, vehicles pack
updated: 2026-10-28
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
| **Directory** | Opening hours, services and price list, website, social links and more, for business listings. See [Run a business directory](/directory-mode/). |
| **Property pack** | Type, for sale or rent, bedrooms, bathrooms, size, plot size, year built, energy rating, floor, features, agency name. It also switches on the pack's extra property features: see [Run a property marketplace with the property pack](/property-pack/). |
| **Jobs pack** | Contract type, remote or on-site, salary from and to, salary period, company, company description. It also switches on the pack's extra job features, such as applying with a CV: see [Property and jobs packs](/property-and-jobs-packs/). |

For vehicles, the **Vehicles** box below the templates has **Add vehicle catalogue**: the standard vehicle fields
(body type, fuel, transmission, mileage, a **Trade-in accepted** tick box and more) plus make, model and year lists.
It also switches the [vehicles pack](/vehicles-pack/) on. See [Vehicle data](/vehicle-data/).

For machinery, the **Equipment and machinery** box lets you choose the **Kind of equipment**, tick **Also for hire**
and click **Add equipment fields**, which adds the fields and switches the [equipment pack](/equipment-pack/) on.

{% include figure.html src="panel/custom-fields.webp" alt="Listings › Custom fields, with the Start from a template cards for cars, real estate, jobs, dating, directories, property and equipment" caption="The templates, and the Vehicles and Equipment boxes below them." %}

The fields are added for every category. Edit each one afterwards to limit it to the right categories, rename it or
delete what you don't need. If a field with the same name already exists, it is skipped.

## Create a field

1. Go to **Listings › Custom Fields** and click **New field**.
2. Fill in the form (see the table below).
3. Click **Create field**.
{: .steps}

{% include figure.html src="panel/custom-field-new.webp" alt="The New custom field form, with Name, Type, Label, Tooltip, Categories and Required" caption="The New custom field form. Name and Type can’t be changed after you create the field." %}

| Setting | What it does |
| --- | --- |
| **Name** | The internal name, for example `mileage`. Lower-case letters, numbers and underscores, 3 to 60 characters (spaces become underscores, other characters are dropped). **It can't be changed later.** A few names switch on special behaviour: see [Special-purpose fields](/special-custom-fields/). |
| **Type** | What kind of answer the field takes (see below). **It can't be changed later.** |
| **Label** | What sellers and buyers see, for example *Mileage*. You can change it at any time. |
| **Tooltip** | An optional hint shown next to the field on the form. |
| **Values** | The choices, separated by commas, for **Select**, **Radio** and **Checkbox group**: `Petrol, Diesel, Electric`. |
| **Categories** | The categories that use this field. Leave empty for every category. See below. |
| **Show only when** | Hides the field until another field has a certain answer. See [Show a field only when another has a certain answer](#show-a-field-only-when-another-has-a-certain-answer). |
| **Required** | Sellers can't publish without filling it in. |
| **Searchable** | The field appears as a filter in search. |
| **Text searchable** | (When searchable) words typed in the search box also match this field, not only the filter. |
| **Admin only** | Only administrators can see and edit it. Useful for internal notes. |
| **Members only** | (While [memberships](/membership-plans/) are on) visitors without a membership plan see a *Members only* link to your plans instead of the value. The seller and your team always see it. See [Members-only content](/membership-plans/#members-only-content). |
| **Show in results** | Shows the value in lists of listings (cards and search results), not only on the listing page. |

## Field types

| Type | Sellers enter… | Shown as |
| --- | --- | --- |
| **Short text (256 characters)** | A short line of text. | Text |
| **Long text** | Several lines of text. | Text |
| **Long text with BBCode editor** | Formatted text (bold, lists, links). | Formatted text |
| **Number** | A whole number. | Number |
| **Decimal number** | A number with decimals. | Number |
| **Number range** | A number; buyers filter it with a from–to range. | Number |
| **Money** | An amount. | Price in your currency format |
| **Date** | A date from a date picker. | Date in your date format |
| **Select** | One choice from a drop-down list. | The choice |
| **Radio** | One choice from radio buttons. | The choice |
| **Checkbox** | Yes or no. | A tick or a cross |
| **Checkbox group** | Any number of choices from a list of tick boxes. | The ticked choices |
| **Email** | An email address (checked). | Text |
| **Country** | A country from a list of all countries. | The country |
| **URL** | A web address. | Link |
| **File (Dropbox)** | A file picked from Dropbox. Needs the Dropbox integration. | Download link |
| **File (Google Drive)** | A file picked from Google Drive. Needs the Google Picker integration. | Download link |
| **Video** | A video uploaded from the seller's device. Needs the [Cloudinary integration](/cloudinary/). | Video player |
| **JSON** | Used by the special `openinghours` field. See [Special-purpose fields](/special-custom-fields/). | Opening hours |

For Dropbox and Google Drive set-up, see [Upload photos from Google Drive and Dropbox](/cloud-photo-uploads/).

The type list also shows **YouTube**, but current themes don't show that field on the posting form. To add YouTube
videos to listings, use the description editor instead (see below).
{: .note}

## Add YouTube videos to listings

The best way to show a YouTube video on a listing is inside its description, where it plays on the page:

1. Go to **Listings › Settings** and, under **Posting**, switch on **BBCODE Editor on Description Field**. Click
   **Save changes**.
2. When sellers write a description, they click the YouTube button in the editor's toolbar, paste the video's link
   and click **Insert**.
{: .steps}

The video then plays inside the description on the listing page.

If a video shows an error or a blank box instead of playing, it was usually typed in by hand. Delete it and add it
again with the YouTube button: the button stores the video in the form your site needs. A video also won't play if
its owner has switched off embedding on YouTube, or made it private.
{: .tip}

Other ways to add video:

- A **URL** custom field shows a link to the video (YouTube, Vimeo or anywhere else), not a player.
- A **Video** custom field lets sellers upload a video file from their device. It needs the
  [Cloudinary integration](/cloudinary/).

## Limit a field to some categories

A field for *Mileage* has no place on a listing for a sofa. In **Categories**, select the categories that should use
the field; hold Ctrl (⌘ on a Mac) to pick several. *Picking a parent also covers its subcategories.* Leave the list
empty to use the field everywhere.

On the posting form, the fields change as soon as the seller chooses a category.

Subcategories you create **after** the field only get it if you add them. Open the new category and, in its
**Custom Fields** card, click **+ Add** next to the field. The same card shows which fields a category uses, and
**Remove** takes one away.
{: .warning}

## Show a field only when another has a certain answer

Some details only make sense after another answer. *Number of doors* matters for a car but not a motorbike;
*Monthly rent* only when a flat is *For rent*; *Warranty until* only when *Has warranty* is ticked. With
**Show only when**, a field stays hidden on the posting form until the seller gives that answer, so the form stays
short.

1. Create the controlling field first, for example a **Select** called *Vehicle type* with the values
   `Car, Motorbike, Van`, or a **Checkbox** called *Has warranty*.
2. Create or open the field that depends on it, for example *Number of doors*.
3. In **Show only when**, choose the controlling field. **Always show** is the default.
4. Under **Values that show it**, tick the answers that should show the field, for example *Car* and *Van*. For a
   checkbox, the choices are **Checked** and **Not checked**.
5. Click **Create field** or **Save changes**.
{: .steps}

On the posting form, and on the form where sellers edit a listing, the field now appears as soon as the seller picks
one of those answers, and disappears if they change it. A required field is only required while it is shown.

- **Show only when** works on top of [categories](#limit-a-field-to-some-categories): the field must belong to the
  listing's category and have the right answer.
- Only a **Select**, **Radio** or **Checkbox** field can control another one. The option only appears when your site
  has at least one of these.
- A field can depend on a field that itself depends on another, as long as they don't go round in a circle.
- If a seller fills in a field and then changes the answer that shows it, what they typed in the now hidden field
  isn't saved.

Hiding fields this way works on the **Nova** theme (and themes based on it). On other themes every field is always
shown and saved, and the field form tells you so.
{: .note}

## Change the order

Drag fields by their handle in **Listings › Custom Fields**. The new order is saved when you drop the field and is
used on the posting form, on the listing page and in the search filters.

## Edit or delete a field

Click a field to change its label, tooltip, values, categories and switches. On a multilingual site the edit page also
has **Translations** for the label, tooltip and values in each language.

- Adding a value to a **Select** is safe. Renaming a value doesn't update listings that already use the old one.
- For **Radio** fields, add new values at the end: listings remember the position of their choice, so reordering
  the values changes what existing listings show.
- Removing a value from a **Checkbox group** deletes what sellers ticked for that value.

**Delete field** removes the field and everything sellers entered in it from every listing. It can't be undone.
{: .warning}

## Related guides

- [Special-purpose fields](/special-custom-fields/) — names that switch on extra features.
- [Search and filters](/search-and-filters/) — how searchable fields work for buyers.
- [User custom fields](/users-custom-fields/) — extra fields on member profiles.
- [Listing page and form fields](/how-to-manage-advertisement-fields/) — the built-in fields.
{: .cards}
