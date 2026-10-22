---
title: Messaging between members
description: Let buyers and sellers talk through private messages on your site instead of email, share photos and PDFs, see what needs an answer, and add WhatsApp, Skype or Telegram buttons.
section: content
order: 50
permalink: /how-to-use-messaging-system/
redirect_from:
  - /chat-seller/
  - /add-chat-room-classifieds-website/
keywords: messages, messaging, inbox, chat, contact seller, contact button, message button, send message, no contact between users, can't contact seller, members can't message, conversation, reply, spam, archive, custom order, offer, whatsapp, skype, telegram, attachments, attach file, attach photo, send photo, send pdf, file in message, sort inbox, unread first, needs your action, to do, read receipts, seen, read receipt, message read
updated: 2026-10-22
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

1. In the admin panel, go to **Add-ons** and open **Messaging**.
2. Switch on **Enable messaging**.
3. Choose the options below.
4. Click **Save changes** in the bar at the bottom.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Enable messaging** | Turns the inbox on. Buyers must sign in to contact a seller. |
| **Custom orders** | Sellers can send a buyer an order at an agreed price from the conversation (see [Custom orders](#custom-orders-agree-a-price-then-pay)). |
| **Read receipts** | Shows *Seen* under the last message a member sent, once the other person has opened the conversation (see [Read receipts](#read-receipts)). On for new sites, off on older ones until you switch it on. |
| **Attachments** | Members can attach up to 5 photos or PDFs to a message (see [Photos and PDFs](#photos-and-pdfs-in-messages)). On for new sites, off on older ones until you switch it on. |
| **Request a quote** | Buyers can ask a seller for a price, and pay the quote online. See [Request a quote](/request-a-quote/). |

Read receipts, attachments, the inbox's sort and its **Needs your action** box work in the **Nova** and **default**
themes. Mercury and other themes with their own inbox pages don't show them yet.

Buyers can also offer their own price inside a conversation: see [Make an offer](/make-an-offer/).
{: .tip}

## What changes when messaging is on

| | Email contact form | Messaging |
| --- | --- | --- |
| Who can contact a seller | Anyone, unless you switch on **Require Login to Contact** in **Listings › Settings** | Signed-in members only. Visitors who click **Send Message** are asked to sign in first. |
| Where replies happen | In each member's own mailbox | In **Messages**, inside each member's account |
| Email addresses | The seller sees the buyer's email address | Stay private on both sides |
| Attachments | Buyers can attach a file if **Upload file** is on in **Listings › Settings** | Up to 5 photos or PDFs per reply in the conversation, if **Attachments** is on (the **Upload file** option is hidden) |
| Price offers | No | Buyers can add a price to their message if **Price on Contact Form** is on in **Listings › Settings** |
| Contact from a member's profile | Sent by email | Starts a direct conversation |

## Members can't contact a seller

If buyers say there's no way to reach a seller, or sellers never hear from buyers, check these in order:

| What you notice | Check |
| --- | --- |
| No **Send Message** button on any listing | Switch on **Contact Form** in **Listings › Settings › Listing details** and click **Save changes**. See [Listing page and form fields](/how-to-manage-advertisement-fields/). |
| No button on one listing | The button only shows on published listings. A listing that is waiting for approval, unpaid or expired has none. |
| Visitors click the button and are asked to sign in | That's expected with messaging on, or with **Require Login to Contact** switched on. Visitors need an account to send a message. |
| Buyers send messages, sellers never get them | With the email form, the message goes to the seller's email address: see [Emails aren't arriving](/troubleshooting-email-errors/). With messaging, it's in the seller's **Messages** inbox, with a notification email. |
| You'd rather members talk by phone or WhatsApp | Switch on the **Phone** field, or the WhatsApp, Skype and Telegram buttons (below). |

After changing a setting, open a listing in a private window to see what visitors see.
{: .tip}

## How members use their inbox

Members open **Messages** from their account menu. The inbox has four views, and a **Sort** menu to show
conversations by **Latest message** (the default), **Unread first** or **Oldest first**:

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
- **Report** — sends the conversation to you, the site admin (see
  [Reported conversations](/admin-support-tools/#reported-conversations)).

Archive, Spam and Delete only affect the member's own inbox, not the other person's.

When a buyer contacts the seller about the same listing again, the message joins their existing conversation
instead of starting a new one. If the seller has archived or deleted that conversation, a new one starts. If the
seller marked it as spam or deleted it, new messages from that buyer arrive in it silently, without an email.

### Needs your action

At the top of the inbox, a **Needs your action** box lists what is waiting on the member, apart from unread
messages, newest first (up to 20). Each line links to the place where they act on it:

- an [offer](/make-an-offer/) to answer;
- a [quote](/request-a-quote/) to send, answer or pay;
- a [return](/returns/) to answer or refund (sellers), or to send back (buyers);
- a [booking request](/bookings/) to accept or decline (sellers);
- a sale to ship, when you
  [hold payments until delivery](/stripe/#hold-the-money-until-the-buyer-has-the-item-stripe-escrow).

Each kind only shows while its feature is on. In the Nova theme, the number on the messages icon at the top of every
page counts unread messages plus these things to do.

### Photos and PDFs in messages

With **Attachments** on, members can pick files under the reply box in a conversation (**Attach files**). They can
add up to 5 files to a reply: photos (JPG or PNG) or PDFs, up to 10 MB each. Photos show in the conversation as
thumbnails that open full size, and PDFs as a download link with the file name.

Files are checked when they're uploaded. A file that is too big, or isn't really a photo or a PDF, is left out: the
reply is sent without it and the member sees why. A reply always needs some text as well. Files can only be added to
replies inside a conversation, not to the first message sent from a listing.

Anyone who has a file's link can open it, as with listing photos. Tell members not to send passports, ID cards or
other private documents through messages.
{: .warning}

### Read receipts

With **Read receipts** on, a member sees *Seen* and how long ago under the last message they sent, once the other
person has opened the conversation. It's a site-wide setting: members can't switch it off for themselves.

### Notification emails

Each new message sends one of these [email templates](/automatic-emails-sent-to-users/), which you can reword:

| Template key | Sent when |
| --- | --- |
| *messaging-ad-contact* | A buyer starts a conversation about a listing. |
| *messaging-user-contact* | Someone sends a direct message from a member's profile. |
| *messaging-reply* | Someone replies in an existing conversation. |

The email contains the message and a **Read and reply** button that signs the member in and opens the conversation.

## Custom orders: agree a price, then pay

With **Custom orders** on, the seller of a listing sees **Create custom order** in the conversation. They enter
a description and an amount, and the buyer receives it as a message with a **Pay order** link. The buyer pays
through your site's payment gateway at the agreed price.

This suits negotiated sales: a buyer offers less, the seller accepts, and the custom order turns the agreement into
a payment. You need payments set up first: see [Take payments on your marketplace](/setup-payment-gateways/) and
[Let members sell with Buy Now](/pay-directly-from-ad/). Custom orders work in the Nova and default themes and some
older themes; Mercury and other themes based on Atlantic don't offer **Create custom order**.

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
themes may show only some of them). These chats happen outside your site, so you can't see or moderate them.

For public discussion rather than private messages, use the [forum](/add-forums-section/).
{: .tip}

## Related guides

- [Listing page and form fields](/how-to-manage-advertisement-fields/) — the contact form and price options.
- [Email templates](/automatic-emails-sent-to-users/) — reword the message notifications.
- [Let members sell with Buy Now](/pay-directly-from-ad/) — payments between buyers and sellers, and custom orders.
- [Make an offer](/make-an-offer/) — buyers offer their own price in the conversation.
- [Fight spam](/how-to-avoid-spam-in-my-site/) — every tool against spam.
- [Admin support tools](/admin-support-tools/#reported-conversations) — handle conversations members report.
- [Questions and answers on listings](/listing-questions/) — public questions on the listing page, answered once for every buyer.
{: .cards}
