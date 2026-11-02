---
title: Shipping labels, live rates and tracking with EasyPost, ShipEngine and AfterShip
nav_title: Shipping labels and tracking
description: Connect EasyPost or ShipEngine for live carrier rates in the cart and shipping labels for paid orders, and AfterShip so buyers can follow their parcel and get an email when it arrives.
section: payments
order: 537
permalink: /shipping-labels/
keywords: easypost, shipengine, aftership, shipping label, shipping labels, buy label, print label, postage, carrier rates, live rates, real-time shipping, ups, usps, fedex, dhl, tracking, tracking number, track parcel, parcel tracking, delivery status, out for delivery, delivered, delivery email, webhook, webhook secret, api key, test key, sandbox, sellers buy labels, label allowance, parcel size, ship order, add tracking
updated: 2026-11-02
plans: Marketplace plan
---

<div class="summary" markdown="1">
- **EasyPost** or **ShipEngine** gives buyers the carriers' live rates in the cart, and lets you buy a shipping label for a paid order.
- Labels are paid by your EasyPost or ShipEngine account. Sellers can only buy them if you allow it (off by default).
- **AfterShip** follows each parcel: buyers see where it is on their order and get an email when it is out for delivery and when it is delivered.
- Off by default. You need your own accounts with these services, and only admins can set them up.
</div>

Two add-ons in **Add-ons › Shipping** take care of shipping for marketplaces that sell through the cart:

- **EasyPost / ShipEngine** connects your account with one of these multi-carrier services. Buyers see the carriers'
  real prices in the cart, and you buy a label for each paid order without leaving your site. The tracking number
  goes on the order and to the buyer by itself.
- **AfterShip** follows every tracking number. Buyers see the delivery status on their order and get an email when
  the parcel is out for delivery and when it is delivered.

You can use either one, or both. They are part of the **Marketplace** plan, like
[live shipping rates with Shippo](/shippo/), and only admins can open their pages. Each one uses your own account
with the service, which bills you for it: check their current prices with them.

## EasyPost or ShipEngine

### What you need

- An **EasyPost** or **ShipEngine** account. With ShipEngine, connect at least one carrier account in ShipEngine first:
  the carriers you connect there are the ones your site asks for rates.
- Its **API key**: in EasyPost under **Account settings > API keys**, in ShipEngine under **API Management**.
- For live rates in the cart: the [shopping cart](/shopping-cart/) paid in one payment. Without it, labels still
  work.

### Connect your account

1. In your admin panel, go to **Add-ons**, open the **Shipping** tab and click **EasyPost / ShipEngine**. The page is
   called **Shipping labels and rates**.
2. Choose the **Provider**: **EasyPost** or **ShipEngine**.
3. Paste your **API key**.
4. Decide whether sellers may buy labels (see [Who buys labels](#who-buys-labels)).
5. Click **Save**. Your site checks the key with the provider before saving it. If it isn't accepted, the page says
   *The key was not accepted* and why.
{: .steps}

The key is kept hidden once saved: leave the field empty to keep it. To switch rates and labels off, choose **Off** as
the provider and click **Save**.

With ShipEngine, the page shows how many carrier accounts it asks for rates (**Carrier accounts quoted**). After you
connect another carrier in ShipEngine, click **Save** again so your site picks it up.

**Test first.** An EasyPost test key or a ShipEngine sandbox key gives real rates, but its labels are samples that
can't be used to ship. The page says so in red while a test key is saved. Change to your production key once you
have finished testing.
{: .tip}

### Live rates in the cart

Once connected, the cart works as described in [Live shipping rates with Shippo](/shippo/#what-buyers-see): buyers give
their address, see the carriers' rates for each seller's parcel and pick one. The rates come from your EasyPost or
ShipEngine account instead. If you had Shippo switched on too, EasyPost or ShipEngine is used.

Rates are only shown for sellers who have filled in their **Shipping origin** page: where they ship from and their
usual parcel. On the same page sellers can give a listing its own weight and size (**Listings with their own weight
or size**). A listing shipped on its own goes in its own size; with other items, the parcel grows to fit the biggest
one. When the provider doesn't answer, the seller's [shipping profile](/shipping-profiles/) or the listing's own
shipping price applies, as before.

### Who buys labels

Labels are always charged to **your** EasyPost or ShipEngine account. Nothing is taken from the seller: the shipping
the buyer paid goes to the seller with the sale, as usual. That is why only admins can buy labels unless you change
it.

| Setting | What it does |
| --- | --- |
| **Let sellers buy labels on my account** | Off (the default): only admins buy labels, and sellers add their own tracking numbers. On: sellers can buy labels for their paid sales, paid by your account. |
| **Extra a seller may spend on a label** | Only while sellers may buy labels. A seller can buy a label up to what the buyer paid for shipping plus this amount. 0 means no more than the buyer paid. |

When sellers may buy labels, they can only send to the buyer's address your site has for the order, and only rates
within that limit. A dearer rate shows *Above what the buyer paid: the site's team can buy it*. Admins can buy any
label, to any address.

Only switch on **Let sellers buy labels on my account** if you are happy to pay for those labels, for example
because your commission covers them. The cost is not deducted from sellers' earnings.
{: .warning}

### Buy a label

Labels are bought for one paid sale at a time, from its **Ship order** page.

1. In **My sales**, click **Ship with a label** next to a paid sale. (Without label rights, the button says **Add
   tracking**.)
2. Under **Ship to**, check the buyer's address. Under **Parcel**, check the size in cm and the **Weight (kg)**,
   filled in from the seller's shipping origin.
3. Click **Get label rates**.
4. Choose a rate and click **Buy label**, then confirm. The label is charged to the site's shipping account.
5. Click **Print the label**.
{: .steps}

The tracking number goes on the order straight away, and the buyer gets the usual email that their order has
shipped. The page keeps the label's carrier, cost and link, so you can print it again later.

A seller's other items from the same cart checkout go in the same parcel: the page lists their order numbers, and one
label covers them all. Rates are kept for 15 minutes; after that, click **Get the rates again**.

To buy a label for another seller's sale, open its **Ship order** page at
`yourdomain.com/oc-panel/shipment/index/123`, with the order number in place of `123`. Admins can open it for any
paid sale; there is no button for it in **Orders**.
{: .note}

**Already shipped it?** Sellers who send a parcel another way give the **Carrier** and the **Tracking number** at
the bottom of the same page and click **Save the tracking number**. The buyer gets it by email.

## AfterShip tracking

### What you need

- An **AfterShip** account, with an **API key** (in AfterShip under **Settings > API keys**).
- A webhook in AfterShip pointing to your site, and its **webhook secret**. Your site refuses every call from
  AfterShip that isn't signed with it.

### Connect AfterShip

1. In your admin panel, go to **Add-ons**, open the **Shipping** tab and click **AfterShip**.
2. Paste your **API key**.
3. Copy the **Webhook URL** shown on the page.
4. In AfterShip, add it as a webhook (**Settings > Notifications > Webhooks**), and copy the webhook secret AfterShip
   shows there.
5. Back on your site, paste it into **Webhook secret** and click **Save**. Your site checks the API key with
   AfterShip before saving.
{: .steps}

Saved values stay hidden: leave a field empty to keep it. **Turn off** clears both and stops tracking.

### What buyers see

Every tracking number saved on a **Ship order** page, from a label or typed in by the seller, is added to your
AfterShip account. As the carrier scans the parcel, AfterShip tells your site, and the buyer sees a **Delivery** box
on their order with the carrier, the tracking number and the latest status:

| Status | What it means |
| --- | --- |
| **Waiting for the carrier** | AfterShip has the number but no news from the carrier yet. |
| **Label created** | The carrier has the parcel's details. |
| **In transit** | On its way. |
| **Out for delivery** | Arriving today. |
| **Delivery attempt failed** | The carrier tried and couldn't deliver. |
| **Delivered** | It has arrived. |
| **Ready for pickup** | Waiting at a pickup point. |
| **Problem with the delivery** | The carrier reported an issue. |
| **No news from the carrier** | The tracking stopped updating. |

The seller sees the same status on the sale's button in **My sales**.

The buyer gets two short emails, once each: one when the parcel is **out for delivery** and one when it is
**delivered**, with a **View your order** link.

### Good to know

- Only tracking numbers saved on the **Ship order** page go to AfterShip. Numbers added another way, for example by
  ShipStation, aren't followed.
- AfterShip works without EasyPost or ShipEngine: sellers then use **Add tracking** in **My sales** to give the
  numbers of parcels they send themselves.

## Related guides

- [Live shipping rates with Shippo](/shippo/) — the cart's live rates and sellers' shipping origin.
- [Shipping profiles](/shipping-profiles/) — sellers' own shipping prices, used when no live rate is found.
- [Shopping cart](/shopping-cart/) — the one-payment checkout live rates work in.
- [Manage orders](/how-to-manage-orders/) — paid orders and their shipping.
- [US sales tax](/us-sales-tax/) — tax on cart checkout, from the same delivery address.
{: .cards}
