---
title: Integrations
nav_title: Connect outside services
description: Every outside service you can connect from the Add-ons page, from payments and email to maps, automation, analytics and spam protection, with a guide for each.
section: integrations
order: 20
permalink: /integrations-overview/
keywords: integrations, connect, services, api key, third party, stripe, paypal, mailgun, google maps, openstreetmap, google analytics, recaptcha, turnstile, akismet, algolia, cloudinary, dropbox, twilio, apple, zapier, make, slack, hubspot, mailchimp, google sheets, webhooks, mcp, where is integrations
updated: 2026-10-20
---

Integrations connect your marketplace to services run by other companies: payment providers, email services, maps,
analytics, automation tools and more. You create an account with the service, copy a key it gives you, and paste it
into your admin panel. The service then does its job for your site.

Most integrations are free to connect, but the service itself may charge you. Check its pricing before you rely on it.

## Connect a service

1. In the admin panel menu, under **Configure**, click **Add-ons**.
2. Find the service: type its name in **Search add-ons…** or open its tab (**Payments**, **Email**, **Automation**,
   **Social** and so on).
3. Click its card and follow the guide linked below for the keys it needs.
4. Paste the keys and click **Save**.
{: .steps}

Connected services show an **On** label. Integrations used to have their own page; it is now part of
[Add-ons](/addons/), together with the built-in features, and old links still work.

Keys are like passwords: anyone who has them can use your account with that service. Don't share them, and if one
leaks, create a new key at the service and paste it in again.
{: .warning}

## Payments

| Service | What it does | Guide |
| --- | --- | --- |
| **Stripe** | Card payments, and with Stripe Connect, commissions on sales between members. | [Stripe](/stripe/) |
| **PayPal** | PayPal payments. | [PayPal](/paypal/) |
| **Escrow** | Payments held by Escrow.com until the buyer receives the item. | [Escrow payments](/escrow-pay/) |
| **FraudLabs Pro** | Checks card payments for fraud before they are accepted. | [Other integrations](/other-integrations/#fraudlabs-pro) |
| **2Checkout**, **Authorize.net**, **Mercado Pago**, **Mollie**, **PagueloFacil**, **PayFast**, **Payline**, **PayTabs**, **Razorpay**, **Robokassa**, **Serfinsa** | Other payment gateways, many of them for a particular country. | [Other payment gateways](/other-payment-gateways/) |

Gateways that have closed (BitPay, Paymill, SecurePay, Zenith) only show for sites that already had them set up.

## Email

| Service | What it does | Guide |
| --- | --- | --- |
| **Elastic Email** | Sends your site's emails through your Elastic Email account. | [Elastic Email](/configure-elasticemail-yclas/) |
| **Mailgun** | Sends your site's emails through your Mailgun account. | [Mailgun](/mailgun/) |
| **Mailchimp** | Tells a Mailchimp automation when a listing is published, through a webhook. | [Webhooks](/webhooks/) |

For any other provider, use SMTP in **Email** settings. See [Send email through SMTP](/smtp-configuration/).

## Automation

| Service | What it does | Guide |
| --- | --- | --- |
| **Webhooks** | Sends new listings, sign-ups, paid orders, messages and reviews to any URL as they happen. | [Webhooks](/webhooks/) |
| **Zapier**, **Make**, **Google Sheets**, **Slack**, **HubSpot** | Ready-made webhook set-ups for these services: paste their webhook URL and pick the events. | [Webhooks](/webhooks/#connect-zapier-make-slack-and-other-services) |
| **API keys** | Keys with only the permissions an app needs, for the API, Zapier and AI assistants. | [API keys and permissions](/api-keys/) |
| **MCP server** | Manage your marketplace from Claude, ChatGPT or another AI assistant. | [Connect an AI assistant](/mcp-server/) |

These are for administrators only.

## Social

| Service | What it does | Guide |
| --- | --- | --- |
| **Social posting** | Posts new listings to X, a Facebook Page and Telegram automatically. | [Auto-post listings to social media](/auto-post-social-media/) |
| **Facebook** | Facebook comments on listings. | [Comments on listings and posts](/how-to-activate-comments-with-disqus/) |
| **Disqus** | Disqus comments on listings, blog posts and FAQs. | [Comments on listings and posts](/how-to-activate-comments-with-disqus/) |
| **Smartarget** | WhatsApp and Messenger contact buttons, pop-ups, message bars and more. | [Other integrations](/other-integrations/#smartarget) |

Signing in with Facebook, Google and other accounts is a built-in add-on, **Social login**. See
[Social login](/how-to-login-using-social-auth-facebook-google-twitter/).

## Analytics and search

| Service | What it does | Guide |
| --- | --- | --- |
| **Google Analytics** | Statistics about your visitors. | [Google Analytics](/google-analytics/) |
| **Algolia** | Instant search suggestions as visitors type. | [Algolia search](/algolia-search/) |
| **Logbee** | Adds Logbee tags to listing pages. Leave it off. | [Other integrations](/other-integrations/#logbee) |

## Maps

| Service | What it does | Guide |
| --- | --- | --- |
| **OpenStreetMap** (under **Other**) | Free maps, with no key and no billing. New sites use it by default. | [Maps](/how-to-configure-Google-Map-Settings/) |
| **Google Maps** | Google's maps on listings, profiles, the posting form and the home page. | [Maps](/how-to-configure-Google-Map-Settings/) |

## Security and sign-in

| Service | What it does | Guide |
| --- | --- | --- |
| **Cloudflare Turnstile** and **reCAPTCHA** | Stop bots on sign-up, contact and posting forms. | [Captcha](/set-recaptcha-website/) |
| **Akismet** | Filters spam out of listings, contact messages and forum posts. | [Other integrations](/other-integrations/#akismet) |
| **Google Authenticator** | Two-step sign-in with an authenticator app. | [Two-step login](/2-step-authentication/) |
| **2Factor** | Two-step sign-in with a code sent by SMS. | [Two-step login by SMS](/2-step-sms-authentication/) |
| **Twilio** (under **Other**) | Phone number sign-in and two-step verification with a code sent by SMS through Twilio. | [Two-step login by SMS](/2-step-sms-authentication/) |
| **Apple** (under **Other**) | Sign in with Apple, next to your other sign-in options. | [Social login](/how-to-login-using-social-auth-facebook-google-twitter/) |

## Media, vehicles and notifications

| Service | What it does | Guide |
| --- | --- | --- |
| **Cloudinary** | Video uploads in listings. | [Cloudinary video uploads](/cloudinary/) |
| **Dropbox** and **Google Picker** | Members attach files from Dropbox or Google Drive. | [Files from Google Drive and Dropbox](/cloud-photo-uploads/) |
| **Vehicle catalogue** (under **Other**) and **Auto-Data** | Make, model and year lists for vehicle listings, from the free built-in catalogue or Auto-Data. | [Vehicle data](/vehicle-data/) |
| **Pusher** | On-screen notifications for signed-in members. | [Push notifications](/push-notifications/) |
| **Firebase Cloud Messaging** | Push notifications for a mobile app. | [Push notifications](/push-notifications/) |

## Services that aren't listed

For a service that gives you a code snippet to paste (a chat widget, a verification tag, a tracking pixel), use
**Design › Custom code**. See [Add code to the head and footer](/html-in-head-element/). For a service that can
receive webhooks, see [Webhooks](/webhooks/).

## Related guides

- [Add-ons](/addons/) — the Add-ons page and the built-in features.
- [Webhooks](/webhooks/) — connect Zapier, Make, Slack and any other app.
- [Add code to the head and footer](/html-in-head-element/) — for services that aren't listed here.
- [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) — Meta Pixel, Google Ads and others.
{: .cards}
