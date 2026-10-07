---
title: Maintenance mode
description: Hide your marketplace behind a "back soon" page while you build it or make big changes, and keep working on it yourself.
section: settings
order: 20
permalink: /how-to-activate-maintenance-mode/
keywords: maintenance, offline, coming soon, under construction, hide site, launch, 503
updated: 2026-10-07
---

Maintenance mode closes your marketplace to the public without taking it offline for you. Visitors see a short
"We are working on our site, please visit later" page, while you and your moderators can still sign in, browse the
site and change anything you like.

Use it while you set up a new marketplace, or for a short while when you reorganise categories, switch themes or
import listings.

## Turn maintenance mode on

1. In the admin panel, go to **Settings › General**.
2. In **Access & privacy**, switch on **Maintenance Mode**.
3. Click **Save changes** in the bar at the bottom of the page.
{: .steps}

From now on, anyone who isn't signed in as an administrator or moderator is sent to the maintenance page. While
you browse the site, a banner reminds you: *You are in maintenance mode, only you can see the website.*

To open the site again, switch **Maintenance Mode** off and click **Save changes**.

## What visitors and search engines see

| Who | What happens |
| --- | --- |
| Visitors and signed-out members | The maintenance page, with a **Login** button so members of your team can sign in. |
| Administrators and moderators | The full site and the admin panel, with a reminder banner. |
| Members with other roles | The maintenance page, even after signing in. |
| Search engines | A temporary "service unavailable" response (HTTP 503), which tells them to come back later instead of dropping your pages. |
| Apps using the [REST API](/api-documentation/) | An error saying the site is in maintenance mode, unless the request is signed in. |

Search engines treat a 503 as temporary, so a few hours or days in maintenance mode won't hurt your rankings.
Leaving a live site in maintenance mode for weeks can, so switch it off as soon as you are done.
{: .tip}

## Maintenance mode or a private site?

They solve different problems:

- **Maintenance mode** hides the whole site from everyone except your team. Use it before launch or during big changes.
- **[Private site](/private-site/)** keeps the site open to signed-in members of every role and asks everyone else to
  sign in. Use it for a closed community, such as a staff marketplace or a members-only club.

## Related guides

- [Launch checklist](/launch-checklist/) — what to set up before you switch maintenance mode off.
- [Private site](/private-site/) — members-only marketplaces.
- [General settings](/change-site-name-site-description/) — the rest of the settings on this page.
{: .cards}
