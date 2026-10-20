---
title: Multilingual sites
description: Offer your marketplace in several languages, translate categories, locations, fields and pages, and avoid the setting change that makes listings seem to disappear.
section: settings
order: 40
permalink: /how-to-activate-multilingual-mode/
redirect_from:
  - /multilingual-classifieds/
keywords: multilingual, languages, several languages, multiple languages, language switcher, translate categories, translate locations, locale, international, listings disappeared, hidden listings, hreflang, google languages, seo
updated: 2026-10-20
---

A multilingual site lets each visitor choose the language they browse in. Menus and buttons switch language, and
so do your category names, custom fields and pages once you have translated them. Each listing belongs to the
language it was posted in, and visitors see the listings of the language they are browsing. Multilingual sites are
part of the **Professional** and **Marketplace** plans.

Use it when your members genuinely speak different languages and post in them, for example a marketplace for a
bilingual region. If you only want your site in one language other than English, you don't need multilingual mode:
just [change the site language](/how-to-change-language/).

## Before you start

Multilingual mode splits your listings by language. Someone browsing in Spanish sees only Spanish listings, and
someone browsing in English sees only English ones. Members who post in one language aren't seen by visitors browsing
in another.

That is what you want for two separate language communities, and not what you want if everyone should see every
listing. Think about which one your marketplace is before you switch it on.

## Turn on multilingual mode

1. Check your main language in **Settings › Translations** (the **Site language** card). Visitors who haven't
   chosen a language see this one.
2. Go to **Settings › General**, section **Languages**.
3. Switch on **Multilingual**.
4. In **Languages**, type the codes of the languages to offer, separated by commas, **including your main language**.
   For example `en_UK,es_ES,ca_ES`. You'll find the codes in **Settings › Translations**, next to each language name.
5. Click **Save changes**.
{: .steps}

When you save, every existing listing that doesn't have a language yet is given your main language, so nothing
vanishes when you switch on.

Use the codes exactly as they appear in **Settings › Translations**, with the underscore and capitals (`es_ES`, not
`es-es`), separated by commas. A code Yclas doesn't recognise is ignored.
{: .note}

**Multilingual** can't be saved on without at least one language your site has. If the **Languages** box is empty or
none of its codes is recognised, Yclas saves Multilingual **off** and shows "Multilingual is off: add at least one
language code, for example en_US,es_ES, then switch it on." Add the codes and switch it on again.

## What changes on your site

| Where | What happens |
| --- | --- |
| Footer | A language menu shows the current language and lets visitors switch to the others in your **Languages** list. Their choice is remembered on their device. |
| Posting form | Members choose the language of their listing. It is required. |
| Home page, listings, search and category counts | Show only the listings in the language being viewed. |
| Blog and FAQ | Show only the posts and questions written in the language being viewed. |
| Pages and email templates | Each language uses its own version, and falls back to the UK English one when there isn't one. |
| Categories, locations, custom fields | Show their translated names when you have added them, and the original name otherwise. |
| Email digest | Sent separately for each language. |

The [languages widget](/overview-of-widgets/) adds another language switcher, for example in a sidebar.

## Translate your content

The software's own texts are translated for you. Your own content needs translating once, in each place:

**Categories and locations.** Open a category in **Listings › Categories** (or a location in **Listings ›
Locations**). On a multilingual site the edit page has a **Translations** card with a name, a description, a meta
title and a meta description for each language. Fill them in and click **Save**. The meta title and description are
what search engines show for that category or location in each language; leave them empty and Yclas builds them from
the name and description.

**Custom fields.** Open a field in **Listings › Custom Fields**. The **Translations** card has the label, the
tooltip and, for select and radio fields, the list of values for each of your other languages. Keep the values in the
same order as the original list.

**Pages, email templates, blog posts and FAQs.** These pages have a language selector at the top. Switch to a
language and create each item in it. For pages and email templates, an empty language offers to copy everything from
UK English so you only have to translate. See [Pages](/how_to_add_pages/) and
[Email templates](/automatic-emails-sent-to-users/).

**Buttons, menus and messages.** These come translated. To change the wording in a language, see
[Language and translations](/how-to-change-language/).

**Your own menu links.** Links you add in **Design › Menu** show in every language, with the title you typed. Use
titles that work in all your languages; see [Menu and footer links](/modify-top-menu/).

**Listings.** On the Professional and Marketplace plans, AI can translate listing titles and descriptions into your
other languages: switch on **Translate listings automatically** in **Settings › Translations** or on the
[AI page](/ai-features/).


## Search engines and your languages

Each language of your site also has its own address: the normal address shows your main language, and adding
`?language=` with a code shows another, for example `yoursite.com/cars?language=es_ES`. On every listings page, your
home page and your pages, Yclas tells search engines about all the language versions (with what are called
*hreflang* links), so Google can show Spanish searchers the Spanish version. You don't need to set anything up.

Listing pages keep one address whatever the language, since each listing is written in one language.

## Changing your main language later

<div class="warning" markdown="1">
**Don't change the site language on a multilingual site without a plan.** Visitors who haven't chosen a language
browse in the site language. If you switch it, for example from `en_UK` to `es_ES`, new visitors land on the Spanish
version and see only Spanish listings: your English listings seem to have disappeared, although they are all still
there.

If this has happened:

- Switch back in **Settings › Translations**, or
- Make sure both languages are in the **Languages** list, so visitors can switch to the old one from the footer, or
- Change the language of the affected listings by editing them.
</div>

The same thing happens if you remove a language from the **Languages** list: its listings stay in your database, but
visitors can no longer switch to them.

## Turn multilingual mode off

Switch off **Multilingual** in **Settings › General** and click **Save changes**. Every listing shows again for everyone,
whatever its language, and the language menu disappears from the footer. Listings keep their language, so you can
switch multilingual mode back on later.

## Troubleshooting

**"Multilingual is on but no language is set."** Administrators see this when they open the posting form on a
multilingual site with an empty or invalid **Languages** list, and land on the **Languages** section of
**Settings › General**. Add your language codes (for example `en_US,es_ES`) or switch Multilingual off, and save.

**Listings missing for some visitors.** Check which language the visitor is browsing in (the footer menu) and the
language of the listing. See [Listings disappeared](/listings-disappeared/).

**A category shows in English on the Spanish site.** Its Spanish name is empty: add it in the category's
**Translations** card.

## Related guides

- [Language and translations](/how-to-change-language/) — your main language and the wording of your site.
- [Categories](/how-to-add-categories/) and [Locations](/how-to-add-locations/) — where you translate names.
- [Email templates](/automatic-emails-sent-to-users/) — emails in each language.
- [Listings disappeared](/listings-disappeared/) — the most common reasons listings stop showing.
{: .cards}
