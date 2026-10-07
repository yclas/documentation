---
title: Let members sell with Buy Now
description: Turn listings into a shop. Buyers pay sellers straight from a listing with Stripe Connect, PayPal or Escrow.com, with stock, quantities and shipping.
section: payments
order: 130
permalink: /pay-directly-from-ad/
keywords: buy now, buy button, checkout, sell online, marketplace payments, direct payment, stock, stock control, quantity, sold out, in stock, guest checkout, request safe payment, custom order, seller payments
updated: 2026-10-07
---

By default, a classifieds site puts buyers and sellers in touch and they settle the deal themselves. With
**Buy Now**, buyers can pay for an item right on the listing, and the money goes to the seller. Your marketplace
becomes a shop where every member can sell.

## Choose how sellers get paid

Buy Now needs a payment method that can pay each seller individually:

| Method | Money goes to | Your commission | Best for |
| --- | --- | --- | --- |
| [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect) | The seller's Stripe account | Yes, a percentage and optionally a fixed fee | Most marketplaces. Card payments, sellers onboard in minutes. |
| [PayPal](/paypal/#let-sellers-get-paid-through-paypal) | The seller's PayPal account | No | Communities where everyone has PayPal. |
| [Escrow.com](/escrow-pay/) | Held by Escrow.com until the buyer accepts the item | No | Expensive items such as vehicles and machinery. |

You can switch on more than one. With the [eWallet](/ewallet/) on, buyers pay sellers in wallet credit instead.

## Switch on Buy Now

1. Set up one of the methods above: tick **Activate Stripe Connect** in **Integrations › Stripe**, tick
   **Buy Now button** in **Integrations › Paypal**, or switch on **Integrations › Escrow**.
2. Make sure the **Price** field is on in **Listings › Settings › Form fields**.
3. Optionally switch on **Stock Control** in **Settings › Payments › Pay to post** (see [Stock control](#stock-control)).
{: .steps}

Every published listing with a price above zero now shows a **Buy Now** button with its price. Listings without a
price, sold listings and (with stock control) listings with no stock left don't.

With Stripe Connect, a seller must connect their Stripe account before buyers can pay them. Until then, their
listings show **Request safe payment**, which emails the seller asking them to connect.
{: .note}

## What the buyer does

1. The buyer clicks **Buy Now** on a listing.
2. On the checkout page they choose a quantity (with stock control) and, if the seller offers it, **Shipping** or
   **Customer Pickup**.
3. They pay with one of the methods you've switched on and come back to your site.
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

## Make it a real shop

| To… | Use |
| --- | --- |
| Charge for delivery or offer pickup | The `shipping` and `shipping_pickup` fields. See [Shipping costs](/use-shipping-custom-field/). |
| Tell buyers what happens next (delivery times, how to collect) | The `buyer_instructions` field, sent in the purchase email. See [Special-purpose fields](/special-custom-fields/). |
| Sell files | [Sell digital downloads](/sell-digital-goods/). |
| Sell tickets | [Sell event tickets](/sell-event-tickets-online/). |
| Let sellers price in their own currency | The `currency` field. See [Special-purpose fields](/special-custom-fields/). |
| Add VAT for VAT-registered sellers | [VAT and taxes](/eu-vat/). |
| Pay sellers into a different PayPal address | The `paypalaccount` field. See [PayPal](/paypal/#which-paypal-account-the-seller-is-paid-into). |

## Custom orders in Messages

When **Custom orders** is ticked in **Addons › Messaging**, sellers can send a buyer a payment request with their own
price and description from a message thread about their listing (**Create custom order**). The buyer gets a
**Pay order** link in the conversation. It's handy when a price is negotiated. Custom orders are paid like Buy Now
purchases and appear as **Custom** in Orders.

Custom orders work in the Mercury theme and older themes. The Nova theme's Messages page doesn't offer
**Create custom order**.
{: .note}

## Related guides

- [Stripe and Stripe Connect](/stripe/) — card payments and commissions.
- [PayPal](/paypal/) — sellers paid through PayPal.
- [Escrow payments](/escrow-pay/) — protection for expensive items.
- [Checkout, payments and invoices for members](/member-payments/) — the buyer's and seller's side.
{: .cards}
