---
title: Shipping profiles for sellers
description: Let each seller set one shipping price for the first item and another for each extra item, free shipping over an amount, and prices by country, so their items in a cart ship together.
nav_title: Shipping profiles
section: payments
order: 530
permalink: /shipping-profiles/
keywords: shipping profile, shipping profiles, combined shipping, shipping discount, additional item, each additional item, free shipping, free shipping over, shipping by country, international shipping, ship to, countries, postage, delivery cost, cart shipping
updated: 2026-10-27
plans: Marketplace plan
---

When a buyer orders three things from the same seller, they expect to pay shipping once, not three times. A
shipping profile is a seller's own shipping rules for the [shopping cart](/shopping-cart/): a price for the first
item, a smaller one for each extra item, free shipping over an amount, and different prices for some countries.

Without a profile, each listing keeps its own shipping price (the `shipping` field: see
[Shipping costs and pickup](/use-shipping-custom-field/)), charged on each item.

Shipping profiles are part of the **Marketplace plan**, work with the **Nova** theme and apply to the
[shopping cart](/shopping-cart/) when it is paid in one payment. They are off until you switch them on.
{: .note}

## Switch shipping profiles on

1. Open the **Commission on sales** page (from **Make money** or **Add-ons › Stripe**) and switch on the
   [shopping cart](/shopping-cart/#switch-the-cart-on).
2. In the same section, switch on **Shipping profiles**.
3. Click **Save**.
{: .steps}

Sellers then find **Shipping** in their account menu.

You can switch the cart and shipping profiles on in the same save. The switch is greyed out while the cart
[can't be paid in one payment](/shopping-cart/#when-the-cart-cant-take-one-payment) (the eWallet or Stripe Tax is on,
or Stripe uses an older setup): each item is then paid through Buy Now with its listing's own shipping price, and
sellers don't see the **Shipping** page.

If you see *Our team has switched shipping profiles on (or off) for your site*, ask us through **Support** to change
it.

## How sellers set up their profile

1. The seller opens **Shipping** in their account menu.
2. They fill in the prices, in your site's currency (see the table).
3. Optionally, under **Prices for some countries (optional)**, they add countries with their own **First item** and
   **Each additional item** prices.
4. They tick or untick **Ship to other countries at the prices above**.
5. They click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **First item** | The shipping price of the first item in an order from this seller. |
| **Each additional item** | The price added for every other item from this seller, including extra units of the same listing. Leave it at 0 to ship extra items free. |
| **Free shipping over** | Shipping is free when the buyer's items from this seller add up to this amount or more. Leave it empty for never. |
| **Prices for some countries (optional)** | Up to 60 countries with their own first-item and additional-item prices. |
| **Ship to other countries at the prices above** | On (the default): countries not in the list pay the prices above. Off: the seller only ships to the countries in the list. |

**Remove the profile** deletes it: the seller's listings go back to their own shipping prices.

## What buyers see

In the cart, a seller's items ship together. The first item is charged **First item**, every other one
**Each additional item**, and nothing at all once the seller's items reach **Free shipping over**. The shipping shows
under each item and as a **Shipping** line in the seller's total.

**Example:** a seller's profile is 5 for the first item, 1 for each additional item, free over 100. A buyer adds two
mugs at 12 and a print at 30. Shipping is 5 + 1 + 1 = 7. If they also add a lamp at 50, the items reach 104 and
shipping is free.

When a seller in the cart has prices by country, or doesn't ship everywhere, the cart shows **Ship to** with
*Choose your country*. Items from a seller who doesn't ship to the chosen country can't be bought (*This seller
doesn't ship to …*) and stay in the cart, out of the payment.

## Good to know

- Profiles only price the cart. **Buy Now** on a single listing still charges the listing's own shipping price.
- With [live shipping rates](/shippo/) on, a seller who set a shipping origin gets the carriers' live rates instead
  of their profile when the buyer gives their address. Their profile still applies when no live rate is found.
- Digital downloads never ship, so they're never charged shipping.
- Each item of a cart order keeps the shipping it was charged, and the receipt shows that amount even if the seller
  changes their profile later.
- With [Commission is taken on](/commission-and-service-fees/#your-commission) set to **The items only, not the
  shipping**, you take no commission on what buyers pay for shipping.

## Related guides

- [Shopping cart](/shopping-cart/) — where profiles apply.
- [Shipping costs and pickup](/use-shipping-custom-field/) — per-listing shipping and pickup, for Buy Now.
- [Product options (variants)](/product-variants/) — sizes and colours in the cart.
- [Live shipping rates with Shippo](/shippo/) — carriers' real prices from the buyer's address.
- [Commission and service fees](/commission-and-service-fees/) — commission with or without shipping.
{: .cards}
