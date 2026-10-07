---
title: Contact page
description: How your contact page works, where its messages go, and how to add your own text next to the contact form.
section: content
order: 120
permalink: /how-to-add-text-contact-page/
keywords: contact, contact page, contact form, contact us, contact email, message, support, get in touch
updated: 2026-10-07
---

Every Yclas marketplace has a contact page at `/contact.html` (the address follows your site's language, for
example `/contacto.html` on a Spanish site). Visitors and members use it to write to you, and the footer of your
site links to it as **Contact**.

You can add your own text to it, such as opening hours, a phone number, an address or the questions you get most,
and choose which address receives the messages.

## Add your own text

The text comes from one of your [pages](/how_to_add_pages/):

1. Go to **Pages** and create a page with the text you want, for example *Contact us*. Switch on **Published** and
   click **Create page**.
2. Go to **Settings › General**.
3. Under **Your site**, choose that page in **Contact Page Content**.
4. Click **Save changes** in the bar that appears at the bottom of the screen.
{: .steps}

The contact page now uses the page's title as its heading and shows its text next to the form. Without a page, it
shows the heading **Contact Us** and a short standard line.

Because the text is a page, it is also listed with your other pages in the footer. Give it a title that works in
both places, such as *Contact us*.
{: .note}

To remove your text, set **Contact Page Content** back to **Deactivated**.

## What visitors see

| Part | What it does |
| --- | --- |
| Your text | The page you chose, if any. |
| **Read the FAQ first** | A link to your [FAQ](/create-frequent-asked-questions-faq/), shown while the FAQ is switched on. |
| Sidebar widgets | The widgets in your sidebar, unless your theme hides the sidebar. |
| The form | **Name** and **Email** (only for visitors who aren't signed in), **Subject** and **Message**, then **Send message**. |
| Captcha | Shown when captcha is switched on for your site. See [reCAPTCHA](/set-recaptcha-website/). |

Signed-in members don't need to type their name and email address: the message is sent with the ones in their
account.

## Where messages go

Messages arrive by email:

- to the **Contact Email** in **Email** settings (under **Addresses**), or
- to your **Notify Email** if **Contact Email** is empty.

The email uses the *contact-admin* [template](/automatic-emails-sent-to-users/). Click **Reply** in your email
program to answer: the reply goes to the person who wrote to you.

Messages aren't stored in the admin panel, only emailed. If they don't arrive, see
[Emails aren't arriving](/troubleshooting-email-errors/).
{: .important}

## Spam protection

The contact form has a hidden trap field that most spam robots fill in; those messages are dropped silently. On top
of that, it uses [captcha](/set-recaptcha-website/) when it's on, Akismet if you've connected it, and the list of
blocked email addresses from your [spam settings](/how-to-avoid-spam-in-my-site/).

## Related guides

- [Pages](/how_to_add_pages/) — create the page with your contact text.
- [FAQ](/create-frequent-asked-questions-faq/) — answer common questions before they reach your inbox.
- [Email settings](/general-email-configuration/) — the Contact Email and Notify Email addresses.
- [Messaging between members](/how-to-use-messaging-system/) — how members contact each other.
{: .cards}
