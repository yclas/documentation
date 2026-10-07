---
title: Listings disappeared
description: Listings are missing from your site but you didn't delete them. Find out which of the usual causes it is and bring them back.
section: troubleshooting
order: 40
permalink: /listings-disappeared/
redirect_from:
  - /how-to-fix-classifieds-listings-page-issue/
keywords: listings missing, ads disappeared, listings gone, not showing, hidden listings, expired, language, multilingual, locale, moderation, category deleted, empty site, page 2
updated: 2026-10-07
---

When listings vanish from the front of your site, they are very rarely gone. Listings are only removed when someone
deletes them; everything else just hides them. Start in **Listings › All listings**: if the listings are there, one
of the causes below is keeping them out of sight.

## Quick check

In **Listings › All listings**, look at the status tabs and filters:

| What you see | Go to |
| --- | --- |
| The listings are **Published**, but not on the site | [Language](#your-site-language-changed), [expiry](#they-expired) |
| They're under **Needs review** or **Not published** | [Moderation](#they-are-waiting-for-approval) |
| They're **Expired** | [Expiry](#they-expired) |
| They're **Unavailable**, **Sold** or **Spam** | [Status changes](#someone-changed-their-status) |
| They're not in the list at all | [Deleted](#they-were-deleted) |

## Your site language changed

This is the most surprising cause, and the most common one after a settings change.

When your site is **multilingual** (**Settings › General › Languages › Multilingual**), every listing remembers the
language it was posted in, and visitors only see listings in the language they're browsing. If you then change the
site's main language under **Settings › Translations**, all the listings posted in the old language are hidden,
because they no longer match. The Translations page warns about this before you switch.

**To fix it**, do one of these:

- Switch the site language back to the one the listings were posted in: **Settings › Translations**, then **Use**
  next to that language.
- Or, if you don't need several languages, switch **Multilingual** off under **Settings › General** and click
  **Save**. All listings show again, whatever language they were posted in.

See [Multilingual sites](/how-to-activate-multilingual-mode/) before changing either setting again.

## They expired

If **Listing Expiration Date** is set under **Listings › Settings › Posting**, a listing disappears from the site the
given number of days after it was published. The seller is emailed and can renew it if **Allow Listing Reactivation**
is on.

Lowering this number hides older listings **immediately**: change it from 90 to 30 days and every listing older than
30 days disappears at once. Raising it brings them back. Set it to `0` to never expire listings.
{: .warning}

Imported listings expire the same way, based on the date in your import file. See [Listing expiry and
renewal](/ad-expiration/).

## They are waiting for approval

If moderation is on, new and sometimes edited listings wait in **Listings › Moderation** until you approve them. With
the email-confirmation modes, they wait until the seller clicks the link in their email; with the payment modes,
until they pay. See [Moderation](/how-ads-moderation-works/).

## Someone changed their status

- **Sellers** can deactivate their own listings or mark them as sold from their account.
- **You or a moderator** may have deactivated them, marked them as spam, or used a bulk action.

Select the listings in **Listings › All listings** and use **Activate** to put them back.

## A category or location was deleted

Deleting a category doesn't delete its listings: they move to the parent category, or to the top of the tree if the
category had no parent. They're still on the site, just filed somewhere else. Recreate the category and move the
listings back by editing them. See [Categories](/how-to-add-categories/).

## Only some pages are empty

| Symptom | Likely cause |
| --- | --- |
| A category page is empty but the listings exist | They're filed in a subcategory, in another location, or in another language. |
| Search finds nothing | Check the filters in the search form, and whether search covers descriptions (**Settings › General › Search**). |
| The home page shows no listings | Check the home page settings of your theme under **Design › Theme Options**. |

## They were deleted

Listings deleted from the admin panel, or by their seller, are gone for good, and so are their photos. If many
listings vanished at once and none of the above applies, [contact support](/use-yclas-support-system/) as soon as
possible and say roughly when they were last visible.

## Related guides

- [Manage listings](/how-to-manage-advertisements/) — statuses, filters and bulk actions.
- [Listing expiry and renewal](/ad-expiration/) — how expiry works.
- [Multilingual sites](/how-to-activate-multilingual-mode/) — languages and listings.
{: .cards}
