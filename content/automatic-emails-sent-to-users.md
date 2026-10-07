---
title: Email templates
description: Every automatic email your marketplace sends, how to reword it, the placeholders you can use, and how templates work in each language.
section: content
order: 60
permalink: /automatic-emails-sent-to-users/
keywords: email, emails, email templates, transactional email, automatic email, notification, welcome email, password reset, placeholders, en_US, en_UK, translate emails, from email, reply-to
updated: 2026-10-07
---

Your marketplace sends emails on its own: a welcome email when someone signs up, a password reset link, a note
when a listing goes live or is about to expire, a message from a buyer, a receipt. Each of these emails comes from a
**template** that you can reword, switch off or translate.

This guide covers the wording. To choose the service that delivers your emails, the sender name and the addresses
that receive copies, see [Email settings](/general-email-configuration/).

## Find the templates

1. In the admin panel, go to **Email** in the sidebar.
2. In the **Email templates** card, click **Open templates**.
{: .steps}

The **Email templates** page lists every template in one language, with a search box. Switch language with the
language menu at the top. Templates that are switched off show **Off**.

The list looks empty? Read [Templates on a US English site](#templates-on-a-us-english-site) below. Your emails
are still being sent.
{: .tip}

## Edit a template

1. Click the template in the list.
2. Change the **Subject** and the **Message**.
3. Keep the placeholders you need (the words in square brackets, listed under **Placeholders** on the right).
4. Click **Save changes**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Subject** | The email's subject line. It is also printed as the heading at the top of the email. Placeholders work here too. |
| **Message** | The body of the email, in plain text: line breaks are kept exactly as you type them. |
| **Send this email** | When off, this email is not sent at all, in this language. |
| **Language** | The language this version of the template is for. |
| **From email** | The address replies go to when a member answers the email. Empty means your Notify Email from [Email settings](/general-email-configuration/). |
| **Key** | The name the site uses to find the template, such as *auth-register*. It can't be changed. |

Every email is wrapped in the same simple layout: your logo (from your theme), the subject as a heading, your text,
and a footer with your site name and an **Unsubscribe** link. On some plans the footer also says "Powered by
Yclas"; see [Remove the Yclas branding](/can-i-remove-license/).

### Buttons and links

Write `[URL.QL|View your listing]` to show a link as a button with your own label. It works with any link
placeholder that the template receives, for example `[URL.AD|See the listing]` or `[URL.CHECKOUT|Pay now]`. If the
link is missing when the email is sent, only the label is shown.

A link placeholder on its own, such as `[URL.AD]`, becomes a plain link that shows your site's domain.

### Change the reply address on every template

Below the list, **Sender address for every email** sets the **From email** of all templates, in every language,
in one go. Type the address and click **Apply to all**.

## Placeholders

Placeholders are replaced with real values when the email goes out. Only use the ones a template already
contains, or the ones listed for it below: a placeholder that template doesn't receive is sent as it is, brackets
and all.

These work in every template:

| Placeholder | Becomes |
| --- | --- |
| `[SITE.NAME]` | Your site name from **Settings › General**. |
| `[SITE.URL]` | A link to your home page. |
| `[USER.NAME]` | The recipient's name. |
| `[USER.EMAIL]` | The recipient's email address (not in emails sent to many people at once). |

`[URL.QL]` is a "quick login" link: it signs the member in and takes them to the right page, such as their listing
or a conversation. Treat emails that contain it like a key, and don't forward them.
{: .note}

## Every automatic email

New sites get these templates in British English. Older sites may have different wording or a few templates fewer.

### Accounts

| Key | Sent to | When |
| --- | --- | --- |
| *auth-register* | The new member | They create an account. Includes their login details: `[USER.EMAIL]`, `[USER.PWD]`. |
| *auth-verify-email* | The new member | They sign up while **User Must Verify Email** is on. The `[URL.QL]` button confirms the address. |
| *auth-remember* | The member | They ask to reset their password. |
| *password-changed* | The member | An administrator changes their password. Includes the new one, `[USER.PWD]`. |

### Listings

| Key | Sent to | When |
| --- | --- | --- |
| *ads-confirm* | The poster | Their listing needs confirming by email (moderation set to an email-confirmation mode). |
| *ads-notify* | The poster | Their listing was received and waits for your review. |
| *ads-activated* | The poster (`[USER.OWNER]`) | You approve their listing and it goes live. |
| *ads-user-check* | The poster | Their listing goes live without moderation (straight away, or after they confirm it by email). It asks them to tell you, through `[URL.CONTACT]`, if they didn't post it. |
| *ad-to-expire* | The poster | Their listing expires soon. |
| *ad-expired* | The poster | Their listing has expired. `[URL.EDITAD]` opens it for renewing. |
| *ads-subscribers* | Members with a matching alert | A new listing matches their [listing alert](/notification-system/). |
| *ads-to-admin* | Administrators and moderators | A new listing is posted, if **Notify Me on New Listing** is on in **Email** settings. |
| *awaiting-moderation* | Your **Notify Moderation Email** | A listing waits for your approval, if that address is filled in. |
| *ad-review* | The seller | Someone reviews their listing: `[RATE]`, `[DESCRIPTION]`. See [Reviews](/review-system-works/). |

Listing templates use `[AD.NAME]` or `[AD.TITLE]` for the title (both are the listing title; keep whichever the
template already uses) and `[URL.AD]` for its address.

### Messages and contact

| Key | Sent to | When |
| --- | --- | --- |
| *contact-admin* | You | Someone uses your [contact page](/how-to-add-text-contact-page/). |
| *user-contact* | The seller | A buyer uses the contact form on a listing (when messaging is off). Replies go straight to the buyer. |
| *user-profile-contact* | The member | Someone uses the contact form on their profile (when messaging is off). |
| *messaging-ad-contact* | The seller | A buyer starts a conversation about a listing. See [Messaging](/how-to-use-messaging-system/). |
| *messaging-user-contact* | The member | Someone sends them a direct message. |
| *messaging-reply* | The other person in the conversation | A new reply. |
| *new-forum-answer* | Everyone in the topic, and you | Someone replies in a [forum](/add-forums-section/) topic, or starts a topic. |

The contact emails use `[EMAIL.SENDER]`, `[EMAIL.FROM]` (the sender's address), `[EMAIL.SUBJECT]` and
`[EMAIL.BODY]` (their message). The messaging emails use `[FROM.NAME]`, `[TO.NAME]` and `[DESCRIPTION]`.

### Orders and payments

| Key | Sent to | When |
| --- | --- | --- |
| *new-order* | The buyer or poster | An order is waiting for payment. `[URL.CHECKOUT]` opens the payment page. |
| *ads-purchased* | The buyer | They bought an item. Includes `[ORDER.ID]`, `[ORDER.AMOUNT]` and the seller's `[BUYER.INSTRUCTIONS]`. |
| *ads-sold* | The seller | Their item was sold. |
| *out-of-stock* | The seller | An item ran out of stock and is hidden. |
| *order-shipped* | The buyer | The seller marked the order as shipped: `[ORDER.SHIPPING_PROVIDER_NAME]`, `[ORDER.SHIPPING_TRACKING_CODE]`. |
| *mark-as-received* | The buyer | A reminder to confirm the order arrived. |
| *order-cancelled* | The buyer | An order was cancelled. |
| *safe-payment-requested* | The seller | A buyer wants to pay with safe payment and the seller must set up how they get paid. |
| *plan-expired* | The member | Their [membership plan](/membership-plans/) expired and couldn't be renewed. `[PLAN.NAME]`. |

### Digest

| Key | Sent to | When |
| --- | --- | --- |
| *digest* | Members who chose a digest | The [email digest](/email-digest/) of new listings. `[ADS]` is the list of listings. |

## Templates in each language

Every template exists once per language. When your site sends an email, it looks for the template in the language
being used at that moment (usually the language the member is browsing in). If there is none, it uses the British
English (`en_UK`) version.

- To translate a template, open the language in the list (see below) and edit its copy there.
- A template that exists in a language but is switched off is not sent in that language. It does not fall back to
  British English.
- You can delete a template in any language except British English. Emails in that language then use the British
  English version again.

### Templates on a US English site

Templates are stored in British English (`en_UK`). On a site set to US English (`en_US`), or any other language,
the **Email templates** list opens in your site's language and looks empty. Your emails are still sent, using the
British English templates.

To edit them in your site's language, click **Copy templates from en_UK** on the empty list (or **Copy templates to
en_US** in the **Email templates** card on the **Email** page). This copies every template you don't have yet in
that language. From then on, edit the copies: they are the ones your site uses.

### Add a template

**+ New template** is for adding a template the list doesn't have, for example a translation in a new language or
a template an older site is missing. The **Key** must match exactly the key of the email it is for, such as
*auth-register*. A template with a key the site doesn't use is never sent.

## Tips

- Send yourself the emails: sign up with a second address, post a listing, reset your password. Read them on your
  phone.
- Keep the sentence that tells people why they got the email, and keep the button.
- If members say they don't get emails, the wording is rarely the cause. See
  [Emails aren't arriving](/troubleshooting-email-errors/) and [Make sure your emails arrive](/emails-go-to-spam/).

## Related guides

- [Email settings](/general-email-configuration/) — sending service, sender name and notification addresses.
- [Newsletters](/how-to-send-the-newsletter/) — one-off emails to your members.
- [Email digest](/email-digest/) — a regular email with new listings.
- [Emails aren't arriving](/troubleshooting-email-errors/) — what to check when emails go missing.
{: .cards}
