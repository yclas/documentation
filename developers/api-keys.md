---
title: API keys and permissions
nav_title: API keys
description: Give each app, automation tool or AI assistant its own key with only the permissions it needs, and rotate or revoke it at any time.
section: developers
order: 900
permalink: /api-keys/
keywords: api key, api keys, scoped key, permissions, scopes, token, bearer, rotate key, revoke key, zapier key, claude key, chatgpt key, developer, yck_, listings:read, users:read, webhooks:manage, rate limit, requests per minute, 429, too many requests
updated: 2026-10-22
plans: Marketplace plan
---

An API key lets another app work with your marketplace: a mobile app, a script your developer wrote, Zapier, or an AI
assistant such as Claude. On the **API keys** page you create a separate key for each of them, with only the
permissions it needs. A key that may only read listings can't change anything, and you can switch off one app without
touching the others.

API keys are part of the Full API, with higher limits, on the **Marketplace** plan.
{: .note}

Every site also keeps its original, single **API key** in **Settings › General › Advanced**, on every plan. It works
for the basic [REST API](/api-documentation/), but it can't be limited, and it is often built into mobile apps, so
newer features (webhook subscriptions, private messages, statistics, settings and the [MCP server](/mcp-server/)) only
accept a key from the API keys page.

## Create a key

1. In the admin panel, go to **Add-ons**, open the **Automation** tab and click **API keys**.
2. Under **Create a key**, give it a **Name** that says who uses it, for example *Zapier*, *Claude* or *CRM*.
3. Tick the **Permissions** the app needs (see the table below).
4. Click **Create key**.
5. Copy the key shown under **Your new API key** and paste it into the app. It is shown only once.
{: .steps}

Keys start with `yck_`. Your site stores only a fingerprint of each key, so nobody, not even Yclas support, can show
it to you again. If you lose it, rotate the key to get a new one.

Only administrators can open the API keys page.

## Permissions

Pick only what the app needs. Read permissions can't change anything on your site.

| Permission | What it allows |
| --- | --- |
| `listings:read` | Read listings, categories, locations, custom fields, reviews, reports and the moderation queue. |
| `listings:write` | Publish, deactivate and edit listings, and decide reports. |
| `users:read` | Read members, and see email addresses in listings, orders and webhooks. |
| `users:write` | Create members and sign them in through the API. |
| `orders:read` | Read orders, seller plans, subscriptions and coupons. |
| `orders:write` | Create orders through the API. Orders created this way count as paid. |
| `messages:read` | Receive private messages between members, word for word, through webhooks. |
| `content:read` | Read pages, blog posts, FAQ, email templates and translations. |
| `content:write` | Create and edit pages, blog posts and FAQ (through the MCP server). |
| `stats:read` | Read site statistics. |
| `settings:read` | Read all site settings. Passwords and keys stay hidden. |
| `settings:write` | Change a few basic site settings. |
| `webhooks:manage` | Let the app subscribe and unsubscribe its own [webhooks](/webhooks/), for the events the key can read. |

Without `users:read`, email addresses are left out of everything the key gets back, including orders.

`orders:write`, `users:write` and `messages:read` are powerful. Only give them to an app you control, never to a key
you paste into a public web page.
{: .warning}

A key's permissions can't be changed after you create it. To change them, create a new key, switch the app over and
revoke the old one.

## Manage your keys

The **Keys** list shows each key's name, who created it and when, the first characters of the key, its permissions and
when it was last used.

| Button | What it does |
| --- | --- |
| **Rotate** | Replaces the key with a new one, with the same name and permissions. The old key stops working at once, so paste the new one into the app straight away. |
| **Revoke** | Switches the key off for good. Apps using it can no longer connect, and any webhooks the app subscribed with it are paused. |

A key also stops working when the administrator who created it is no longer an administrator of your site. The list
then says *Not working: the person who made it is no longer an admin.* Create a new key for the app.

Rotate a key straight away if it may have leaked, for example if it was pasted in an email or a shared document.
{: .tip}

## Rate limit

To keep one busy app from slowing down your site, each API key may make a set number of requests a minute. Set it in
the **Rate limit** section at the bottom of the **API keys** page: **Requests a minute**, from 10 to 10,000,
120 by default. Click **Save**.

| Who | How the limit counts |
| --- | --- |
| Each key from the API keys page | The limit, for that key. Its [MCP server](/mcp-server/) calls count together with its API calls. |
| Your site's own **API key** (used by the mobile app) | Counted per caller's internet address, at 5 times the limit, because many app users can share one address. |
| Each member signed in to an app | The limit, per member, and never less than 120. |
| The public catalogue (categories, locations and so on) | Per internet address, at 5 times the limit, and never less than 600. |

The rate limit section is on the page on every plan, because it also covers your site's own API key.

An app that goes over the limit gets error `429` and is told how many seconds to wait. Good apps slow down by
themselves; if one keeps hitting the limit, raise it a little or ask the app's developer to cache more.

## How apps send the key

Most apps ask for the key in a box and handle the rest. For developers, send it with every request as:

```
Authorization: Bearer yck_…
```

or in an `apikey` header. The MCP server can also take it at the end of its URL, for apps that can't send headers; see
[Connect an AI assistant](/mcp-server/).

What each permission opens in the REST API, and every webhook event and MCP tool with the permission it needs, is
listed on your site's developer page at `/api/docs` (the **API & webhook docs** link at the top of **Add-ons**). Once
you have created a key, that page is public, so a developer can read it without signing in; before that only
administrators see it.

## Related guides

- [REST API](/api-documentation/) — the full API reference.
- [Webhooks](/webhooks/) — send events to other apps (Professional and Marketplace plans).
- [Connect an AI assistant](/mcp-server/) — Claude, ChatGPT and other MCP apps.
{: .cards}
