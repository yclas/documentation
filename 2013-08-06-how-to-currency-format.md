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

### How to do it:

You can go to **Settings** > **General** > **Regional Settings** and input your preferred price format exactly the way the currency is represented, as in USD for United States Dollars, EUR for Euro, PLN for Polish Zloty and so on. Once you press update then the currency will show next to each amount.

![How to set the currency format](http://open-classifieds.com/wp-content/uploads/2013/08/How-to-set-the-currency-format.png)

## Locale and your classifieds currency

Your locale doesn't only determine your website currency, but also the way of displaying the price (e.g. using point or comma to separate decimals, displaying currency sign before or after the price), differs from country to country. That's why it is important what locale you're using. 

For example, if you are using **fr_FR** your currency will be recognized as "**€"**, which is a legal medium of exchange in France. Locale is composed by the shortcut of a language and a country - so if you want to have your site in French, but don't want to use Euro as a currency you need to set your locale eg. as **fr_CA** \- your default currency will be Canadian Dollar with a "**$"** symbol. The same happens when you want to have your site in Spanish - if you have locale** es_ES** your currency will be Euro, but if you rename it to **es_MX** it will be Mexican Peso.

> To rename your locale go to the /languages/ folder in your installation files and simply change the name of the language file you use eg: /languages/fr_FR to /languages/fr_CA

If you don't want to use any sign or use completely different currency than the one you use in your country, use a locale that **doesn't exist,** e.g. change_ /languages/en_US _($) to _/languages/en_EN_ or  _/languages/es_ES _(€) to _/languages/es_XX_. Then, in general settings in the Panel edit field **Money Format** \- if you put there **%n** only the number will be displayed (e.g. 100 without any sign). If you put **$%n** price will be displayed in this format: $100, if **%n€** system will display 100€ etc.

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