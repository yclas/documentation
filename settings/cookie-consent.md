---
title: Cookie consent and privacy
description: Show a cookie notice to visitors, understand what it does and doesn't do, and put together the privacy pieces a marketplace usually needs.
section: settings
order: 120
permalink: /cookie-consent/
keywords: cookie, cookies, consent, banner, gdpr, eu, privacy, privacy policy, terms, eprivacy, analytics, tracking
updated: 2026-10-07
---

Cookies are small files a website stores in the visitor's browser. Your marketplace uses them to keep members signed
in and to remember choices such as their language or location. Services you add, such as
[Google Analytics](/google-analytics/), advertising or chat widgets, set cookies of their own.

In many countries, including the EU and the UK, you must tell visitors about cookies, and ask for their consent
before setting any that aren't strictly needed. The **Cookie Consent** setting shows a simple notice; this guide
explains what it covers and what else you may need.

This guide is general information, not legal advice. The rules depend on where you and your members are; check
them for your marketplace.
{: .note}

## Turn on the cookie notice

1. In the admin panel, go to **Settings › General**.
2. In **Access & privacy**, switch on **Cookie Consent**.
3. Click **Save changes**.
{: .steps}

New visitors now see a banner at the bottom of the page: *We use cookies to track usage and preferences*, with a
**Got it!** button and a **Learn more** link. Once a visitor clicks **Got it!**, the banner doesn't show again on
that browser.

To change the wording, edit those texts in **Settings › Translations** (search for "We use cookies"). See
[Language and translations](/how-to-change-language/).

## What the notice does and doesn't do

The cookie notice **informs** visitors. It doesn't block anything: Google Analytics, advertising and any code you
added in **HTML in HEAD Element** or **HTML in Footer** still run before the visitor clicks, and whether or not they
do. The **Learn more** link goes to a general explanation of cookies, not to your own policy.
{: .important}

That is enough if your site only uses the cookies it needs to work. If you add analytics, advertising or marketing
tools and your visitors are in the EU or the UK, the law generally expects you to ask first and let people say no.
To do that, use a consent management platform (Cookiebot, CookieYes, Iubenda, Google's consent tools and similar):

1. Sign up with the provider and set it up for your domain.
2. Paste the code it gives you into **HTML in HEAD Element** in **Settings › General › Advanced**. See
   [Add code to the head and footer](/html-in-head-element/).
3. Follow the provider's instructions to connect it to Google Analytics and any other tool, so they wait for consent.
4. Switch off **Cookie Consent**, so visitors don't see two banners.
{: .steps}

## The privacy pieces of a marketplace

A cookie notice is one part. Most marketplaces also need:

- **A privacy policy page** explaining what personal data you collect (accounts, listings, messages), why, how long
  you keep it, which services you share it with (payment providers, email service, analytics) and how members can ask
  for their data or have it deleted. Create it in [Pages](/how_to_add_pages/) and link it from your footer
  [menu](/modify-top-menu/).
- **Terms of use** that members accept. The **Accept Terms Alert** setting makes visitors accept a page before using
  the site. See [Terms of use and age alert](/activate-access-terms-alert/).
- **A way to unsubscribe.** Every email your site sends includes an unsubscribe link, and members can stop newsletters
  and the [email digest](/email-digest/) from their profile.

## Related guides

- [Google Analytics](/google-analytics/) — measuring visits, and the cookies it sets.
- [Add code to the head and footer](/html-in-head-element/) — where consent tools are installed.
- [Terms of use and age alert](/activate-access-terms-alert/) — make visitors accept your terms.
- [General settings](/change-site-name-site-description/) — the other settings in Access & privacy.
{: .cards}
