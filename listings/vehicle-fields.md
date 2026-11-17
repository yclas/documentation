---
title: Your vehicle fields, vehicle types and extra field groups
nav_title: Vehicle fields
description: Check which of your fields the vehicles pack reads for the make, model, year and the rest, add fields for motorcycles, boats, RVs, trucks and powersports, and add regional and electric vehicle fields with one click.
section: listings
order: 1121
permalink: /vehicle-fields/
keywords: vehicle fields, switch on the vehicle pack, vehicle pack fields, field map, which field, make field, model field, brand field, two make fields, not a vehicle field, vehicle types, motorcycles, motorbikes, boats, yachts, rv, caravan, motorhome, campervan, trucks, commercial vehicles, lorries, powersports, atv, utv, snowmobile, jet ski, pwc, engine hours, length, hull, sleeps, axles, gross vehicle weight, title status, salvage, rebuilt, rego, roadworthy, rwc, written off, number of keys, gcc specs, regional specs, export, steering side, left-hand drive, right-hand drive, warranty, seats, cylinders, drivetrain, electric vehicles, ev, range, battery, battery health, charging, plug-in hybrid
updated: 2026-11-17
plans: Available on all plans
---

<div class="summary" markdown="1">
- **Switch on the vehicle pack** shows which of your fields holds each vehicle detail, lets you correct it and previews what your listings get. Nothing is renamed or deleted.
- **Vehicle types** add the fields motorcycles, boats, RVs, trucks and powersports need.
- **More vehicle fields** adds regional fields (US, Australia and New Zealand, Gulf), general extras and electric vehicle fields with one click.
- Fields are only ever added, never removed or changed.
</div>

The [vehicles pack](/vehicles-pack/) reads your custom fields to find each vehicle's make, model, year, mileage and
the rest. On a new vehicle site this is set up for you. On a site that already had its own vehicle fields, or sells
more than cars, this guide shows how to check and extend them.

## Check which field holds what

Use this page before you switch the pack on, on a site that already has vehicle listings. Only administrators can
open it.

1. Go to **Settings › General** and open **Listing types**.
2. Under **Vehicles pack**, click **Check your fields first, then switch on →** (with the pack already on, the link is
   **Your vehicle fields →**).
3. Check **Your fields** (see below), change what's wrong and click **Save choices and update the preview**.
4. Under **Details your site has no field for**, tick the fields you want sellers to fill in, if any.
5. Check **What your live listings get**, then click **Switch on the vehicle pack**.
{: .steps}

**Switch on the vehicle pack** saves your choices, adds only the fields you ticked, and switches the pack on. You can
switch it off on the same page (**Switch off**) or in **Settings** at any time. Switching off hides the pack's
features; your fields, listings and choices stay as they are.

If the page says *The vehicle pack is set by Yclas support for your site.*, our support team has set the switch for
you: write to us to change it. You can still save your field choices.
{: .note}

### Your fields

Every custom field of your site is listed with:

- **Holds now**: the vehicle detail the pack reads from it today (for example *Make* or *Mileage*), or **Not used**.
- A warning such as *Looks like a second Make field. The pack reads make.* when two fields seem to hold the same
  thing.
- **Your choice**: **Automatic** (the pack decides from the field's name), **Not a vehicle field**, or the detail it
  holds (**Make**, **Model**, **Year**, **Mileage**, **Fuel**, **Engine hours**, **VIN**, **Title status** and so on).

One detail can only come from one field: choosing **Make** for two fields is refused with a message naming both.
Mark the field you don't want read as **Not a vehicle field**. Nothing is renamed, deleted or changed: not your
fields, not your listings. You only choose what each field means.

For example, a site with its own *Marke* and *Modelis* fields, next to empty make and model fields from the built-in
catalogue, can point **Make** at *Marke* and **Model** at *Modelis*, and the key specs, price labels and make pages
then use the fields sellers actually fill in.
{: .tip}

### Details your site has no field for

The main details the pack uses (make, model, year, mileage, fuel, transmission, body type, engine, colour, doors,
condition, VIN and trade-in) are listed when no field holds them. They are all unticked to start with. The ones you
tick are added when you switch on, empty, and never required.

- **Make**, **Model** and **Year** are added as the [built-in catalogue's](/vehicle-data/) lists. If your make field
  is your own, a missing model is added as a plain text field instead.
- The others use the standard vehicle fields of your [vehicle types](#vehicle-types): a boat site is never offered
  doors or mileage.

### What your live listings get

A preview from your live listings, with the fields as chosen above: how many listings show a key specs block, how
many can get a [price label](/vehicles-pack/#price-label) (it needs at least 5 others of the same make and model), and
how many [make pages](/vehicles-pack/#make-and-model-landing-pages) you'd have (makes with at least 3 listings).
Without a make and a model field there are no price labels, make pages or similar vehicles.

## Vehicle types

Out of the box the pack expects cars. If your site sells other vehicles, tell it which:

1. Go to **Add-ons** and open **Vehicle catalogue**.
2. Under **Vehicle types**, tick what is sold on your site.
3. Click **Save and add the fields**.
{: .steps}

| Type | Fields it adds besides make, model and year |
| --- | --- |
| **Cars** | Body type, fuel, transmission, mileage, engine, colour, doors, condition, first registration year, trade-in, VIN |
| **Motorcycles** | Motorcycle type, fuel, transmission, mileage, engine, colour, condition, first registration year, trade-in, VIN |
| **Boats** | Boat type, fuel, engine hours, engine, length, hull material, colour, condition, trade-in |
| **RVs and caravans** | RV type, fuel, transmission, mileage, engine, length, sleeps, colour, condition, first registration year, trade-in, VIN |
| **Trucks and commercial vehicles** | Truck type, fuel, transmission, mileage, engine hours, engine, power (hp), axles, gross vehicle weight, colour, condition, first registration year, trade-in, VIN |
| **Powersports (ATV, UTV, snowmobile, PWC)** | Type, fuel, mileage, engine hours, engine, colour, condition, trade-in, VIN |

- Each type has its own list for its type field (for example *Sailboat*, *Pontoon* and *RIB / inflatable* for boats)
  and its own fuel choices. With several types ticked, the lists are merged and a **Vehicle type** field is added.
- Length is in metres and gross vehicle weight in kg, or feet and lb when your site uses imperial measurements.
- Fields you already have are kept: if your site already has a field for a detail, no second one is made. New
  choices are added to your own body type, fuel and vehicle type lists (before *Other*, when the list has it);
  nothing is ever removed from them.
- Until you choose, the page says *Not chosen yet: your site uses the car fields.*

**Engine hours** show in the key specs next to the mileage, when the field holds a number. A field you already have
called *Hours*, *Engine hours*, *Horas* or *Betriebsstunden*, for example, is read as engine hours too.
{: .note}

New vehicle sites get their types from what the site is about in the sign-up wizard, for example "Boats and jet
skis". A car site gets the car fields.

## More vehicle fields

On the same **Vehicle catalogue** page, **More vehicle fields** has optional groups that buyers in some countries
expect. Click **Add these fields** on a group. Added fields are optional for sellers and show on the listing only when
filled in. A group you have shows **Added**.

| Group | Fields |
| --- | --- |
| **United States** | Title status (clean, salvage, rebuilt, lemon / buyback, flood, parts only, missing / bonded) |
| **Australia and New Zealand** | Rego expiry, roadworthy certificate (RWC), written-off status, number of keys |
| **Gulf countries** | Regional specs (GCC, American, European, Japanese…), export status (local use or export only), steering side |
| **More details** | Warranty, seats, cylinders, drivetrain |
| **Electric vehicles** | Range, battery capacity (kWh), battery health (%, seller-stated), charging |

Fields you made yourself for the same thing are recognised by their names (for example *Regional specs*,
*title_status* or *rego_expiry*), so no second field is added. New vehicle sites in the United States, Australia, New
Zealand, the United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain and Oman get their country's group from the
start.

### Electric vehicle fields

The electric vehicle fields only appear on the posting form once the seller picks an electric or plug-in hybrid fuel,
and only show in the key specs of electric and plug-in hybrid listings. A plain hybrid doesn't count. Range is in km,
or miles on a site that uses imperial measurements. Battery health is what the seller states; Yclas doesn't check it.

## Related guides

- [Vehicles pack](/vehicles-pack/) — everything the pack shows on listings.
- [Vehicle data](/vehicle-data/) — make, model and year lists from the built-in catalogue or Auto-Data.
- [Custom fields](/how-to-create-custom-fields/) — edit, reorder or limit any field to some categories.
- [Run a vehicle marketplace](/run-a-vehicle-marketplace/) — the launch checklist, dealers and leads.
{: .cards}
