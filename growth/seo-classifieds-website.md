---
title: SEO for your marketplace
description: What Yclas already does to help search engines understand your marketplace, and the handful of things only you can do to rank better.
section: growth
order: 10
permalink: /seo-classifieds-website/
keywords: seo, search engine optimisation, google, ranking, meta title, meta description, keywords, structured data, rich results, category description, title pattern, canonical, landing pages, sold listings, schema, social image, seo settings, seo health, not on google, localbusiness, local business, opening hours schema, google business
updated: 2026-10-22
---

SEO (search engine optimisation) is everything that helps your marketplace show up when people search Google or Bing
for what you list: "used tractors in Ohio", "rooms to rent Leeds". Yclas takes care of the technical side for you.
What makes the real difference, though, is content: good category and location names, useful descriptions and, above
all, lots of fresh listings.

## What Yclas does for you

You don't need to set any of this up:

| What | How Yclas handles it |
| --- | --- |
| Readable addresses | Listings, categories and pages get addresses made of words, such as `/cars/blue-ford-focus-2019.html`. |
| One address per page | Every page tells search engines its one true address (its *canonical*), without sort orders, filters or tracking codes, so Google doesn't split your ranking across copies. A listing opened under an old or wrong category address is sent to its real address. |
| Page titles | Each page gets its own title: the listing title, the category name, the category and location together ("Cars - Madrid"), and " - Page 2" on the following pages of a list. |
| Meta descriptions | The short text under your link in search results is filled in for every page: your site description on the home page, the category or location description (or "All *Cars* in *Madrid*"), and the listing's own text for listings. |
| Category and location landing pages | Every category in every location, such as *Cars in Madrid*, is a page of its own that can rank for that search. It shows the descriptions of both the category and the location, and links to the same category in other locations and to the other categories in that location, with listing counts. |
| Structured data | Listing pages tell search engines the name, photos, description, price, stock and review ratings, so they can show richer results. Listing, category and location pages also carry a breadcrumb trail, and the home page tells Google about your site name and search box. |
| Sold and removed listings | Sold and deactivated listings answer "not found" to visitors and search engines, so Google drops them quickly instead of showing dead listings. You and your moderators can still open sold ones. |
| Empty pages | Category and location pages with no listings, and profiles of members with no listings, are kept out of search results, so thin pages don't drag your site down. A page number beyond the last page answers "not found". |
| Several languages | On a [multilingual site](/how-to-activate-multilingual-mode/), search engines are told about every language version of each page. |
| Social previews | Every page has the tags Facebook, X, WhatsApp and LinkedIn read to build a link preview. |
| Sitemap and IndexNow | A sitemap of all your listings and pages is rebuilt daily, and new, changed and removed listings are reported to Bing and other search engines that use IndexNow. See [Sitemap](/sitemap-classifieds-website/). |
| robots.txt | Search engines are kept away from endless search-result pages and from your admin panel, so they spend their time on your listings. See [Search engine visibility](/allowdisallow-bots-crawlers/). |
| Maintenance mode | While your site is in [maintenance mode](/how-to-activate-maintenance-mode/), search engines are told it is temporarily unavailable, so they come back later rather than dropping your pages. |
| Mobile-friendly themes | Search engines rank mobile-friendly sites higher, and the current Yclas themes adapt to any screen. |

If your admin dashboard says **Not on Google yet**, your site is on a free trial or the free plan: search engines are
asked not to list it until you choose a plan. Everything else works as usual, and search engines can list your pages
once you subscribe.
{: .note}

## What you should do

### 1. Write a good site name and description

Go to **Settings › General › Your site**. The **Site name** appears in every page title. The **Site description** is
what Google usually shows under your home page; keep it under 160 characters (the panel counts for you) and say
plainly what people find on your site and where.

> Good: *Buy and sell used farm machinery across Ohio. Tractors, balers and parts from local farmers and dealers.*
>
> Weak: *Welcome to the best classifieds site on the internet!*

### 2. Name categories and locations the way people search

People search "apartments for rent", not "Residential – Type A". Use the words your visitors would type. Then give
each important category and location a description: it is the introduction on its own page and on its landing pages
in every location. Fill in its **Search engines** card too: a **Meta title** and **Meta description** that say how it
shows up in Google. Leave them empty and Yclas builds them from the name and description. On a multilingual site you
set them per language in the **Translations** card. See [Categories](/how-to-add-categories/) and
[Locations](/how-to-add-locations/).

### 3. Get listings, and keep them fresh

Search engines love sites that change often and have many useful pages. Every listing is a new page that can rank for
its own search. A marketplace with five listings won't rank, however good its settings. Seed your site, encourage
members to write full descriptions with good photos, and make sure expired listings get renewed.

### 4. Write content around your niche

Use the [blog](/how-to-create-a-blog/), the [FAQ](/create-frequent-asked-questions-faq/) and [pages](/how_to_add_pages/)
to answer the questions your visitors ask: "How to check a used tractor before buying", "What documents do I need to
rent a flat". These articles bring in searches your listings never would, and they're easy to share.

### 5. Connect Google Search Console

It's free, it tells you which searches bring people to your site, and it warns you about problems. See [Get your site
into Google](/google-search-console/).

### 6. Earn links

Links from other websites are still one of the strongest signals for Google. Get listed in local business
directories, ask partners and associations to link to you, and share your listings where your audience already is.
See [Promote your marketplace](/promote-classifieds-website-free/).

### 7. Use your own domain

A domain of your own (`farmtrader.com` rather than a subdomain) is easier to remember, easier to link to and builds
authority over the years. See [Connect your own domain](/custom-domain/).

## SEO settings

**Settings › SEO** holds the site-wide defaults. You don't need to change anything here: with the defaults, your pages
look as described above.

| Setting | What it does |
| --- | --- |
| **Title patterns** | The page title for each kind of page: **Home page**, **Category pages**, **Location pages**, **Listing pages**, **Blog posts** and **CMS pages**. `{title}` is the title Yclas builds and `{site_name}` your site name, for example `{title} - Used tractors in Ohio - {site_name}`. The pattern is the whole title, so include `{site_name}` where you want it. Leave `{title}` to change nothing. |
| **Default image (URL)** | The picture used in social previews when a listing or blog post with no photo is shared. A full `https://` address. |
| **Redirects** | Sends old addresses to the right page. See [Redirects and the 404 log](/redirects/). |
| **404 log** | Lists the addresses that answered "page not found". See [Redirects and the 404 log](/redirects/). |
| **Automatic internal links** | The first mention of a category or location name in a blog post becomes a link to it (up to six links a post). Works with the Nova theme. |
| **Structured data by listing type** | Listings with vehicle, property, job, event or business details are described to Google as that type (a vehicle with its mileage, a property with its bedrooms) instead of a plain product. Yclas decides from the listing's custom fields. On a [business directory](/directory-mode/), business listings become a LocalBusiness with their street address, map point, phone, website and opening hours. |

A title, description or image you set on a listing, category, location, blog post or page always wins over these
defaults. The **Search result preview** at the bottom shows how a listing would look in Google with your **Listing
pages** pattern. Click **Save changes** after editing.

**Redirects** is on for new sites; the other switches start off, except **Structured data by listing type**, which is
on for directory and services sites created in the sign-up wizard.

### SEO for one listing

On the Nova and Atlantic Lite themes, administrators see an extra **SEO (title, description, social image, schema
type)** button when they edit a listing. It opens:

- **SEO title** and **SEO description**: what Google shows for this listing, instead of the title pattern and the
  listing's own text;
- **Social image (URL)**: the picture for social previews, instead of the first photo;
- **Schema type**: how the listing is described to search engines (Product, Vehicle, RealEstateListing, JobPosting,
  Event or LocalBusiness). **Automatic** lets Yclas decide.

Leave a field empty to use the default. Sellers don't see these fields.

### SEO health

Your **Analytics** page has an **SEO health** card with a few quick checks: categories, locations and blog posts with
**Missing titles**, **Thin categories** (main categories with fewer than 3 published listings), **Broken links (404s)**
logged, and when your **Sitemap** was last built.

## Things to avoid

- **Hiding the site from search engines by accident.** Check that **Hide from search engines** is off under
  **Settings › General › Access & privacy**, and that the site isn't in maintenance mode or private.
- **Keyword stuffing.** Repeating the same words in titles and descriptions makes your pages look like spam to both
  people and Google.
- **Changing addresses often.** A category's or location's **Seoname** is part of the address of every page in it.
  With **Redirects** on, old addresses send visitors to the new ones, but search engines still take a while to catch
  up. Pick good names early.
- **Copied descriptions.** Listings copied word for word from other websites rarely rank.

SEO takes time. A new site can take weeks to appear in Google and months to rank well. Keep adding listings and
content, and check Search Console every few weeks rather than every day.
{: .tip}

## Related guides

- [Get your site into Google](/google-search-console/) — verify your site and submit your sitemap.
- [Search engine visibility](/allowdisallow-bots-crawlers/) — robots.txt and hiding your site.
- [Redirects and the 404 log](/redirects/) — keep old addresses working.
- [Tracking codes and analytics](/how-to-add-tracking-codes/) — measure what's working.
{: .cards}
