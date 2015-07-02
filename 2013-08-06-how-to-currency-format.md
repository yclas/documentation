---
layout: page
title:  "How to set the currency format?"
date:   2013-08-06 11:18:50
categories: HowTo
tags: HowTo
permalink: /how-to-currency-format/
---
# How to set the currency format?

One of the most commonly asked question by our users is how to deal with **currency in which prices are displayed**. Apparently it caused a lot of problems and misunderstandings. This is why with a new release (2.0.5) we decided to make some improvements in order to make it less confusing. Here there's a short tutorial how to change the currency sign and decimal representation displayed on your site. We use PHP function **[money_format](http://php.net/manual/en/function.money-format.php)** to solve all problems in a very easy way. 

## How to do it:

You can go to **Settings** > **General** > **Regional Settings** and input your preferred price format exactly the way the currency is represented, as in USD for United States Dollars, EUR for Euro, PLN for Polish Zloty and so on. Once you press update then the currency will show next to each amount.

![How to set the currency format](http://open-classifieds.com/wp-content/uploads/2013/08/How-to-set-the-currency-format.png)

## <a name="formats">List of currency formats(#formats)

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

## <a name="hacks"></a>Hacks(#hacks)

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
For a price of '5000', the output will be '5.000 EUR' (if you are using a European translation)

+ %.1n<br>
For a price of '5000', the output will be '5.000,0 EUR' 

+ $%!n<br>
For a price of '5000', the output will be '$5.000,00'

<!--_This part is only for [Open-Classifieds](http://open-classifieds.com/)!_

Your locale doesn't only determine your website currency, but also the way of displaying the price (e.g. using point or comma to separate decimals, displaying currency sign before or after the price), differs from country to country. That's why it is important what locale you're using. 

For example, if you are using **fr_FR** your currency will be recognized as **"€"**, which is a legal medium of exchange in France. Locale is composed by the shortcut of a language and a country - so if you want to have your site in French, but don't want to use Euro as a currency you need to set your locale eg. as **fr_CA** \- your default currency will be Canadian Dollar with a **"$"** symbol. The same happens when you want to have your site in Spanish - if you have locale **es_ES** your currency will be Euro, but if you rename it to **es_MX** it will be Mexican Peso.

> To rename your locale go to the /languages/ folder in your installation files and simply change the name of the language file you use eg: /languages/fr_FR to /languages/fr_CA

If you don't want to use any sign or use completely different currency than the one you use in your country, use a locale that **doesn't exist,** e.g. change_ /languages/en_US _($) to _/languages/en_EN_ or  _/languages/es_ES _(€) to _/languages/es_XX_. Then, in general settings in the Panel edit field **Money Format** \- if you put there **%n** only the number will be displayed (e.g. 100 without any sign). If you put **$%n** price will be displayed in this format: $100, if **%n€** system will display 100€ etc.-->

<!--title: How to set the currency format?
link: http://open-classifieds.com/2013/08/06/how-to-currency-format/
author: admin
description: 
post_id: 9353
created: 2013/08/06 13:18:50
created_gmt: 2013/08/06 11:18:50
comment_status: open
post_name: how-to-currency-format
status: publish
post_type: post-->