---
title: Run a car marketplace with the vehicles pack
nav_title: Vehicles pack
description: Switch on the vehicles pack for key specs, compare, test drives, trade-ins, price labels, monthly prices, VIN checks, dealer stock pages and make and model landing pages.
section: listings
order: 1120
permalink: /vehicles-pack/
keywords: vehicles pack, car marketplace, car site, cars, vehicles, motors, car dealer, dealers, dealer page, dealer stock, dealer badge, verified dealer, test drive, book a test drive, trade-in, trade in, offer a trade-in, part exchange, permuta, price label, good price, fair price, high price, fees note, dealer fees, price drop, price drop email, vin, vin checked, vin check, vin decoder, chassis number, vehicle history report, carfax, autocheck, carvertical, hide vin, number plates, licence plates, blur number plates, hide number plates, compare cars, similar vehicles, recently viewed, key specs, landing pages, make and model pages, finance calculator, from per month, monthly payment, get finance, finance partner, walkaround video, 360 view, switch on the vehicle pack
updated: 2026-11-17
plans: Available on all plans (test drives on Professional and Marketplace)
---

<div class="summary" markdown="1">
- The vehicles pack adds key specs, compare, test drives, price labels, monthly prices, VIN checks, dealer pages and make and model landing pages.
- It's off on existing sites: open **Switch on the vehicle pack** from **Settings › General › Listing types** to check your fields first, or click **Add vehicle catalogue** in **Listings › Custom Fields**.
- It only changes listings with a make or model filled in.
- Test drives need the Professional or Marketplace plan.
</div>

The vehicles pack turns an ordinary classifieds site into a car marketplace. Vehicle listings get a **Key specs**
block, similar vehicles and side-by-side compare. Buyers can book a test drive, see whether a price is good and what
it costs a month, and offer their own car in part exchange. Dealers get their own stock pages, and every make and
model gets a landing page that search engines can find.

The pack works on every theme. Nova shows the most; older themes show the main parts (see
[Older themes](#older-themes)). To set up the tools around it (seller plans, dealer accounts, the dealer directory,
leads), see [Run a vehicle marketplace](/run-a-vehicle-marketplace/).

## Switch the pack on

The pack is **off on existing sites**. It is on for new sites created as a vehicle marketplace in the sign-up wizard.
There are three ways to switch it on:

- **Check your fields first (best for a site that already has vehicle listings).** Go to **Settings › General**, open
  **Listing types**, and under **Vehicles pack** click **Check your fields first, then switch on →**. The page shows
  which of your fields the pack will read for the make, model, year and the rest, lets you correct it, previews what
  your live listings get, and then switches the pack on. See [Your vehicle fields](/vehicle-fields/).
- **With the vehicle fields.** Go to **Listings › Custom Fields** and, under **Vehicles**, click
  **Add vehicle catalogue**. This adds the standard vehicle fields and switches the pack on. See
  [Vehicle data](/vehicle-data/).
- **With the fields you already have.** Go to **Settings › General**, open **Listing types**, switch on
  **Vehicles pack** and click **Save changes**. Use the same switch to turn it off.

{% include figure.html src="panel/listing-types.webp" alt="Settings › General, Listing types section, with switches for auctions, the vehicles, equipment and property packs and the jobs pack" caption="Settings › General › Listing types. Switch on **Vehicles pack** and save." %}

The **Check your fields first** link shows only on a site that looks like a vehicle site (it has a make or model
field, or was set up for vehicles). Once the pack is on, the same place shows **Your vehicle fields →**.
{: .note}

If the switch is greyed out with *Set by Yclas support for your site.*, ask us through
[Support](/use-yclas-support-system/).
{: .note}

The pack only changes **vehicle listings**: listings with a make or a model filled in. It finds your make, model and
other vehicle fields by their names, so fields you created yourself work too. For example, a field called *Make*,
*Brand*, *Marca* or *Marque* counts as the make, and *Mileage*, *Kilometres* or *Kilometraje (km)* as the mileage.
It understands English, Spanish, French, German, Portuguese, Italian and Dutch names. Fields such as colour or
condition alone never make a listing a vehicle, so a furniture category on the same site is left alone. When a name
isn't recognised, or two fields look like the same thing, choose for each field on
[Your vehicle fields](/vehicle-fields/#check-which-field-holds-what).

New vehicle sites created in the sign-up wizard get make, model and year fields and the standard vehicle fields from
the start. Sites selling motorcycles, boats, RVs, trucks or powersports get those types' fields; see
[Vehicle types](/vehicle-fields/#vehicle-types).
{: .tip}

## What the pack adds

| Feature | What visitors see |
| --- | --- |
| **Key specs** | A block at the top of the listing: make, model, year, mileage (or engine hours), fuel, transmission and the other vehicle fields the seller filled in. |
| **Similar vehicles** | Other listings of the same make, the same model first. When there are few, vehicles of the same body type at a similar price. |
| **Compare this vehicle** | A side-by-side table of up to 3 vehicles, remembered in the visitor's browser. With [Compare listings](/compare-listings/) on, it opens your site's general compare page instead. In Nova, vehicle cards in search results get a **Compare** button too. |
| **Recently viewed** | In Nova, a row of the vehicles the visitor looked at before, kept in their own browser only, with **Clear**. |
| **Book a test drive** | A calendar on the listing for buyers to ask for a test drive (Professional and Marketplace plans). |
| **Trade-in accepted** | A badge on listings whose seller accepts a vehicle in part exchange, and an **Offer a trade-in** option on the contact form. |
| **Price label** | *Good price*, *Fair price* or *High price*, compared with similar listings. |
| **From X / month** | In Nova, a monthly price and a small finance calculator, once you set an interest rate. Optional **Get finance** link to your partner. |
| **VIN checked** | A badge when the listing's VIN matches its make and year, plus an optional history report link. |
| **Dealer pages** | A dealer's stock with make, model and sort filters, and a **Dealer** (or **Verified dealer**) badge on their listings. |
| **Landing pages** | A page per make, model and location, such as `/vehicles/toyota/corolla/`. |
| **Walkaround video** | Optional: a YouTube or Vimeo video and a 360 view link, loaded only when the visitor clicks play. |
| **VIN look-up** | An optional **VIN** box with **Decode** on the posting form that fills in the make, model and year. |
| **Hide number plates** | A button on the posting form that pixelates number plates on the seller's photos. |

### Older themes

On themes other than Nova, the vehicle parts of a listing page show above the related listings: the trade-in badge,
**Book a test drive**, the price label, **VIN checked** with the history link, and **Compare this vehicle**. The
related listings then show vehicles of the same make and model first. With **Related listings** set to 0, the vehicle
parts still show, on their own. Older themes already list every custom field, so they have no separate **Key specs**
block.

The VIN look-up and **Hide number plates** on the posting form, **From X / month**, **Recently viewed**, compare on
result cards and the vehicle sections for your pages are Nova only. **Offer a trade-in** shows on the contact form
of Nova and Atlantic Lite. The **Dealer** badge shows on the listing pages of Nova and the older built-in themes; the
dealer stock page shows on Nova and on themes that use the standard profile page.

## Vehicle settings

Once the pack is on, **Listings › Settings** has a **Vehicles** section. Click **Save** when you're done.

| Setting | What it does |
| --- | --- |
| **Price label** | Shows the *Good*, *Fair* or *High price* label. On until you switch it off. |
| **Fees note under the price label** | Adds a small line under the label: *Compared with asking prices on this site. Fees may not be included.* On for new vehicle sites. |
| **Fees hint on the listing form** | Asks sellers, under the price field, to include any dealer or documentation fees in the price. Some places expect advertised vehicle prices to include them. |
| **Verified dealer badge** | A dealer who is also [verified](/verified-user/) shows one **Verified dealer** badge on their listings and dealer page, instead of separate **Dealer** and **Verified** badges. On for new vehicle sites. |
| **Book a test drive** | Lets buyers ask for test drives. Needs the Professional or Marketplace plan (see [Book a test drive](#book-a-test-drive)). On for existing sites until you switch it off; new vehicle sites start with it off, as a one-click switch on the launch checklist. |
| **Video on vehicle listings** | Sellers can paste a YouTube or Vimeo walkaround video and a 360 view link on the listing form. See [Walkaround video](#walkaround-video). |
| **Default interest rate (%/year)** | The starting rate of the finance calculator. Above 0, vehicle listings with a price also show **From X / month** (Nova). Leave it at 0 to show nothing on listings. |
| **Default term (months)** | The starting loan term, 1 to 120 months (60 if empty). |
| **"Get finance" link** | Optional: your finance partner's page, shown on vehicle listings (Nova). See [Monthly price and finance](#monthly-price-and-finance). |
| **Hide the end of VINs** | Off by default. Visitors see only the first 11 characters of a VIN, the last 6 as `******`. The seller, you and moderators still see it in full. It also hides the history report link. |
| **History report link** | Optional. Your Carfax, AutoCheck, carVertical or other affiliate link. It must start with `https://` and contain `{vin}`, which is replaced with the listing's VIN. |
| **History report link text** | The link's text. Empty means *Get a vehicle history report*. |

## Monthly price and finance

Set **Default interest rate (%/year)** above 0 and every vehicle listing with a price shows **From X / month** in
Nova, worked out from the full price with no down payment, over the **Default term**. Under it, buyers can open a
small **Finance calculator** to change the down payment, rate and term. It says *An estimate only, not an offer of
credit.* Auctions and listings without a price show nothing.

If you had already set a rate for the finance calculator section of your pages, vehicle listings start showing the
monthly price too. Set the rate back to 0 to hide it on listings.
{: .note}

Add a **"Get finance" link** to send buyers to a finance partner. It must start with `http://` or `https://` and may
contain `{price}`, `{make}`, `{model}`, `{year}` and `{id}`, which are replaced with the listing's own values. For
example: `https://www.example.com/apply?price={price}&car={make}+{model}`. The link isn't shown on auctions.

## Book a test drive

On every published vehicle listing, buyers see **Book a test drive**. Sellers don't set anything up:

1. The buyer logs in, picks a day and a 30-minute time, Monday to Saturday from 09:00 to 18:00 in your site's time
   zone, up to 60 days ahead.
2. They enter their name, phone number and an optional message, and click **Request a test drive**. It is free.
3. The seller gets the usual booking request email and opens **Bookings › Requests received** in their account menu
   to **Accept** or **Decline** it.
4. The buyer is emailed the answer and sees the request under **My bookings**. An accepted test drive blocks that time.
{: .steps}

Test drives use the [bookings](/bookings/) system, but you don't need to switch bookings on in **Add-ons**. A listing
you've made bookable as a rental keeps its own booking form instead. The hours are the same for every seller and
can't be changed yet.
{: .note}

Test drives are booking requests, so they come with the same plans as bookings: **Professional** and **Marketplace**
(they also work during the free trial, and sites on an older plan that's no longer sold keep them). On the Starter
plan, the vehicle settings say *Test drives are included in the Professional plan and up* with a **See plans** link,
and vehicle listings show no **Book a test drive** button. Test drives already booked stay under **Bookings** in your
members' accounts.
{: .important}

## Trade-in

**Add vehicle catalogue** adds a **Trade-in accepted** tick box to the posting form. A field of your own named
*Trade-in*, *Part exchange*, *Acepta permuta* and the like works too. When the seller ticks it, the listing shows a
**Trade-in accepted** badge (in Nova also on listing cards), and Nova's vehicle search section gets a trade-in filter.

### Offer a trade-in

On a listing whose seller accepts a trade-in, the contact form has an **Offer a trade-in** part. The buyer ticks
**I have a vehicle to trade in** and can give its make, model, year, mileage and a **Condition note**, all optional.

- The details are added under the buyer's message, so the seller gets them as a message or an email, as usual.
- Where [Leads](/run-a-vehicle-marketplace/#leads) is on, the offer also shows in the seller's Leads inbox with a
  **Trade-in** badge.
- The form tells the buyer: *The seller values your vehicle; this site does not.* There is no automatic valuation.

Every other listing's contact form stays as it was. The option shows on the Nova and Atlantic Lite contact forms.

## Price label

The price label compares a listing with the other live listings of the same make and model, of a similar year (two
years either way) and in the same currency when your site has those fields. It only shows when there are at least 5
to compare with, with a line such as *26% below the median price of 8 similar Toyota Corolla 2018-2022*.

- **Good price**: among the cheapest quarter, and at least 5% under the median.
- **High price**: among the dearest quarter, and at least 5% over the median.
- **Fair price**: anything in between.

Very low or very high prices (such as a placeholder of 1) and auctions get no label. The figures are refreshed every
few hours. In Nova the label shows under the price.

## Price drop emails

When a seller lowers the price of a published listing, everyone who saved it as a [favourite](/add-chosen-ads-favourites/)
gets an email with the old and new price, at most once a day per listing. Members can stop them by removing the
favourite or with the email's unsubscribe link.

Switch them on or off in **Listings › Settings › Listing details** with **Price drop emails**. They work on any site,
and are on by default only where the vehicles or property pack is on. The email is the **Price dropped on …** template
in your emails list, where you can change or translate it.

## VIN checked and history reports

The **VIN checked** badge needs a field for the VIN. **Add vehicle catalogue** in **Listings › Custom Fields** adds a
**VIN** field (it isn't required, and isn't a search filter). If you'd rather make your own, create a text field
called *VIN* (or *VIN number* or *Chassis number*). When the seller uses the VIN look-up on the posting form, the VIN
is copied into it.

After a listing with a 17-character VIN is saved, Yclas decodes the VIN and compares it with the listing's make and,
when both have one, its year. If they match, the listing shows **VIN checked**. Its tooltip names the decoded make
and year and says it is not a vehicle history check.

- The check runs when a listing is posted, goes live, or its VIN, make or year changes. Listings posted before you
  added the field are checked the next time they're edited.
- The decoder is a free public database from the US road safety agency. A VIN from outside North America often
  decodes to the make only, and is then checked on the make only.
- After an edit, the badge disappears until the listing has been checked again.

Add a **History report link** in the vehicle settings to show a link to a history report on every vehicle listing
with a VIN. It opens in a new tab and is marked as sponsored for search engines.

## Walkaround video

Switch on **Video on vehicle listings** in **Listings › Settings › Vehicles**. It adds two link fields to the listing
form: a YouTube or Vimeo video, and a 360 view or tour link (Matterport, Kuula, YouTube or Vimeo). A link to any
other site is refused when the listing is saved.

The listing shows a play button, and the video only loads when a visitor clicks it, so pages stay fast and nothing
is fetched from YouTube or Vimeo before. Listings without a link show nothing. New vehicle sites start with it on.

## Dealers

A **dealer** is a seller with an approved [business account](/business-sellers/) on a site with the pack on.

- **Dealer page.** Their profile (or their [store](/storefronts/), in Nova) shows *N vehicles in stock*, with
  filters for make and model and a **Sort by** list: newest, price, year and mileage.
- **On their listings.** A **Dealer** badge and a *See all N vehicles from …* link to their page. With
  **Verified dealer badge** on, a verified dealer shows one **Verified dealer** badge instead.
- **Bulk import and stock feeds.** Dealers upload their stock from a CSV file or keep it in sync with a feed. Your
  vehicle fields are in the column list, marked *(vehicle)*, and values are converted: "Gasoline" becomes *Petrol*,
  "45,000 km" becomes 45000. See [Dealer stock import](/dealer-stock-import/).

To bring dealers in, list them in a directory, or prepare their pages for them, see
[Run a vehicle marketplace](/run-a-vehicle-marketplace/#dealers).

## Make and model landing pages

People search for things like "used Toyota Land Cruiser in Dubai". The pack gives your site a page for each:

| Page | Example |
| --- | --- |
| All makes | `/vehicles` |
| A make | `/vehicles/toyota` |
| A model | `/vehicles/toyota/land-cruiser` |
| With a location | `/vehicles/toyota/dubai`, `/vehicles/toyota/land-cruiser/dubai` |

Each page lists the matching live listings, 24 per page, with links to the make's models, its locations and other
makes. Pages with 3 or more listings go into your [sitemap](/sitemap-classifieds-website/); pages with fewer are
hidden from search engines so they don't look thin. A page only exists while its make has live listings. With
[parts fitment](/parts-fitment/) on, a make or model page also links to the parts that fit it.

If you already have a category whose address is `/vehicles`, that page stays your category.
{: .tip}

## Listings from a photo

Where [listings from a photo](/listing-from-a-photo/) are on, the AI recognises the vehicle in the photo and fills
in your make, model, body type, colour and fuel fields, and the year when it is sure of it. It never fills in the
mileage, VIN or condition.

On Nova, sellers also get a **Hide number plates** button under the photos box on the posting form. Clicking it
finds the number plates on their photos and pixelates them, and the seller sees the result before posting. Each click
counts as one listing from a photo against your monthly allowance. Check the photos afterwards: a plate the AI misses
stays visible.

## Related guides

- [Your vehicle fields](/vehicle-fields/) — check which field holds what, vehicle types, regional and electric vehicle fields.
- [Run a vehicle marketplace](/run-a-vehicle-marketplace/) — the launch checklist, dealers, leads and ways to earn.
- [Dealer stock import](/dealer-stock-import/) — CSV template, row check, stock feeds and Google store codes.
- [Parts fitment](/parts-fitment/) — say which vehicles a part fits.
- [Vehicle data](/vehicle-data/) — make, model and year lists from the built-in catalogue or Auto-Data.
- [Vehicle checks](/vehicle-checks/) — fill in the posting form from a number plate, and show UK tax, MOT and mileage history.
- [Bookings and rentals](/bookings/) — how sellers manage requests.
- [Business sellers](/business-sellers/) — business accounts and the business dashboard.
{: .cards}
