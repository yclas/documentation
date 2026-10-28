---
title: Run a property marketplace with the property pack
nav_title: Property pack
description: "Switch on the property pack: key specs, floor plans, viewings, agency pages, price per m², map search, compare and landing pages per type and area."
section: listings
order: 1130
permalink: /property-pack/
keywords: property pack, real estate, real estate marketplace, property site, property portal, estate agent, estate agency, agency page, agent, realtor, homes, houses, flats, apartments, rent, rentals, for sale, floor plan, floor plans, book a viewing, viewings, open house, open houses, video viewing, price per m2, price per square metre, price per sq ft, area average, price reduced, price drop, map search, search on map, draw on map, compare properties, similar properties, virtual tour, matterport, kuula, energy rating, epc, monthly costs, hoa, community fees, service charge, available from, landing pages, property feed, kyero, xml feed, import properties, mortgage calculator
updated: 2026-10-22
plans: Available on all plans (viewings on Professional and Marketplace)
---

The property pack turns an ordinary classifieds site into a property portal. Property listings get key specs,
floor plans, a virtual tour and an energy rating. Visitors can book a viewing, compare homes side by side, search on
a map and see whether a price is above or below the area average. Estate agents get their own agency pages, and every
property type and area gets a landing page that search engines can find.

The pack works on every theme. Nova shows the most; older themes show the main parts (see
[Older themes](#older-themes)).

## Switch the pack on

The pack is **off on existing sites**. It is on for new sites created as a property marketplace in the sign-up
wizard. There are two ways to switch it on:

- **With the property fields.** Go to **Listings › Custom Fields**, click **Property pack** under
  **Start from a template** and confirm. This adds the property fields and switches the pack on. The fields are listed
  in [Property and jobs packs](/property-and-jobs-packs/#the-property-fields).
- **With the fields you already have.** Go to **Settings › General**, open **Listing types**, switch on
  **Property pack** and click **Save changes**. Use the same switch to turn it off.

If the switch is greyed out with *Set by Yclas support for your site.*, ask us through
[Support](/use-yclas-support-system/).
{: .note}

The pack only changes **property listings**: listings with a property type, bedrooms, bathrooms, a size or a plot
size filled in. It finds these fields by their names, in English, Spanish, Portuguese, French, German, Italian, Dutch
and a few more, so fields you created yourself work too. For example *Bedrooms*, *Habitaciones* or *Chambres* counts
as the bedrooms, and *Square feet*, *Superficie* or *Wohnfläche* as the size. Your other categories look as they did.

The older **Real Estate** custom field template works with the pack too: its fields are recognised the same way.
{: .tip}

## What the pack adds

| Feature | What visitors see |
| --- | --- |
| **Floor plans** | Up to 6 floor plan images on the listing. |
| **Book a viewing** | A calendar on the listing to ask for a viewing in person or by video call (Professional and Marketplace plans). |
| **Open houses** | Open-house times on the listing and its card. |
| **Agency pages** | An agency's properties with filters, its licence number and agents, and an **Agency** badge on its listings. |
| **Price per m²** | The price per m² or ft², how it compares with the area average, and a **Price reduced** badge. |
| **Map search** | A map of property listings beside the results, with a drawn area or a radius. |
| **Compare** | A side-by-side table of up to 4 properties. |
| **Similar properties** | Other listings with the same sale or rent, type and bedrooms, in a similar price range. |
| **Listing extras** | A virtual tour, the energy rating scale, monthly costs and when the property is available. |
| **Landing pages** | A page per property type, sale or rent, area and number of bedrooms. |
| **Feed import** | Agents' properties imported from the XML feed their software sends to the portals. |
| **AI photo check** | Room captions, a suggested photo order and blurring of faces and house numbers on the posting form. |

### Older themes

On themes other than Nova, a property listing shows a **Property details** block with the key specs, the floor
plans and, for a sale, a **Mortgage calculator** that starts from the listing's price. Under it come
**Book a viewing**, the agency badge, price per m², the listing extras and **Compare**. The related listings then show
similar properties first; with **Related listings** set to 0, the property block still shows on its own. The map
search, the landing pages and agency pages work on every theme. The default, Atlantic Lite, Atlantic, Mercury and
Modern Deluxe 4 themes also put a **Search on a map** link above the results (see [Search on a map](#search-on-a-map)).

On older themes, sellers add floor plans on the edit page of their listing (see [Floor plans](#floor-plans)). The AI
photo check on the posting form, and the **Property search** and **Mortgage calculator** sections for your pages, are
Nova only.

## Property settings

Once the pack is on, **Listings › Settings** has a **Property** section. Each switch is on until you turn it off.
Click **Save** when you're done.

| Setting | What it does |
| --- | --- |
| **Book a viewing** | Visitors can ask to view a property in person or by video call. Needs the Professional or Marketplace plan (see [Book a viewing](#book-a-viewing-and-open-houses)). |
| **Agency pages** | Approved business sellers get an agency page and an **Agency** badge on their property listings. |
| **Property landing pages** | Pages for each property type, sale or rent, location and number of bedrooms, listed in your sitemap. |
| **Price per m² and area average** | The price per m² or ft², the area average and the **Price reduced** badge. |

## Floor plans

In Nova, the seller of a listing (or you, as administrator) sees a **Floor plan** box on the listing page itself:
**Add a floor plan image**, then **Upload**. A listing can have up to 6 floor plans, in JPEG, PNG, GIF or WebP,
within your site's [image size limit](/how-to-configure-image-settings/). Visitors click one to open it full size.
The seller removes one with the **×** on it.

On older themes, the same **Floor plan** box is on the edit page of the listing (**My listings**, then edit), below
the listing's form, with a **Remove floor plan** button under each plan. This works on the default theme, Atlantic
Lite and the themes based on it (Atlantic, Mercury, MGT, Modern Deluxe 4), and on Kamaleon, Modern Deluxe, Ocean,
Reclassifieds, Responsive, Titi and Yummo. Themes with their own edit page (Auction, Basecamp, CZSale, Jobdrop,
Newspaper, Olson, Pinclass and Splash) don't have it yet.

Floor plans are added after posting, not from the posting form. Deleting a listing deletes its floor plans.

## Book a viewing and open houses

On every published property listing, visitors see **Book a viewing**. Sellers don't set anything up:

1. The visitor logs in and chooses **In person** or **Video call**, then a day and a 30-minute time, Monday to Saturday
   from 09:00 to 19:00, up to 60 days ahead. If none of the times suits them, they can propose another one, any day
   from 07:00 to 22:00.
2. They enter their name, phone number and an optional message, and click **Request a viewing**. It is free.
3. The seller gets the usual booking request email and accepts or declines it in **Bookings**, in their account menu.
4. The visitor is emailed the answer and sees the request under **My bookings**. An accepted viewing blocks that
   time, and both get a reminder the day before.
{: .steps}

Viewings use the [bookings](/bookings/) system, but you don't need to switch bookings on in **Add-ons**. A listing
you've made bookable as a rental keeps its own booking form instead. The hours are the same for every listing.
{: .note}

Viewings are booking requests, so they come with the same plans as bookings: **Professional** and **Marketplace**
(they also work during the free trial, and sites on an older plan that's no longer sold keep them). After the trial,
on the Starter plan, the property settings say *Viewings are
included in the Professional plan and up* with a **See plans** link, and property listings show no **Book a viewing**
button. Viewings already booked stay under **Bookings** in your members' accounts. Open houses need no plan: they
aren't booked.
{: .important}

The seller can also add up to 10 **open houses** on the listing page with **Add an open house**: a date, a start and
an end time. Anyone may come by, so there is nothing to book. The listing shows *Open house* with the date and time
until it has ended, and in Nova the card shows it too.

## Agency pages

An **agency** is a seller with an approved [business account](/business-sellers/) on a site with the pack on.

- **Agency page.** Each agency gets a public page at `/agency/<name>` with its logo, name, licence number, phone, its
  agents and its properties, with sale or rent, type and bedrooms filters and a sort by newest or price.
- **On its listings.** An **Agency** badge with a link to the agency page.
- **Agency details.** On their [business dashboard](/business-sellers/#the-business-dashboard), the seller clicks
  **Edit agency details**. They choose whether they are **An agency** or **An independent agent** (the badge then
  says **Agent**), and add their **Licence number**, a phone number and their **Agents**: up to 20, each with a name,
  role, phone and email.

On Nova sites with [store teams](/storefronts/), the agency's team members are its agents automatically. Their own
property listings count in the agency's stock and carry an **Agent** badge naming the agency.

Business accounts are on the Professional and Marketplace plans.
{: .note}

## Price per m² and the area average

Property listings with a price and a size show the price per m² or ft², in the size unit of the listing (per month
for a rental). When at least 5 similar live listings in the same category and location have a price and a size, the
listing also says how it compares, for example *12% below the area average of 2,350 €/m² (8 similar listings)*.

When a seller lowers the price of a live listing, it shows **Price reduced** for 14 days, with the old price on the
listing page, as long as the price stays lower. **Price drop emails** to members who saved the listing are on by
default on property sites; switch them in **Listings › Settings › Listing details**. See
[Price drop emails](/vehicles-pack/#price-drop-emails).

## Search on a map

The pack adds a map page at `/property-map` on your site: a map beside a list of property listings, with the price on
each pin. Visitors move the map to search that area, draw an area or search within a radius, and filter by sale or
rent, type, minimum bedrooms and price. Only listings with a location on the map appear.

Add the page to your menu so visitors find it. In Nova, the **Property search** section has a **Map** button, and its
layout can open the results on the map straight away. In the default, Atlantic Lite, Atlantic, Mercury and Modern
Deluxe 4 themes, listings pages show a **Search on a map** link above the results: on the home page and search results, and on the
pages of categories where property fields are used. It opens the map for that category.
{: .tip}

## Compare and similar properties

Property listings and, in Nova, property cards have a **Compare** button. Visitors add up to 4 properties and open a
table with the photo, price, price per area and every key spec side by side, with the differences highlighted. The
list is remembered in their browser.
With [Compare listings](/search-and-filters/#compare-listings) on, the button becomes **Add to compare** and opens
your site's general compare page, which shows the same property rows.

Under a property listing, **Similar properties** shows other live listings with the same sale or rent, type and
bedrooms in a similar price range.

## Virtual tour, energy rating, monthly costs and availability

These extras read fields on your posting form. When the pack is on and a field is missing, you see
*Let sellers add more to property listings* on property listings, with **Add the fields**. It adds, in every category:

| Field | What visitors see |
| --- | --- |
| **Virtual tour or video** | A Matterport, Kuula, YouTube or Vimeo tour on the listing. Nothing loads from those sites until the visitor clicks play. |
| **Monthly fees** | **Monthly costs**: the rent or an estimated mortgage payment, plus the fees, and the total. |
| **Available from** | *Available now* or *Available from* a date, on the listing and its card. |

An energy rating field (from the property template or your own) shows an A to G **Energy rating** scale on the listing
and an *EPC* chip on its card. If you'd rather not add the fields, click **No thanks**.

## Landing pages

People search for things like "2-bedroom apartment for rent in Brussels". The pack gives your site a page for each
combination of your own values:

| Page | Example |
| --- | --- |
| A type, sale or rent | `/property/apartment-for-rent` |
| With bedrooms | `/property/apartment-for-rent/2-bedrooms` |
| In a location | `/property/brussels/apartment-for-rent` |
| In a location, with bedrooms | `/property/brussels/apartment-for-rent/2-bedrooms` |

Each page lists the matching live listings, 24 per page, with live counts and prices. Only combinations with at least
3 live listings get a page, and those pages go into your [sitemap](/sitemap-classifieds-website/). Switch them off with
**Property landing pages** in the property settings.

## Import from a property feed

Estate agents' software sends their properties to the portals as an XML feed. You can bring those properties onto your
site:

1. Go to **Tools** and click **Start** in the **Move your site to Yclas** card.
2. Under **Import from a property feed**, enter the **Feed address** (the `https://` address the agent's software
   gives) or upload the **.xml** file, up to 25 MB.
3. Click **Read the feed and continue**, check the preview and run the import, as for any
   [import](/how-to-import-ads/).
{: .steps}

Kyero v3 feeds work, and so do most XML feeds with the usual tag names. Titles, descriptions, prices, locations,
photos and the property details (type, sale or rent, bedrooms, bathrooms, size, plot) go into your own fields.
Import the same feed again later to update those listings instead of adding them twice. Properties that drop out of
the feed are reported, not unpublished, in case the export was incomplete.

## Check photos with AI

Where [listings from a photo](/listing-from-a-photo/) are on, Nova's posting form shows **Check my photos with AI**
on property sites. It:

- writes the room under each photo and offers **Use the suggested order**, with the best photo as the cover;
- points out photos that are dark, blurry, portrait or a duplicate;
- fills in the property type, bedrooms and bathrooms when they're clearly visible, and a draft title and description,
  only where the seller left them empty. Never a size or a price;
- finds faces, house numbers and number plates and offers **Blur faces, house numbers and plates**.

Nothing is posted until the seller checks the form and posts it. Each batch of up to 6 photos counts as one listing
from a photo against your monthly allowance.

## Sections for your pages

If your plan includes the [AI page builder](/ai-page-builder/), the pack adds two sections:

- **Property search**: a search with sale or rent, bedrooms and bathrooms filters taken from your own fields, as a
  list or map first.
- **Mortgage calculator**: visitors enter a home price, deposit, interest rate and term and see an estimated monthly
  payment.

## Related guides

- [Property and jobs packs](/property-and-jobs-packs/) — the property field template and the jobs pack.
- [Business sellers](/business-sellers/) — business accounts for agencies, bulk import and stock feeds.
- [Bookings and rentals](/bookings/) — holiday rentals and how sellers manage requests.
- [Custom fields](/how-to-create-custom-fields/) — limit the property fields to the right categories.
- [Vehicles pack](/vehicles-pack/) — the same idea for cars and other vehicles.
- [Equipment pack](/equipment-pack/) — the same idea for machinery and equipment hire.
{: .cards}
