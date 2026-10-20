---
title: Add to home screen
description: Let visitors install your marketplace on their phone like an app, with its own icon, full-screen view and an offline page.
section: integrations
order: 100
permalink: /add-to-home-screen/
keywords: add to home screen, install, install banner, app, progressive web app, pwa, mobile app, icon, android, iphone, manifest, offline, web push
updated: 2026-10-20
---

With **Add to home screen** on, your marketplace becomes installable: visitors can put it on their phone's home
screen with your icon and name, and it opens full screen, without the browser's address bar, like an app. It costs
nothing and needs no app store.

## Before you start: upload an icon

The installed app uses your site's touch icon, so upload one first:

1. Go to **Design › Theme Options**.
2. Upload an image in the field labelled *Upload your apple-touch-icon*.
3. Click **Save changes** in the bar at the bottom of the page.
{: .steps}

Use a square PNG of at least **512 × 512 pixels**, with your logo centred and some space around it. The panel
suggests 57 × 57 pixels, but that is only enough for old iPhones: Android uses your icon at up to 512 pixels and a
small image looks blurry. See [Logo and favicon](/add-logo-classifieds-website/).
{: .tip}

If you try to enable the add-on without an icon, the panel says *Please, first upload your apple-touch-icon icon on
theme options.*

## Turn it on

1. Go to **Add-ons** and open **Add to home screen**.
2. Switch on **Enable add to home screen**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

## What visitors see

- **Android, in Chrome:** on your home page, a bar invites them to *Add [your site name] to your Home Screen!*.
  Tapping it opens Chrome's install prompt. They can also install it at any time from Chrome's menu.
- **iPhone and iPad, in Safari:** there is no prompt on Apple devices. Visitors tap **Share**, then **Add to Home
  Screen**. You might add a short how-to to your [FAQ](/create-frequent-asked-questions-faq/).
- **Computers:** Chrome and Edge show an install icon in the address bar.

Once installed, your marketplace opens full screen with your icon and site name. If the phone is offline, a simple
offline page is shown instead of the browser's error.

The bar on the home page appears in the Nova and Marketplace themes. In other themes, visitors can still install your
site from their browser's menu.
{: .note}

### With web push notifications on

When [web push notifications](/push-notifications/) are on as well, Nova and the themes built on the default theme
show a newer banner instead of the bar: *Add [your site name] to your home screen*, with *Open it in one tap, like an
app.* and an **Add to home screen** button. On iPhone and iPad it explains how instead: *Tap the Share button, then
"Add to Home Screen".*

The banner appears once per visitor, from their second visit, and never once your site is installed. On iPhone,
installing your site is also what lets members get web push notifications.

## Where the details come from

| Detail | Taken from |
| --- | --- |
| App name | **Site Name** in **Settings › General**. Long names are shortened under the icon. |
| Description | **Site Description** in **Settings › General**. |
| Icon | The apple-touch-icon in **Design › Theme Options**. |

To change them, change those settings: the installed app picks up the new ones over time, or when it is reinstalled.

## Turn it off

Go to **Add-ons › Add to home screen**, switch off **Enable add to home screen** and click **Save changes**. Visitors
who already installed it keep the icon, which simply opens your site.

## Related guides

- [Logo and favicon](/add-logo-classifieds-website/) — upload your logo, favicon and touch icon.
- [Theme options](/theme-options/) — the rest of your theme's settings.
- [Push notifications](/push-notifications/) — notifications on members' phones, which on iPhone need the site installed.
- [Add-ons](/addons/) — other features you can switch on.
{: .cards}
