---
title: Shopping cart and one-payment checkout
description: Let buyers add items from several sellers to a cart and pay for everything in one card payment, split between the sellers, with saved cards and an optional hold until delivery.
nav_title: Shopping cart
section: payments
order: 500
permalink: /shopping-cart/
keywords: cart, shopping cart, basket, add to cart, checkout, check out, one payment, single payment, split payment, multi-vendor, multivendor, several sellers, many sellers, pay all at once, saved card, save card, remember card, pay after delivery, payout, hold payment, marketplace
updated: 2026-10-20
plans: Marketplace plan
---

With [Buy Now](/pay-directly-from-ad/), a buyer pays for one listing at a time. The shopping cart lets them collect
items from as many sellers as they like and pay for everything at once, by card, in a single payment. Stripe then
pays each seller their part, minus your commission.

It's what buyers expect from an online shop, and it turns several small purchases into one order.

The shopping cart is part of the **Marketplace plan** and works with the **Nova** theme. It is off until you switch
it on.
{: .note}

## Before you start

The cart is paid through [Stripe Connect](/stripe/#sell-for-your-members-with-stripe-connect), so set that up first:

- Connect Stripe and switch on Stripe Connect, so your sellers can set up payouts.
- Your site uses the **Nova** theme.

## Switch the cart on

1. Open the **Commission on sales** page: in **Make money**, click **Manage** on the **Take a commission on sales**
   card, or follow the **Commission on sales** link in **Add-ons › Stripe**.
2. In **Set your commission and switch on Buy now**, make sure **Buy now** is on.
3. Switch on **Shopping cart**.
4. Click **Save**.
{: .steps}

Once the cart is saved, the same section also offers [Product variants](/product-variants/),
[Coupons on sales](/coupons-on-sales/) and [Shipping profiles](/shipping-profiles/), which all work through the
cart.

If you see *Our team has switched the cart on (or off) for your site*, ask us through **Support** to change it.

## What buyers see

- **Add to cart** appears under the **Buy Now** button of every listing that can be bought, and a cart icon with the
  number of items appears in the header.
- The **Your cart** page groups the items by seller (**Sold by**), with each seller's items, shipping and total, and
  a **Summary** with the grand total. Buyers can change quantities (**Update quantities**) or **Remove** an item.
- **Check out** opens the **Checkout** page: every item, the shipping, any VAT, coupon and service fee, and the card
  form. One payment pays for everything.

Visitors can fill a cart without an account. When they click **Check out** they're asked to sign in, and what they
added stays in the cart: a guest's cart joins their own when they sign in. A guest's cart is kept on their device for
30 days.

After paying, the buyer lands on **My Payments** with *Thank you, your order is paid*. Each item is its own order
there, with its own receipt, and paid items leave the cart.

### What can't go in a cart

The cart takes the same listings as Buy Now: published, with a price, from a seller who has set up payouts (and in
stock, with [stock control](/stock-control/)). It also refuses:

- [auctions](/auctions/) and [bookings](/bookings/), which have their own ways to pay;
- the buyer's own listings;
- a listing in a different currency from what's already in the cart (*Pay for your cart first, or remove its items*).

A cart holds up to 50 listings, and up to 20 of each, never more than the stock left. If a listing sells out or its
price changes after it was added, the cart says so next to it, and items that can't be bought are left out of the
payment and stay in the cart.

## How the money is split

The buyer pays once. For each item, your site then:

1. records a paid **Buy product** order for the seller, exactly as for a Buy Now sale (stock, emails, **My Sales**,
   invoice);
2. records your commission, plus any [buyer's service fee](/commission-and-service-fees/#buyers-service-fee), as an
   **Application Fee** order in [Orders](/how-to-manage-orders/);
3. sends the seller their part through Stripe: straight away, or once the buyer has the item if you hold payments
   until delivery (see below).
{: .steps}

Your commission is worked out per seller, on their part of the cart, with the same rules as Buy Now: see
[Commission and service fees](/commission-and-service-fees/). A fixed fee is charged once per seller in the cart, not
once per item. VAT for VAT-registered sellers is added as on Buy Now (see [VAT and taxes](/eu-vat/#let-sellers-add-vat-to-their-sales)).

**Example:** your commission is 10%. A buyer's cart holds a 40 jacket from Anna and a 60 lamp from Ben, and pays 100.
Anna gets 36, Ben gets 54 and you keep 10 (Stripe's own card fee comes out of your share).

Buyers and sellers get the usual emails for each item: *ads-purchased* to the buyer and *ads-sold* to the seller, as
for a Buy Now sale.

## Pay sellers after delivery

Switch on **Pay sellers after delivery** in the same section of **Commission on sales** to hold each seller's part
until the buyer confirms they received the item. It works as for Buy Now: the seller clicks **Mark as shipped** in
**My Sales**, and the buyer clicks **Mark as received** in **My Payments**, which pays that seller. You can also mark
an order as received from its menu in **Orders**. See
[Stripe escrow](/stripe/#hold-the-money-until-the-buyer-has-the-item-stripe-escrow).

Each item is handled on its own: cancelling and refunding one item gives back only that item's share (and its part
of any service fee). The other sellers' items and payouts aren't touched.

If something goes wrong with an item, the buyer can click **Report a problem** in **My Payments** to open a
[dispute](/disputes/), or ask to [return it](/returns/) when you allow returns.

## Saved cards

On the checkout page, signed-in buyers can tick **Save this card for faster checkout next time (kept by Stripe, not
on this site)**. Next time, **Pay with a saved card** lists their cards: one click pays, and the bank can still ask
for its security check (3D Secure). **Remove** forgets a card.

The card is kept by Stripe, on your Stripe account. Your site never stores card numbers. Cards saved with test keys
don't show up once you switch to live keys.

Saved cards are offered with the card form in your site's look (**Card form style** set to **Match my site** in
**Add-ons › Stripe**). With **Stripe checkout** as the form style, buyers pay in Stripe's own form instead.

## When the cart can't take one payment

The one-payment checkout needs Stripe Connect. It isn't available while your site uses the [eWallet](/ewallet/),
**Let Stripe add the tax (Stripe Tax)** or **Legacy checkout**, or connects sellers through the old
**Stripe Connect legacy** method.

In those cases the cart still works as a list: each item has a **Pay for this item** button that opens its own
Buy Now checkout, and the summary says *Each item is paid on its own secure checkout, straight to its seller.*
Product variants and coupons on sales need the one-payment checkout.

## Good to know

- Nothing changes for listings bought with **Buy Now**: buyers can still buy a single item straight away.
- If an item sells out between the moment the buyer clicks to pay and the moment the payment arrives, that item is
  refunded on its own and the buyer gets an email. The rest of the order goes ahead.
- If something needs you (a payout Stripe refused, a payment that doesn't match the cart, a buyer who paid twice, a
  bank dispute), your site emails you at the **Sender email** in [Email settings](/general-email-configuration/)
  with what to do. When a buyer disputes the payment with their bank, payouts not yet sent wait until it's closed.
- The cart is shown in the Nova theme only. On other themes, buyers keep the Buy Now button.
- If you switch the cart off, the button, the icon and the cart page go away. Orders already paid aren't affected.

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — the single-item checkout the cart builds on.
- [Stripe and Stripe Connect](/stripe/) — connecting Stripe and your sellers.
- [Commission and service fees](/commission-and-service-fees/) — what you keep from each sale.
- [Product variants](/product-variants/) — sizes, colours and other options, bought through the cart.
- [Disputes about an order](/disputes/) — when a buyer reports a problem.
- [Returns on sales](/returns/) — let buyers send items back for a refund.
- [Shipping profiles](/shipping-profiles/) — one shipping price for all of a seller's items.
- [Coupons on sales](/coupons-on-sales/) — discount codes buyers enter at checkout.
{: .cards}
