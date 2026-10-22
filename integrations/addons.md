---
title: The Add-ons page
nav_title: The Add-ons page
description: One searchable page for every optional feature and outside service, from a blog, forum and memberships to payments, webhooks and AI assistants, with a guide for each.
section: integrations
order: 10
permalink: /addons/
keywords: addons, add-ons, plugins, extensions, features, enable, integrations, catalogue, catalog, blog, forum, faq, reviews, subscriptions, memberships, ewallet, bookings, social login, messaging, web push, add to home screen, adblock, auto locate, black list, trust and safety, automation, where is integrations, where are addons
updated: 2026-10-22
---

The **Add-ons** page is where you switch on everything optional on your marketplace. It has two kinds of cards:

- **Built-in features** that come with Yclas, such as a blog, a forum, reviews, memberships or messaging. They are
  there from the start, switched off, so your marketplace stays simple until you need more.
- **Outside services** you connect with a key from another company, such as Stripe, Mailgun or Google Maps, and
  automation tools such as [webhooks](/webhooks/) and [AI assistants](/mcp-server/). See
  [Integrations](/integrations-overview/) for the full list.

**Addons** and **Integrations** used to be two separate pages. They are now one page called **Add-ons**, in the
**Configure** part of the admin panel menu. Old links and bookmarks still work: they open the new page. Every
add-on's own settings page is unchanged.
{: .note}

## Find an add-on or integration

1. In the admin panel menu, under **Configure**, click **Add-ons**.
2. Type in **Search add-ons…** to find one by name or by what it does, or click a tab such as **Payments**,
   **Automation** or **Content**. **All** shows everything.
3. Click the card. Cards that are already on show an **On** label and a **Manage** link; the others say **Set up**.
{: .steps}

The header tells you how many add-ons are on, and has a link to your site's **API & webhook docs** for developers.

| Tab | What's in it |
| --- | --- |
| **Payments** | Payment gateways, plus Subscriptions, eWallet and Bookings. |
| **Email** | Services that send your site's emails, and Mailchimp. |
| **Automation** | Webhooks, API keys, the MCP server for AI assistants, and Zapier, Make, Google Sheets, Slack and HubSpot. Webhooks and the services that use them come with the Professional and Marketplace plans; API keys and the MCP server with the Marketplace plan. |
| **Social** | Social posting, Facebook comments, Disqus and Smartarget. |
| **Analytics** | Google Analytics, Algolia search, Logbee and the AdBlock detector. |
| **Maps** | Google Maps and Auto locate. |
| **Security** | Captchas, spam filters, two-step login, Social login, Black list and Trust & safety. |
| **Vehicles**, **Media**, **Notifications** | Vehicle data, file and video uploads, and notifications. |
| **Content** | Blog, Forums, FAQ and Reviews. |
| **Other** | Messaging, Add to home screen, and a few services such as OpenStreetMap and Sign in with Apple. |

Administrators see every card. Members of other [roles](/roles-work-classified-ads-script/) only see the cards for
the pages their role lets them open. Webhooks, API keys, the MCP server and the ready-made webhook add-ons (Zapier,
Make, Google Sheets, Mailchimp, Slack, HubSpot) are for administrators only.

## Switch a built-in feature on or off

1. Go to **Add-ons** and click the feature's card.
2. Use the switch at the top, such as **Enable messaging**. Some features have extra settings on the same page.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

Some cards carry a **PRO** label from the days when they were paid extras; it doesn't tell you which plan a feature
needs. A few features come with the Professional or Marketplace plan, such as memberships, bookings, webhooks, API keys
and the MCP server: see [Compare plans](/compare-plans/#features-for-bigger-marketplaces).

When you switch on a feature that has content to manage, a new item appears in the admin panel menu: **Blog**,
**FAQ**, **Forum**, **Reviews**, **Subscriptions** or **Transaction**. Switching a feature off hides it from your
site and the menu but keeps its content, so nothing is lost if you turn it back on.

## Built-in features

### Content

| Add-on | What it does | Guide |
| --- | --- | --- |
| **Blog** | A blog for news, tips and announcements, which also helps your search ranking. | [Blog](/how-to-create-a-blog/) |
| **Forums** | Discussion boards where members ask questions and talk. | [Forum](/add-forums-section/) |
| **FAQ** | A page of frequently asked questions. | [FAQ](/create-frequent-asked-questions-faq/) |
| **Reviews** | Members rate and review listings and sellers, with optional replies, invitations, awards, fake-review protection and AI summaries. | [Reviews and ratings](/review-system-works/), [More from reviews](/review-extras/) |

### Payments

| Add-on | What it does | Guide |
| --- | --- | --- |
| **Subscriptions** | Charge members a recurring fee for a plan that lets them post. Professional and Marketplace plans. | [Membership plans](/membership-plans/) |
| **eWallet** | Members keep a balance on your site to pay and get paid. | [eWallet](/ewallet/) |
| **Bookings** | Rentals and appointments: buyers book days, nights, hours or time slots on a calendar, and sellers accept or bookings are instant. Professional and Marketplace plans; paid bookings on the Marketplace plan. | [Bookings](/bookings/) |

### Security and trust

| Add-on | What it does | Guide |
| --- | --- | --- |
| **Social login** | Members sign up and sign in with Facebook, Google and other accounts. | [Social login](/how-to-login-using-social-auth-facebook-google-twitter/) |
| **Black list** | Blocks members whose listings you mark as spam, and disposable email addresses. | [Blacklist and banned words](/activate-blacklist-works/) |
| **Trust & safety** | Business sellers, verified sellers, reviews both ways and earned badges. | [Reviews and ratings](/review-system-works/#earned-badges) |

### Everything else

| Add-on | Tab | What it does | Guide |
| --- | --- | --- | --- |
| **Messaging** | Other | Private messages between members inside your site, instead of email. | [Messaging between members](/how-to-use-messaging-system/) |
| **Add to home screen** | Other | Lets visitors install your marketplace on their phone like an app. | [Add to home screen](/add-to-home-screen/) |
| **Web push notifications** | Notifications | Notifications on phones and browsers for new messages, search alerts and listings. | [Push notifications](/push-notifications/) |
| **AdBlock detector** | Analytics | Asks visitors who block ads to switch their ad blocker off. | [Ad-block detector](/adblock-detector/) |
| **Auto locate** | Maps | Suggests the nearest location to each visitor and shows how far away listings are. | [Auto-locate visitors](/auto-locate-visitors/) |

## Which add-ons to start with

- **Every marketplace:** Messaging keeps conversations on your site, and Black list saves you time fighting spam.
- **Community marketplaces:** Reviews and Forums give members reasons to come back.
- **To earn money:** Subscriptions, alongside [featured listings](/how-to-create-featured-plan/). For
  boosts, paid renewal and posting fees on one page, see [Make money](/make-money/).
- **For search engines:** the Blog, with regular useful posts.
- **To save time:** [Webhooks](/webhooks/) send new listings to Slack, a spreadsheet or your CRM, and an
  [AI assistant](/mcp-server/) can answer questions about your site and do routine jobs for you.

## Related guides

- [Integrations](/integrations-overview/) — every outside service on the Add-ons page.
- [Webhooks](/webhooks/) — send your site's events to other apps.
- [Ways to make money from your marketplace](/how-to-earn-money/) — which add-ons and settings help.
- [A tour of the admin panel](/admin-panel-tour/) — where everything is.
{: .cards}
