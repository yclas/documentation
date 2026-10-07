---
title: Special-purpose fields
description: Custom fields with reserved names that switch on extra features — a separate contact email, the seller's PayPal address, a currency per listing, opening hours, an end date and more.
section: listings
order: 120
permalink: /special-custom-fields/
redirect_from:
  - /how-to-publish-different-contact-email/
  - /paypal-email-for-sellers/
  - /bitcoin-wallet-address/
  - /buyer-instructions/
  - /choose-currency/
  - /publisher-enables-disables-comments/
keywords: contactemail, paypalaccount, bitcoinaddress, buyer_instructions, currency, commentsdisabled, expiresat, eventdate, openinghours, shipping, file_download, reserved names, special fields, tricks
updated: 2026-10-07
---

Most [custom fields](/how-to-create-custom-fields/) only show what the seller typed. A few names are reserved:
when a field has one of these names, Yclas uses its value to change how the listing behaves.

To create one:

1. Go to **Listings › Custom Fields** and click **New field**.
2. Enter the **Name** exactly as shown below (all lower case, no spaces).
3. Choose the **Type** given for that field, write a friendly **Label** and fill in the rest.
4. Click **Create field**.
{: .steps}

The name is what matters; the label can say anything, in any language. If you get the name wrong, delete the field
and create it again — names can't be edited.
{: .important}

## Summary

| Name | Type | What it does |
| --- | --- | --- |
| `contactemail` | Email | Contact form messages go to this address instead of the seller's account email. |
| `paypalaccount` | Email | The PayPal address the seller is paid at for **Buy Now** purchases. |
| `currency` | Select | The currency of this listing's price. |
| `commentsdisabled` | Checkbox | Lets the seller switch comments off on their listing. |
| `buyer_instructions` | Text Long | Text sent to the buyer after a purchase. |
| `bitcoinaddress` | Text 256 Chars | Shows a Bitcoin address and QR code (some themes only). |
| `openinghours` | JSON | Opening hours per day, with an "open at" search filter. |
| `expiresat` | Date | The date the listing expires. |
| `eventdate` | Date | The date of an event; past events are hidden. |
| `shipping`, `shipping_pickup` | See the guide | Shipping cost and a pick-up option for **Buy Now**. |
| `file_download` | See the guide | A file the buyer can download after paying. |

Fields marked as payment-related below only matter if sellers can take payments through your site.

## A different contact email — `contactemail`

Useful for businesses: a listing posted by an office manager can send enquiries to the sales team. When a buyer uses
the contact form, the message goes to the address in this field; if it is empty or not a valid address, it goes to
the seller as usual. This only applies when messages are sent by email; with the
[Messaging add-on](/how-to-use-messaging-system/) on, messages go to the seller's inbox.

## The seller's PayPal address — `paypalaccount`

When buyers pay sellers directly with PayPal ([Let members sell with Buy Now](/pay-directly-from-ad/)), the money
goes to:

1. the `paypalaccount` field of the listing, if it holds a valid email address; otherwise
2. a `paypalaccount` field on the seller's profile, if you created one as a [user custom field](/users-custom-fields/); otherwise
3. the seller's account email.
{: .steps}

Create it on profiles if sellers use one PayPal account for everything, on listings if it can change per listing.
The value is never shown to visitors.

## A currency per listing — `currency`

For international marketplaces. Create a **Select** field and, in **Values**, list the currency codes sellers may
choose, for example `EUR, GBP, USD`. The listing's price is then shown in that currency, and **Buy Now** payments are
taken in it. Listings without a choice use your site currency
(see [Currency and price format](/how-to-currency-format/)).

Use three-letter ISO codes (EUR, USD, GBP…) and check that your payment gateway accepts each currency you offer.
{: .tip}

## Let sellers turn comments off — `commentsdisabled`

If you have [comments on listings](/how-to-activate-comments-with-disqus/), a **Checkbox** field with this name lets
sellers hide the comments on their own listing by ticking it.

## Instructions for buyers — `buyer_instructions`

Text the seller writes for whoever buys the item: collection details, a licence key, a link. After a successful
**Buy Now** purchase it is included in the email the buyer receives. Switch on **Admin Privileged** if only you should
write it. The value isn't shown on the listing.

## Bitcoin address — `bitcoinaddress`

Lets sellers publish a Bitcoin wallet address. Create it on listings, on [user profiles](/users-custom-fields/) (the
address then applies to all the seller's listings), or both; the listing's own value comes first. Only some older
themes (Splash, Basecamp) show the address with a QR code; other themes, including Nova and Mercury, don't show it.

## Opening hours — `openinghours`

For shops, restaurants and services. Create a field named `openinghours` with type **JSON**. On the posting form,
sellers set each day as open or closed and pick opening and closing times. The listing page shows the hours.

If you make the field **Searchable**, the search filters get a time picker that finds listings open today at the
chosen time.

## Expiry date — `expiresat`

Sellers choose when their listing expires. This replaces the global **Listing Expiration Date** completely, so read
[Listing expiry and renewal](/ad-expiration/#let-sellers-choose-the-expiry-date) before creating it.

## Event date — `eventdate`

For events and tickets. Listings whose event date has passed are hidden automatically, and you (and buyers) can sort
listings by **Event date**. See [Sell event tickets](/sell-event-tickets-online/).

## Shipping and digital downloads

These are explained with the payment features they belong to:

- `shipping` and `shipping_pickup` — [Shipping costs](/use-shipping-custom-field/).
- `file_download` — [Sell digital downloads](/sell-digital-goods/).
- VAT fields for business sellers — [VAT and taxes](/eu-vat/).

## Related guides

- [Custom fields](/how-to-create-custom-fields/) — how custom fields work.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — Buy Now, which several of these fields extend.
- [User custom fields](/users-custom-fields/) — fields on member profiles.
{: .cards}
