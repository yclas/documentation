---
title: Banners and ad slots
description: Show banners or Google AdSense ads in the header, footer, sidebar and between listings, sell banner space that advertisers buy themselves, and publish your ads.txt file.
section: design
order: 90
permalink: /how-to-add-banner/
keywords: banner, ad, advert, advertising, adsense, ad slot, ads.txt, header banner, footer banner, sidebar banner, monetise, sponsor, image widget, text widget, ad slot widget, between listings, in-feed ad, sell banners, self-serve banners, buy a banner, advertise, advertise with us, advertisers, banner approval
updated: 2026-10-22
---

Advertising is one of the simplest ways to earn from a marketplace with steady traffic. You can sell banner space
directly to local businesses, or let a network such as Google AdSense fill it for you. Yclas gives you several
places to put a banner, all without editing your theme.

## Where you can place banners

| Slot | Where it shows | Where to set it |
| --- | --- | --- |
| Header banner | At the top of every page, under the header. | **Design › Theme Options › General**: **Header banner, allows HTML** |
| Home page only | On the home page, under the search area. | **Theme Options › Homepage**: **Homepage Only Header, allows HTML** |
| Between listings | At a random position among the results on category and search pages. | **Theme Options › Listing**: **Listing random position banner, allows HTML** |
| Footer banner | At the top of the footer, on every page. | **Theme Options › General**: **Footer banner, allows HTML** |
| Sidebar, footer or post-a-listing page | Wherever you place the widget. | **Design › Widgets**: an **Image** widget or a **Text** widget |
| Nova ad slots | Top of every page, every few listings in results, and on each listing page. | **Design › Widgets**: the three **Ad slot** areas. See [Ad slots in Nova](#ad-slots-in-nova). |
| Whole site, automatic | Wherever the ad network decides. | **Design › Custom code**: **Code in the page head** (for example AdSense auto ads) |

The names above are Nova's. Most older themes have the same banner fields in their Theme Options; a few name them
**HTML code for header banner** and **HTML code for footer banner**.

## Add an image banner

The simplest banner is a picture that links to the advertiser.

1. Put the banner image online and copy its address. An image you've inserted in one of your pages appears under
   **Media › Image library**, where **Copy URL** gives you the address.
2. Go to **Design › Widgets** and add an **Image** widget.
3. Choose where it goes (`sidebar` or `footer`), paste the address into **Enter the image URL** and the
   advertiser's address into **URL to redirect when clicked (Optional)**.
4. Click **Add widget**.
{: .steps}

For the header, footer or between-listings slots, paste the banner as HTML instead:

```html
<a href="https://www.advertiser-example.com" target="_blank" rel="sponsored noopener">
  <img src="https://www.example.com/banner-728x90.png" alt="Advertiser name"
       style="max-width:100%;height:auto">
</a>
```

`max-width:100%` keeps the banner from overflowing on phones, and `rel="sponsored"` tells search engines it's a
paid link.
{: .tip}

Common banner sizes are 728 × 90 px for the header and footer, and 300 × 250 px for the sidebar. A banner wider
than the screen is scaled down on phones, so keep the text on it large.

## Ad slots in Nova

The Nova theme has three widget areas made for banners and ad code. Put a **Text** widget with your banner HTML or
AdSense code in any of them:

| Widget area | Code name | Where it shows |
| --- | --- | --- |
| **Ad slot: top of every page** | `ad_header` | At the top of every page, above the content. |
| **Ad slot: between listings** | `ad_listings` | In the results on category and search pages, once every few listings. |
| **Ad slot: listing page** | `ad_page` | Next to the details of each listing. |

1. Go to **Design › Widgets**.
2. In **Add a widget**, find the **Text** widget and click **+ Add**.
3. In **Where do you want the widget displayed?**, choose the slot by its code name, for example `ad_listings`.
4. Paste your banner HTML or ad code and click **Add widget**.
{: .steps}

An empty slot shows nothing. To choose how often the slot between listings appears, go to
[Make money](/make-money/), step 2, **Ad slots**, and set **Between listings: one slot every** (8 listings
unless you change it; 0 turns it off). The same panel shows which slots are in use, with a link to Widgets.

If your [cookie banner](/cookie-consent/) asks visitors to choose cookie categories, the ad slots only show to
visitors who accept marketing cookies.
{: .note}

## Sell banners to advertisers

Instead of placing each local advertiser's banner yourself, let them buy it: with **Sell banners** on, anyone signed
in can buy a banner for your ad slots, pay for it online and see its views and clicks. You only approve it.

1. Click **Make money** in the sidebar and continue to step 2, **What sellers pay for**.
2. Switch on **Sell banners** and set the **Price per week** (suggested: 20 in your site's currency).
3. Finish the steps and click **Save and switch on**.
4. Add a link to the **Advertise** page, at `/banner` on your domain, to your [menu or footer](/modify-top-menu/),
   so advertisers find it.
{: .steps}

Banners need a [payment method](/setup-payment-gateways/) and are shown by the Nova theme.
{: .note}

### How an advertiser buys a banner

On the **Advertise** page, under **Buy a banner**, the advertiser chooses:

| Field | Choices |
| --- | --- |
| **Where** | **Top of every page** (728 × 90 px), **Between listings** (300 × 250 px) or **On listing pages** (300 × 250 px). |
| **Only on one category (optional)** | **Every page**, or one top category: the banner then shows only on that category's pages. |
| **Picture** | The banner image. |
| **Links to** | The advertiser's web address. |
| **Weeks** | 1 to 12 weeks, at your price per week. |

They click **Continue to payment** and pay like any other order (the product is **Banner** in
[Orders](/how-to-manage-orders/)). The same page lists their banners with their status and, once live, about how many
views and clicks each has had.

### Approve or reject a banner

When a banner is paid for, you get an email (*A banner is waiting for your approval*), and your dashboard shows
**Banners to approve** under **Needs your attention**. Both open the **Banners** page:

- **Approve** starts the banner: it runs from now for the weeks bought, and the advertiser is emailed the end date.
- **Reject** stops it and refunds the order. Write a **Reason, if you reject it (sent to the buyer)**. A Stripe
  payment is refunded straight away; for other payment methods the order is marked refunded and you send the money
  back yourself.

The **Banners** page also lists the live banners with their views, clicks and end date. **Stop** ends one early, with
the same refund as a rejection.

### Where bought banners show

Live banners rotate in their place, one per page, labelled *Ad*:

- **Top of every page** and **On listing pages**: alongside anything you placed in those ad slots yourself.
- **Between listings**: only when you have no widget in the `ad_listings` slot, at the spacing set in **Between
  listings: one slot every** in Make money (every 8 listings when that is 0).

A banner for one category shows on that category's pages (and its subcategories'), as well as on listing pages in it.
Views are estimated from a sample of visits; visits from search engine robots aren't counted.

If one of your categories has the web address name `banner`, the Advertise page doesn't open, so the category keeps
its address.
{: .tip}

## Add Google AdSense

1. In AdSense, add your site and create an ad unit, or switch on **Auto ads**.
2. For **Auto ads**, paste the AdSense code into **Code in the page head** in **Design › Custom code**.
   See [Add code to the head and footer](/html-in-head-element/).
3. For a fixed ad unit, paste its code into one of the banner fields above, or into a **Text** widget.
4. Add your ads.txt line (see below).
5. Click **Save changes** and wait for AdSense to review your site.
{: .steps}

Use the same approach for other ad networks: their site-wide script goes in the head, their individual ad units in
a banner field or a Text widget.

## Ads.txt

Ad networks ask you to publish an **ads.txt** file listing who may sell ads on your site. AdSense shows a warning
until it finds one.

1. Copy the line your ad network gives you. For AdSense it looks like
   `google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0`.
2. Go to **Settings › General** and open **Advanced**.
3. Paste it into **Ads.txt**, one line per network.
4. Click **Save changes**.
{: .steps}

Your file is now at `https://your-domain/ads.txt`. The link under the box opens it so you can check.

## Tips

- **Don't overdo it.** One banner above the listings and one in the sidebar earn more over time than a page full
  of ads that sends visitors away. Ads also compete with your members' own listings for attention.
- **Banners between listings** work well because they look like part of the page; keep them the same width as a
  listing card.
- **Privacy:** ad networks set cookies. In the EU and UK you need your visitors' consent first. See [Cookie consent
  and privacy](/cookie-consent/).
- **Ad blockers** hide many banners. The [ad-block detector](/adblock-detector/) can ask visitors to turn theirs off.
- **Selling promotion instead:** members can also pay to feature, boost or sponsor their own listings. See [Boosts and
  promotions](/boosts/) and [Featured listings](/how-to-create-featured-plan/).

## Related guides

- [Ways to make money from your marketplace](/how-to-earn-money/) — banners and everything else.
- [Widgets](/overview-of-widgets/) — the Image and Text widgets in detail.
- [Theme options](/theme-options/) — all the banner fields of your theme.
- [Add code to the head and footer](/html-in-head-element/) — site-wide scripts.
{: .cards}
