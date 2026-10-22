---
title: Connect an AI assistant to your marketplace (MCP server)
nav_title: AI assistants (MCP server)
description: Run your marketplace from Claude, ChatGPT or another AI assistant. Ask for your numbers, find and publish listings, handle reports and draft pages, with every change recorded.
section: integrations
order: 910
permalink: /mcp-server/
keywords: mcp, mcp server, model context protocol, claude, chatgpt, ai assistant, ai agent, connector, custom connector, claude code, cursor, gemini, manage with ai, chat with my site, ai admin, api key, audit log
updated: 2026-10-22
plans: Marketplace plan
---

With the MCP server, an AI assistant such as Claude or ChatGPT can work on your marketplace for you. Instead of
clicking through the admin panel, you ask in plain words:

- *How many listings, users and paid orders did my site get this week?*
- *Find the unpublished listings about bikes and publish the ones that look genuine.*
- *Show me the open reports and tell me which ones break my rules.*
- *Write a draft FAQ entry about how shipping works on my site.*
- *How do I take payments with Stripe?* (the assistant can read this Help Centre)

MCP (Model Context Protocol) is an open standard, so it works with any AI app that can add a remote MCP server,
often called a *connector*. The assistant connects with an [API key](/api-keys/) and can only do what that key
allows.

The MCP server is part of the **Marketplace** plan, with the Full API and [API keys](/api-keys/).
{: .note}

## Switch on the MCP server

1. In the admin panel, go to **Add-ons**, open the **Automation** tab and click **MCP server**.
2. Switch on **Enable the MCP server**. The switch saves straight away.
{: .steps}

On sites created from mid-October 2026 it is already on; on older sites it starts off. Either way, nobody can use it
until you create a key for it. When it is off, the server answers that it is turned off, whatever key is used.

The page shows your **Server URL**, which is your site's address followed by `/api/mcp`, for example
`https://www.your-marketplace.com/api/mcp`.

Only administrators can open the MCP server page.

## Connect your assistant

1. **Create a key for the assistant.** In **Add-ons › API keys**, create a key named after the app, for example
   *Claude*, with only the permissions it needs (see [What the assistant can do](#what-the-assistant-can-do)). Start
   with read permissions such as `listings:read`, `orders:read` and `stats:read`, and add write permissions only when
   you want it to change things. Use one key per app, so you can revoke it on its own.
2. **Add the server in the app.** Add a custom MCP server or connector with your **Server URL**. If the app lets you add
   a header, send the key as a Bearer token: `Authorization: Bearer YOUR_API_KEY`.
3. **If the app only asks for a URL,** put the key at the end of it: `https://www.your-marketplace.com/api/mcp?key=YOUR_API_KEY`.
4. **Ask your first question,** for example *How many listings and users did my site get this week?*
{: .steps}

A key at the end of a URL can end up in the logs of the app and of servers in between. Use the header whenever the
app allows it. If you must use the URL, give that key read permissions only where possible, and revoke it in
**API keys** when you stop using the app or think it leaked.
{: .warning}

### Notes for popular apps

App menus change from time to time. If a name below has moved, look for "connectors" or "MCP" in the app's settings.

| App | Where to add it |
| --- | --- |
| **Claude** (claude.ai and the desktop app) | **Settings › Connectors › Add custom connector**: give it a name and paste the URL with your key at the end (step 3). |
| **ChatGPT** | Custom connectors need *Developer mode*, only available on some paid plans (on business plans an admin may have to allow it). Turn it on in the app's settings, create an app, paste the URL with your key at the end and choose no authentication. |
| **Claude Code** | In a terminal: `claude mcp add --transport http my-site https://www.your-marketplace.com/api/mcp --header "Authorization: Bearer YOUR_API_KEY"` |
| **Cursor, VS Code, Gemini CLI and others** | Add a remote (HTTP) MCP server in the app's MCP settings, with the URL and the `Authorization` header from step 2. |

The MCP server page in your panel shows the same instructions with your own URL filled in.

## What the assistant can do

The assistant only sees the tools its key has the permission for. The full list, with each tool's name, is in the
**Tools** table on the MCP server page.

| Permission | The assistant can |
| --- | --- |
| None needed | Search and read the guides in this Help Centre. |
| `listings:read` | Search listings and read any listing; list categories (with live listing counts), locations and custom fields; see the listings waiting for approval, reported listings and reviews. |
| `listings:write` | Publish or deactivate a listing; edit a listing's title, description, price, category or location; settle a report (dismiss it, send the listing back to unpublished, or remove it as spam). |
| `users:read` | Find members by name or email, see one member's details, listings and paid orders, and list recent sign-ups. |
| `orders:read` | Search orders by status, date and buyer, read one order, and list your seller plans with their subscribers and your coupons. |
| `content:read` | List and read your pages, blog posts, FAQ entries and email templates. |
| `content:write` | Create or edit pages, blog posts and FAQ entries. |
| `stats:read` | New listings, users, paid orders and revenue, and messages, for the last 7 and 30 days or any dates you ask for. |
| `settings:read` | Read your site's settings. Passwords, keys and other secrets show as *[hidden]*. |
| `settings:write` | Change the site name, site description, listings per page, listing expiry days, number of photos per listing, whether members must sign in to post or to contact, and whether the price and phone fields are shown. |

A few things work the same way as in the panel:

- **Publishing** a listing emails its owner and the members whose saved search alerts match it.
- **Editing** a listing doesn't change whether it is live. Text is saved as plain text.
- **Settling a report** by restricting or removing the listing emails the seller a statement of reasons, with the note
  the assistant writes.
- **New pages, blog posts and FAQ entries** are saved as drafts unless you ask for them to be published. Only simple
  formatting is kept (paragraphs, headings, lists, bold, italics, quotes and links); scripts and styles are removed.
- **Email templates** can be read but not changed.

## Safety and the Audit log

- **Email addresses** only reach a key with `users:read`. Without it, they are left out of every answer.
- **Private messages** between members can't be read through the MCP server, whatever the key.
- **Every change is recorded** in the **Audit log** in your admin panel menu, with the key's name: for example *AI
  assistant edited a listing* with *key "Claude": edited listing #204 (title, price)*. Reading isn't recorded.
- **At most 60 changes per key per hour.** After that the assistant is told to try again later.
- **Requests a minute.** Every request, reading too, counts towards the key's [rate limit](/api-keys/#rate-limit)
  (120 a minute by default), together with that key's REST API calls. Each message in a batch counts.
- **Text written by members** (listing descriptions, reports, reviews) is handed to the assistant marked as data, so
  the assistant knows it is not an instruction from you.

AI assistants make mistakes. Check what yours did, especially at first, and give a key write permissions only for the
jobs you want done. To stop an assistant at once, revoke its key in **Add-ons › API keys** or switch off **Enable the
MCP server**.
{: .important}

## Good to know

- The MCP server needs a key from the **API keys** page. The original **API key** in **Settings › General** doesn't
  work with it.
- If the page says *Yclas support has switched the MCP server off for your site*, the switch is greyed out. Ask us
  through [Support](/use-yclas-support-system/) if you need it.
- For developers: the server speaks MCP over Streamable HTTP with JSON responses, takes batches of up to 20 messages,
  and the tools and their permissions are listed at `/api/docs` on your site.

## Related guides

- [API keys and permissions](/api-keys/) — create and revoke the assistant's key.
- [Webhooks](/webhooks/) — send events to other apps as they happen (Professional and Marketplace plans).
- [AI features and allowances](/ai-features/) — every AI feature of your marketplace on one page.
- [Support tools for administrators](/admin-support-tools/#audit-log) — the Audit log.
{: .cards}
