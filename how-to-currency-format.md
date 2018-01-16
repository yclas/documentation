---
title:  "How to set the currency format?"
date:   2013-08-06 11:18:50
categories: General
tags: 
- General
- Settings
permalink: /how-to-currency-format/
keywords: money, price, regional, amount, change currency, US Dollar, Pound Sterling, Euro, Swiss Franc, Japan Yen, Canadian Dollar, Australian Dollar, Euro in spanish format, Norwegian Krone, Algerian Dinar, Argentine Peso, Armenian Dram, Aruban Guilder, Bahamian Dollar, Bahraini Dinar, Bangladesh, Taka, Belize Dollar, Bermudian Dollar, Bolivia, Boliviano, Bosnia and Herzegovina, Convertible Marks, Botswana, Pula, Brazilian Real, Brunei Dollar, Bitcoin, Cayman Islands Dollar, Chilean Peso, China Yuan Renminbi, Colombian Peso, Costa Rican Colon, Croatian Kuna, Cuban Convertible Peso, Cuban Peso, Cyprus Pound, Czech Koruna, XPF CFP franc, Danish Krone, Dominican Peso, East Caribbean Dollar, Egyptian Pound, El Salvador Colon, Ethiopean Birr, Old Ghana, Cedi, Ghana, Cedi, Gibraltar Pound, Guatemala, Quetzal, Honduras, Lempira, Hong Kong Dollar, Hungary, Forint, Iceland Krona, Indian Rupee, Indonesia, Rupiah, Iranian Rial, Jamaican Dollar, Jordanian Dinar, Kenyan Shilling, Kuwaiti Dinar, Latvian Lats, Sri Lankan Rupee, Lebanese Pound, Lithuanian Litas, Moroccan Dirham, Macedonia, Denar, Malaysian Ringgit, Maltese Lira, Mauritius Rupee, Mexican Peso, Mozambique Metical, Nepalese Rupee, Nigerian Naira, Netherlands Antillian Guilder, New Israeli Shekel, New Turkish Lira, New Zealand Dollar, Pakistan Rupee, Paraguay Guarani, Peru, Nuevo Sol, Peso Uruguayo, Philippine Peso, Poland, Zloty, Rial Omani, Romania, New Leu, Romania, Old Leu, Russian Ruble, Saudi Riyal, Singapore Dollar, Slovak Koruna, Slovenia, Tolar, South Africa, Rand, South Korea, Won, Swaziland, Lilangeni, Swedish Krona, Tanzanian Shilling, Thailand, Baht, Tonga, Paanga, UAE Dirham, Ukraine, Hryvnia, Ugandan Shilling, Vanuatu, Vatu, Venezuela Bolivares Fuertes, Venezuela, Bolivar, Viet Nam, Dong, West African CFA Franc, Zambian Kwacha, Zimbabwe Dollar, Kazakhstani tenge
---
One of the most commonly asked question by our users is how to deal with **currency in which prices are displayed**. Apparently it caused a lot of problems and misunderstandings. This is why with a new release (2.0.5) we decided to make some improvements in order to make it less confusing. Here there's a short tutorial how to change the currency sign and decimal representation displayed on your site. We use PHP function **[money_format](http://php.net/manual/en/function.money-format.php)** to solve all problems in a very easy way. 

## How to do it

You can go to **Settings** > **General** > **Regional** and select your preferred currency. Once you press **Save** then the currency will show next to each amount.

<a href="//docs.yclas.com/images/currency-format.png" class="thumbnail gallery-item" data-gallery>
![How to set the currency format](//docs.yclas.com/images/currency-format.png)
</a>

## List of currency formats

If a currency you want to use is not listed below, feel free to contact our support team let them know!

+ **US Dollar**<br>
+ **Pound Sterling**<br>
+ **Euro**<br>
+ **Swiss Franc**<br>
+ **Japan, Yen**<br>
+ **Canadian Dollar**<br>
+ **Australian Dollar**<br>
+ **Euro in spanish format**<br>
+ **Norwegian Krone**<br>
+ **Algerian Dinar**<br>
+ **Argentine Peso**<br>
+ **Armenian Dram**<br>
+ **Aruban Guilder**<br>
+ **Bahamian Dollar**<br>
+ **Bahraini Dinar**<br>
+ **Bangladesh, Taka**<br>
+ **Belize Dollar**<br>
+ **Bermudian Dollar**<br>
+ **Bolivia, Boliviano**<br>
+ **Bosnia and Herzegovina, Convertible Marks**<br>
+ **Botswana, Pula**<br>
+ **Brazilian Real**<br>
+ **Brunei Dollar**<br>
+ **Bitcoin**<br>
+ **Cayman Islands Dollar**<br>
+ **Chilean Peso**<br>
+ **China Yuan Renminbi**<br>
+ **Colombian Peso**<br>
+ **Costa Rican Colon**<br>
+ **Croatian Kuna**<br>
+ **Cuban Convertible Peso**<br>
+ **Cuban Peso**<br>
+ **Cyprus Pound**<br>
+ **Czech Koruna**<br>
+ **XPF CFP franc**<br>
+ **Danish Krone**<br>
+ **Dominican Peso**<br>
+ **East Caribbean Dollar**<br>
+ **Egyptian Pound**<br>
+ **El Salvador Colon**<br>
+ **Ethiopean Birr**<br>
+ **Old Ghana, Cedi**<br>
+ **Ghana, Cedi**<br>
+ **Gibraltar Pound**<br>
+ **Guatemala, Quetzal**<br>
+ **Honduras, Lempira**<br>
+ **Hong Kong Dollar**<br>
+ **Hungary, Forint**<br>
+ **Iceland Krona**<br>
+ **Indian Rupee ₹**<br>
+ **Indonesia, Rupiah**<br>
+ **Iranian Rial**<br>
+ **Jamaican Dollar**<br>
+ **Jordanian Dinar**<br>
+ **Kazakhstani Tenge**<br>
+ **Kenyan Shilling**<br>
+ **Kuwaiti Dinar**<br>
+ **Latvian Lats**<br>
+ **Sri Lankan Rupee**<br>
+ **Lebanese Pound**<br>
+ **Lithuanian Litas**<br>
+ **Moroccan Dirham**<br>
+ **Macedonia, Denar**<br>
+ **Malaysian Ringgit**<br>
+ **Maltese Lira**<br>
+ **Mauritius Rupee**<br>
+ **Mexican Peso**<br>
+ **Mozambique Metical**<br>
+ **Nepalese Rupee**<br>
+ **Nigerian Naira**<br>
+ **Netherlands Antillian Guilder**<br>
+ **New Israeli Shekel ₪**<br>
+ **New Turkish Lira**<br>
+ **New Zealand Dollar**<br>
+ **Pakistan Rupee**<br>
+ **Paraguay Guarani**<br>
+ **Peru, Nuevo Sol**<br>
+ **Peso Uruguayo**<br>
+ **Philippine Peso**<br>
+ **Poland, Zloty**<br>
+ **Rial Omani**<br>
+ **Romania, New Leu**<br>
+ **Romania, Old Leu**<br>
+ **Russian Ruble**<br>
+ **Saudi Riyal**<br>
+ **Singapore Dollar**<br>
+ **Slovak Koruna**<br>
+ **Slovenia, Tolar**<br>
+ **South Africa, Rand**<br>
+ **South Korea, Won ₩**<br>
+ **Swaziland, Lilangeni**<br>
+ **Swedish Krona**<br>
+ **Tanzanian Shilling**<br>
+ **Thailand, Baht ฿**<br>
+ **Tonga, Paanga**<br>
+ **UAE Dirham**<br>
+ **Ukraine, Hryvnia**<br>
+ **Ugandan Shilling**<br>
+ **Vanuatu, Vatu**<br>
+ **Venezuela Bolivares Fuertes**<br>
+ **Venezuela, Bolivar**<br>
+ **Viet Nam, Dong ₫**<br>
+ **West African CFA Franc**<br>
+ **Zambian Kwacha**<br>
+ **Zimbabwe Dollar**<br>
+ **Default** To use your chosen locale currency_<br>
+ **Without currency sign**<br>
+ **One decimal digit**<br>
+ **Two decimal digits**<br>
+ **Three decimal digits**<br>
+ **Four decimal digits**<br>


## Video

<iframe width="800" height="450" src="https://www.youtube.com/embed/Uco0V_qrnmQ" frameborder="0" allowfullscreen></iframe>

<!-- ## Hacks

On **Panel**, **Settings** -> **General**, you can change the field **Money Format**

Default Money Format: _%n_

For example, if you are using es_ES or fr_FR, your currency will be recognized as '&euro;', so for a price of '5000', the output will be '5.000,00 EUR'.

**Hacks:**<br>
!: removes the currency sign of your locale<br>
.0: sets the number of decimals to zero

**Examples:**

+ %!n<br>
For a price of '5000', the output will be '5.000,00'

+ %.0n<br>
For a price of '5000', the output will be '5.000 EUR' (if you set your locale for example es_ES)

+ %.1n<br>
For a price of '5000', the output will be '5.000,0 EUR' 

+ $%!n<br>
For a price of '5000', the output will be '$5.000,00'

You can simply have the currency format of your country by entering this value '%!n' following by the code of the symbol. For example:

+ &#8358;%!n - Nigerian Currency<br>
For a price of '5000', the output will be '5,000.00&#8358;' (if you set your locale for example en_US)<br>

[**Here's an array of the currency symbols!**](https://gist.github.com/Gibbs/3920259)

You can have more than one currency by creating a [custom field]({{ site.baseurl }}/how-to-create-custom-fields) where sellers can enter the price in their local currency.
 -->
