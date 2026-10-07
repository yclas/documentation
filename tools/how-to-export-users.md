---
title: Export users to a spreadsheet
description: Download every member of your marketplace as a CSV file you can open in Excel, Google Sheets or your email tool.
section: tools
order: 40
permalink: /how-to-export-users/
keywords: export, users, members, csv, download, spreadsheet, excel, backup, mailing list
updated: 2026-10-07
---

You can download your whole member list as a CSV file at any time: to keep a copy, to look at it in a spreadsheet, or
to move it to another tool.

## Download the file

1. In the admin panel, go to **Users**.
2. Click **Export CSV** at the top of the page.
3. Your browser downloads a file called `user_export.csv`. Open it in Excel, Numbers or Google Sheets.
{: .steps}

The file always holds **every** member. The search box and the status tabs on the Users page don't filter the
export; filter the spreadsheet afterwards instead.

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
| People who subscribed to listing alerts | **Subscribers › Export CSV** |
| Your coupons | **Settings › Coupons › Export CSV** |
| A copy of your listings or your whole site | See [Back up, export or close your site](/export-site/). |

## Keep the file safe

A member export is personal data: names, email addresses, phone numbers and IP addresses. Store it somewhere private,
don't email it around, and delete copies you no longer need. If you use it to send emails, only write to members who
agreed to hear from you.
{: .warning}

## Related guides

- [Import users](/how-to-import-users/) — the opposite direction.
- [Manage users](/manage-users/) — search, edit and moderate members.
- [Newsletters and subscribers](/how-to-send-the-newsletter/) — email members without exporting them.
{: .cards}
