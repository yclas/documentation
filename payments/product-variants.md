---
title: Product options (variants)
description: Let sellers sell one listing in several options, such as sizes or colours, each with its own price and stock, which buyers choose and add to their cart.
nav_title: Product options
section: payments
order: 520
permalink: /product-variants/
keywords: variants, variant, product options, options, sizes, size, colours, colors, colour, color, flavour, model, sku, option stock, option price, t-shirt sizes, one listing many sizes
updated: 2026-10-20
plans: Marketplace plan
---

A shop rarely sells just one version of something: a T-shirt comes in four sizes, a print in three formats, honey in
small and large jars. With product options, a seller lists the item once and adds its options, each with its own
price and stock. Buyers pick the one they want and add it to their [cart](/shopping-cart/).

Product options are bought through the [shopping cart](/shopping-cart/) paid in one payment, so they need the
**Marketplace plan**, Stripe Connect and the **Nova** theme. They are off until you switch them on.
{: .note}

## Switch product options on

1. Switch on the [shopping cart](/shopping-cart/#switch-the-cart-on) and click **Save**. The option for product
   variants only appears once the cart is on and can be paid in one payment.
2. On the same **Commission on sales** page, in **Set your commission and switch on Buy now**, switch on
   **Product variants**.
3. Click **Save**.
{: .steps}

Switch on [stock control](/stock-control/) too (**Settings › Payments**, **Stock Control**), so each option counts
its own stock. Without it, a listing is marked as **Sold** after its first sale, whichever option was bought.
{: .important}

If you see *Our team has switched variants on (or off) for your site*, ask us through **Support** to change it.

## How sellers add options

1. In **My Listings**, the seller opens the listing's menu (**···**) and clicks **Options and stock**.
2. On each row they enter the **Option** name (for example *Large / Red*), its **Price**, its **Stock** (with stock
   control on) and, if they like, a **SKU (optional)**: their own product code.
3. They click **Save**. *Save to get more empty rows* when they need more.
{: .steps}

| Field | Detail |
| --- | --- |
| **Option** | Up to 80 characters, and each name only once per listing. |
| **Price** | 0 or more, in the listing's currency. |
| **Stock** | A whole number, 0 or more. Only shown when stock control is on. |
| **SKU (optional)** | Up to 64 characters, for the seller's own records. |

A listing can have up to 30 options. Once saved:

- the listing's price becomes the **lowest** option price, so search, sorting and price filters keep working;
- with stock control, the listing's stock becomes the **sum** of its options' stock, and the listing is sold out
  when every option is.

To sell the listing as before, the seller empties every row and saves (*Options removed. The listing is sold as
before.*). A removed option still shows on the orders that bought it.

## What buyers see

On a listing with options, the **Buy Now** button is replaced by an **Option** list (*Choose an option*) and
**Add to cart**. Each option shows its price, and *Only N left* or *Sold out* when stock is low or gone; sold-out
options can't be chosen.

In the cart and at checkout, each option is its own line with its own price and quantity. The option's name is kept
with the order and shown on its receipt, so buyer and seller both know which one was bought.

## Good to know

- Listings with options can only be bought through the cart, never with Buy Now or the guest checkout, so nobody can
  buy one at the lowest price without choosing an option. Buyers sign in to check out.
- Options are bought only in the **Nova** theme. Listings without options keep their usual buttons.
- If an option sells out between the moment the buyer clicks to pay and the moment the payment arrives, that item is
  refunded on its own.
- Each option's stock is counted down by every sale, like a listing's. See [Stock control](/stock-control/).

## Related guides

- [Shopping cart](/shopping-cart/) — the cart options are bought through.
- [Stock control](/stock-control/) — counting stock and selling out.
- [Shipping profiles](/shipping-profiles/) — one shipping price for all of a seller's items.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — selling single items.
{: .cards}
