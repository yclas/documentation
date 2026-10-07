---
title: '"Something went wrong" errors'
description: What to do when your site shows an "Oops! Something went wrong" page, a "Page Not Found" page, a "We are working on our site" page or a "Site expired" page.
section: troubleshooting
order: 20
permalink: /error-troubleshooting-wow-seems-error/
keywords: error, oops, something went wrong, 500, 404, 503, page not found, internal server error, we are working on our site, site down, site expired, site inactive, blank page
updated: 2026-10-07
---

Now and then a page on your site may show an error instead of what you expected. This guide explains the pages you
might see, what they usually mean and how to get it fixed quickly.

## "Oops! Something went wrong with your request"

This page means the site hit a problem while building that page. The error is logged automatically, so the Yclas
team can look into it.

**See the actual error.** Sign in to your site as an administrator and open the same page again. Above the "Oops!"
message you'll see a line starting *Since you are logged in as admin only you can see this message*, followed by the
technical error. Visitors never see it.

Often the message points at something you can fix yourself:

| The message mentions… | Try this |
| --- | --- |
| A setting, an API key or an integration (Stripe, PayPal, Google Maps…) | Check that integration's settings under **Integrations**. A key that was deleted or expired at the provider is a common cause. |
| A listing, category or user that doesn't exist | The link is out of date. Fix the menu item, widget or page that points to it. |
| Something you just changed | Undo the change and see if the error goes away. |

If it isn't obvious, report it (see below).

## "Page Not Found"

The address doesn't match anything on your site. Usually the listing, page or category was deleted or renamed, or the
link has a typo. Common causes:

- A listing was deleted.
- A category was renamed or deleted. See [Listings disappeared](/listings-disappeared/).
- An old link from another website or from search results.

Fix the link if it's on your own site (menu, widgets, pages). For old links elsewhere, there is nothing to fix:
search engines drop missing pages on their own after a while.

## "We are working on our site, please visit later"

This page shows when the site is in maintenance mode or is briefly unavailable, for example for a few seconds while
we update the software.

1. Check whether **Maintenance Mode** is on under **Settings › General › Access & privacy**. See
   [Maintenance mode](/how-to-activate-maintenance-mode/).
2. If it isn't and the page lasts more than a few minutes, see [My site is down or slow](/site-down-or-slow/).
{: .steps}

## "Site expired" or "Site inactive"

Visitors see this page when the site's plan or free trial has ended without payment, or the site has been switched
off. Sign in at yclas.com, open [My sites](/my-sites/) and click **Renew** or **Choose a plan**: the site comes back as
you left it. See [Plans and billing](/plans-and-billing/).

## Errors right after you change something

| You just… | Then |
| --- | --- |
| Pasted code into **HTML in HEAD Element** or **HTML in Footer** | Broken code there can break page layouts or scripts. Remove what you added and try again. See [Add code to the head and footer](/html-in-head-element/). |
| Added custom CSS | CSS can't cause errors, but it can hide things. Remove it to check. See [Custom CSS](/how-to-use-custom-css/). |
| Switched themes | Some theme options don't carry over. Review **Design › Theme Options**. |
| Connected your own domain | It can take a few hours for the domain to point at Yclas everywhere. See [Connect your own domain](/custom-domain/). |

## Report it to Yclas

If the error keeps happening, [open a support ticket](/use-yclas-support-system/) with:

- the exact address (URL) of the page;
- what you clicked or submitted just before;
- the admin-only error message, copied as text;
- whether it happens every time, or only sometimes.

That's everything the team needs to find the error. Send the message as text, not only as a screenshot: text is
easier to search for.

## Related guides

- [My site is down or slow](/site-down-or-slow/) — when the whole site won't load, or shows a 502 or 504 error.
- [My changes don't show up](/changes-not-showing/) — when there's no error, but nothing changed.
- [Locked out of the admin panel](/accidentally-changed-admin-privilege-can-fix/) — when you can't sign in.
- [Get help from Yclas support](/use-yclas-support-system/) — how support tickets work.
{: .cards}
