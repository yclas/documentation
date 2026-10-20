---
title: Send your site's events to other apps with webhooks
nav_title: Webhooks, Zapier and Slack
description: Send new listings, sign-ups, paid orders and reviews to Zapier, Make, Slack, Google Sheets, HubSpot, Mailchimp or any URL the moment they happen.
section: integrations
order: 900
permalink: /webhooks/
keywords: webhook, webhooks, zapier, make, integromat, slack, google sheets, spreadsheet, hubspot, crm, mailchimp, automation, automate, catch hook, notify, new listing, new user, order paid, signing secret, signature, delivery log, endpoint, n8n, paused, webhook paused
updated: 2026-10-20
plans: Professional and Marketplace plans
---

A webhook is a message your marketplace sends to another app the moment something happens: a listing is published,
a member signs up, an order is paid. The other app then does its part, for example posts the listing to a Slack
channel, adds a row to a spreadsheet, creates a contact in your CRM or starts a Zapier workflow.

You don't need to write code. Services such as Zapier and Make give you a webhook URL; you paste it into your admin
panel and pick the events to send.

Webhooks are part of the **Professional** and **Marketplace** plans. Apps that subscribe to webhooks themselves with an
[API key](/api-keys/) need the Full API on the **Marketplace** plan.
{: .note}

## Before you start

Webhooks are on the **Add-ons** page in the admin panel, in the **Automation** tab. There are two ways in:

- **Ready-made add-ons** for **Zapier**, **Make**, **Google Sheets**, **Mailchimp**, **Slack** and **HubSpot**: one
  short page each. Start here if you use one of these services.
- **Webhooks**: the full page, for any other app or your own code, with every event, the personal-data options and
  the delivery log.

Both feed the same list of webhooks. Only administrators can open these pages.

On sites created from mid-October 2026, webhooks are switched on from the start, but nothing is sent until you add a
URL. On older sites they start switched off; connecting one of the ready-made add-ons switches them on for you.
{: .note}

## Connect Zapier, Make, Slack and other services

1. In the service, create a webhook trigger and copy its URL. For Zapier this is the **Catch Hook** trigger of
   *Webhooks by Zapier*; for Slack, an *Incoming Webhook*. Each add-on page has a **How to get a webhook URL** link to
   the service's own instructions.
2. In your admin panel, go to **Add-ons**, open the **Automation** tab (Mailchimp is under **Email**) and click the
   service's card.
3. Paste the URL into **Webhook URL**.
4. Under **Send on**, tick the events the service should get. **Listing published** is ticked for you.
5. Leave **Include email addresses** off unless the service needs them (see [Personal data](#personal-data)).
6. Click **Connect Zapier** (or the name of your service).
{: .steps}

The page then shows the webhook under **Connected to Zapier**, with a **Log** link and a **Send test** button. You also
see a **Signing secret** once: you only need it if the app checks where requests come from, so most people can ignore
it.

You can add several webhooks for the same service, for example one Slack channel for new listings and another for
paid orders. Pause or delete them on the **Webhooks** page, where they are marked *Added from the Slack add-on*.

Google Sheets has no webhook trigger of its own. Use a Zapier or Make scenario that writes the row, or a Google Apps
Script web app, and paste its URL. The same goes for Mailchimp automations that can't receive webhooks directly.
{: .tip}

## Add a webhook for any app

1. Go to **Add-ons**, open the **Automation** tab and click **Webhooks**.
2. Check that **Enable webhooks** is on. The switch saves straight away.
3. Under **Add an endpoint**, paste the **Endpoint URL** and, if you like, a **Description** such as *New listings to
   Facebook*.
4. Tick the **Events** to send.
5. Under **Personal data**, tick only what the app needs.
6. Click **Add endpoint**.
7. Copy the **Signing secret** shown at the top. It is shown only once.
{: .steps}

The URL must start with `https://` or `http://` and be reachable on the internet: addresses inside a private network
are refused.

## Events

| Event | Sent when | Code |
| --- | --- | --- |
| **Listing created** | A listing is posted, whether or not it is live yet. | `ad.created` |
| **Listing published** | A listing goes live, for example straight away or when you approve it. | `ad.published` |
| **Listing updated** | A listing is edited. | `ad.updated` |
| **Listing deactivated** | A listing is taken off the site. | `ad.deactivated` |
| **User signed up** | A new member registers. | `user.created` |
| **Order paid** | A payment is confirmed: a featured listing, a plan, a Buy Now purchase and so on. | `order.paid` |
| **Message sent** | A member sends a private message. Needs its own permission (below). | `message.created` |
| **Review posted** | A member leaves a review. | `review.created` |

Drafts that sellers haven't posted yet don't send anything.

## Personal data

What leaves your site is then in the other app's hands, so personal data is left out unless you allow it for each
webhook:

| Option | What it adds |
| --- | --- |
| **Include email addresses of users** (on the Webhooks page) or **Include email addresses** (on an add-on page) | The email address of the seller, buyer or new member. Without it, every email address is removed from the events. |
| **Private messages between users** | Lets the webhook receive **Message sent**: the full text of the message and both members. Only on the Webhooks page. |

Without the email option, the seller's phone number and address are also left out of listings that aren't live.

Forwarding private messages sends your members' conversations, word for word, to another company. Only tick it for
an app you control or fully trust, and check that your [privacy policy](/cookie-consent/) covers it. Every delivery
that carried a message or email addresses is marked in the delivery log.
{: .warning}

## Manage your webhooks

The **Endpoints** list on the Webhooks page shows each webhook's URL, its events, the last delivery and its status.
Next to each one:

| Button | What it does |
| --- | --- |
| **Log** | The last 100 deliveries, with the app's answer. |
| **Send test** | Sends a test event with a sample listing, within a minute or two. |
| **Pause** / **Switch on** | Stops sending to this webhook, or starts again. |
| **New secret** | Creates a new signing secret. The old one stops working at once. |
| **Delete** | Removes the webhook and its delivery log. |

You can have up to 10 webhooks, plus, on the Marketplace plan, up to 5 that apps add themselves with an
[API key](/api-keys/).

To stop all webhooks at once, switch off **Enable webhooks**. Your webhooks are kept, and nothing is sent until you
switch it on again.

## Deliveries and retries

Events are queued and sent within a minute or two, so a slow app never slows down your site. The app must answer with
a success status (2xx) within 5 seconds. If it doesn't, the delivery is tried again after 1 minute, 10 minutes,
1 hour and 6 hours, and then marked **Failed**.

In the delivery log each delivery is **Waiting**, **Sending**, **Delivered** or **Failed**, with the answer the app
sent back. Click **Resend** to send a delivered or failed event again. Deliveries are kept for 30 days.

If a webhook fails 50 times in a row, it is paused and you get the *webhook-disabled* email ("A webhook on your site
was paused") at the **Sender email** address in **Email** settings. Fix the URL or the app, then click **Switch on**.

## For developers: what the app receives

Each delivery is a `POST` with a JSON body:

```json
{"id": "evt_…", "event": "ad.published", "created": "2026-10-20T10:15:00+00:00",
 "site": {"name": "…", "url": "…"}, "data": {…}}
```

and these headers: `X-Yclas-Event`, `X-Yclas-Event-Id`, `X-Yclas-Delivery`, `X-Yclas-Timestamp` and
`X-Yclas-Signature`. The event id stays the same when a delivery is retried or resent, so you can ignore duplicates.

To check a request really comes from your site, compute an HMAC-SHA256 of the timestamp, a dot and the raw body, with
the webhook's signing secret as the key, and compare it with the signature:

```
expected = "sha256=" + hex(hmac_sha256(secret, timestamp + "." + body))
```

Reject requests whose timestamp is more than 5 minutes old. Redirects aren't followed, so give the final URL.

The full reference, with every field and the API for apps that subscribe themselves (REST hooks), is on your own site
at `/api/docs`, linked as **API & webhook docs** at the top of the **Add-ons** page. See also the
[REST API](/api-documentation/#webhook-subscriptions-rest-hooks).

## Good to know

- If the Webhooks page says *Yclas support has switched webhooks off for your site*, the switch is greyed out. Ask us
  through [Support](/use-yclas-support-system/) if you need them.
- A webhook's events and personal-data options can't be changed after you add it. Add a new one and delete the old.
- Listings and members brought in by an import don't send events.

## Related guides

- [API keys](/api-keys/) — for apps that subscribe to webhooks themselves (Marketplace plan).
- [Connect an AI assistant](/mcp-server/) — run your marketplace from Claude or ChatGPT (Marketplace plan).
- [Add-ons and integrations](/addons/) — everything on the Add-ons page.
- [REST API](/api-documentation/) — read and write your data from your own app.
{: .cards}
