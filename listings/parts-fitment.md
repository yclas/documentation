---
title: "Parts fitment: which vehicles a part fits"
nav_title: Parts fitment
description: Let sellers say which makes, models and years a part fits, show "Fits" on the listing, and let buyers find the parts that fit their vehicle from the vehicle search and the make and model pages.
section: listings
order: 1123
permalink: /parts-fitment/
keywords: parts fitment, fitment, car parts, auto parts, spare parts, used parts, parts that fit, fits my car, compatible vehicles, compatibility, make model year, ymm, parts search, find parts, parts marketplace, breakers, salvage parts, motorcycle parts
updated: 2026-11-17
plans: Available on all plans
---

<div class="summary" markdown="1">
- Sellers add one or more rows of make, model and years to a part's listing.
- The listing shows **Fits** with those vehicles (Nova).
- Buyers find parts for their vehicle with **Parts that fit your vehicle** in the vehicle search section, and from **Parts for …** on make and model pages.
- Off until you switch it on. Turning it off keeps what sellers entered.
</div>

On a site that sells parts as well as vehicles, or only parts, buyers want to know one thing first: does it fit my
car? Parts fitment lets sellers answer it on the listing, and buyers search by their own vehicle.

## Switch it on

Only administrators can switch it on, from the [launch checklist](/run-a-vehicle-marketplace/#the-launch-checklist):

1. Open the launch checklist and find **Parts fitment**.
2. Click **Turn on**, or click **Settings** to open the **Parts fitment** page, switch it on and click **Save**.
{: .steps}

The launch checklist is on sites with the [vehicles pack](/vehicles-pack/) on. You can also open the **Parts
fitment** page directly by adding `/oc-panel/fitment` to your site's address. The vehicle search section and the make
and model pages need the vehicles pack.
{: .note}

Turning it on adds a custom field called *fitment* that stores which vehicles each part fits. Then:

1. Go to **Listings › Custom Fields** and edit the *fitment* field.
2. Limit it to your parts categories, so it only shows when a seller posts a part.
{: .steps}

Turning it off hides fitment everywhere: the posting form, the listing and the searches. What sellers entered is
kept, and comes back if you turn it on again.

## What sellers do

On the posting and edit form, sellers get **Fits these vehicles**. For each vehicle the part fits, they add a row:

- **Make**, with suggestions from your site's makes or the built-in catalogue;
- **Model (empty: all models)**, with suggestions for the make;
- **Year from** and **Year to**, which they can leave empty for every year.

**Add a vehicle** adds another row, **Remove** takes one away. A listing can have up to 20 rows. A year range is
searched for its first 60 years only.

## What buyers see

- **On the listing (Nova):** **Fits** with the list of vehicles. Each one links to the other parts that fit it.
- **In the vehicle search section (Nova):** under the vehicle search, **Parts that fit your vehicle** with make,
  model and year boxes and **Find parts**. The model and year are optional.
- **On make and model pages:** a **Parts** group with **Parts for Toyota Corolla** (for example) and how many parts
  fit, when at least one does.

A search also finds parts listed for *all models* of the make, or for *all years*. A buyer searching for a 2012
Toyota Corolla sees parts listed for "Toyota Corolla 2010-2014", "Toyota Corolla, every year" and "Toyota, every
model".

## Related guides

- [Vehicles pack](/vehicles-pack/) — make and model landing pages and the vehicle search.
- [Run a vehicle marketplace](/run-a-vehicle-marketplace/) — the launch checklist.
- [Custom fields](/how-to-create-custom-fields/) — limit a field to some categories.
{: .cards}
