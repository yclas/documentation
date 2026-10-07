---
title: Shipping costs and pickup
description: Let sellers add a shipping cost to items sold with Buy Now, and offer free collection as an alternative.
section: payments
order: 190
permalink: /use-shipping-custom-field/
keywords: shipping, shipping cost, delivery, postage, pickup, collection, customer pickup, local pickup, shipping_pickup, checkout total
updated: 2026-10-07
---

When members sell with [Buy Now](/pay-directly-from-ad/), sellers usually need to charge for delivery. Two
custom fields with reserved names handle it: `shipping` adds a shipping cost to the checkout, and `shipping_pickup`
lets the buyer choose to collect the item for free instead.

## Add a shipping cost

1. Go to **Listings › Custom Fields** and create a field.
2. Enter `shipping` as the **Name** (exactly this, in lower case) and choose **Money** or **Number Decimal** as the
   **Type**.
3. Give it a clear **Label**, such as *Shipping cost*, and choose the categories it applies to (or none for all).
4. Click **Create field**.
{: .steps}

Sellers now enter a shipping cost when they post. At checkout the buyer sees the item price and the shipping as
separate lines, and pays the total.

Shipping is charged once per order, whatever the quantity. A buyer who orders three units of a listing with a price of
20 and shipping of 5 pays 65.
{: .note}

## Offer pickup

1. Create another field in **Listings › Custom Fields**.
2. Enter `shipping_pickup` as the **Name** and choose **Checkbox** as the **Type**, with a label such as
   *Pickup available*.
3. Click **Create field**.
{: .steps}

Sellers tick it on listings that buyers can also collect. At checkout, those buyers choose between **Shipping**
(with the seller's shipping cost) and **Customer Pickup** (free), and the total updates. Pickup only shows when the
listing also has a shipping cost.

Ask sellers to say where and when items can be collected in their listing, or add a `buyer_instructions` field so
the details go out in the purchase email. See [Special-purpose fields](/special-custom-fields/).
{: .tip}

## Good to know

- Leaving the shipping field empty, or 0, means free shipping.
- Shipping is in the listing's currency, like the price.
- Shipping is included in the amount any [VAT](/eu-vat/) for sellers is calculated on, and in the seller's payout.
- The fields only affect purchases made with Buy Now. On a classifieds site without Buy Now, they simply show on
  the listing as information.

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — payments to sellers.
- [Custom fields](/how-to-create-custom-fields/) — field types and options.
- [Special-purpose fields](/special-custom-fields/) — every field name with a special meaning.
{: .cards}
