---
title: VAT and taxes
description: Add VAT to what members pay you, and let VAT-registered sellers add their own VAT to the items they sell.
section: payments
order: 160
permalink: /eu-vat/
keywords: vat, tax, taxes, eu vat, vat number, vat rate, vies, sales tax, gst, invoice, checkout, vatcountry, vatnumber, vatnoneu, non-eu
updated: 2026-10-07
---

If you're registered for VAT (or a similar sales tax), Yclas can add it to everything members pay you and show your
VAT number on their invoices. VAT-registered sellers can do the same for the items they sell with
[Buy Now](/pay-directly-from-ad/).

Yclas adds the tax and shows it on the checkout and invoice. Declaring and paying the tax is up to you; check the
rules that apply to your business with your accountant.
{: .note}

## Add VAT to your own extras

This covers featured listings, bring to top, pay to post, membership plans and eWallet top-ups.

1. Go to **Settings › Payments** and scroll to **VAT**.
2. Choose your **VAT Country**.
3. Enter your **VAT Number** without the two-letter country code (for example `B12345678`, not `ESB12345678`).
4. If your country isn't in the EU, enter your rate in **VAT Rate Only for Non-EU Countries**, for example `20` or
   `7.5`.
5. Click **Save changes**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **VAT Country** | The country you're registered in. **None** turns VAT off. |
| **VAT Number** | Your VAT number, shown on checkouts and invoices. |
| **VAT Rate Only for Non-EU Countries** | The percentage to add when your country isn't an EU member. Ignored for EU countries. |

For EU countries, Yclas checks your number with the EU's VIES service when you save, and uses your country's standard
VAT rate, which it keeps up to date. If the check fails you see *Invalid EU Vat Number, please verify number and
country match*. For other countries, you must enter a rate above zero, or you see *Please enter a valid VAT rate.*

### How it shows at checkout

VAT is added on top of your prices. A featured plan priced 10 with 21% VAT costs the member 12.10. The checkout and the
invoice show your VAT number, the VAT percentage and the total.

The same rate is used for every member, wherever they are. Yclas doesn't apply different rates by country or reverse
charge for business customers. If you need that, enter prices that already include VAT and leave VAT off.
{: .important}

[Coupon](/how-to-use-coupon-system/) discounts are taken off before VAT is added.

## Let sellers add VAT to their sales

VAT-registered sellers can add VAT to the items they sell with Buy Now. You enable it with
[custom fields](/how-to-create-custom-fields/) that have reserved names. Create them either on listings
(**Listings › Custom Fields**) or on user profiles (**Settings › User Custom Fields**, see
[User custom fields](/users-custom-fields/)), or both:

| Field **Name** | **Type** | Purpose |
| --- | --- | --- |
| `vatcountry` | **Country** | The country the seller is registered in. |
| `vatnumber` | **Text 256 Chars** | The seller's VAT number. |
| `vatnoneu` | **Number Decimal** | The seller's VAT rate, needed only for sellers outside the EU. |

At checkout, Yclas uses the listing's VAT details if both `vatcountry` and `vatnumber` are filled in, otherwise the
seller's profile details. If neither is complete, no VAT is added. For EU countries the rate is that country's
standard rate; for other countries it is the `vatnoneu` rate, and no VAT is added if that is empty.

The names must be exactly as above, in lower case. Profile fields are the better choice for most marketplaces: sellers
fill them in once instead of on every listing.
{: .tip}

## VAT in emails

The *ads-sold* and *ads-purchased* [email templates](/automatic-emails-sent-to-users/) can show the VAT on a sale with
these placeholders:

| Placeholder | Shows |
| --- | --- |
| `[VAT.COUNTRY]` | The two-letter country code. |
| `[VAT.NUMBER]` | The VAT number. |
| `[VAT.PERCENTAGE]` | The VAT rate applied. |

They are empty when no VAT was added.

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the rest of Settings › Payments.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — selling items through your site.
- [Special-purpose fields](/special-custom-fields/) — other fields with reserved names.
{: .cards}
