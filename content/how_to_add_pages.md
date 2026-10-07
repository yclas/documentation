---
title: Pages (About, Terms, Privacy…)
description: Create the fixed pages every marketplace needs, such as About us, Terms of use and Privacy, and use them for your contact, terms and thank-you messages.
section: content
order: 10
permalink: /how_to_add_pages/
keywords: page, pages, about, about us, terms, terms of service, privacy, policy, cms, static page, legal, footer, translate page
updated: 2026-10-07
---

Pages are the fixed, rarely changing parts of your site: About us, Terms of use, Privacy policy, How it works,
Safety tips. Each one gets its own address, such as `/about-us.html`, and once it is published the Nova theme lists
it in your site's footer.

Several settings also borrow the text of a page, so you write it once and reuse it: the terms sellers accept before
posting, the text above your contact form, the message after someone posts a listing, and more (see
[Pages that settings use](#pages-that-settings-use)).

## Create a page

1. In the admin panel, go to **Pages** (under **Content** in the sidebar).
2. Click **+ New page**.
3. Type the title at the top, for example *Terms of use*, and write the page in the editor below it.
4. On the right, under **Publish**, switch on **Published** if the page should go live now. Leave it off to keep a draft.
5. Check the **Language** and, if you like, the **Address** (see below).
6. Click **Create page**.
{: .steps}

Your site caches pages for speed, so a new page can take a short while to show up. The confirmation message has a
**Delete cache** button if you want to see it straight away (more in [Clear the cache](/modify-cache-time/)).

To change a page later, click it in the **Pages** list, make your changes and click **Save changes**. Published
pages have a **View page** button at the top.

## The page editor

| Setting | What it does |
| --- | --- |
| **Title** | The page heading, and the name shown in the footer and in the page lists of your settings. |
| **Content** | The page itself. The toolbar has headings, bold and italic, lists, colours, tables, links, images, videos and a horizontal line. |
| **Published** | When off, the page is a draft: visitors get a "not found" page, while you and your moderators can still preview it. |
| **Language** | Which language this version of the page is for. See [Pages in more than one language](#pages-in-more-than-one-language). |
| **Address** | The end of the page's web address. Leave it empty on a new page and it is made from the title (*Terms of use* becomes `terms-of-use`). |
| **Meta title** and **Meta description** | Shown once the page exists, under **Search engines**. What Google shows for this page. Leave them empty to use the title and the start of the page text. |

Changing the **Address** of a published page breaks every link to the old address, including links in emails
you have already sent and in Google's results. Pick it once and leave it.
{: .warning}

A few addresses are reserved by your site: *contact*, *search*, *map*, *maintenance* and *publish new*. If a
page would get one of them, the word *page-* is put in front, for example `page-contact`. If the address is
already taken by another page, a number is added at the end.

### Images and formatting

- Click the picture button in the toolbar to upload an image. It is stored in your
  [image library](/how-to-manage-uploaded-images/), where you can copy its link or delete it later.
- Pasting text from Word or another website pastes it as plain text, so you don't bring in stray fonts and colours.
  Format it again with the toolbar.
- To paste HTML, such as a form or a video embed from another service, click the **code view** button (`</>`),
  paste it there and switch back.

## Pages that settings use

Once a page is published, you can pick it in these settings. Each one shows a list of your published pages.

| Setting | Where | What the page is used for |
| --- | --- | --- |
| **Terms of Service** | **Listings › Settings**, under **Posting** | Sellers must tick that they accept this page before they post. See [Publishing options](/how-to-configure-publish-options/). |
| **Thank You Page** | **Listings › Settings**, under **Posting** | Shown after someone posts a listing. See [Thank-you page](/thanks-page/). |
| **Contact Page Content** | **Settings › General**, under **Your site** | Shown next to the contact form. See [Contact page](/how-to-add-text-contact-page/). |
| **Accept Terms Alert** | **Settings › General**, under **Access & privacy** | Visitors must accept this page before they use the site. See [Terms alert](/activate-access-terms-alert/). |
| **Private Site Landing Page Content** | **Settings › General**, under **Access & privacy** | Shown to signed-out visitors of a members-only site. See [Private site](/private-site/). |
| **Alternative Payment** | **Settings › Payments** | Adds a payment button with the page title that opens the page text, for example bank transfer details. See [Take payments](/setup-payment-gateways/). |

## Where pages appear on your site

Published pages are listed in the footer of your site, under **Information** in the Nova theme. Pages you use as
the thank-you page, the alternative payment or the private site text are left out of that list, since they only
make sense in their own place.

To give a page a more prominent place, add it to your [menu](/modify-top-menu/) with its address.

## Pages in more than one language

Every page belongs to one language. The **Pages** list shows one language at a time; switch it with the language
menu at the top.

When a visitor opens a page, your site looks for the version in the language they are browsing in. If there is
none, it shows the version in British English (`en_UK`), the language your site's built-in content is stored in.
If that doesn't exist either, the visitor gets a "not found" page.

So, on a site in any language other than British English, keep these in mind:

- Give every translation of a page the same **Address**, so `/terms-of-use.html` works in every language.
- On a [multilingual site](/how-to-activate-multilingual-mode/), create the page in each language you offer.
- When you open the **Pages** list in a language that has no pages yet, it offers **Copy from en_UK**. This copies
  every British English page that is missing in that language, so you only have to translate them.

## Delete a page

Open the page and click **Delete page**. This is permanent, and the page's address stops working. If a setting
above uses the page, choose another one there, or that setting stops showing anything.

## Tips

- Write your Terms of use and Privacy policy before you launch, and link them at sign-up and posting. The
  [launch checklist](/launch-checklist/) lists what else to prepare.
- Keep pages short and scannable: headings, short paragraphs and lists read well on phones.
- A page you want to hide for a while can be switched back to a draft instead of deleted.

## Related guides

- [Contact page](/how-to-add-text-contact-page/) — add your own text next to the contact form.
- [Thank-you page](/thanks-page/) — what posters see after they post.
- [Blog](/how-to-create-a-blog/) — for news and articles that change often.
- [Menu and footer links](/modify-top-menu/) — link your pages from the top of the site.
{: .cards}
