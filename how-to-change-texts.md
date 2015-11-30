---
title:  "How to change texts on the site? and how to translate?"
date:   2013-08-16 10:57:29
categories: Content
tags: [Content]
permalink: /how-to-change-texts/
---
Go to **Panel**, choose **Content** and press **Translations** from the left sidebar.

Find locale, you are currently using, on the list of available language files (the one with grey badge Active) and hit **EDIT**. Find the phrase that you want to change - probably it will be easiest by using the search tool in your browser (Ctrl + F).

Type new text in the right column next to the phrase you want to replace. Hit **Save** (blue button on the right of the field you just updated) to see the changes immediately or continue editing other fields and click **Save** (all) at the top or at the bottom of the page when finished. **Changes done!**

## Video

<a href="http://www.youtube.com/watch?feature=player_embedded&v=7Ha0SHeQPPA
" target="_blank"><img src="http://img.youtube.com/vi/7Ha0SHeQPPA/0.jpg" 
alt="How to change texts on the site? Open Classifieds " width="480" height="360" border="10" /></a>


## How to Translate Open Classifieds

If you would like to translate Open Classifieds to another language, please feel free to [contact us](http://open-classifieds.com/contact/) and we would definitely like it if you send us any updated/new version of a translation. 

### How to translate

  * Open your Open Classifieds folder: **Languages**
  * **Create a copy** of one of the existing translation files
  * **Rename the new file** to the language you want to translate to e.g. nl_NL (according to the **[list of all locales](http://www.roseindia.net/tutorials/I18N/locales-list.shtml)**)
  * Open yourdomain.com/oc-panel/translations/index
  * Pick the language that you created (as shown in the picture below) and press on **EDIT**
  
![Translations   Open Classfieds 2181](http://open-classifieds.com/wp-content/uploads/2010/06/Translations-Open-Classfieds-2181.png)  

  * Fill the **translation boxes** with the new text
  
![Translations 2](http://open-classifieds.com/wp-content/uploads/2010/06/Translations-2-1024x221.png)

  * **Save**
  * Send us the file after everything is done (would help us a lot)

_Translated strings will be added in your /languages/xx_XX/LC_MESSAGES/messages.po. On update, this file will be replaced by the new messages.po file and changes may get lost. To avoid that, backup your messages.po file and after the update replace the new one with that._

### How to add new texts to translations

Whenever we have a new release we might add some new features which could add new texts to the software that needs to be translated. If you can't see those texts in the translation list you can simply follow those steps: 

  * Go to admin panel
  * Go to **Content** > **Translations**
  * Click on **"Scan"**

![add new translations](http://open-classifieds.com/wp-content/uploads/2010/06/add-new-translations-1024x240.png)

## Troubleshooting:

  * Be sure your hosting has the **locales** (you can check in unix with command locale -a) if not, the site will not use the language you choose.
  * You need the **.mo file**, this is the one that really matters to the system.
  * You might need to change the **HTML charset** or the **collation for your DB** depending on your locale.
  * Check the permissions for the files .po .mo the should have 755.
  * If you are not able to translate more than 1000 strings, contact your hosting company and ask them to change the max_input_vars = 1000 to max_input_vars = 10000 in php.ini
  * For more help please ask in the **[forum](http://forums.open-classifieds.com/)**.

