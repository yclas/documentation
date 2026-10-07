---
title: Can I access the database or files?
description: Why hosted sites have no FTP or database access, and the ways you can still customise your site, add code and connect other tools.
section: account
order: 70
permalink: /access-database-ftp/
keywords: database, ftp, sftp, files, server, code, php, mysql, phpmyadmin, access, customise, modify, source code, api, ssh
updated: 2026-10-07
---

No. Yclas is a hosted service: thousands of marketplaces run on the same up-to-date software, which we maintain,
secure and back up for everyone. Because of that there's no FTP, SSH or direct database access to individual sites,
in the same way that you can't open the servers behind your email account.

The good news is that you rarely need it. Almost everything people used to change in files can be done from the
admin panel.

## What you can do instead

| You want to… | Use |
| --- | --- |
| Change colours, fonts or spacing | [Custom CSS](/how-to-use-custom-css/) (**Design › Custom CSS**) |
| Add a script, a verification tag or a chat widget | **HTML in HEAD Element** and **HTML in Footer** in **Settings › General › Advanced**. See [Add code to the head and footer](/html-in-head-element/). |
| Add tracking or advertising pixels | [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) |
| Change any text on the site | [Language and translations](/how-to-change-language/) (**Settings › Translations**) |
| Add fields to listings or profiles | [Custom fields](/how-to-create-custom-fields/) and [user custom fields](/users-custom-fields/) |
| Switch features on or off | [Add-ons](/addons/) and **Integrations** |
| Read or write data from another app | The [REST API](/api-documentation/), with the **API Key** in **Settings › General › Advanced** |
| Bring in listings or members in bulk | [Import listings from CSV](/how-to-import-ads/) and [Import users](/how-to-import-users/) |
| Download your members | [Export users](/how-to-export-users/) |
| Restore something you deleted | [Open a support ticket](/use-yclas-support-system/); we keep backups. See [Back up, export or close your site](/export-site/). |

Code in **HTML in HEAD Element** and **HTML in Footer** runs on every page of your site. Only paste code from
sources you trust, and test your site afterwards.
{: .warning}

## Need deeper changes?

- **Full code access** is included on the Professional and Enterprise plans. See the
  [Pricing page](https://yclas.com/pricing.html), and [ask us](/use-yclas-support-system/) how it works for your site.
- **Custom work**: if you need a feature or design change that the panel can't do, our team can quote for it. Email
  info@yclas.com with what you have in mind.
- **A copy of your data**: if you need your listings or database, for example to move elsewhere, see
  [Back up, export or close your site](/export-site/).

## Related guides

- [Custom CSS](/how-to-use-custom-css/) — style changes without touching files.
- [REST API](/api-documentation/) — connect your site to other software.
- [Back up, export or close your site](/export-site/) — backups and exports.
{: .cards}
