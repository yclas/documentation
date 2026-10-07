---
title: Integrations
nav_title: The Integrations page
description: Every outside service you can connect from the Integrations page, from payments and email to maps, analytics and spam protection, with a guide for each.
section: integrations
order: 20
permalink: /integrations-overview/
keywords: integrations, connect, services, api key, third party, stripe, paypal, mailgun, google maps, google analytics, recaptcha, akismet, algolia, cloudinary, dropbox, twitter
updated: 2026-10-07
---

Integrations connect your marketplace to services run by other companies: payment providers, email services, Google
Maps, analytics and more. You create an account with the service, copy a key it gives you, and paste it into your
admin panel. The service then does its job for your site.

Most integrations are free to connect, but the service itself may charge you. Check its pricing before you rely on it.

## Connect a service

1. In the admin panel, click **Integrations** in the sidebar.
2. Find the service. Use the tabs (**Payments**, **Email**, **Social**, **Other**) or type its name in the search box.
3. Click its card and follow the guide linked below for the keys it needs.
4. Paste the keys and click **Save**.
{: .steps}

Connected services show a **Connected** label, and the **Connected** tab lists them all. The header shows how many
you have connected.

Keys are like passwords: anyone who has them can use your account with that service. Don't share them, and if one
leaks, create a new key at the service and paste it in again.
{: .warning}

## Payments

| Service | What it does | Guide |
| --- | --- | --- |
| **Stripe** | Card payments, and with Stripe Connect, commissions on sales between members. | [Stripe](/stripe/) |
| **Paypal** | PayPal payments. | [PayPal](/paypal/) |
| **Escrow** | Payments held by Escrow.com until the buyer receives the item. | [Escrow payments](/escrow-pay/) |
| **FraudLabsPro** | Checks card payments for fraud before they are accepted. | [Other integrations](/other-integrations/#fraudlabs-pro) |
| **2Checkout**, **Authorize**, **Bitpay**, **Mercadopago**, **Mollie**, **Paguelofacil**, **Payfast**, **Payline**, **Paymill**, **Paytabs**, **Razorpay**, **Robokassa**, **SecurePay**, **Serfinsa**, **Zenith** | Other payment gateways, many of them for a particular country. | [Other payment gateways](/other-payment-gateways/) |

## Email

| Service | What it does | Guide |
| --- | --- | --- |
| **ElasticEmail** | Sends your site's emails through your Elastic Email account. | [Elastic Email](/configure-elasticemail-yclas/) |
| **Mailgun** | Sends your site's emails through your Mailgun account. | [Mailgun](/mailgun/) |

For any other provider, use SMTP in **Email** settings. See [Send email through SMTP](/smtp-configuration/).

## Social

| Service | What it does | Guide |
| --- | --- | --- |
| **Facebook** | Facebook comments on listings. | [Comments on listings and posts](/how-to-activate-comments-with-disqus/) |
| **Twitter** | Posts new listings to your X (Twitter) account. | [Auto-post listings to social media](/auto-post-social-media/) |
| **Instagram** | Showed sellers' Instagram photos on their listings. No longer works. | [Other integrations](/other-integrations/#instagram) |
| **Logbee** | Adds a Logbee button to listings. | [Other integrations](/other-integrations/#logbee) |

Signing in with Facebook, Google and other accounts is an add-on, not an integration. See
[Social login](/how-to-login-using-social-auth-facebook-google-twitter/).

## Other

| Service | What it does | Guide |
| --- | --- | --- |
| **Google Maps** | Maps on listings, profiles, the posting form and the home page. | [Maps](/how-to-configure-Google-Map-Settings/) |
| **Google Analytics** | Statistics about your visitors. | [Google Analytics](/google-analytics/) |
| **reCaptcha** | Stops bots on sign-up, contact and posting forms. | [reCAPTCHA](/set-recaptcha-website/) |
| **Akismet** | Filters spam out of listings, contact messages and forum posts. | [Other integrations](/other-integrations/#akismet) |
| **Google Authenticator** | Two-step sign-in with an authenticator app. | [Two-step login](/2-step-authentication/) |
| **2Factor** | Two-step sign-in with a code sent by SMS. | [Two-step login by SMS](/2-step-sms-authentication/) |
| **Algolia** | Instant search suggestions as visitors type. | [Algolia search](/algolia-search/) |
| **Cloudinary** | Video uploads in listings. | [Cloudinary video uploads](/cloudinary/) |
| **Dropbox** and **Google Picker** | Members attach files from Dropbox or Google Drive. | [Files from Google Drive and Dropbox](/cloud-photo-uploads/) |
| **CarQuery** and **Auto-Data** | Year, make and model lists for vehicle listings. | [Vehicle data](/vehicle-data/) |
| **Disqus** | Disqus comments on listings, blog posts and FAQs. | [Comments on listings and posts](/how-to-activate-comments-with-disqus/) |
| **Pusher** | On-screen notifications for signed-in members. | [Push notifications](/push-notifications/) |
| **Google Cloud Messaging** | Push notifications for the old native apps. No longer works. | [Push notifications](/push-notifications/) |
| **Smartarget** | Contact buttons, pop-ups and other engagement widgets. | [Other integrations](/other-integrations/#smartarget) |

## Related guides

- [Add-ons](/addons/) — built-in features you can switch on.
- [Add code to the head and footer](/html-in-head-element/) — for services that aren't listed here.
- [Tracking codes and analytics pixels](/how-to-add-tracking-codes/) — Meta Pixel, Google Ads and others.
{: .cards}
