---
title: Language and translations
description: Choose the language your marketplace speaks, change any text it shows, and edit wording straight on your site with the live translator.
section: settings
order: 30
permalink: /how-to-change-language/
redirect_from:
  - /how-to-change-texts/
  - /live-translations/
  - /content-localization/
keywords: listing form titles, form labels, rename form fields, language, change language, site language, locale, translate, translate my site, translation, translations, traduction, traducción, traducir, tradução, übersetzung, texts, wording, words, rename, change text, rename button, live translator, ad, listing, en_US, en_UK, spanish, french, menu language, csv, spreadsheet, excel, google sheets, download translations, upload translations, restore original, undo translation, missing text, can't find text, safety notice, stay safe
updated: 2026-10-22
plans: Available on all plans
---

Your marketplace speaks one main language. Menus, buttons, messages and the emails it sends all come in that
language, and you can change any of those texts so the site uses your own words: "listing" instead of "ad",
"Sell" instead of "Post", and so on.

This guide covers the main language and editing texts. To offer your site in several languages at once, see
[Multilingual sites](/how-to-activate-multilingual-mode/).

## Change your site's language

1. In the admin panel, go to **Settings › Translations**. The page is called **Languages**.
2. The card at the top shows your current **Site language**. Below it, under **All languages**, find the language
   you want. Type in **Search languages** to filter the list.
3. Click **Use** next to it and confirm.
{: .steps}

{% include figure.html src="panel/translations.webp" alt="The Languages page under Settings › Translations, showing the site language and the list of languages" %}

Menus, buttons and system messages switch to the new language straight away.

Some content is yours, not part of the software, so it doesn't change with the language: your
[pages](/how_to_add_pages/), [email templates](/automatic-emails-sent-to-users/), category and location names, custom
field labels, and your members' listings. Edit those in their own places.
{: .note}

### English: UK or US?

Yclas has two English versions, **en_UK** and **en_US**, which differ in spelling ("favourites" or "favorites").
The email templates every site starts with are stored as UK English. If you switch to **en_US**, emails keep working
(they fall back to the UK templates), but the email templates list looks empty. To edit them in US English, open
**Email**, and under **Email templates** click **Copy templates to en_US**. The same applies to any other language:
see [Email templates](/automatic-emails-sent-to-users/).

### On a multilingual site

If **Multilingual** is on in **Settings › General**, switching the main language changes which listings new visitors
see, because each listing belongs to one language. The panel warns you before you switch. Read
[Multilingual sites](/how-to-activate-multilingual-mode/) first.
{: .warning}

## Change the texts on your site

Every text the software shows, from the "Post an ad" button to the "Your listing has been published" message, can
be replaced with your own wording, in any language.

1. Go to **Settings › Translations**.
2. Click **Edit texts** on the **Site language** card, or **Edit** next to another language.
3. Find the text. Type part of it in the **Search** box on the left and click **Search**.
4. Each row shows the current text on the left (with the English original under it, marked **EN:**) and a box on
   the right, which holds your own wording if you've changed that text already and is empty otherwise. Type your
   wording in the box on the right. **Copy text** copies the current text into the box so you only have to change a
   word, and **Open Google Translate** opens a translation of the original in a new tab.
5. Click **Save** at the bottom of the page.
{: .steps}

Rows you have customised are shown in green; the others are red. Your texts are stored with your site, so they are
kept when Yclas releases updates.

<div class="note" markdown="1">
A few things to know about the editor:

- **Save** saves the texts on the page you are looking at. The list is split into pages of 20, so save before you
  move to the next page or your changes are lost.
- The search needs at least three characters and is case-sensitive: "Post" and "post" find different texts.
- A text often appears in several places (a button, a page title, an email subject). Search for it and change every
  version you want.
- To undo a change to one text, empty its box and click **Save**: the original text comes back.
- The editor lists every text of the admin panel and the standard themes, close to 10,000 of them, including the
  newer Nova texts such as the *Stay safe.* notice on listing pages. If you couldn't find a text before October
  2026, search again: it's there now.
</div>

### Start again: Restore original

Once you've changed any text in a language, a **Restore original** button appears at the top of its edit page. It
removes every text you changed in that language and brings back the original translation. Your browser asks you to
confirm first (*Remove all N texts you changed and go back to the original translation?*).

Restore original can't be undone. If you might want some of your wording back, click **Download CSV** first (see
below) to keep a copy.
{: .warning}

## Translate in a spreadsheet

To translate or reword lots of texts at once, work in Excel, Google Sheets or Numbers instead of page by page. The
**Translate in a spreadsheet** box at the top of the edit page has both buttons.

1. Go to **Settings › Translations** and open the language with **Edit texts** or **Edit**.
2. Click **Download CSV**. The file lists every text: the English original in the first column and the text your site
   shows now in the second.
3. Open the file and change the second column. Leave the first column exactly as it is: it's how each row is matched
   back to its text.
4. Save the file as CSV.
5. Back on the edit page, click **Choose file** (or **Browse**), pick your file and click **Upload**.
{: .steps}

You see what changed, for example *12 texts changed, 1 back to the original, 9762 unchanged.* Rows you didn't change
stay as they are, and a row you emptied goes back to the original text.

<div class="note" markdown="1">
Good to know:

- Files saved by Excel in any language work, whether they use commas or semicolons, so you don't need to change any
  export settings.
- Only the CSV downloaded from this page works: a file whose first column doesn't match your site's English texts is
  refused (*No texts found in that file*). Rows with an English text the site doesn't know are skipped.
- The file can be up to 5 MB, which is far more than every text needs.
- The download and upload work on one language at a time: the one whose edit page you're on.
</div>

### Replace a word everywhere

The bar above the list replaces a word in all texts at once. For example, to call listings "offers" across an
English site:

1. In the first box type the word to find, for example `listing`, and in the second box the new word, `offer`.
2. Choose where to look:
   - **Replace in original text** looks for the word in the original English texts and swaps it in the current text
     of every match.
   - **Replace in translation** looks only in texts you have already customised.
3. Click **Replace**.
{: .steps}

Replace works on parts of words too: replacing `ad` would also change "add", "address" and "download". Use whole,
distinctive words, run a **Search** for the result afterwards, and fix anything that came out wrong. Do the plural
("listings") separately if it needs a different word.
{: .warning}

## Edit texts on the site itself: the live translator

The live translator lets you change wording while you look at your site, without searching the list.

1. Sign in to your site as an administrator, moderator or translator.
2. On your site (not the admin panel), open your account menu and, under **Live translator**, click **Enable**.
3. Move the mouse over the text you want to change. Texts you can edit are underlined, and an edit box opens when
   you point at one. Type the new wording and confirm.
4. When you are done, open the menu again and click **Disable**.
{: .steps}

The live translator changes the text in the language you are viewing, for that exact text everywhere it appears. It
works on the page where you enabled it: after you go to another page, enable it again. Not every text on every
theme can be edited this way; anything you can't reach is in **Settings › Translations**.

Give someone the **translator** role to let them translate your texts and pages without access to your settings,
users or listings.
See [Roles and permissions](/roles-work-classified-ads-script/).
{: .tip}

## Languages available

The **All languages** list shows every language Yclas has, about 45 of them, by name and code. The code is a
language plus a country, for example `es_ES` for Spanish (Spain), `pt_BR` for Portuguese (Brazil) or `fr_FR` for
French. You need these codes for [multilingual sites](/how-to-activate-multilingual-mode/).

Translations come from the Yclas community and some are more complete than others. Texts that haven't been translated
yet show in English: search for them in **Edit texts** and fill them in yourself. Arabic is translated almost in full,
for your visitors and in the admin panel; for an Arabic site, also turn on [right-to-left](/activate-right-left/).

If your language isn't in the list, [contact support](/use-yclas-support-system/).

## Make your site feel local

Language is one part of serving a local audience. These settings help too:

- [Time zone, date format and units](/change-site-name-site-description/) in **Settings › General › Regional**.
- [Currency and price format](/how-to-currency-format/).
- [Auto-locate visitors](/auto-locate-visitors/) to show listings near each visitor.
- The [languages and currency converter widgets](/overview-of-widgets/).

## Related guides

- [Multilingual sites](/how-to-activate-multilingual-mode/) — offer your site in several languages.
- [Email templates](/automatic-emails-sent-to-users/) — edit the emails your site sends, per language.
- [Pages](/how_to_add_pages/) — your About, Terms and Privacy pages.
- [Right-to-left languages](/activate-right-left/) — Arabic, Hebrew, Urdu and other RTL languages.
{: .cards}
