---
title: Back up, export or close your site
description: What Yclas backs up for you, how to download all your data in one ZIP or as spreadsheets, and what happens when you close a site.
section: account
order: 50
permalink: /export-site/
redirect_from:
  - /backup-classifieds-site/
  - /automatic-daily-backups/
keywords: export everything, zip, json, delete trial, backup, backups, restore, export, export listings, export ads, listing export, exportación de anuncios, download, data, csv, excel, move, migrate, leave, close, close account, close my account, delete site, delete my site, delete account, remove account, cancel, cancel account, stop paying
updated: 2026-10-20
plans: Available on all plans
---

Your marketplace's data is yours. This guide explains how it's protected while your site runs on Yclas, how to
download it, and what happens if you decide to close a site.

## Backups: done for you

Yclas backs up every site automatically: listings, members, pages, settings and orders. There's nothing to install
or schedule.

If something goes wrong, for example you deleted a category full of listings by mistake, [open a support
ticket](/use-yclas-support-system/) straight away. Tell us what happened and roughly when, and we'll tell you what
can be recovered.

The sooner you ask, the more likely we can put things back the way they were.
{: .tip}

Hosted sites don't have FTP or database access, so you can't take or restore a backup file yourself. See
[Can I access the database or files?](/access-database-ftp/)

## Export everything

**Export everything** downloads your whole marketplace in one ZIP file: to keep your own archive, or to take your data
to another platform.

1. In the admin panel, go to **Tools** and click **Build the export** in the **Export everything** card.
2. Click **Build the export**. Yclas collects your data in the background and shows what it is doing; keep the page
   open until it says your export is ready.
3. Click **Download ZIP**.
{: .steps}

The ZIP holds:

| File | What's in it |
| --- | --- |
| `listings.json` | Every listing, in any status, with its title, description, price, category, location, contact details, status, dates, seller's email and custom field values. |
| `users.json` | Every member's name, email, profile text, sign-up date, status and user custom field values. |
| `categories.json`, `locations.json` | Your category and location trees. |
| `fields.json` | How your listing and user custom fields are set up. |
| `pages.json`, `blog.json` | Your pages and blog posts. |
| `photos/` | The listings' photos (in a folder per listing) and members' profile photos. |

JSON is a plain-text format that developers and most migration tools can read. The export never includes passwords,
sign-in tokens, two-step login secrets or the keys of your payment and other integrations.

- Only administrators can build and download the export.
- The download link works for a day. After that, build a new one with **Build a new export**.
- Photos stop at 500 MB in total; the listings and other data are always complete. If the limit is reached, the page
  says so.
- The ZIP is an archive for you, not a file to upload back: [Move your site to Yclas](/how-to-migrate-osclass-to-yclas/)
  reads CSV files and database exports.

The ZIP contains your members' personal data. Store it somewhere safe and delete copies you no longer need.
{: .warning}

## Export a spreadsheet

Several pages in the admin panel have an **Export CSV** button that downloads a spreadsheet you can open in Excel,
Google Sheets or Numbers. On **Users** and **Listings › All listings** the file follows the tab, filter or search you
have chosen.

| What | Where |
| --- | --- |
| Members (name, email, status, custom fields…) | **Users › Export CSV**. See [Export users](/how-to-export-users/). |
| Listings (title, price, category, location, status and dates, by number) | **Listings › All listings › Export CSV**. |
| Orders | **Orders › Export CSV**. |
| Email subscribers | **Subscribers › Export CSV**. |
| Coupons | **Settings › Coupons › Export CSV**. |

For listings with their full text, photos and custom fields, use **Export everything** above. A developer can also
read every published listing through your site's [REST API](/api-documentation/), and your [RSS feeds](/rss-feeds/)
list the newest listings, per category and location.

Every plan includes the REST API. The Professional and Marketplace plans add [webhooks](/webhooks/), which send new
listings, members and orders to another app as they happen, and the Marketplace plan adds the Full API with
[API keys](/api-keys/). See [Compare plans](/compare-plans/#apis-webhooks-and-ai-assistants).

## Pause a site instead of closing it

If you only need a break, you don't have to close anything:

- [Maintenance mode](/how-to-activate-maintenance-mode/) hides the site from visitors while you keep working on it.
- A [private site](/private-site/) is only visible to members who sign in.

## Close a site and stop paying

1. Download anything you want to keep, for example with [Export everything](#export-everything).
2. At yclas.com, open **My sites** and click **Settings** next to the site.
3. In **Subscription**, click **Cancel subscription**, choose why you're cancelling, and click **Cancel subscription**
   again.
{: .steps}

Nothing is charged after that. The site stays online until the end of the period you've paid for, then goes offline.
If you come back while it's offline, renew the plan and it's back as you left it. **My sites** shows the date until
which an offline site's listings and settings are kept; after that it's deleted with all its listings, members and
photos, and can't be recovered.

**On a free trial?** You don't need to do anything: if you don't choose a plan, the site is paused when the trial
ends and deleted later. To delete it straight away, use **Delete site** in **My sites**; see
[Delete a trial site](/my-sites/#delete-a-trial-site).

## Delete your site or close your Yclas account

Cancelling stops the payments but keeps your data for a while, in case you come back. Trial sites and sites that
were never activated you can [delete yourself](/my-sites/#delete-a-trial-site) from **My sites**. To have a site
that has had a paid plan deleted straight away, or to close your Yclas account and delete your details completely:

1. Cancel the subscription of every site on the account, as above, so nothing renews.
2. Download anything you want to keep.
3. Signed in at yclas.com with the account you want closed, [open a ticket](/use-yclas-support-system/) and say
   which sites to delete, or that you want the whole account closed.
{: .steps}

Deleting is permanent: listings, members, photos and pages can't be recovered afterwards.
{: .warning}

## Related guides

- [Plans and billing](/plans-and-billing/) — cancelling, renewing and what happens when a plan expires.
- [Can I access the database or files?](/access-database-ftp/) — what hosted sites can and can't do.
- [Export users](/how-to-export-users/) — the member export in detail.
- [Move your site to Yclas](/how-to-migrate-osclass-to-yclas/) — bring a site in from another platform.
{: .cards}
