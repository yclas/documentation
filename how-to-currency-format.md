---
title:  "How to set the currency format?"
date:   2013-08-06 11:18:50
categories: General
tags: 
- General
- Settings
permalink: /how-to-currency-format/
keywords: money, price, regional, amount, change currency
---
One of the most commonly asked question by our users is how to deal with **currency in which prices are displayed**. Apparently it caused a lot of problems and misunderstandings. This is why with a new release (2.0.5) we decided to make some improvements in order to make it less confusing. Here there's a short tutorial how to change the currency sign and decimal representation displayed on your site. We use PHP function **[money_format](http://php.net/manual/en/function.money-format.php)** to solve all problems in a very easy way. 

## How to do it

You can go to **Settings** > **General** > **Regional** and input your preferred price format exactly the way the currency is represented, as in USD for United States Dollars, EUR for Euro, PLN for Polish Zloty and so on. Once you press update then the currency will show next to each amount.

<a href="//docs.yclas.com/images/currency-format.png" class="thumbnail gallery-item" data-gallery>
![How to set the currency format](//docs.yclas.com/images/currency-format.png)
</a>

## List of currency formats

+ **ARS**: Argentine Peso
+ **AMD**: Armenian Dram
+ **AWG**: Aruban Guilder
+ **AUD**: Australian Dollar **AU$**
+ **BSD**: Bahamian Dollar
+ **BHD**: Bahraini Dinar
+ **BDT**: Bangladesh, Taka
+ **BZD**: Belize Dollar
+ **BMD**: Bermudian Dollar
+ **BOB**: Bolivia, Boliviano
+ **BAM**: Bosnia and Herzegovina, Convertible Marks
+ **BWP**: Botswana, Pula
+ **BRL**: Brazilian Real **R$**
+ **BND**: Brunei Dollar
+ **CAD**: Canadian Dollar **CA$**
+ **KYD**: Cayman Islands Dollar
+ **CLP**: Chilean Peso
+ **CNY**: China Yuan Renminbi **CN&yen;**
+ **COP**: Colombian Peso
+ **CRC**: Costa Rican Colon
+ **HRK**: Croatian Kuna
+ **CUC**: Cuban Convertible Peso
+ **CUP**: Cuban Peso
+ **CYP**: Cyprus Pound
+ **CZK**: Czech Koruna **K&#269;**
+ **DKK**: Danish Krone
+ **DOP**: Dominican Peso
+ **XCD**: East Caribbean Dollar **EC$**
+ **EGP**: Egyptian Pound
+ **SVC**: El Salvador Colon
+ **EUR**: Euro **&euro;**
+ **ESP**: Euro in spanish format
+ **GHC**: Ghana, Cedi
+ **GIP**: Gibraltar Pound
+ **GTQ**: Guatemala, Quetzal
+ **HNL**: Honduras, Lempira
+ **HKD**: Hong Kong Dollar **HK$**
+ **HUF**: Hungary, Forint **HK$**
+ **ISK**: Iceland Krona
+ **INR**: Indian Rupee **&#2352;**
+ **IDR**: Indonesia, Rupiah
+ **IRR**: Iranian Rial
+ **JMD**: Jamaican Dollar
+ **JPY**: Japan, Yen **&yen;**
+ **JOD**: Jordanian Dinar
+ **KES**: Kenyan Shilling
+ **KWD**: Kuwaiti Dinar
+ **LVL**: Latvian Lats
+ **LBP**: Lebanese Pound
+ **LTL**: Lithuanian Litas **Lt**
+ **MKD**: Macedonia, Denar
+ **MYR**: Malaysian Ringgit
+ **MTL**: Maltese Lira
+ **MUR**: Mauritius Rupee
+ **MXN**: Mexican Peso **MX$**
+ **MZM**: Mozambique Metical
+ **NPR**: Nepalese Rupee
+ **ANG**: Netherlands Antillian Guilder
+ **ILS**: New Israeli Shekel **&#8362;**
+ **TRY**: New Turkish Lira
+ **NZD**: New Zealand Dollar **NZ$**
+ **NOK**: Norwegian Krone **kr**
+ **PKR**: Pakistan Rupee
+ **PEN**: Peru, Nuevo Sol
+ **UYU**: Peso Uruguayo
+ **PHP**: Philippine Peso
+ **PLN**: Poland, Zloty
+ **GBP**: Pound Sterling **&pound;**
+ **OMR**: Rial Omani
+ **RON**: Romania, New Leu
+ **ROL**: Romania, Old Leu
+ **RUB**: Russian Ruble
+ **SAR**: Saudi Riyal
+ **SGD**: Singapore Dollar
+ **SKK**: Slovak Koruna
+ **SIT**: Slovenia, Tolar
+ **ZAR**: South Africa, Rand **R**
+ **KRW**: South Korea, Won **&#8361;**
+ **SZL**: Swaziland, Lilangeni
+ **SEK**: Swedish Krona **kr**
+ **CHF**: Swiss Franc **SFr**
+ **TZS**: Tanzanian Shilling
+ **THB**: Thailand, Baht **&#3647;**
+ **TOP**: Tonga, Paanga
+ **AED**: UAE Dirham
+ **UAH**: Ukraine, Hryvnia
+ **USD**: US Dollar **$**
+ **VUV**: Vanuatu, Vatu
+ **VEF**: Venezuela Bolivares Fuertes
+ **VEB**: Venezuela, Bolivar
+ **VND**: Viet Nam, Dong **&#x20ab;**
+ **ZWD**: Zimbabwe Dollar

## Hacks

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

