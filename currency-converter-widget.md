---
title:  Currency Converter Widget
date:   2016-05-31 11:27:04
categories: Appearance
tags:
- Appearance
- Widgets
permalink: /currency-converter-widget/
keywords: money, price, currency, currencies, multicurrency, convert
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This feature is available with our 2.8.0 release and for all sites hosted at <a href="https://yclas.com/">Yclas.com</a>
</div>

If you want your website users and visitors to be able to convert currencies then this is the widget for you. As the title says, this is the widget which users can use to choose between your selected currencies and have ads prices converted to their chosen currency.

## Get an API Key

This is a mandatory step to follow in order to have the currency converter widget work. What you need to do is to go to [https://fixer.io/product](https://fixer.io/product) and choose a plan. Once you choose the plan you will be redirected to create an account and you will find the API key [here](https://fixer.io/dashboard).

<div class="alert alert-info">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> If your website uses SSL, please note that <strong>SSL encryption</strong> is only allowed for <strong>Fixer</strong> paid plans.
</div>

<a href="{{ site.baseurl }}/images/currency-widget-apikey.png" class="thumbnail gallery-item" data-gallery>
![currency-widget]({{ site.baseurl }}/images/currency-widget-apikey.png)
</a>

## Create Currency Converter Widget

It's really simple to create and use this widget:

1. Login to your admin panel.
2. Go to **Appearance** -> **Widgets**.
3. Find the Currency Converter Widget and press **Create**.
4. Choose **where do you want the widget displayed** and **the name of the widget** that will be displayed in your website.
5. Type the **Currencies to display**, comma separated, or leave it empty to display all the currencies.
6. Enter the currency of your site on **Choose the default currency** field. Use this field ONLY in case you are using a different currency than your local one and make sure that the prices of the ads have the same currency.
7. Click **Save Changes**.

## Currencies to display

<a href="{{ site.baseurl }}/images/currency-currencies.png" class="thumbnail gallery-item" data-gallery>
![currency-widget]({{ site.baseurl }}/images/currency-currencies.png)
</a>

Into this field, you can type the currencies you want to be available in your site. Please note that you have to enter the three-character currency codes in order to work. An example of input would be:

    EUR,USD,CAD,AUD

Using this example you will have Euros, USA Dollars, Canadian Dollars and Australian Dollars available.

Additionally we have created **groups of currencies** to make it easier for you.

### Major Currencies

If you include the word **major** in the currencies to display, it will add USD, EUR, GBP, JPY, CAD, CHF, AUD and ZAR.

### European Currencies

Including the word **european**, will add ALL, BGN, BYR, CZK, DKK, EUR, GBP, HRK, HUF, ISK, NOK, RON, RUB, SEK and UAH.

### Skandi Currencies

For Scandinavian currencies, include the word **skandi**. It will add DKK, SEK and NOK.

### Asian Currencies

Asian currencies can be added by typing **asian** into the currencies field. JPY, HKD, SGD, TWD, KRW, PHP, IDR, INR, CNY, MYR and THB are available for convertion.

### American Currencies

Include the word **american** to have USD, CAD, MXN, BRL, ARS, CRC, COP and CLP.

## More currencies

Here are all the available currencies:

AED, ALL, BDT, BGN, CAD, CNY, CZK, DKK, EUR, GBP, INR, HRK, HUF, IDR, JPY, NOK, PHP, PKR, PLN, RON, RSD, RUB, SEK, TRY, USD, VND, XAG, MOP, MDL, VEF, GEL, ISK, THB, MXV, TND, JMD, BWP, MUR, AZN, MGA, LBP, XDR, IEP, AUD, MMK, LYD, ZAR, IQD, XPF, TJS, CUP, UGX, PGK, TOP, KES, TMT, CRC, MZN, BYN, SYP, ANG, ZMW, BRL, BSD, NIO, GNF, BMD, SLL, MKD, BIF, LAK, BHD, SHP, SGD, TTD, SCR, BBD, SBD, MAD, GTQ, MWK, ITL, PEN, LVL, XPD, UAH, LRD, LSL, FRF, XOF, COP, CDF, TZS, NPR, GHS, ZWL, SOS, DZD, LKR, FKP, CHF, KYD, CLP, IRR, AFN, DJF, SVC, PYG, ERN, ETB, ILS, TWD, KPW, GIP, SIT, BND, HNL, BZD, DEM, JOD, RWF, LTL, WST, PAB, NAD, DOP, HTG, KMF, AMD, MRO, ECS, CYP, KWD, XCD, XCP, CNH, SDG, CLF, KZT, NZD, FJD, BAM, BTN, STD, VUV, MVR, AOA, EGP, QAR, OMR, CVE, KGS, MXN, MYR, GYD, SZL, YER, SAR, UYU, UZS, GMD, AWG, MNT, XAU, HKD, ARS.


## Examples

- An example of input:

        european,american

Available currencies will be: ALL, BGN, BYR, CZK, DKK, EUR, GBP, HRK, HUF, ISK, NOK, RON, RUB, SEK, UAH, USD, CAD, MXN, BRL, ARS, CRC, COP and CLP.

- For input:

        asian,EUR,USD

Available currencies will be: JPY, HKD, SGD, TWD, KRW, PHP, IDR, INR, CNY, MYR, THB, EUR and USD.

- For input:

        EUR,CAD,CNY,NOK,PHP,USD

Available currencies will be: EUR, CAD, CNY, NOK, PHP, USD

## Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/dikb_c5TpcQ" frameborder="0" allowfullscreen></iframe>

<br>

You may also be interested in:

* [Overview of widgets]({{ site.baseurl }}/overview-of-widgets/)
* [How to set the currency format?]({{ site.baseurl }}/how-to-currency-format/)
* [Choose Language Widget]({{ site.baseurl }}/languages-widget/)
* [Image Widget]({{ site.baseurl }}/image-widget/)
* [How to add a banner]({{ site.baseurl }}/how-to-add-banner/)
