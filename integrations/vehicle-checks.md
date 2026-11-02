---
title: Look up vehicles by registration with vehicle checks
nav_title: Vehicle checks
description: Fill in the posting form from a number plate and show buyers a vehicle's road tax, MOT and mileage history, with UK DVLA and DVSA data or Australia's RegCheck.
section: integrations
order: 85
permalink: /vehicle-checks/
keywords: vehicle check, registration lookup, reg lookup, number plate lookup, plate lookup, look up registration, dvla, dvla api, vehicle enquiry service, dvsa, mot, mot history, mot check, road tax, tax check, mileage, mileage history, clocked, odometer, recall, marked for export, rego, rego lookup, regcheck, carregistrationapi, australia, uk, hpi, hpi check, finance check, stolen, write-off, written off, ppsr, registration field
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- Sellers type the number plate and click **Look up**: the make, model, year, colour, fuel and engine size are filled in.
- In the UK, listings also get a **Vehicle check** panel with road tax, MOT and the MOT mileage history.
- It's off by default and uses your own keys: free from DVLA and DVSA in the UK, paid per lookup with RegCheck in Australia.
- It needs the vehicles pack and a registration field.
</div>

On a car marketplace, the number plate already says what the vehicle is. Vehicle checks use it twice:

- **On the posting form**, a seller types the registration and clicks **Look up**. The make, model, year, colour,
  fuel and engine size are filled in for them, so listings are quicker to post and come out consistent.
- **On UK listing pages**, a **Vehicle check** panel shows buyers what the official records say: road tax, MOT
  status and every MOT test with its mileage. A mileage reading lower than an earlier one is flagged, which helps
  buyers spot a clocked car.

Vehicle checks are **off by default**. They use your own accounts with the data providers, so the providers deal with
you directly: the UK services are free, the Australian one bills you per lookup.

## What you need

- **The vehicles pack.** Switch it on in **Settings › General** › **Listing types** › **Vehicles pack**, or with
  **Add vehicle catalogue** in **Listings › Custom Fields**. See [Vehicles pack](/vehicles-pack/). Until it's on,
  the Vehicle checks page says *Vehicle checks need the vehicles pack, which is off on this site.*
- **A registration field.** Listings keep their number plate in a custom field. If you don't have one, the Vehicle
  checks page offers a **Create a Registration field** button (see [Fields](#fields)).
- **Your keys** for the country you choose: see [United Kingdom](#united-kingdom) and [Australia](#australia).
- **Make and model fields** for the lookup to fill in. The [vehicle catalogue](/vehicle-data/) adds them.

## Turn on vehicle checks

1. Go to **Add-ons** and open **Vehicle checks** (in the **Vehicles** tab).
2. Under **Country**, choose **United Kingdom (DVLA and DVSA, free)** or **Australia (RegCheck, paid per lookup)**.
3. Tick where checks appear:
   - **Post form**: a **Look up** button next to the registration fills in the vehicle's details.
   - **Listing page (UK)**: the **Vehicle check** panel with road tax, MOT status and MOT mileage history.
4. Paste your keys into the section for your country.
5. If the page says *Your site has no registration field*, click **Create a Registration field**.
6. Click **Save**.
{: .steps}

To switch everything off, set **Country** back to **Off** and click **Save**. Your keys stay saved.

Keys are never shown again once saved: their boxes say *Already set. Leave blank to keep it.* To change one, paste
the new key and save. Leaving the box empty keeps the current key.
{: .note}

## United Kingdom

In the UK you can use two free government services. Each adds different details, so connect both if you can. You
need at least one of them.

| Service | What it gives |
| --- | --- |
| **DVLA Vehicle Enquiry Service** | Make, colour, fuel, year of manufacture, engine size, road tax status and due date, MOT status and expiry, and whether the vehicle is marked for export. No model. |
| **DVSA MOT history** | Model, every MOT test with its result, mileage, advisories and failures, and outstanding safety recalls. |

### Get a DVLA key

1. Ask DVLA for a Vehicle Enquiry Service API key on its developer portal,
   [developer-portal.driver-vehicle-licensing.api.gov.uk](https://developer-portal.driver-vehicle-licensing.api.gov.uk/).
   DVLA gives one key per company.
2. Paste the key into **DVLA Vehicle Enquiry Service API key**.
{: .steps}

DVLA sometimes pauses new registrations for this key. If it's paused when you apply, use the DVSA MOT history on its
own for now: the lookup and the panel both work with either service.
{: .note}

### Get the DVSA MOT history credentials

1. Register for the MOT history API at
   [documentation.history.mot.api.gov.uk](https://documentation.history.mot.api.gov.uk/).
2. DVSA emails you four values. Paste them into **DVSA MOT history: client ID**, **Tenant ID**, **Client secret**
   and **API key**.
{: .steps}

## Australia

No Australian state offers a free public rego lookup, so in Australia vehicle checks use
[CarRegistrationAPI (RegCheck)](https://www.carregistrationapi.com.au/), a paid service.

- **Cost:** about A$0.30 a lookup, bought in blocks. A free test account has 10 lookups, enough to try it.
- **What it fills in:** make, model, year, colour and fuel (and the VIN when RegCheck has it), from the plate and
  the state the vehicle is registered in. The seller picks the state (NSW, VIC, QLD, SA, WA, TAS, ACT or NT) next
  to the **Look up** button.
- **Posting form only.** There is no **Vehicle check** panel on Australian listings.

Sign up with RegCheck and paste your user name into **CarRegistrationAPI (RegCheck) user name**. Then set who can run
lookups, under [Paid lookups](#paid-lookups).

## What sellers see on the posting form

With **Post form** ticked, the posting form of the Nova theme gets a **Look up** button beside your registration
field. If your site has no registration field, a **Registration (optional)** box of its own goes above the make
field instead.

1. The seller types the number plate (spaces don't matter) and, in Australia, picks the state.
2. They click **Look up**. The form says *Looking it up…*, then *Filled in from the registration; check the fields
   below.*
3. They check the details and carry on posting as usual.
{: .steps}

What the lookup fills in, when your site has the field:

| Field | Filled with |
| --- | --- |
| **Make** and **Model** | The make and model on record, matched to your lists (TOYOTA becomes *Toyota*). |
| **Year** | The year of manufacture, or the year of first registration if your field is a registration year. |
| **Colour** | The colour, as your colour list names it. |
| **Fuel** | The fuel, as your fuel list names it (ELECTRICITY becomes *Electric*). |
| **Engine** | The engine size, such as *1598 cc*. |

A text box the seller has already typed in is left as it is. A dropdown is only set to a choice already in its list;
make, model and year are the exception and add the value when it's missing. The lookup is never required: if nothing
is found, the form is left exactly as it was and the seller fills it in by hand.

The **Look up** button is on Nova's posting and edit forms. Other themes don't show it, but they still show the
**Vehicle check** panel on listings.
{: .note}

## The Vehicle check panel (UK)

With **Listing page (UK)** ticked, every listing with a registration gets a **Vehicle check** panel, on Nova and on
the older themes. It says it comes from DVLA and DVSA records and is not a finance, theft or write-off check.

| Part | What buyers see |
| --- | --- |
| **Road tax** | The tax status as DVLA gives it, such as *Taxed*, *SORN* or *Untaxed*, with the due date. |
| **MOT** | The MOT status, such as *Valid* or *Not valid*, with the expiry date. |
| **On record** | **Make on record**, **Colour on record**, **Year of manufacture**, **First registered**, **Fuel**, **CO2 emissions** and **Euro status**. |
| **MOT history** | Up to 20 tests, newest first: date, pass or fail, the mileage, and the advisories and failures. Vehicles under 3 years old have none yet. |

The panel also warns buyers, in red, when:

- the make on record differs from the make in the listing (*Ask the seller.*);
- DVLA has the vehicle marked for export;
- the vehicle has an outstanding safety recall;
- a mileage reading is lower than an earlier one. The reading is marked in the MOT history. It may be a recording
  error or a replaced odometer, so the panel asks buyers to get the seller to explain it.

The panel loads just after the rest of the page, so it never slows the listing down, and search engines don't
trigger lookups. It shows on published listings; the seller and your admins also see it on listings waiting for
approval. If neither service finds the registration, the listing simply has no panel.

## Paid lookups

Australian lookups cost you money each time, so they have their own controls. The section also shows how many
lookups were made in the last 24 hours and the last 30 days.

| Setting | What it does |
| --- | --- |
| **Who can run them** | **Nobody**, **Admins and moderators** (the default) or **Any signed-in user**. Only these people see the **Look up** button. To let sellers use it, choose **Any signed-in user**. |
| **Per user per day** | The most lookups one person can run a day. The default is 5, at most 100. |
| **Whole site per day** | The most lookups your whole site can run a day. The default is 20, at most 1,000. |

- A paid lookup runs only when someone clicks **Look up**, never on its own.
- **The same registration is never paid for twice within 30 days**: a repeat lookup of the same plate and state gets
  the saved answer, free.
- Failed lookups count towards the daily limits too.
- Past a limit, the form says *The daily limit for lookups has been reached. Try again tomorrow.*

Set a spending limit in your RegCheck account as well. The daily limits here cap how many lookups your site asks for,
but RegCheck bills your account.
{: .tip}

### Free lookups

The UK services are free, but DVLA and DVSA limit how much each key can be used. So that one busy visitor or a bot
can't use up your allowance, each visitor can make 30 lookups an hour and your site 1,000 a day per service. Answers
are kept for a day, so a popular listing's panel costs one lookup a day, not one per visitor.

## Fields

The **Fields** section says which of your custom fields holds the registration and which ones a lookup fills in:
**Registration (number plate)**, **Make**, **Model**, **Year**, **Colour**, **Fuel** and **Engine**. Under each,
*Now:* shows the field in use.

| Choice | What it does |
| --- | --- |
| **Recognise automatically** | The default. Yclas finds the field by its name: *Make*, *Brand*, *Marca* and so on, and for the registration *Registration*, *Reg*, *Number plate*, *Licence plate*, *Rego*, *VRM*, *Matrícula*, *Immatriculation*, *Kenteken*, *Kennzeichen* or *Targa*. |
| **Do not fill in** | The lookup leaves this field alone. |
| A field from the list | Use this field, whatever it's called. |

**Create a Registration field** adds a text field called **Registration** with the hint *The number plate, e.g. AB12
CDE*. It isn't required, isn't a search filter and isn't shown in the listing's details. You can rename it in
**Listings › Custom Fields**. The button also saves the rest of the page.

Without a registration field, sellers can still look a vehicle up on the posting form, but listings can't show the
**Vehicle check** panel, because the plate isn't saved with the listing.
{: .note}

## What isn't available

- **Vehicle history checks** (outstanding finance, stolen, written off), such as HPI or Experian checks in the UK.
  These are sold only by contract, and the UK resellers don't offer a self-serve service we can connect to. For
  history reports, add a [history report link](/vehicles-pack/#vin-checked-and-history-reports) to your listings.
- **Australia's PPSR** (finance owing, stolen or written off): it isn't open to self-serve connections either.
- **Other countries.** Only the UK and Australia for now. Elsewhere, the [VIN look-up](/vehicles-pack/) on Nova's
  posting form fills in details from the VIN.
- **The panel in Australia.** Australian lookups fill in the posting form only.

## Troubleshooting

**There's no Look up button on the posting form.** Check that the vehicles pack is on, a **Country** is chosen,
**Post form** is ticked and your keys are saved. The button is on the Nova theme only. In Australia, only the people
chosen in **Who can run them** see it, and they must be signed in.

**"That does not look like a registration number."** The plate is too short or too long. UK plates have 2 to 8
letters and digits, Australian ones 2 to 9.

**"Choose the state the vehicle is registered in."** In Australia the seller must pick a state before clicking
**Look up**.

**"No vehicle found for that registration. Please fill in the fields yourself."** The services don't know the plate,
it was mistyped, or today's free lookups for your site are used up. Check your keys too: a wrong or expired key finds
nothing.

**"Paid lookups are not available to you on this site."** The person isn't allowed by **Who can run them**.

**No Vehicle check panel on a listing.** The panel is UK only, needs **Listing page (UK)** ticked, and shows only on
listings with a registration in your registration field. Listings posted before you added the field get it once the
seller adds the plate.

## Related guides

- [Vehicles pack](/vehicles-pack/) — key specs, test drives, price labels, VIN checks and dealer pages.
- [Vehicle data](/vehicle-data/) — make, model and year lists from the built-in catalogue or Auto-Data.
- [Custom fields](/how-to-create-custom-fields/) — rename or limit the Registration field to your vehicle categories.
- [Add-ons](/addons/) — find and switch on integrations.
{: .cards}
