---
title: Algolia search
description: Connect Algolia to show instant search suggestions for listings, categories, locations and sellers as visitors type, and check whether your theme supports it.
section: integrations
order: 40
permalink: /algolia-search/
keywords: algolia, search, instant search, autocomplete, suggestions, search as you type, index, reindex, application id, api key
updated: 2026-10-07
---

[Algolia](https://www.algolia.com) is a search service. Connected to your marketplace, it shows suggestions under
the search box while visitors type: matching listings, categories, locations and sellers, grouped, with the matching
words highlighted.

Your marketplace's own search keeps working without Algolia. Algolia adds the suggestions as you type.

## Check your theme first

The Algolia suggestions only appear in themes that include them, which today means some of the older themes. The
**Nova** and **Marketplace** themes don't show them, so on those themes connecting Algolia has no visible effect.
Check your theme on **Design › Themes**, and see [Themes](/how-to-change-theme/).
{: .important}

## Connect Algolia

1. Create an account at [algolia.com](https://www.algolia.com). The free plan is enough for most marketplaces.
   Choose a data region close to your visitors.
2. Create an application if Algolia hasn't created one for you.
3. In the Algolia dashboard, open **Settings › API Keys** and keep the page open. You need three values:
   **Application ID**, **Search-Only API Key** and **Admin API Key**.
4. In your admin panel, go to **Integrations** and open **Algolia**.
5. Tick **Enable Algolia** and paste the three values into the matching fields.
6. Click **Save**.
{: .steps}

All three fields are required when Algolia is enabled.

| Setting | What it does |
| --- | --- |
| **Enable Algolia** | Turns the suggestions on in your theme and starts sending your data to Algolia. |
| **Application ID** | Identifies your Algolia application. |
| **Admin API Key** | Lets your site send listings and other records to Algolia. It is only used on the server, never shown to visitors. Keep it secret. |
| **Search-Only API Key** | Lets visitors' browsers search your Algolia data. It is safe to be public: it can only search. |

## What is sent to Algolia, and when

Every hour, your site sends Algolia four sets of records, each kept in its own index in your Algolia application:

| Index | Contains |
| --- | --- |
| `yclas_ads` | Published listings: title, description, category, location and link. |
| `yclas_categories` | Category names, descriptions and links. |
| `yclas_locations` | Location names, descriptions and links. |
| `yclas_users` | Members' names and profile links. No email addresses or other contact details. |

New listings show in suggestions within the hour after they are published.

Records are added and updated, but listings that are deleted or no longer published aren't removed from Algolia. If
old listings keep appearing in suggestions, delete the `yclas_ads` index in the Algolia dashboard; it is rebuilt with
your current listings at the next hourly update.
{: .note}

Because the index names are fixed, use a separate Algolia application for each marketplace you run.
{: .tip}

## Turn Algolia off

Untick **Enable Algolia** and click **Save**. Your site stops sending data and the suggestions disappear. Your data
stays in Algolia until you delete the application or its indices there.

## Related guides

- [General settings](/change-site-name-site-description/) — the **Search** settings for your site's own search.
- [Themes](/how-to-change-theme/) — choosing a theme.
- [Integrations](/integrations-overview/) — every service you can connect.
{: .cards}
