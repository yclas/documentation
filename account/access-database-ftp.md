---
title: Can I access the database or files?
description: Why hosted sites have no FTP or database access, and the ways you can still customise your site, add code and connect other tools.
section: account
order: 70
permalink: /access-database-ftp/
keywords: database, ftp, sftp, files, server, code, php, mysql, phpmyadmin, access, customise, modify, source code, api, ssh
updated: 2026-10-20
---

No. Yclas is a hosted service: thousands of marketplaces run on the same up-to-date software, which we maintain,
secure and back up for everyone. Because of that there's no FTP, SSH or direct database access to individual sites,
in the same way that you can't open the servers behind your email account.

The good news is that you rarely need it. Almost everything people used to change in files can be done from the
admin panel.

## What you can do instead

| You want to… | Use |
| --- | --- |
| Change colours, fonts or spacing | [Custom CSS](/how-to-use-custom-css/) (**Design › Custom code**) |
| Add a script, a verification tag or a chat widget | **Code in the page head** and **Code in the footer** in **Design › Custom code**. See [Add code to the head and footer](/html-in-head-element/). |
| Add tracking or advertising pixels | [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) |
| Change any text on the site | [Language and translations](/how-to-change-language/) (**Settings › Translations**) |
| Add fields to listings or profiles | [Custom fields](/how-to-create-custom-fields/) and [user custom fields](/users-custom-fields/) |
| Switch features on or off | [Add-ons](/addons/) |
| Read or write data from another app | The [REST API](/api-documentation/), with the site key or, on the Marketplace plan, a key from [API keys](/api-keys/) |
| Bring in listings or members in bulk | [Move your site to Yclas](/how-to-migrate-osclass-to-yclas/), from a CSV file or another platform |
| Download your members or everything | [Export users](/how-to-export-users/) or [Export everything](/export-site/#export-everything) |
| Restore something you deleted | [Open a support ticket](/use-yclas-support-system/); we keep backups. See [Back up, export or close your site](/export-site/). |

Code in **Code in the page head** and **Code in the footer** runs on every page of your site. Only paste code from
sources you trust, and test your site afterwards.
{: .warning}

## Need deeper changes?

- **APIs and automation**: every plan includes the basic [REST API](/api-documentation/). The Professional and
  Marketplace plans add [webhooks](/webhooks/) for Zapier and Make, and custom code sections in the
  [AI page builder](/ai-page-builder/). The Marketplace plan adds the Full API with [API keys](/api-keys/) and higher
  limits, and an [MCP server](/mcp-server/) for AI assistants. See [Compare plans](/compare-plans/#apis-webhooks-and-ai-assistants).
- **Custom work**: if you need a feature or design change that the panel can't do, our team can quote for it. Email
  info@yclas.com with what you have in mind.
- **A copy of your data**: if you need your listings or database, for example to move elsewhere, see
  [Back up, export or close your site](/export-site/).

## Related guides

- [Custom CSS](/how-to-use-custom-css/) — style changes without touching files.
- [REST API](/api-documentation/) — connect your site to other software.
- [Back up, export or close your site](/export-site/) — backups and exports.
{: .cards}
