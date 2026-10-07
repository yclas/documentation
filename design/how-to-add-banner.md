---
title: Banners and ad slots
description: Show banners or Google AdSense ads in the header, footer, sidebar and between listings, and publish your ads.txt file.
section: design
order: 90
permalink: /how-to-add-banner/
keywords: banner, ad, advert, advertising, adsense, ad slot, ads.txt, header banner, footer banner, sidebar banner, monetise, sponsor, image widget, text widget
updated: 2026-10-07
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
| Whole site, automatic | Wherever the ad network decides. | **Settings › General › Advanced**: **HTML in HEAD Element** (for example AdSense auto ads) |

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

## Add Google AdSense

1. In AdSense, add your site and create an ad unit, or switch on **Auto ads**.
2. For **Auto ads**, paste the AdSense code into **HTML in HEAD Element** in **Settings › General › Advanced**.
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
- **Selling promotion instead:** members can also pay to feature their own listings. See [Featured listings and
  promotions](/how-to-create-featured-plan/).

## Related guides

- [Ways to make money from your marketplace](/how-to-earn-money/) — banners and everything else.
- [Widgets](/overview-of-widgets/) — the Image and Text widgets in detail.
- [Theme options](/theme-options/) — all the banner fields of your theme.
- [Add code to the head and footer](/html-in-head-element/) — site-wide scripts.
{: .cards}
