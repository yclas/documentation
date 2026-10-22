---
title: Let members sell with Buy Now
description: Turn listings into a shop. Buyers pay sellers straight from a listing with Stripe Connect, PayPal or Escrow.com, with stock, quantities and shipping.
section: payments
order: 130
permalink: /pay-directly-from-ad/
keywords: buy now, buy button, checkout, sell online, marketplace payments, direct payment, stock, stock control, quantity, sold out, in stock, guest checkout, request safe payment, custom order, seller payments, cart, shopping cart, service fee, sale price, digital downloads
updated: 2026-10-22
---

By default, a classifieds site puts buyers and sellers in touch and they settle the deal themselves. With
**Buy Now**, buyers can pay for an item right on the listing, and the money goes to the seller. Your marketplace
becomes a shop where every member can sell.

Selling items with Buy Now, checkout and stock is part of the **Professional** and **Marketplace** plans.
{: .note}

## Choose how sellers get paid

Buy Now needs a payment method that can pay each seller individually:

| Method | Money goes to | Your commission | Best for |
| --- | --- | --- | --- |
| [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect) | The seller's Stripe account | Yes, a percentage and optionally a fixed fee (see [Commission and service fees](/commission-and-service-fees/)) | Most marketplaces. Card payments, sellers onboard in minutes. |
| [PayPal](/paypal/#let-sellers-get-paid-through-paypal) | The seller's PayPal account | No | Communities where everyone has PayPal. |
| [Escrow.com](/escrow-pay/) (Marketplace plan) | Held by Escrow.com until the buyer accepts the item | No | Expensive items such as vehicles and machinery. |

You can switch on more than one. With the [eWallet](/ewallet/) on, buyers pay sellers in wallet credit instead.

## Switch on Buy Now

1. Set up one of the methods above: tick **Activate Stripe Connect** in **Add-ons › Stripe**, tick
   **Buy Now button** in **Add-ons › PayPal**, or switch on **Add-ons › Escrow**.
2. Make sure the **Price** field is on in **Listings › Settings › Form fields**.
3. Optionally switch on **Stock Control** in **Settings › Payments › Pay to post** (see [Stock control](#stock-control)).
{: .steps}

Every published listing with a price above zero now shows a **Buy Now** button with its price. Listings without a
price, sold listings and (with stock control) listings with no stock left don't. Nor do listings that take
[bookings](/bookings/), and a listing with [quantity pricing](/sale-prices/#quantity-pricing) is bought through the cart.

With Stripe Connect, a seller must connect their Stripe account before buyers can pay them. Until then, their
listings show **Request safe payment**, which emails the seller asking them to connect.
{: .note}

## What the buyer does

1. The buyer clicks **Buy Now** on a listing.
2. On the checkout page they choose a quantity (with stock control) and, if the seller offers it, **Shipping** or
   **Customer Pickup**.
3. They pay with one of the methods you've switched on and come back to your site. With Stripe, they pay by card
   right on the checkout page: see [the card form at checkout](/stripe/#the-card-form-at-checkout).
{: .steps}

Buyers don't have to be signed in: if they aren't, they get a guest checkout where they can pay with Stripe or PayPal
using just their email. Escrow.com and the Stripe escrow flow ask them to register first.

After payment:

- the buyer gets the *ads-purchased* email with the order details, any buyer instructions and, for digital products,
  the download link;
- the seller gets the *ads-sold* email and sees the sale in **My Sales**;
- the purchase appears in the buyer's **My Payments**, and in your [Orders](/how-to-manage-orders/) as **Buy product**.

## Stock control

Stock control lets sellers sell several units of the same item. Switch it on in **Settings › Payments**, under
**Pay to post**, and sellers get an **In Stock** field when they post. Buyers can then pick a quantity at checkout,
each sale takes the quantity bought off the stock, and the listing is marked as **Sold** when the stock reaches zero.
See [Stock control](/stock-control/) for the details, including restocking.

Without stock control, a listing is marked as **Sold** after its first sale. Switch stock control on if your sellers
have more than one of anything.
{: .important}

## Shopping cart

On the **Marketplace plan**, with Stripe Connect and the Nova theme, you can add a shopping cart: buyers click
**Add to cart** under **Buy Now**, collect items from several sellers and pay for everything in one card payment,
which Stripe splits between the sellers. Buy Now keeps working for buyers who want a single item. See
[Shopping cart and one-payment checkout](/shopping-cart/).

## Make it a real shop

| To… | Use |
| --- | --- |
| Charge for delivery or offer pickup | The `shipping` and `shipping_pickup` fields. See [Shipping costs](/use-shipping-custom-field/). |
| Let buyers pay several sellers at once | The [shopping cart](/shopping-cart/) (Marketplace plan). |
| Sell sizes, colours or other options | [Product options](/product-variants/), bought through the cart. |
| Ship a seller's items together, with free shipping over an amount | [Shipping profiles](/shipping-profiles/), in the cart. |
| Let sellers run discount codes | [Coupons on sales](/coupons-on-sales/), in the cart. |
| Put a listing on sale, give quantity discounts or sell bundles | [Sale prices, quantity discounts and bundles](/sale-prices/). Buy Now charges the sale price. |
| Show carriers' live shipping rates | [Live shipping rates with Shippo](/shippo/), in the cart (Marketplace plan). |
| Add a service fee paid by the buyer | [Commission and service fees](/commission-and-service-fees/#buyers-service-fee) (Marketplace plan). |
| Tell buyers what happens next (delivery times, how to collect) | The `buyer_instructions` field, sent in the purchase email. See [Special-purpose fields](/special-custom-fields/). |
| Sell files | [Sell digital downloads](/sell-digital-goods/): switch on **Digital downloads** in the Buy now part of the **Commission on sales** page. |
| Sell tickets | [Sell event tickets](/sell-event-tickets-online/). |
| Let sellers price in their own currency | The `currency` field. See [Special-purpose fields](/special-custom-fields/). |
| Add VAT for VAT-registered sellers | [VAT and taxes](/eu-vat/). |
| Pay sellers into a different PayPal address | The `paypalaccount` field. See [PayPal](/paypal/#which-paypal-account-the-seller-is-paid-into). |

## Custom orders in Messages

When **Custom orders** is ticked in **Add-ons › Messaging**, sellers can send a buyer a payment request with their own
price and description from a message thread about their listing (**Create custom order**). The buyer gets a
**Pay order** link in the conversation. It's handy when a price is negotiated. Custom orders are paid like Buy Now
purchases and appear as **Custom** in Orders.

Custom orders work in the Mercury theme and older themes. The Nova theme's Messages page doesn't offer
**Create custom order**.
{: .note}

## Related guides

- [Stripe and Stripe Connect](/stripe/) — card payments and commissions.
- [Shopping cart](/shopping-cart/) — one payment for items from several sellers.
- [Commission and service fees](/commission-and-service-fees/) — what you keep from each sale.
- [PayPal](/paypal/) — sellers paid through PayPal.
- [Escrow payments](/escrow-pay/) — protection for expensive items.
- [Checkout, payments and invoices for members](/member-payments/) — the buyer's and seller's side.
- [Make an offer](/make-an-offer/) — buyers agree a price with the seller, then pay.
- [Auctions](/auctions/) — the winning bidder pays through the same checkout.
- [Disputes about an order](/disputes/) — when a buyer reports a problem with a sale.
- [Returns on sales](/returns/) — let buyers send items back for a refund.
{: .cards}
