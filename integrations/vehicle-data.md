---
title: Vehicle data and the vehicles pack
nav_title: Vehicle data
description: Give vehicle listings real make and model lists from the free built-in catalogue or Auto-Data, add the standard vehicle fields and the vehicles pack.
section: integrations
order: 80
permalink: /vehicle-data/
keywords: cars, vehicles, motors, car dealer, car marketplace, vehicle catalogue, built-in catalogue, carquery, auto-data, autodata, make, model, year, generation, brand, vin, vin decoder, decode vin, finance calculator, car finance, vehicles pack, dropdown, custom fields, carquery not working
updated: 2026-10-22
plans: Available on all plans
---

On a marketplace for cars, members shouldn't have to type "VW", "Volkswagen" or "volkswagon" by hand. A vehicle
catalogue turns the make and model fields into lists of real vehicles: the member picks a make, then a model of that
make. Listings come out consistent, and buyers can search by make and model reliably.

On top of that, the [vehicles pack](/vehicles-pack/) gives vehicle listings key specs, compare, test drives, price
labels, VIN checks, dealer pages and make and model landing pages.

## Choose a vehicle catalogue

Go to **Add-ons** and open **Vehicle catalogue**. It shows the sources you can use, and which one is active.
Only one is used at a time.

| Source | Fields it fills | Cost |
| --- | --- | --- |
| **Built-in free catalogue** | Make, model and year | Free, no account needed. Over 100 makes and 1,000 models. |
| **Auto-Data** | Brand, model and generation | Needs your own Auto-Data API token, a paid service with the most complete data. |

CarQuery, a free source Yclas used to offer, has shut down. If your site still had it on, the Vehicle catalogue
page shows *CarQuery has shut down* with a **Turn off** button. Turn it off, or click **Use this** on the built-in
catalogue, which turns CarQuery off for you.
{: .note}

### Use the built-in catalogue

The quickest way is from Custom Fields, which adds a complete set of vehicle fields and switches the vehicles pack on:

1. Go to **Listings › Custom Fields**.
2. Under **Vehicles**, click **Add vehicle catalogue** and confirm. This adds **Body type**, **Fuel**, **Transmission**,
   **Mileage**, **Engine**, **Colour**, **Doors**, **Condition**, **First registration year**,
   **Trade-in accepted** and **VIN**, skipping any you already have (a VIN field of your own, such as *Chassis
   number*, counts). It also switches the vehicles pack on.
3. You land on the **Vehicle catalogue** page. Under **Built-in free catalogue**, click **Use this**. This adds the
   **Make**, **Model** and **Year** fields.
4. The new fields apply to every category. Open each one in **Listings › Custom Fields** and limit it to your vehicle
   categories.
{: .steps}

The **Cars** template under **Start from a template** also sets up the built-in catalogue's make, model and year,
unless your site uses Auto-Data. See [Custom fields](/how-to-create-custom-fields/).

None of these fields is required, so members can always post. The make and year lists also work in themes that don't
load the catalogue's scripts.

If your site was created as a vehicle marketplace, the catalogue may already be chosen without its fields. Custom
Fields then says *Your site uses the built-in vehicle catalogue: add the vehicle fields to get make, model and year on
your posting form.* Click **Add vehicle catalogue**, or **Create the make, model and year fields** on the Vehicle
catalogue page.
{: .tip}

### Use Auto-Data

1. Get an API token from [Auto-Data](https://www.auto-data.net).
2. Go to **Add-ons** and open **Auto-Data** (or **Configure** under Auto-Data on the Vehicle catalogue page).
3. Tick **Enable Auto-Data**, paste your token into **Auto-Data API Token** and click **Save**.
{: .steps}

Yclas checks the token with Auto-Data and creates three required, searchable dropdown fields: **Brand**, **Model** and
**Generation**. They apply to every category and are required, so straight away open each one in
**Listings › Custom Fields** and choose only your vehicle categories, or members posting a sofa would have to pick a
car brand.

If the panel says **Invalid token** although you copied the token correctly, [contact support](/use-yclas-support-system/).
{: .note}

## The vehicles pack

The make and model lists work on their own. The **vehicles pack** builds on them, on every theme. It is off on
existing sites. **Add vehicle catalogue** switches it on, and so does **Settings › General** › **Listing types** ›
**Vehicles pack**, then **Save changes**. New sites created as a vehicle marketplace start with it on.

The pack reads your vehicle fields by their names, so it also works with make and model fields you created yourself
(for example *Make*, *Brand* or *Marca*) instead of the catalogue's. See
[Run a car marketplace with the vehicles pack](/vehicles-pack/) for everything it adds and its settings.

### Finance calculator and vehicle search

If your plan includes the [AI page builder](/ai-page-builder/), the pack adds two sections for your Nova pages: a
**Vehicle search** (make, model, year, price, mileage and trade-in) and a **Finance calculator** that estimates a
monthly payment. Set the calculator's starting interest rate and loan term in **Listings › Settings**, under
**Vehicles** (**Default interest rate (%/year)** and **Default term (months)**). Visitors can change both.

## What members see

In the posting form, the first dropdown lists every make (or brand). When the member picks one, the next dropdown
fills with that make's models. The search form works the same way, so buyers can narrow down to a make and model.

The values chosen are saved with the listing like any other custom field, so listings keep them if you change the
catalogue later.

With the vehicles pack on, the Nova posting form also has an optional **VIN** box with a **Decode** button above the
make field. It fills in the make, model, year and other details it can find, for the seller to check, and copies the
VIN into your **VIN** field (unless the seller already typed a different one there). It uses a free
public vehicle database from the US road safety agency, so it knows vehicles sold in North America best, and it is
never required.

## Tips

- Keep a free-text field such as "Version" or "Trim" for details the catalogue doesn't have.
- The built-in catalogue covers over 100 makes and 1,000 models. If your members sell many rare or local makes,
  Auto-Data covers far more.
- For car dealers who post many listings, look at [business seller accounts](/business-sellers/), with bulk import
  and stock feeds. With the vehicles pack on, dealers also get [stock pages](/vehicles-pack/#dealers).

## Related guides

- [Vehicles pack](/vehicles-pack/) — test drives, price labels, VIN checks, dealer pages and landing pages.
- [Custom fields](/how-to-create-custom-fields/) — field types, templates and categories.
- [Categories](/how-to-add-categories/) — organise your vehicle categories.
- [Property pack](/property-pack/) — the same idea for property sites.
- [Equipment pack](/equipment-pack/) — the same idea for machinery and equipment hire.
- [Marketplace ideas](/marketplace-ideas/) — examples of niche marketplaces.
{: .cards}
