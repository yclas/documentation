---
title: Back up, export or close your site
description: What Yclas backs up for you, which data you can download yourself, how to get a full copy, and what happens when you close a site.
section: account
order: 50
permalink: /export-site/
redirect_from:
  - /backup-classifieds-site/
  - /automatic-daily-backups/
keywords: backup, backups, restore, export, export listings, export ads, listing export, exportación de anuncios, download, data, csv, excel, move, migrate, leave, close, close account, close my account, delete site, delete my site, delete account, remove account, cancel, cancel account, stop paying
updated: 2026-10-07
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

## Export your data yourself

Several pages in the admin panel have an **Export CSV** button that downloads a spreadsheet you can open in Excel,
Google Sheets or Numbers:

| What | Where |
| --- | --- |
| Members (name, email, role, status…) | **Users › Export CSV**. See [Export users](/how-to-export-users/). |
| Email subscribers | **Subscribers › Export CSV**. |
| Coupons | **Settings › Coupons › Export CSV**. |

Member lists contain personal data. Store the files somewhere safe and delete them when you no longer need them.
{: .warning}

## Export your listings

There's no **Export** button for listings in the admin panel today: **Listings › All listings** lets you search,
edit and manage listings, but not download them. To get your listings out:

- **Ask us.** [Open a ticket](/use-yclas-support-system/) and say what you need, for example a spreadsheet of your
  published listings with their titles, descriptions, prices, categories and photo links, and what it's for. We'll
  tell you what we can provide.
- **Use the API.** A developer can read every published listing, with its photos and custom fields, through your site's
  [REST API](/api-documentation/), which is included on every marketplace.
- **Share new listings automatically.** If you only want new listings to appear somewhere else, your
  [RSS feeds](/rss-feeds/) list the newest listings, per category and location.

## Get a full copy of your site

There's no button to export listings and photos in one go. If you need a complete copy, for example to move to
another platform or keep an archive, [open a ticket](/use-yclas-support-system/) and tell us what you need it for.
We'll explain what we can provide and whether there's a cost.

The Professional and Enterprise plans include full code access. See the [Pricing page](https://yclas.com/pricing.html).

## Pause a site instead of closing it

If you only need a break, you don't have to close anything:

- [Maintenance mode](/how-to-activate-maintenance-mode/) hides the site from visitors while you keep working on it.
- A [private site](/private-site/) is only visible to members who sign in.

## Close a site and stop paying

1. Download anything you want to keep (see above).
2. At yclas.com, open **My sites** and click **Settings** next to the site.
3. In **Subscription**, click **Cancel subscription** and confirm.
{: .steps}

Nothing is charged after that. The site stays online until the end of the period you've paid for, then goes offline.
If you come back while it's offline, renew the plan and it's back as you left it. **My sites** shows the date until
which an offline site's listings and settings are kept; after that it's deleted with all its listings, members and
photos, and can't be recovered.

**On a free trial?** You don't need to do anything: if you don't choose a plan, the site is paused when the trial
ends and deleted later.

## Delete your site or close your Yclas account

Cancelling stops the payments but keeps your data for a while, in case you come back. To have a site deleted
straight away, or to close your Yclas account and delete your details completely:

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
- [Import listings from CSV](/how-to-import-ads/) — bring listings in from a spreadsheet.
{: .cards}
