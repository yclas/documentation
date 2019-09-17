---
title:  "How to change texts on the site? and how to translate?"
date:   2013-08-16 10:57:29
categories: Translations
tags: Translations, Settings, SelfHosted
permalink: /how-to-change-texts/
keywords: translations, language, text, locale
---
<div class="alert alert-warning">
<strong><i class="glyphicon glyphicon-warning-sign"></i> </strong> This guide is only for Yclas Self Hosted!
</div>

Go to **Panel**, choose **Settings** and press **Translations** from the left sidebar.

Find the locale you are currently using on the list of available language files (the one with grey badge Active) and hit **EDIT**. Find the phrase that you want to change - probably it will be easiest by using the search tool in your browser (Ctrl + F).

Type new text in the right column next to the phrase you want to replace. Hit **Save** (blue button on the right of the field you just updated) to see the changes immediately or continue editing other fields and click **Save** (all) at the top or at the bottom of the page when finished. **Changes done!**

## Video

<a href="http://www.youtube.com/watch?feature=player_embedded&v=7Ha0SHeQPPA
" target="_blank"><img src="http://img.youtube.com/vi/7Ha0SHeQPPA/0.jpg" 
alt="How to change texts on the site? Yclas " width="480" height="360" border="10" /></a>


## How to Translate Yclas

If you would like to translate Yclas to another language, please feel free to [contact us](https://yclas.com/contact/) and we would definitely like you to send us any updated/new version of a translation. 

### How to translate

  * Open the folder called **Languages**
  * **Create a copy** of one of the existing translation files
  * **Rename the new file** to the language you want to translate to e.g. nl_NL (according to the **[list of all locales](http://www.roseindia.net/tutorials/I18N/locales-list.shtml)**)
  * Open yourdomain.com/oc-panel/translations/index
  * Pick the language that you created (as shown in the picture below) and press **EDIT**
  
<a href="{{ site.baseurl }}/images/change-texts.png" class="thumbnail gallery-item" data-gallery>
![Translations ]({{ site.baseurl }}/images/change-texts.png)  
</a>

  * Fill the **translation boxes** with the new text
  
<a href="{{ site.baseurl }}/images/change-texts1.png" class="thumbnail gallery-item" data-gallery>
![Translations 2]({{ site.baseurl }}/images/change-texts1.png)
</a>

  * **Save**
  * Send us the file after everything is done (it would help us a lot)

_Translated strings will be added in your /languages/xx_XX/LC_MESSAGES/messages.po. On update, this file will be replaced by the new messages.po file and changes may get lost. To avoid that, backup your messages.po file and after the update to replace the new one with that._

### How to add new texts to translations

Whenever we have a new release we might add some new features which could add new texts to the software that needs to be translated. If you can't see those texts in the translation list, you can solve that by following these steps: 

  * Go to admin panel
  * Go to **Content** > **Translations**
  * Click on **"Scan"**

<a href="{{ site.baseurl }}/images/change-texts2.png" class="thumbnail gallery-item" data-gallery>
![add new translations]({{ site.baseurl }}/images/change-texts2.png)
</a>

## Troubleshooting

  * Be sure your hosting has the **locales** (you can check it in unix with the command locale -a); if not, the site will not use the language you chose.
  * You need the **.mo file**, this is the one that really matters to the system.
  * You might need to change the **HTML charset** or the **collation for your DB** depending on your locale.
  * Check the permissions for the files .po .mo the should have 755.
  * If you are not able to translate more than 1000 strings, contact your hosting company and ask them to change the max_input_vars = 1000 to max_input_vars = 10000 in php.ini


<br>
**Related guides:**

* [Live Translations]({{ site.baseurl }}/live-translations/)
* [How to change language of the site?]({{ site.baseurl }}/how-to-change-language/)
* [How to have a Multilingual Classifieds]({{ site.baseurl }}/multilingual-classifieds)

<iframe width="854" height="480" src="https://www.youtube.com/embed/rpViU_hcgiM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
