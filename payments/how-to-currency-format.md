---
title: Currency and price format
description: Choose how prices look on your listings and which currency members pay you in. They are two separate settings.
section: payments
order: 20
permalink: /how-to-currency-format/
keywords: currency, money format, price format, currency sign, symbol, decimals, decimal digits, euro, dollar, pound, rupee, bitcoin, payment currency, number format, regional
updated: 2026-10-07
---

Yclas has two currency settings, and it helps to know which does what:

- **Money Format** (in **Settings › General**) decides how prices *look* on listings: the currency sign, where it
  goes and how many decimals are shown.
- **Payment Currency** (in **Settings › Payments**) decides which currency members *pay you in* for featured
  listings, pay to post, plans and other extras.

On most sites both are the same currency, for example Euro and EUR. Set both when you launch.

## Choose how prices are shown

1. Go to **Settings › General**.
2. In **Regional**, open **Money Format** and pick your currency, for example **Euro** or **Pound Sterling**.
3. Click **Save changes**.
{: .steps}

Prices on listings, in search results and in emails now use that format. Changing the format doesn't change any
prices: a listing priced 1500 still shows 1500, just with a different sign.

### What the options do

The list has more than 100 currencies. Each one has its own sign, separators and decimals, so **US Dollar** shows
`$1,500.00`, **Euro** shows `€1.500,00` and **Japan, Yen** shows `¥1,500` with no decimals. A few entries are formats
rather than currencies:

| Option | What prices look like |
| --- | --- |
| **US Dollar (No decimals)**, **Euro (No decimals)** | The currency without cents, for example `$1,500` or `€1.500`. Handy for cars or property. |
| **Euro in spanish format** | Euro with the sign after the number, as in `1.500,00€`. |
| **Bitcoin** | Prices in BTC. |
| **Default** | The number format of your site's language and country. |
| **Without currency sign** | The number only, with no sign. |
| **No decimal digits** … **Four decimal digits** | The number in your language's format, with that many decimals. |

If you sell in rupees, **Indian Rupee ₹** groups digits the Indian way (`1,50,000.00`).

## Choose the currency members pay in

1. Go to **Settings › Payments**.
2. In **Payment methods**, pick your **Payment Currency**.
3. Click **Save changes**.
{: .steps}

Pick a real currency that your payment provider accepts in your country. Stripe and PayPal reject payments in a
currency they don't support for your account.
{: .important}

The Payment Currency list is the same as the Money Format list, so it also contains entries that are only display
formats (**Euro in spanish format**, **US Dollar (No decimals)**, **Euro (No decimals)**). Don't use those as a
payment currency: choose **Euro** or **US Dollar** instead.
{: .warning}

When the [eWallet](/ewallet/) is on, prices for your extras are shown in wallet credit with your own money symbol,
and the Payment Currency is only used when members buy credit.

## Listings in other currencies

By default every listing is priced in your site's currency. If your members sell in different currencies, add a
`currency` [special custom field](/special-custom-fields/) so sellers can choose one per listing. That currency is
also used when a buyer pays for the item with [Buy Now](/pay-directly-from-ad/).

To show visitors an approximate price in their own currency, add the currency converter
[widget](/overview-of-widgets/).

## Related guides

- [Take payments on your marketplace](/setup-payment-gateways/) — the rest of Settings › Payments.
- [General settings](/change-site-name-site-description/) — the other Regional settings, such as date format and time zone.
- [Special-purpose fields](/special-custom-fields/) — a currency per listing.
{: .cards}
