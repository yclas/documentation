---
title: General settings
description: A reference for every setting on Settings › General, from your site name and moderation mode to time zone, date format, search and custom code.
section: settings
order: 10
permalink: /change-site-name-site-description/
redirect_from:
  - /how-to-change-time-zone/
  - /change-date-format/
keywords: site name, site description, landing page, contact page, time zone, timezone, date format, country, measurement, units, metric, imperial, search, description, multi select, locations alphabetically, api key, ads.txt, robots.txt, regional
updated: 2026-10-07
---

**Settings › General** holds the settings that shape your whole marketplace: what it is called, how new listings
go live, who can see it and sign up, how dates and money look, and how search works. This page goes through every
field in the order the panel shows them.

## Change a setting

1. In the admin panel, go to **Settings › General**.
2. Use the list of sections on the left to jump to the part you need, or scroll.
3. Change the setting.
4. Click **Save changes** in the bar that appears at the bottom of the page.
{: .steps}

Every field on the page is saved together, so you can change several settings and save once. If you try to leave
with unsaved changes, the panel warns you first.

## Your site

| Setting | What it does |
| --- | --- |
| **Site Name** | The name of your marketplace. It appears in the header when you have no logo, in page titles and browser tabs, and in the emails your site sends. It can't be empty. |
| **Site Description** | One or two sentences about your marketplace, used as the description of your home page in Google results and when people share your link. A counter shows the length: keep it under 160 characters, because Google cuts off longer descriptions. |
| **Landing Page** | The page visitors see when they open your address: the **Home page** (default), **All listings**, or **Users** (the list of members). |
| **Contact Page Content** | Shows one of your [pages](/how_to_add_pages/) above the form on your contact page, for example your opening hours or address. Choose **Deactivated** to show the form on its own. |

Write the site description for people, not for search engines: say what members can buy or sell and where. A
description stuffed with keywords looks like spam in Google's results.
{: .tip}

## How new listings go live

The moderation mode decides what happens after a member clicks to publish a listing. Pick one of six options:

| Option | What happens |
| --- | --- |
| **Post directly** | Listings go live as soon as they are posted. |
| **Moderation on** | You approve each listing before it goes live. |
| **Payment on** | Listings go live once the poster pays. |
| **Email confirmation on** | The poster confirms by email, then it goes live. |
| **Email confirmation with Moderation** | Email confirmation, then your approval. |
| **Payment with Moderation** | The poster pays, then you approve. |

The payment modes charge the price you set on each category. [Moderation](/how-ads-moderation-works/) explains the
approval queue, and [Categories](/how-to-add-categories/) shows how to set a price to post.

## Access and privacy

| Setting | What it does |
| --- | --- |
| **Maintenance Mode** | Shows visitors a "back soon" page while you keep working on the site. See [Maintenance mode](/how-to-activate-maintenance-mode/). |
| **Private Site** | Only signed-in members can see the site. When it is on, **Private Site Landing Page Content** lets you show one of your pages to signed-out visitors on the page they see instead of your site. See [Private site](/private-site/). |
| **Hide from search engines** | Asks search engines not to crawl or list your site. Leave it off on a live marketplace. See [Search engine visibility](/allowdisallow-bots-crawlers/). |
| **Cookie Consent** | Shows a cookie notice to new visitors. See [Cookie consent](/cookie-consent/). |
| **Accept Terms Alert** | Visitors must accept the page you choose (usually your terms of use) before they can use the site. See [Terms of use and age alert](/activate-access-terms-alert/). |

## Sign-ups

These settings control who can create an account. [Sign-up and login settings](/registration-and-login/) explains
each one in detail.

| Setting | What it does |
| --- | --- |
| **User Must Verify Email** | New members have to confirm their email address after registering. |
| **Allowed Email Domains** | Only addresses on these domains can sign up, for example `yourcompany.com` for a staff marketplace. Separate domains with commas. Leave it empty to allow everyone. |
| **Disallowed Email Domains** | Addresses on these domains can't sign up. Separate domains with commas. |
| **Disallow Email Subdomains** | Blocks addresses on subdomains, such as `name@mail.example.com`, which spammers often use. |
| **Blocked Emails** | Individual email addresses that can't sign up, one per line. |

## Regional

| Setting | What it does |
| --- | --- |
| **Country** | The country the phone number field starts with, so members don't have to pick their dialling code. Choose **None** to leave it blank. |
| **Time Zone** | The time zone of your marketplace. See below. |
| **Date Format** | How dates are written across your site. See below. |
| **Money Format** | How prices are written: currency symbol, its position, and decimal and thousands separators. See [Currency and price format](/how-to-currency-format/). |
| **Measurement Units** | **Metric** or **Imperial**. Distances, for example "5 km from you" when [auto-locate](/auto-locate-visitors/) is on, use these units. |

### Time zone

Every date and time your site shows or records follows this setting: when a listing was published or expires, order
and payment dates, reviews, forum replies and blog posts. If replies on your forum seem to come
from the future, or listings expire at odd hours, the time zone is wrong.

Pick the city that shares your time zone, for example **Europe/Madrid** for Spain or **America/New_York** for the
east coast of the United States. Daylight saving time is handled for you.

### Date format

The date format uses letter codes. The field shows how today's date looks with the format you saved, so you can check
it before and after you change it.

| Code | Means | Example |
| --- | --- | --- |
| `d` | Day with a leading zero | 07 |
| `j` | Day without a leading zero | 7 |
| `m` | Month as a number with a leading zero | 10 |
| `n` | Month as a number without a leading zero | 10 |
| `M` | Short month name | Oct |
| `F` | Full month name | October |
| `y` | Two-digit year | 26 |
| `Y` | Four-digit year | 2026 |
| `H:i` | Hours and minutes, 24-hour clock | 14:30 |

Some common formats:

| Format | Shows |
| --- | --- |
| `d-m-y` (the default) | 07-10-26 |
| `d/m/Y` | 07/10/2026 |
| `m/d/Y` | 10/07/2026 |
| `j F Y` | 7 October 2026 |
| `d-m-Y H:i` | 07-10-2026 14:30 |

Any other character, such as `-`, `/`, `.` or a space, is shown as it is.

Month names written with `M` or `F` are always in English, whatever the language of your site. If your site isn't
in English, use a numeric format such as `d/m/Y`.
{: .note}

## Languages

| Setting | What it does |
| --- | --- |
| **Multilingual** | Lets visitors switch your site between several languages, and files each listing under the language it was posted in. |
| **Languages** | The language codes visitors can choose from, separated by commas, for example `en_UK,es_ES`. It appears when **Multilingual** is on. |

Read [Multilingual sites](/how-to-activate-multilingual-mode/) before you switch this on: it changes which listings
each visitor sees. To change the main language of your site or edit its wording, see
[Language and translations](/how-to-change-language/).

## Search

| Setting | What it does |
| --- | --- |
| **Include Search by Description** | Search also looks for the words in listing descriptions, not only in titles. Members find more, but results are less precise. |
| **Multi Select Category and Location Search** | Visitors can pick several categories and locations at once in the search form. |
| **Automatically Sort All Locations Alphabetically** | Lists locations in alphabetical order everywhere, ignoring the order you set on the [Locations](/how-to-add-locations/) page. |

## Advanced

Only change these if you know what they do.

| Setting | What it does |
| --- | --- |
| **API Key** | The key apps and scripts use to work with your site through the [REST API](/api-documentation/). Treat it like a password. |
| **HTML in HEAD Element** | Code added to the `<head>` of every page, such as a site verification tag. See [Add code to the head and footer](/html-in-head-element/). |
| **HTML in Footer** | Code added at the end of every page, such as a chat widget. |
| **Ads.txt** | The contents of your `ads.txt` file, which ad networks such as Google AdSense ask for. The link under the field opens the live file. See [Banners and ad slots](/how-to-add-banner/). |
| **Robots.txt** | The contents of your `robots.txt` file, which tells search engines what to crawl. The link under the field opens the live file. See [Search engine visibility](/allowdisallow-bots-crawlers/). |

A broken snippet in **HTML in HEAD Element** or **HTML in Footer** can break the layout of every page. Paste code
exactly as the service gives it to you, and check your site straight after saving.
{: .warning}

## Related guides

- [Maintenance mode](/how-to-activate-maintenance-mode/) — hide the site while you work on it.
- [Language and translations](/how-to-change-language/) — your site's language and wording.
- [Email settings](/general-email-configuration/) — who your emails come from and how they are sent.
- [Moderation](/how-ads-moderation-works/) — approving listings before they go live.
{: .cards}
