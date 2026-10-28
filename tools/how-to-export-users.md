---
title: Export users to a spreadsheet
description: Download your members, all of them or just the ones you have filtered, as a CSV file you can open in Excel, Google Sheets or your email tool.
section: tools
order: 40
permalink: /how-to-export-users/
keywords: export, export users, export members, users, members, csv, download, spreadsheet, excel, backup, mailing list, email list
updated: 2026-10-20
plans: Available on all plans
---

You can download your member list as a CSV file at any time: to keep a copy, to look at it in a spreadsheet, or to
move it to another tool.

## Download the file

1. In the admin panel, go to **Users**.
2. Optional: narrow the list with the status tabs, the **Any role** menu or the search box.
3. Click **Export CSV** at the top of the page.
4. Your browser downloads a file called `user_export.csv`. Open it in Excel, Numbers or Google Sheets.
{: .steps}

The file holds the members the list is showing: with **All** selected and no search or role filter, that is every
member. For example, pick the **Unconfirmed** tab before you export to get the members who haven't confirmed their
email address.

## What's in the file

| Column | What it holds |
| --- | --- |
| `id_user` | The member's number on your site. |
| `name`, `seoname` | Their display name, and the version used in their profile address. |
| `email` | Their email address. |
| `description` | The "about me" text on their profile. |
| `num_ads` | How many listings they have, in any status. |
| `image` | The address of their profile photo. |
| `last_login`, `last_modified`, `created` | When they last signed in, last changed their account, and signed up. |
| `ipaddress` | The internet address they last signed in from. |
| `status` | `1` active, `3` hasn't confirmed their email yet, `0` inactive, `5` marked as spam. |
| `phone` | Their phone number, if they gave one. |
| `digest_interval` | How often they get the email digest (`never`, `daily`, `weekly`, `monthly`). |

After these come one column for each [user custom field](/users-custom-fields/) on your site.

The export doesn't include passwords, which are stored scrambled and can't be read by anyone, or members' roles.

## Other exports

| You want | Where |
| --- | --- |
| Your listings, as a spreadsheet | **Listings › All listings › Export CSV**. Like the users export, it follows the tab and filter you have chosen. |
| People who subscribed to listing alerts | **Subscribers › Export CSV** |
| Your orders | **Orders › Export CSV** |
| Your coupons | **Settings › Coupons › Export CSV** |
| Everything at once, with photos | **Tools › Export everything**. See [Back up, export or close your site](/export-site/#export-everything). |

## Keep the file safe

A member export is personal data: names, email addresses, phone numbers and IP addresses. Store it somewhere private,
don't email it around, and delete copies you no longer need. If you use it to send emails, only write to members who
agreed to hear from you.
{: .warning}

## Related guides

- [Import users from a CSV file](/how-to-import-users/) — the opposite direction.
- [Manage users](/manage-users/) — search, edit and moderate members.
- [Newsletters and subscribers](/how-to-send-the-newsletter/) — email members without exporting them.
{: .cards}
