---
title: Live shipping rates with Shippo
nav_title: Live shipping rates (Shippo)
description: Connect your Shippo account so buyers enter their address in the cart and choose a carrier's live shipping rate for each seller, worked out from where the seller ships from and the parcel's size and weight.
section: payments
order: 535
permalink: /shippo/
keywords: shippo, live shipping rates, real-time shipping, carrier rates, calculated shipping, shipping calculator, ups, usps, fedex, dhl, royal mail, canada post, postage rates, parcel weight, package size, ship from, shipping origin, ship to, shipping address
updated: 2026-10-22
plans: Marketplace plan
---

A flat shipping price is either too high for a buyer next door or too low for one abroad. With Shippo, buyers give
their address in the cart and see the carriers' real prices for each seller's parcel, then pick the one they want.
Sellers stop guessing their shipping costs.

[Shippo](https://goshippo.com) is a shipping service that works with many carriers. Your site uses your own Shippo
account to ask for rates. It only asks for rates: no labels are bought, and sellers send their parcels as usual.

Live shipping rates work in the [shopping cart](/shopping-cart/), with one-payment checkout through Stripe
Connect, so they're part of the **Marketplace** plan with the **Nova** theme. They're off until you switch them on.
{: .note}

## Switch live rates on

1. Create a Shippo account and copy your API token from Shippo's settings (it starts with `shippo_live_`, or
   `shippo_test_` for a test token).
2. In your admin panel, open the **Commission on sales** page (in **Make money**, click **Manage** on the **Take a
   commission on sales** card).
3. With **Shopping cart** on, switch on **Live shipping rates (Shippo)**.
4. Paste your token into **Shippo API token**.
5. Click **Save**.
{: .steps}

The token is kept hidden once saved; type a new one to change it, or tick **Remove the saved token**. Live rates
only run while both the switch and a token are there. If the switch says *Set by Yclas support for your site*, ask
us through **Support** to change it.

Try it with a Shippo test token first, and check the rates you get before you use your live token.
{: .tip}

## What sellers set up

Sellers who want live rates open **Shipping origin** in their account menu and fill in:

| Section | What it's for |
| --- | --- |
| **Ship from** | **Name**, **Street**, **City**, **State or province**, **Postcode**, **Country** and **Phone (optional)**: where their parcels leave from. |
| **Your usual parcel** | **Length**, **Width** and **Height** in cm, and **Weight per item** in kg. |
| **Listings with their own weight** | A different weight for a heavier or lighter listing. Left empty, it uses the weight above. |

They click **Save**. Sellers who don't fill it in keep their [shipping profile](/shipping-profiles/) or each listing's
own [shipping cost](/use-shipping-custom-field/), as before.

## What buyers see

1. In the cart, a **Ship to** box asks for the buyer's **Street**, **Postcode**, **City**, **State or province** and
   **Country**.
2. The buyer clicks **Get shipping rates**.
3. For each seller with a shipping origin, the cart lists the carriers' rates and picks the cheapest. The buyer can
   choose another one and click **Use this shipping**.
{: .steps}

The chosen rate becomes that seller's shipping in the cart and at checkout. All of a seller's items in the cart go
as one parcel, weighing each item's weight times its quantity. Only rates in the cart's currency are offered. Rates
are kept for two hours; after that, or when the buyer changes the cart or the address (**Update rates**), the cart
asks Shippo again.

When Shippo has no rate for an address, the cart says *No live shipping rate for your address: the seller's own
shipping price applies.*

## After the sale

The seller sees the buyer's address under **Ship to** in **My sales**, and it's in the sale email too, so they know
where to send the parcel. They buy postage with their carrier and mark the sale as shipped as usual.

## Good to know

- Your commission covers the shipping too, unless you set [Commission is taken on](/commission-and-service-fees/#your-commission)
  to **The items only, not the shipping** on the same page.
- Items paid with **Pay for this item** (each item on its own checkout) and Buy Now keep the listing's own shipping
  cost.

## Related guides

- [Shopping cart](/shopping-cart/) — the cart live rates work in.
- [Shipping profiles](/shipping-profiles/) — a seller's own shipping prices, by country and with free shipping.
- [Shipping costs and pickup](/use-shipping-custom-field/) — a shipping cost on each listing.
- [Commission and service fees](/commission-and-service-fees/) — what you keep from each sale.
- [Sale prices and bundles](/sale-prices/) — promotions for shops that sell through the cart.
{: .cards}
