---
title: Messaging between members
description: Let buyers and sellers talk through private messages on your site instead of email, offer prices, and add WhatsApp, Skype or Telegram buttons.
section: content
order: 50
permalink: /how-to-use-messaging-system/
redirect_from:
  - /chat-seller/
  - /add-chat-room-classifieds-website/
keywords: messages, messaging, inbox, chat, contact seller, conversation, reply, spam, archive, custom order, offer, whatsapp, skype, telegram
updated: 2026-10-07
---

Members can reach a seller in two ways, and you choose which one your site uses:

- **By email (the default).** The **Send Message** button on a listing opens a contact form. Your site emails the
  message to the seller, and the seller replies from their own mailbox, straight to the buyer's email address.
- **Through messaging.** The same button starts a private conversation on your site. Both members read and answer
  it in their **Messages** inbox, and neither sees the other's email address. Your site emails them a short
  notification for each new message, with a link back to the conversation.

Messaging keeps the conversation on your marketplace, protects members' email addresses and lets you add price
offers. The email form works for visitors who don't have an account.

## Switch messaging on

1. In the admin panel, go to **Addons** and open **Messaging**.
2. If you want sellers to send payment requests from a conversation, tick **Custom orders** first (see below).
3. Click **Enable**.
{: .steps}

**Enable**, **Disable** and **Save** on this page all save the on/off switch and **Custom orders** together. After
you change **Custom orders** on a site where messaging is already on, check that the page still offers **Disable**
(which means messaging is on); if it offers **Enable**, click it.
{: .warning}

## What changes when messaging is on

| | Email contact form | Messaging |
| --- | --- | --- |
| Who can contact a seller | Anyone, unless you switch on **Require Login to Contact** in **Listings › Settings** | Signed-in members only. Visitors who click **Send Message** are asked to sign in first. |
| Where replies happen | In each member's own mailbox | In **Messages**, inside each member's account |
| Email addresses | The seller sees the buyer's email address | Stay private on both sides |
| Attachments | Buyers can attach a file if **Upload file** is on in **Listings › Settings** | Not available (the **Upload file** option is hidden) |
| Price offers | No | Buyers can add a price to their message if **Price on Contact Form** is on in **Listings › Settings** |
| Contact from a member's profile | Sent by email | Starts a direct conversation |

The **Send Message** button only shows on published listings, and only while **Contact Form** is switched on in
**Listings › Settings** › **Listing details**. See [Listing page and form fields](/how-to-manage-advertisement-fields/).

## How members use their inbox

Members open **Messages** from their account menu. The inbox has four views:

| View | What it holds |
| --- | --- |
| **All** | Every active conversation. |
| **Unread** | Conversations with messages they haven't read yet. |
| **Archive** | Conversations they have archived. |
| **Spam** | Conversations they marked as spam. |

Inside a conversation, the member writes in the box at the bottom and clicks **Reply**. The **Actions** menu has:

- **Archive** — moves the conversation to **Archive**.
- **Spam** — moves it to **Spam**.
- **Delete** — removes it from the member's inbox.

These actions only affect the member's own inbox, not the other person's.

When a buyer contacts the seller about the same listing again, the message joins their existing conversation
instead of starting a new one. If the seller has archived or deleted that conversation, a new one starts. If the
seller marked it as spam or deleted it, new messages from that buyer arrive in it silently, without an email.

### Notification emails

Each new message sends one of these [email templates](/automatic-emails-sent-to-users/), which you can reword:

| Template key | Sent when |
| --- | --- |
| *messaging-ad-contact* | A buyer starts a conversation about a listing. |
| *messaging-user-contact* | Someone sends a direct message from a member's profile. |
| *messaging-reply* | Someone replies in an existing conversation. |

The email contains the message and a **Read and reply** button that signs the member in and opens the conversation.

## Custom orders: agree a price, then pay

With **Custom orders** ticked, the seller of a listing sees **Create custom order** in the conversation. They enter
a description and an amount, and the buyer receives it as a message with a **Pay order** link. The buyer pays
through your site's payment gateway at the agreed price.

This suits negotiated sales: a buyer offers less, the seller accepts, and the custom order turns the agreement into
a payment. You need payments set up first: see [Take payments on your site](/setup-payment-gateways/) and
[Let members sell with checkout](/pay-directly-from-ad/).

## Spam protection

Messages to sellers go through the same checks as your other forms: [captcha](/set-recaptcha-website/), Akismet
and, when it is on, the [blacklist](/activate-blacklist-works/), which stops members marked as spammers from sending
anything. On top of that, one visitor can contact at most 20 listings every ten minutes, and sending the same
message about the same listing twice within ten minutes only delivers it once.

## WhatsApp, Skype and Telegram buttons

You can also show buttons that open a chat with the seller in WhatsApp, Skype or Telegram. They work with or without
messaging. Each is a [user custom field](/users-custom-fields/) with a reserved name:

1. Go to **Settings › User Custom Fields** and click **New field**.
2. Enter the **Name** `whatsapp`, `skype` or `telegram` (exactly that, in lower case) and a label members will
   understand, such as *WhatsApp number*.
3. Switch on **Show on sign-up** if new members should fill it in when they register, and save.
{: .steps}

Members enter their WhatsApp number (with country code), Skype name or Telegram username in their profile. In the
Nova theme, the seller box on their listings then shows a **WhatsApp**, **Skype** or **Telegram** button (other
themes may show only some of them). Contact through these apps
happens outside your site, so you can't see or moderate it.

The chat room widget from older versions of Yclas no longer exists. For public discussion, use the
[forum](/add-forums-section/).
{: .note}

## Related guides

- [Listing page and form fields](/how-to-manage-advertisement-fields/) — the contact form and price options.
- [Email templates](/automatic-emails-sent-to-users/) — reword the message notifications.
- [Let members sell with checkout](/pay-directly-from-ad/) — payments between buyers and sellers.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — every tool against spam.
{: .cards}
