---
title: Send your listings to Google Shopping, job boards and car ads with listing feeds
nav_title: Listing feeds
description: Turn on product, job and vehicle feeds for Google Merchant Center, job aggregators such as Jooble and Adzuna, Google vehicle ads and Meta's automotive catalog.
section: integrations
order: 140
permalink: /listing-feeds/
keywords: listing feeds, product feed, feed, xml feed, google shopping, google merchant center, merchant center, shopping ads, free listings, scheduled fetch, data source, job feed, indeed, indeed feed, indeed xml, jooble, adzuna, talent.com, careerjet, jora, job boards, job aggregators, google for jobs, jobposting, google vehicle ads, vehicle listing ads, store code, google business profile, meta, facebook, instagram, automotive catalog, automotive inventory ads, commerce manager, catalog, catalogue, car ads, make new addresses, regenerate feed
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- Four feeds: **Google Merchant Center** (products), **Job boards (Indeed format)**, **Google vehicle ads** and **Meta automotive catalog**.
- Every feed is off until you turn it on in **Add-ons › Listing feeds**. Each has its own private address that the service fetches.
- Each page of a feed holds about 500 listings and is refreshed at most once an hour.
- Indeed doesn't take free feeds from job boards. Jooble, Adzuna, Talent.com, Careerjet and Jora read the same file.
</div>

A listing feed is a file with your live listings that another service fetches on its own schedule. You give the
service the feed's address once, and from then on it picks up new, changed and removed listings by itself. That puts
your listings in front of people who never visit your site: shoppers on Google, job seekers on job search engines
and car buyers on Google and Facebook.

Your site makes the feed and keeps it up to date. You need an account with each service you send it to, and you
manage your listings there with their own tools and costs. No API keys are stored on your site: the services fetch
the feed from you.

## The four feeds

| Feed | Who reads it | What goes in |
| --- | --- | --- |
| **Google Merchant Center** | Google Shopping's free listings and Shopping ads | Listings with a fixed price and at least one photo. |
| **Job boards (Indeed format)** | Jooble, Adzuna, Talent.com, Careerjet and Jora | Your job offers, with company, location, salary and contract type when the listing has them. |
| **Google vehicle ads** | Google Merchant Center's vehicle ads, for car dealers | Vehicles with a make, model, year, price and photo. |
| **Meta automotive catalog** | Vehicle ads on Facebook and Instagram, through Meta Commerce Manager | Vehicles with a make, model, year, price and photo. |

Every feed takes only published listings that haven't expired. Fields you made private or members only are never
sent, and neither are sellers' email addresses or phone numbers.

## Turn a feed on

1. In your admin panel, go to **Add-ons**, open the **Other** tab and click **Listing feeds**.
2. Find the feed's card and switch it on.
3. Under **Categories**, pick the categories to send. Hold Ctrl (Cmd on a Mac) to pick more than one. A category
   includes its subcategories. Pick none to send every category.
4. Fill in the feed's own settings, if it has any (see below), and click **Save** on that card.
5. The card now shows **Feed address**. Copy it and add it at the service, as described below.
{: .steps}

Each card is saved on its own, so save one feed before you change the next. To turn a feed off, switch it off and
click **Save**: its address stops working straight away, and the service stops getting your listings.

If a feed's switch is greyed out, the card says why, for example that your site has no make field. You can still
pick its categories and save its settings. See [Troubleshooting](#troubleshooting).
{: .note}

### Settings for each feed

| Setting | What it does |
| --- | --- |
| **Categories** | The categories the feed sends, with their subcategories. None selected: every category (for the job feed, every listing with a job field such as contract type or salary). |
| **Condition when a listing doesn't say** | Google Merchant Center only. **Used** or **New**, for listings without a condition field. It starts as **Used**, because Google treats a product without a condition as new. |
| **Google product category** | Google Merchant Center only, optional. The number or name from Google's product taxonomy that fits most of your listings, for example 916 for cars or 2271 for dresses. It applies to the whole feed. |
| **Store code** | Google vehicle ads only. The store code of your dealership in Google Business Profile, linked to Merchant Center. Every vehicle in the feed is shown at this store. |

## The feed address and its pages

The feed address is private: anyone who has it can read the feed. Give it only to the service it is for.

A feed page holds about 500 listings. When a feed has more, the card shows one address per page, each with
`?page=2`, `?page=3` and so on at the end, up to 20 pages. Add **every** page's address to the service. Each page
can be its own data source (Google) or data feed (Meta). A listing stays on its page; new listings go on the last
page, and when it is full a new page appears on the card. Check the card from time to time as your site grows.

### How often it refreshes

Each page is built again at most once an hour, when the service asks for it. The service decides how often it asks:
Merchant Center and Commerce Manager let you pick a daily or hourly fetch, and the job sites fetch on their own
schedule. A new or removed listing shows on the service after its next fetch.

### Make new addresses

If an address got out, click **Make new addresses** under **New addresses** and confirm. Every feed gets a new
address and the old ones stop working at once. Give the new address to each service you use, or they stop getting
your listings.

## What's left out, and why

Each service rejects listings that lack something it requires, so the feeds leave those listings out rather than
send them:

- **No price.** The product and vehicle feeds only take listings with a fixed price: no auctions, no listings
  without a price and no "price on request". If prices are turned off on your site, these feeds can't be turned on.
- **No currency.** Google and Meta need the currency of every price. If your number format has no currency code, or
  your prices are in wallet credits, these feeds leave out every listing and the card says so. Pick a number format
  with a currency in **Settings › General**.
- **No photo.** Google and Meta require at least one photo.
- **Vehicles without a model or year.** The vehicle feeds also need a model and a 4-digit year.
- **Private fields.** A custom field you made private or members only is never sent, even if a service would like
  it. A VIN isn't sent while **Hide the end of VINs** is on in the [vehicles pack](/vehicles-pack/) settings.
- **Job seekers.** With the [jobs pack](/property-and-jobs-packs/#jobs-pack), listings in the job seekers category
  are never in the job feed: people looking for work aren't job offers.

A listing that is left out stays on your site as it is. Add what it's missing, and it goes into the feed on the next
refresh.

## Google Merchant Center

The product feed puts your listings in Google Shopping's free listings, and you can use them in Shopping ads if you
pay Google for ads. You need a free [Google Merchant Center](https://merchants.google.com) account with your site
verified and claimed in it.

1. Turn on **Google Merchant Center** in **Listing feeds** and pick only the categories of things you sell.
2. In Merchant Center, add products from a file, choose to fetch the file from a link (a scheduled fetch), and
   paste the feed address.
3. Pick how often Google fetches it (daily is enough for most sites) and save.
4. If the card shows more than one address, add each page as its own file in the same way.
{: .steps}

What Google gets for each listing: the title, description, link, up to 11 photos, the price (the regular price and
the sale price while the listing is on sale), whether it is in stock (with [stock control](/stock-control/)), the
condition, the brand, GTIN and MPN when you have fields with those names, the category, and shipping prices from the
seller's [shipping profile](/shipping-profiles/) or the listing's shipping price. Without either, Merchant Center's own
shipping settings apply.

Google Shopping doesn't allow vehicles, jobs, real estate or services. Pick only the categories of physical products
you sell, or Merchant Center will disapprove those listings. Your site doesn't block them for you.
{: .important}

## Job boards and Google for Jobs

### The job feed

The job feed uses Indeed's XML format, which most job search engines read. **Jooble**, **Adzuna**, **Talent.com**,
**Careerjet** and **Jora** take a feed address through their partner or publisher forms: send it to each one you want
to appear on. They decide whether to accept your site.

Indeed itself doesn't take free feeds from job boards (sites with many employers' jobs, as a classifieds site is). To
be listed on Indeed, contact Indeed about a partnership or sponsored jobs. Your site can't send jobs to Indeed for free.
{: .warning}

For each job, the feed sends the title, description, date, link, company (a company field, else the seller's public
name, else your site's name), town, and the region and country when they're clear from your locations, the postcode,
the salary (only when the listing has a salary and your prices have a currency), contract type, category, remote or
hybrid, and the expiry date.

The job feed needs job fields, such as contract type or salary, or the categories your jobs are in. Add the jobs field
template in **Listings › Custom Fields** (see [Property and jobs packs](/property-and-jobs-packs/#the-job-fields)), or
pick your job categories on the card.

### Google for Jobs

Google for Jobs doesn't use a feed: Google reads the job listing pages themselves. With **Structured data by listing
type** on in **Settings › SEO** (see [SEO settings](/seo-classifieds-website/#seo-settings)), each job listing describes
itself to Google as a job posting, with the same details as the job feed: when it was published and when it expires,
the company, the location, the contract type, the salary and, with the jobs pack's CV form, that candidates apply on
your site. Remote jobs are marked as remote only when the country is clear. A job listing without a location is
described as an ordinary listing, because Google requires one. Google decides which jobs it shows.

## Google vehicle ads

Google vehicle ads are for car dealers, in the countries where Google offers them. You need a Google Merchant Center
account approved for vehicle ads and a Google Business Profile for your dealership, linked to Merchant Center. Apply
to Google for the vehicle ads programme; it decides who gets in, and you pay Google for the ads.

1. Turn on **Google vehicle ads** and pick your vehicle categories.
2. Enter the **Store code** of your dealership from Google Business Profile and click **Save**.
3. In Merchant Center, add the feed address as a vehicle feed with a scheduled fetch, one per page.
{: .steps}

The feed has one store code, so every vehicle is shown at that one dealership. It suits a site that is one dealer,
not a marketplace with many dealers.
{: .note}

The vehicle feeds read your own vehicle fields: make, model, year, mileage, VIN, body type, fuel, transmission,
colour and condition, whatever you call them. They need a public make field: add the vehicle fields from
**Listings › Custom Fields** › **Add vehicle catalogue** (see [Vehicle data](/vehicle-data/)). Body type, fuel and new
or used are matched to the services' fixed lists from your own words in the main languages; a body type it doesn't
recognise goes out as "other".

## Meta automotive catalog

Meta's automotive inventory ads show your vehicles on Facebook and Instagram. You need a Meta Business account
(Business Manager) and a catalog in Commerce Manager. You pay Meta for the ads.

1. Turn on **Meta automotive catalog** and pick your vehicle categories.
2. In Meta Commerce Manager, create a catalog for vehicles.
3. In the catalog's data sources, add a data feed, choose a scheduled feed, paste the feed address and pick how
   often Meta fetches it.
4. If the card shows more than one address, add each page as its own data feed.
{: .steps}

Meta requires an exterior colour and an address for every vehicle. Listings without a colour or a location still go
out, and Commerce Manager shows them as needing attention. The street address and the map point are only sent if
your site shows addresses on listings. Depending on where your ads run, Meta may also need to approve your catalog
and Facebook page for vehicle ads.

## Troubleshooting

| What you see | What to do |
| --- | --- |
| *Your site has no public make field.* | Add the vehicle fields (**Listings › Custom Fields** › **Add vehicle catalogue**), or make your make field public. |
| *Your site has no job fields (such as contract type or salary).* | Add the jobs field template, or pick the categories your job offers are in and save. |
| *Prices are turned off on your site…* | The product and vehicle feeds need prices. Turn prices on for listings, or use another feed. |
| *Your prices have no currency code…* | Pick a number format with a currency in **Settings › General**. Until then these feeds leave out every listing. |
| The service says the address isn't found | The feed is off, or you made new addresses: copy the address again from the card. A page number past the last page shown on the card isn't found either. |
| The service says *Busy, try again in a minute.* | The page was being built. Services try again by themselves; if you're testing in a browser, wait a minute. |
| Fewer listings at the service than on your site | See [What's left out](#whats-left-out-and-why), check you added every page's address, and read the service's own diagnostics (Merchant Center's product issues, Commerce Manager's issues). |
| Google disapproves listings | Usually a category Google Shopping doesn't allow, or a missing brand or GTIN for new branded products. Change the feed's categories, or add brand and GTIN fields. |

A change to a feed's settings or categories takes effect at the service's next fetch.
{: .tip}

## Related guides

- [Property pack](/property-pack/) — property portals have their own feed, in the Kyero format.
- [UK property portals](/uk-property-portals/) — send properties to Rightmove and Zoopla.
- [Vehicle data](/vehicle-data/) — the make, model and year fields the vehicle feeds read.
- [Property and jobs packs](/property-and-jobs-packs/) — the job fields and the CV form.
- [SEO settings](/seo-classifieds-website/) — structured data for Google, including Google for Jobs.
- [Add-ons and integrations](/addons/) — everything on the Add-ons page.
{: .cards}
