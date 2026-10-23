---
title: Email templates
description: Every automatic email your marketplace sends, how to reword it, the placeholders you can use, and how templates work in each language.
section: content
order: 60
permalink: /automatic-emails-sent-to-users/
keywords: email, emails, email templates, transactional email, automatic email, notification, welcome email, password reset, placeholders, en_US, en_UK, translate emails, from email, reply-to, alert confirmation, alert-confirm, fixed text emails, email preferences, email notifications, unsubscribe, opt out, choose emails, stop emails, price drop email, question email, cart reminder
updated: 2026-10-22
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
| **From email** | The address replies go to when a member answers the email. Empty means your **Sender email** from [Email settings](/general-email-configuration/). |
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
| *auth-verify-email* | The new member | They sign up while **Verify email addresses** is on. The `[URL.QL]` button confirms the address. |
| *auth-remember* | The member | They ask to reset their password. |
| *password-changed* | The member | An administrator changes their password. Includes the new one, `[USER.PWD]`. |
| *auth-magiclink* | The member | They ask for an [email sign-in link](/registration-and-login/#email-sign-in-links). `[URL.MAGICLINK]` signs them in. |
| *trust-verification-approved* | The seller | You approve their [verification request](/review-system-works/#verification-requests). |
| *trust-verification-rejected* | The seller | You reject their verification request, with your reason in `[REASON]`. |

### Listings

| Key | Sent to | When |
| --- | --- | --- |
| *ads-confirm* | The poster | Their listing needs confirming by email (moderation set to an email-confirmation mode). |
| *ads-notify* | The poster | Their listing was received and waits for your review. |
| *ads-activated* | The poster (`[USER.OWNER]`) | You approve their listing and it goes live. |
| *ads-user-check* | The poster | Their listing goes live without moderation (straight away, or after they confirm it by email). It asks them to tell you, through `[URL.CONTACT]`, if they didn't post it. |
| *ad-to-expire* | The poster | Their listing expires soon. |
| *ad-expired* | The poster | Their listing has expired. `[URL.EDITAD]` opens the listing for editing. |
| *ads-subscribers* | Members with a matching alert | A new listing matches their [listing alert](/notification-system/). |
| *ads-to-admin* | Administrators and moderators | A new listing is posted, if **New listing alerts** is on in **Email** settings. |
| *awaiting-moderation* | Your **Moderation email** | A listing waits for your approval, if that address is filled in. |
| *ad-review* | The seller | Someone reviews their listing: `[RATE]`, `[DESCRIPTION]`. See [Reviews](/review-system-works/). |
| *ad-price-drop* | Members who saved the listing | The seller lowered the price of a listing they saved as a favourite (subject *Price dropped on [AD.TITLE]*), with **Price drop emails** on. `[PRICE.WAS]`, `[PRICE.NOW]`. See [Price drop emails](/vehicles-pack/#price-drop-emails). Older sites get the template the first time it's needed. |

Listing templates use `[AD.NAME]` or `[AD.TITLE]` for the title (both are the listing title; keep whichever the
template already uses) and `[URL.AD]` for its address.

With [Paid renewal](/make-money/#paid-renewal) on, *ad-to-expire* and *ad-expired* also receive `[URL.RENEW]` (the
renewal link), `[RENEW.DAYS]` and `[RENEW.PRICE]`. The renewal offer is added at the end of these emails, unless the
template already contains `[URL.RENEW]`.

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
| *new-order* | The member who ordered | Two days after an order about a listing was left unpaid, as a reminder. `[URL.CHECKOUT]` opens the payment page. |
| *ads-purchased* | The buyer | They bought an item. Includes `[ORDER.ID]`, `[ORDER.AMOUNT]` and the seller's `[BUYER.INSTRUCTIONS]`, which also holds the **Download** link of a [digital download](/sell-digital-goods/). |
| *ads-sold* | The seller | Their item was sold. |
| *out-of-stock* | The seller | An item ran out of stock and is hidden. |
| *order-shipped* | The buyer | The seller marked the order as shipped: `[ORDER.SHIPPING_PROVIDER_NAME]`, `[ORDER.SHIPPING_TRACKING_CODE]`. |
| *mark-as-received* | The buyer | A reminder to confirm the order arrived. |
| *order-cancelled* | The buyer | An order was cancelled. |
| *safe-payment-requested* | The seller | A buyer wants to pay with safe payment and the seller must set up how they get paid. |
| *plan-expired* | The member | Their [membership plan](/membership-plans/) ended and needs paying again. `[PLAN.NAME]`. |

### Auctions, bookings and saved searches

These come with the features themselves. See [Auctions](/auctions/), [Bookings](/bookings/),
[Paid bookings](/paid-bookings/) and [Saved searches](/saved-searches/) for when each one is sent.

| Key | Sent to | When |
| --- | --- | --- |
| *auction-outbid* | The previous highest bidder | Someone bids higher. |
| *auction-won* | The winner | They win an auction, with a link to pay. |
| *auction-won-seller* | The seller | Their auction ends with a winner. |
| *auction-reserve-not-met* | The highest bidder | The auction ends below the reserve price. |
| *auction-ended-seller* | The seller | Their auction ends below the reserve price. |
| *booking-request* | The seller | A buyer asks to book their listing. |
| *booking-request-sent* | The buyer | Confirms their booking request was sent. |
| *booking-accepted* | The buyer | The seller accepts the booking. |
| *booking-declined* | The buyer | The seller declines the booking. |
| *booking-cancelled* | The other side of the booking | The buyer or seller cancels a booking. |
| *booking-update* | The member who acted | Confirms they accepted, declined or cancelled a booking. |
| *booking-paid-request* | The seller | A paid booking request arrives, once the buyer's card is held. |
| *booking-paid-request-sent* | The buyer | Confirms the request and that their card is held. |
| *booking-paid-accepted* | The buyer | The seller accepts a paid booking and the card is charged. |
| *booking-expired* | Buyer and seller | A paid request expired without an answer. |
| *booking-refund* | The buyer | Money refunded after a cancellation. |
| *booking-reminder* | Buyer and seller | About a day before a paid booking starts. |
| *booking-payout* | The seller | Their payout for a booking was sent. |
| *saved-search-alert* | Members with a saved search | A new listing matches their search (instant alerts). |
| *saved-search-digest* | Members with a saved search | Once a day, with all the new matches. |
| *alert-confirm* | Someone who signed up for alerts | They used the Subscribe widget without being signed in to that address. The `[URL.CONFIRM]` button opens the page where they confirm; `[ALERT.EXPIRES]` is how long the link works. If this template is missing or switched off, a built-in text is sent instead. |

### Business directory

Sent on a site run as a [business directory](/directory-mode/).

| Key | Sent to | When |
| --- | --- | --- |
| *directory-claim-code* | The claimant, at the business address | With the code to confirm a claim. |
| *directory-claim-received* | The listing's owner | Someone claimed their listing. |
| *directory-claim-approved* | The claimant | Their claim was approved. |
| *directory-claim-transferred* | The previous owner | The listing changed hands. |
| *directory-new-lead* | The business | A quote request, with the visitor's contact details (free, or once paid for). |
| *directory-new-lead-paid* | The business | A request it must pay for, with a link to pay. |

### Webhooks

| Key | Sent to | When |
| --- | --- | --- |
| *webhook-disabled* | Your **Sender email** | A [webhook](/webhooks/) failed 50 times in a row and was paused. |

### Digest

| Key | Sent to | When |
| --- | --- | --- |
| *digest* | Members who chose a digest | The [email digest](/email-digest/) of new listings. `[ADS]` is the list of listings. |

### Optional templates

These emails are sent with a built-in text until a template exists. *checkout-reminder* and *promotion-refunded*
appear in the list once the first one has been sent; for *ad-featured-ended* and *ad-boost*, add the template
yourself with **+ New template** (see [Add a template](#add-a-template)) to use your own wording.

| Key | Sent to | When |
| --- | --- | --- |
| *ad-featured-ended* | The seller | Their [featured period](/how-to-create-featured-plan/) has ended and the listing is still live. `[AD.TITLE]`, `[URL.FEATURE]`. |
| *ad-boost* | The seller | Five days after posting, with how many people saw their listing and a link to [boost](/boosts/) it. |
| *checkout-reminder* | The seller | They started paying for a promotion or posting fee and didn't finish. See [Unpaid checkout reminders](/make-money/#unpaid-checkout-reminders). |
| *promotion-refunded* | The seller | A promotion they bought was refunded because the listing never went live. See [Automatic refunds](/boosts/#automatic-refunds). |

### Emails with a fixed text

A few emails have no template, so their wording can't be changed. They are sent with your site's name as the
sender:

| Email | Sent to | When |
| --- | --- | --- |
| New business account to approve | Your **Sender email** | A member chooses the business type and waits for your approval, while you [ask the account type at sign-up](/account-types/). |
| Business account approved, or not approved | The member | You approve or reject their business account, in the same set-up. |
| Plan renewal reminder | The member | A few days before their [membership plan](/membership-plans/#retry-declined-cards) renews from their saved card, with **Retry failed renewals** on. |
| We couldn't renew your plan | The member | Their card was declined at renewal and will be tried again, with **Retry failed renewals** on. |
| Dispute emails | The buyer, the seller and your administrators | A buyer reports a problem with an order, and when the dispute is decided or closed. See [Disputes](/disputes/). |
| Return emails | The buyer or the seller | Each step of a [return](/returns/): asked for, accepted or refused, sent back and refunded. |
| Please add your tax details | A seller | You click **Remind** on the [DAC7 seller report](/dac7-seller-report/). |
| You earned a reward for inviting a friend | The inviting member | A friend they invited earned them a [referral](/referrals/) reward. |
| Your listing needs changes | The seller | You [send a listing back with a reason](/how-ads-moderation-works/#reject-with-a-reason). |
| A question about a listing, and its answer | The seller, then the member who asked | Someone asks a [question on a listing](/listing-questions/), and the seller answers it. |
| New listings from stores you follow | Followers of a store | New listings from the [stores they follow](/storefronts/#following-a-store). |
| Abandoned cart reminders (first and second) | The buyer | Items were left in the [shopping cart](/shopping-cart/#abandoned-cart-reminders). |
| Store team invitation | The person invited | A seller invites them to their [store team](/storefronts/#store-teams). |
| Security deposit claim and decision | The buyer, then the buyer and the seller | A seller claims from a [security deposit](/paid-bookings/#security-deposits), and you decide it. |
| A banner waiting for approval, and your banner | Your **Sender email**, then the advertiser | Someone [buys a banner](/how-to-add-banner/#sell-banners-to-advertisers), and you approve, reject or stop it. |

## Let members choose their emails

Members who get too many emails unsubscribe from all of them, or mark them as spam. With email preferences, they can
switch off only the kinds they don't want.

1. Go to **Settings › General**.
2. In **Notifications**, switch on **Email preferences for users**.
3. Click **Save changes**.
{: .steps}

Members then get an **Email notifications** page in their account (in the account menu of the Nova and default
themes; in other themes it is at `/oc-panel/emailprefs`), where they tick the kinds they want:

| Kind | Covers |
| --- | --- |
| **Messages** | Someone writes to them about a listing or their profile, or answers them. |
| **Offers and quotes** | Offers, counter-offers and quotes on listings, and being outbid. |
| **Reviews** | Reminders to review a purchase or booking, and reviews they get. |
| **Saved searches** | New listings matching their saved searches. |
| **Listing reminders** | Their listings are about to expire or have expired. |
| **Stores you follow and questions** | New listings from stores they follow, and questions and answers on listings. |
| **Cart reminders** | Things left in their cart. |
| **Price drops** | A listing they saved as a favourite got cheaper. |
| **Tips and news from the site** | Short emails with tips after they join or post, and news from your team. |
| **Monthly performance report** | Once a month, views, contacts and clicks on their listings. See [Listing performance](/listing-performance/). |

Every email of one of these kinds ends with a line saying why the member got it and a **Choose which emails you get**
link.

Some emails always go, whatever the member chooses: orders, payments and bookings, security and account emails, and
the contact form's messages. Emails to your own team always go too. The [newsletter](/how-to-send-the-newsletter/)
and the [email digest](/email-digest/) have their own unsubscribe.
{: .note}

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
