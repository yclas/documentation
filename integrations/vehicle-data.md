---
title: Vehicle data
description: Fill the posting and search forms with real years, makes and models of cars from CarQuery or Auto-Data, so vehicle listings are consistent and easy to search.
section: integrations
order: 80
permalink: /vehicle-data/
keywords: cars, vehicles, carquery, auto-data, autodata, make, model, year, generation, brand, car dealer, motors, dropdown, custom fields
updated: 2026-10-07
---

On a marketplace for cars, members shouldn't have to type "VW", "Volkswagen" or "volkswagon" by hand. Vehicle data
integrations turn the make and model fields into dropdowns filled from a database of real vehicles: the member picks
a make, then a model of that make. Listings come out consistent, and buyers can search by make and model reliably.

Yclas works with two vehicle databases:

| Service | Fields it fills | Cost |
| --- | --- | --- |
| **CarQuery** | Year, make and model | Free, no account needed. |
| **Auto-Data** | Brand, model and generation | Needs an Auto-Data API token, which is a paid service. |

Use one or the other, not both.

## Set up CarQuery

The quickest way is the **Cars** template in Custom Fields, which creates a complete set of fields for a vehicle
marketplace (mileage, fuel, transmission and more) and switches CarQuery on for you:

1. Go to **Listings › Custom Fields**.
2. Under **Start from a template**, click **Cars** and confirm.
3. The new fields apply to every category. Open each one and limit it to your vehicle categories (see the warning
   below).
{: .steps}

See [Custom fields](/how-to-create-custom-fields/) for the templates.

To switch on CarQuery without the template:

1. Go to **Integrations** and open **CarQuery**.
2. Tick **Enable CarQuery** and click **Save**.
{: .steps}

This creates three custom fields, **Year**, **Make** and **Model**, as required dropdowns that are searchable and
shown on the listing page.

The fields CarQuery creates apply to **every category** and are required, so members posting a sofa would have to
pick a car make. Straight after enabling it, go to **Listings › Custom Fields**, open **Year**, **Make** and
**Model** in turn, choose only your vehicle categories under **Categories**, and save each one.
{: .warning}

If fields named `year`, `make` or `model` already exist, they are kept as they are and used by CarQuery. They must be
of the **Select** type for the dropdowns to work.

## Set up Auto-Data

1. Get an API token from [Auto-Data](https://www.auto-data.net).
2. Go to **Integrations** and open **Auto-Data**.
3. Tick **Enable Auto-Data**, paste your token into **Auto-Data API Token** and click **Save**.
{: .steps}

Yclas checks the token with Auto-Data and creates three required, searchable dropdown fields: **Brand**, **Model**
and **Generation**. As with CarQuery, limit them to your vehicle categories straight away.

If the panel says **Invalid token** although you copied the token correctly, [contact support](/use-yclas-support-system/).
{: .note}

## What members see

In the posting form, the first dropdown lists every make (or brand). When the member picks one, the next dropdown
fills with that make's models, and so on. The search form works the same way, so buyers can narrow down to a make and
model.

The values chosen are saved with the listing like any other custom field, so listings keep them even if you switch
the integration off later. Without the integration, those fields become ordinary dropdowns with no options, so remove
them or fill in their values if you stop using vehicle data.

## Tips

- Keep a free-text field such as "Version" or "Trim" for details the database doesn't have.
- Add your own fields for mileage, fuel type and transmission, or use the **Cars** template, which includes them.
- Both databases are run by outside companies. If the dropdowns stay empty, the service may be unavailable; check
  again later or contact support.

## Related guides

- [Custom fields](/how-to-create-custom-fields/) — field types, templates and categories.
- [Categories](/how-to-add-categories/) — organise your vehicle categories.
- [Marketplace ideas](/marketplace-ideas/) — examples of niche marketplaces.
{: .cards}
