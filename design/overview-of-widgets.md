---
title: Widgets
description: Add blocks such as a search form, latest listings, social buttons, an image or your own HTML to the sidebar, the footer and the post-a-listing page.
section: design
order: 60
permalink: /overview-of-widgets/
redirect_from:
  - /image-widget/
  - /search-widget/
  - /share-widget/
  - /seller-info-widget/
  - /subscribe-widget/
  - /languages-widget/
  - /currency-converter-widget/
  - /map-widget/
keywords: widget, widgets, sidebar, footer, header, block, search widget, image widget, text widget, html, share, follow, subscribe, languages, currency converter, map, seller information, links, rss
updated: 2026-10-07
---

Widgets are small blocks you add around your pages: a search form in the sidebar, social media buttons in the
footer, an image banner, a list of your pages or a box of your own HTML. You choose which widgets to use, where they
go and in what order, without touching any code.

## Where widgets can go

Widgets live in **areas**. Which areas you have depends on your [theme](/how-to-change-theme/):

| Area | Where it shows in Nova |
| --- | --- |
| **Sidebar** | Next to the listings on category and search pages, and on the blog, FAQ, contact page, forum and member profiles. Not on the home page or on a listing's own page. |
| **Footer** | At the top of the footer, on every page. |
| **Post a listing** | Next to the form members use to post a listing. |
| **Inactive** | Nowhere. Widgets here keep their settings, ready to bring back later. |

Some older themes also have a **Header** area, above the content on every page. The sidebar position (left, right
or none) is set in [Theme options](/theme-options/).

In Nova, sidebar widgets replace the built-in filters on category pages. If you want visitors to keep filtering
by price, location and custom fields, either leave the sidebar empty or add a **Search** widget with **Advanced
option** and **Custom fields in search** set to TRUE.
{: .important}

## Add a widget

1. In the admin panel, go to **Design › Widgets**.
2. In **Add a widget** on the right, find the widget (the search box helps) and click **+ Add**.
3. In **Where do you want the widget displayed?**, choose the area: `sidebar`, `footer`, `publish_new` (next to
   the post-a-listing form) or `inactive`.
4. Fill in the widget's settings. Most have a title; leave it empty for no title.
5. Click **Add widget**.
{: .steps}

You can add the same widget more than once, for example a **Text** widget in the sidebar and another in the footer.

## Move, edit or remove a widget

- **Reorder or move:** drag a widget by its handle to a new position or into another area. The change is saved
  as soon as you drop it.
- **Edit:** click **Edit**, change the settings and click **Save**.
- **Hide for now:** drag it to **Inactive**, or edit it and choose `inactive`. Its settings are kept.
- **Delete:** click **Edit**, then **Delete** and confirm. The widget and its settings are gone.

## The widgets

### Listings and navigation

**Ads** — a list of listings. **Type ads to display**: **Latest Ads**, **Popular Ads last month** or **Featured
Ads**; **Number of ads to display** (1–50); **Ads title displayed**.

**Featured Ads** — your [featured listings](/how-to-create-featured-plan/), with **Featured title displayed** and
**Number of featured ads to display**. Shows nothing while no listing is featured.

**Categories** — links to your categories. On a category page it lists that category's subcategories, so visitors
can drill down. Setting: **Categories title displayed**.

**Locations** — the same for [locations](/how-to-add-locations/), keeping the category the visitor is in. Setting:
**Locations title displayed**.

**Search** — a search form that sends visitors to the search page. Settings:

| Setting | What it does |
| --- | --- |
| **Title displayed** | The heading above the form. |
| **Advanced option** | TRUE adds category, location and price fields to the keyword box. |
| **Custom fields in search** | TRUE adds your searchable [custom fields](/how-to-create-custom-fields/). |

**Recently searched** — the visitor's own latest searches, as links. Setting: **Number of searches to display**.

**User Location** — the location the visitor has picked, with a **Change Location** link. Only shows once a visitor
has chosen a location, for example with [auto-locate](/auto-locate-visitors/).

**User Search** — a search form for member profiles, with **Custom fields in search** for your [user custom
fields](/users-custom-fields/).

**Map** — a Google map of listings, following the category and location the visitor is browsing. Settings: **Map
height in pixels** and **Zoom in the map**. It needs the [Google Maps integration](/how-to-configure-Google-Map-Settings/)
set up, and only listings with an address Google can find appear on it. An empty map almost always means your
listings have no recognisable address yet.

**Interactive Map** — the clickable region map you set up in [Interactive map](/how-to-add-interactive-map/).

### Content

**Text** — any text or HTML: an announcement, opening hours, an embedded form, an ad code. Settings: **Text title
displayed** and **HTML/text content here**. The HTML is used exactly as you type it, so paste code only from
sources you trust.

**Image** — a picture or banner that resizes to fit the area. Settings:

| Setting | What it does |
| --- | --- |
| **Title displayed** | Optional heading above the image. |
| **Enter the image URL** | The full address of the image, starting with `https://`. |
| **URL to redirect when clicked (Optional)** | Where a click on the image goes. Leave empty for an image that isn't a link. |

The image must already be online. Any image you have inserted in a page or an email is listed under **Media ›
Image library**, where **Copy URL** gives you its address.
{: .tip}

**Pages** — links to all your published [pages](/how_to_add_pages/). Setting: **Page title displayed**.

**Links** — your own list of links. Put one link per line as `address|name`, for example
`https://www.example.com|Our shop`, and choose the **Target** (**New tab or window** or **Parent frame**, which opens
in the same tab).

**Blog posts** — your latest [blog](/how-to-create-a-blog/) posts. Settings: **Blog posts limit, if none display
all** and **Widget title displayed**.

**Forum Topics** — the latest [forum](/add-forums-section/) topics, with **Forum Limit, if none display all**.

**RSS** — headlines from any RSS feed. Settings: **RSS url address**, **Number of items to display**, **How often we
refresh the RSS, in seconds** and **RSS title displayed**.

**Stats** — your site's totals: views, listings and users.

### Social

**Share** — buttons to share the page on social networks. Leave **Social media to display** empty to show them
all, or list the ones you want, separated by commas, using these words: `whatsapp`, `facebook`, `tweet`,
`linkedin`, `pinterest`, `vkontakte`, `odnoklassniki`, `tumblr`, `reddit`, `stumbleupon`, `digg`, `flipboard`,
`email`, `print`. The WhatsApp button only appears on phones.

**Follow** — icons linking to your own profiles. Fill in the networks you use: **Facebook URL**, **Twitter URL**,
**Instagram URL**, **Pinterest URL**, **Linkedin URL**, **Youtube URL**, **Flickr URL**, **Telegram URL** (a
**Google+ URL** field is still there; leave it empty).

In Nova you can also put Facebook, X (Twitter) and Instagram icons in the footer without a widget, in
[Theme options](/theme-options/).
{: .tip}

**Subscribe** — lets visitors sign up for an email whenever a new listing matches what they're looking for.
Settings:

| Setting | What it does |
| --- | --- |
| **Categories** / **Locations** | TRUE lets visitors pick the categories or location they care about. |
| **Price** | TRUE adds a price range slider. |
| **Minimum Price**, **Maximum Price**, **Increment Step** | The range and steps of that slider (0 to 1000 in steps of 100 by default). |
| **Subscribe title displayed** | The heading. |

Visitors who aren't signed in enter their email address, and an account is created for it. When a new listing is
published in a matching category, location and price range, they get an email about it. Subscribers are
listed under **Subscribers** in the admin panel. Make sure your [email settings](/general-email-configuration/) work.

**Languages** — a menu of languages for [multilingual sites](/how-to-activate-multilingual-mode/). Leave
**Languages to display coma separated** empty to list all of them, or enter language codes such as
`en_US,es_ES,fr_FR`. Nova already has a language menu in its footer when your site is multilingual.

**Chat** — a public chat room for your visitors, using the free tlk.io service. Settings: **Name of your chat
room/channel** and **Chat height in PX**. For private messages between buyers and sellers, use
[messaging](/how-to-use-messaging-system/) instead.

**Disqus** — the latest comments from [Disqus](/how-to-activate-comments-with-disqus/), with **Number of comments
to display**. It needs Disqus set up first.

### Widgets for a listing's page

These widgets only show on a listing's own page. **Nova and Marketplace don't have a sidebar on that page, so in
those themes they don't appear at all.** They are for the older themes.

- **Seller information** — about the seller, with options to show a contact button (**Show contact form**), their
  description, their last login date, their location (**Location on Map** or **Address**) and their user custom fields.
- **Contact** — a form to message the seller.
- **Currency Converter** — lets visitors see the price in another currency. It needs a free or paid API key from
  fixer.io in **Enter your API key.** List the currencies with **Currencies to display coma separated** (three-letter
  codes such as `EUR,USD,GBP`, or the groups `major`, `european`, `skandi`, `asian` and `american`), and set
  **Choose the default currency (e.g. USD)** only if your prices aren't in your site's currency.
- **Tools** — buttons for the seller and admins: edit, deactivate, and pay to feature or bump the listing; admins
  also get spam and delete.

Nova's listing page already has its own seller box and contact button.
{: .note}

### Payments

**Coupon** — a box where members enter a [coupon](/how-to-use-coupon-system/) code. It only shows while you have
coupons that can be used.

## Tips

- Keep the sidebar short. Two or three useful widgets beat ten that push the listings down on phones.
- After [switching theme](/how-to-change-theme/), check **Design › Widgets**: areas the new theme doesn't have
  aren't shown, and their widgets don't appear on the site.
- Widgets that depend on a feature (blog, forum, coupons, maps) show nothing until that feature is set up.

## Related guides

- [Theme options](/theme-options/) — sidebar position and Nova's built-in filters.
- [Banners and ad slots](/how-to-add-banner/) — Image and Text widgets for advertising.
- [Menu and footer links](/modify-top-menu/) — links in the top bar and the footer.
- [Custom CSS](/how-to-use-custom-css/) — restyle a widget.
{: .cards}
