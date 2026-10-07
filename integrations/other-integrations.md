---
title: Other integrations
description: Akismet spam filtering, FraudLabs Pro payment checks, Smartarget engagement widgets, and the Logbee and Instagram integrations you should leave off.
section: integrations
order: 130
permalink: /other-integrations/
keywords: akismet, spam, fraudlabs pro, fraudlabspro, fraud, smartarget, whatsapp button, popup, logbee, instagram, integrations
updated: 2026-10-07
---

This guide covers the smaller integrations on the **Integrations** page that don't have a guide of their own. For the
full list, with links to every guide, see [Integrations](/integrations-overview/).

## Akismet

[Akismet](https://akismet.com) is a spam filter run by the makers of WordPress. With it connected, your marketplace
asks Akismet about every piece of text people send through it, and stops what Akismet recognises as spam:

| What is checked | What happens to spam |
| --- | --- |
| New listings (title, description and the poster's email) | The listing isn't saved, and the poster sees *This post has been considered as spam! We are sorry but we can not publish this listing.* If the [Black list](/activate-blacklist-works/) add-on is on, the member is also marked as a spammer. |
| Messages sent through your contact page and the contact forms on listings and profiles | The message isn't sent, and the sender sees *This email has been considered as spam! We are sorry but we can not send this email.* |
| New forum topics and replies | The post isn't published. |

To connect it:

1. Get an API key at [akismet.com](https://akismet.com). A marketplace is a commercial site, so choose a plan for
   business use.
2. In your admin panel, go to **Integrations** and open **Akismet**.
3. Paste the key into **API key** and click **Save**.
{: .steps}

To switch it off, empty the field and click **Save**.

If Akismet can't be reached, posts and messages go through normally, so an outage never blocks your members.
Akismet is very accurate but not perfect: if a member says a genuine listing was refused, ask them to rephrase it,
and consider [moderation](/how-ads-moderation-works/) instead for that kind of content.
{: .note}

See [Fight spam](/how-to-avoid-spam-in-my-site/) for all the anti-spam tools.

## FraudLabs Pro

[FraudLabs Pro](https://www.fraudlabspro.com) screens payments for fraud. With it connected, before a card payment
goes through, your site sends FraudLabs Pro the buyer's IP address, country, email address and the amount, and only
lets the payment continue if FraudLabs Pro approves it.

1. Create an account at [fraudlabspro.com](https://www.fraudlabspro.com) and copy your API key.
2. In your admin panel, go to **Integrations** and open **FraudLabsPro**.
3. Paste the key into **FraudLabsPro api key** and click **Save**.
{: .steps}

When a payment isn't approved, the buyer sees *We had, issues with your transaction. Please try paying with another
paymethod.* and is sent back to the checkout.

<div class="warning" markdown="1">
Know how it decides before you switch it on:

- Only a clear **approve** lets the payment through. Payments FraudLabs Pro marks for **review** are refused too, and so
  are all payments if FraudLabs Pro can't be reached or your plan's monthly checks run out.
- It checks payments made through Stripe and the other card gateways. PayPal, Bitpay, Mollie and Escrow payments
  aren't checked.

Adjust the rules in your FraudLabs Pro dashboard so that genuine buyers are approved, and keep an eye on your plan's
usage.
</div>

## Smartarget

[Smartarget](https://smartarget.online) offers a set of small engagement tools for websites: WhatsApp and Messenger
contact buttons, pop-ups, message bars and others, set up in Smartarget's own dashboard.

1. Sign up at Smartarget and set up the tools you want there.
2. Copy your Smartarget ID.
3. In your admin panel, go to **Integrations** and open **Smartarget**.
4. Paste it into **Smartarget ID** and click **Save**.
{: .steps}

Smartarget's tools then appear on every public page of your marketplace (not in the admin panel). Change them in
Smartarget's dashboard; empty the field and save to remove them.

## Logbee

The **Logbee** integration adds a "log it" button for the Logbee listings portal to listing pages in some themes, and
adds the listing's details to each listing page's code for Logbee to read. Those details include the seller's email
address and phone number, even when you hide them on the page, so anyone who looks at the page's source code can see
them.

Leave Logbee switched off. If it is on, open **Integrations › Logbee**, untick **Enable Logbee** and click **Save**.
{: .warning}

## Instagram

The **Instagram** integration let members connect their Instagram account in their profile (**Instagram Connect**)
and showed their latest Instagram photos on their listings. It used an Instagram service that Meta shut down in
December 2024, so it no longer works. Leave it switched off; if it is on, open **Integrations › Instagram**, untick
**Enable Instagram** and click **Save**.

## Integrations covered elsewhere

| Integration | Guide |
| --- | --- |
| **reCaptcha** | [reCAPTCHA](/set-recaptcha-website/) |
| **Google Authenticator** and **2Factor** | [Two-step login](/2-step-authentication/) and [two-step login by SMS](/2-step-sms-authentication/) |
| **Disqus** and **Facebook** (comments) | [Comments on listings and posts](/how-to-activate-comments-with-disqus/) |
| **Twitter** | [Auto-post listings to social media](/auto-post-social-media/) |
| **Pusher** and **Google Cloud Messaging** | [Push notifications](/push-notifications/) |
| Payment gateways | [Take payments on your site](/setup-payment-gateways/) |

## Related guides

- [Integrations](/integrations-overview/) — every service you can connect.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — all the anti-spam tools.
- [Take payments on your site](/setup-payment-gateways/) — payment gateways and checkout.
{: .cards}
