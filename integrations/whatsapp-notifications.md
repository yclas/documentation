---
title: Send WhatsApp notifications to members
nav_title: WhatsApp notifications
description: Send members who opt in a short WhatsApp message about new messages, bookings, their listings, payments and saved searches, from your own WhatsApp Business account through Meta or Twilio.
section: integrations
order: 125
permalink: /whatsapp-notifications/
keywords: whatsapp, whatsapp notifications, whatsapp business, whatsapp cloud api, cloud api, meta, facebook, business manager, whatsapp manager, waba, phone number id, access token, permanent token, system user, app secret, webhook, verify token, callback url, stop, opt in, opt-in, opt out, consent, message templates, template approval, utility template, twilio, twilio whatsapp, content sid, content template, hello_world, send test, daily limit, sms, text message notifications
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- Members who turn it on in their profile get a short WhatsApp message next to some emails: new messages, bookings, listings approved or expiring, payments and saved search alerts.
- Messages go from your own WhatsApp Business account, through Meta's WhatsApp Cloud API or Twilio. Meta or Twilio bill you for them.
- Off by default. Set it up in **Add-ons › WhatsApp notifications**, and get a message template approved for each event you want to send.
- A daily limit and per-number limits keep your costs in check.
</div>

WhatsApp is where many people actually read their messages. With WhatsApp notifications, a member who opts in gets a
short WhatsApp message at the same moment as some of your site's emails, for example *"Hi Anna, Peter sent you a
message about Mountain bike on My Market. Read it and reply here: …"*. Sellers answer buyers faster, and buyers
don't miss a booking confirmation buried in their inbox.

The messages are sent from **your own** WhatsApp Business account, either directly through Meta's WhatsApp Cloud
API or through Twilio. You bring the account and the keys; Meta (and Twilio, if you use it) bill you for each message.
The feature is available on all plans and is off until you switch it on.

Emails are always sent as usual: the WhatsApp message comes on top, and nothing here can stop or delay an email.
{: .note}

## WhatsApp notifications or a WhatsApp chat button?

These are two different things:

| | What it does |
| --- | --- |
| **WhatsApp notifications** (this guide) | Your marketplace sends members automatic messages about their account: a new message, a booking, a listing about to expire. Members opt in with their number. |
| **WhatsApp contact buttons** | Visitors tap a button to start a WhatsApp chat with a seller, or with you. See the [WhatsApp, Skype and Telegram buttons](/how-to-use-messaging-system/#whatsapp-skype-and-telegram-buttons) on listings, or [Smartarget](/other-integrations/#smartarget) for a chat button on every page. Nothing is sent automatically. |

You can use both at the same time.

## What you need

- A **WhatsApp Business account** on Meta's WhatsApp Business Platform, with a phone number that isn't already used
  in the WhatsApp or WhatsApp Business app.
- A **payment method** on that account in Meta, or a Twilio account with a WhatsApp sender.
- One **message template** approved by Meta for each event you want to send (see
  [Message templates](#get-your-message-templates-approved)). WhatsApp doesn't let a business start a conversation
  with free text, only with a template it approved beforehand.

Choose one way to send:

| Send through | Choose it when |
| --- | --- |
| **Meta WhatsApp Cloud API** | You want to deal with Meta directly. No middleman fee. |
| **Twilio WhatsApp sender** | You already use Twilio, for example for [SMS sign-in](/2-step-sms-authentication/#with-twilio), and want one bill. Twilio adds its own fee per message. |

## Set up the Meta WhatsApp Cloud API

Do this in Meta first, then copy the values into your admin panel.

1. In [Meta Business Suite](https://business.facebook.com), create or open your business, then create a
   **WhatsApp Business account** and add your phone number. In **WhatsApp Manager › API Setup** (or **Phone
   numbers**), note the **Phone number ID** and the **WhatsApp Business Account ID**.
2. In [Meta for Developers](https://developers.facebook.com/apps), create an app of type **Business** and add the
   **WhatsApp** product, linked to that WhatsApp Business account.
3. In **Business settings › Users › System users**, create a system user, give it your app and your WhatsApp
   Business account, and generate a token that never expires with the **whatsapp_business_messaging** permission
   (add **whatsapp_business_management** too). Copy the token: Meta shows it once.
4. In your app, open **App settings › Basic** and copy the **App secret**.
5. In WhatsApp Manager, add a payment method to the WhatsApp Business account.
6. In your admin panel, go to **Add-ons**, open the **Notifications** tab and click **WhatsApp notifications**.
7. Under **Send through**, choose **Meta WhatsApp Cloud API**.
8. Fill in **Phone number ID**, **WhatsApp Business Account ID**, **Access token** (the system user's token) and
   **App secret**.
9. Click **Save**. You'll switch it on once a template is approved.
{: .steps}

Then set up the webhook (below). It's required.

Use a system user's permanent token, not the temporary token shown on the API Setup page: that one stops working
after 24 hours, and every message then fails.
{: .warning}

### Set up the webhook

The webhook is how Meta tells your site that a member replied **STOP**, or that a message couldn't be delivered.
Without it, STOP replies are ignored.

1. On the **WhatsApp notifications** page, under **Webhook**, copy the **Callback URL** and the **Verify token**.
2. In your Meta app, go to **WhatsApp › Configuration**, click **Edit** next to the webhook, paste both and click
   **Verify and save**.
3. Under **Webhook fields**, subscribe to **messages**.
4. Reload the WhatsApp notifications page.
{: .steps}

The page now says *Webhook verified* with the date of the last verified call. Until then it says *Webhook not
verified yet*, and members are only told they can turn notifications off in their profile: the opt-in text doesn't
mention STOP until the webhook works.

## Set up Twilio

1. In your Twilio account, register a **WhatsApp sender** (your business phone number, linked to a WhatsApp
   Business account through Twilio).
2. If you haven't already, go to **Add-ons**, open **Twilio** and enter your **Account SID** and **Auth Token**.
   WhatsApp notifications use the same ones.
3. Go to **Add-ons**, open the **Notifications** tab and click **WhatsApp notifications**.
4. Under **Send through**, choose **Twilio WhatsApp sender**.
5. Enter the **WhatsApp sender number** in international format, for example `+15551234567`.
6. Copy the **Callback URL** under **Webhook**, and in Twilio set it as the sender's webhook for incoming messages.
   Delivery reports are requested with every message, so there's nothing else to set.
7. Click **Save**.
{: .steps}

With Twilio, each template is a **Content template** that you create in Twilio and get approved for WhatsApp there.
You then enter its **Content SID** (it starts with `HX`) for the event. See below.

## Get your message templates approved

An event is only sent once it has an approved template. The page lists each event with a suggested template text,
the sample values to give Meta, and a **Suggested name** such as `new_message`.

For each event you want:

1. Open **WhatsApp Manager › Message templates** (the page links to it as **Your message templates in WhatsApp
   Manager** once the WhatsApp Business Account ID is saved) and click **Create template**.
2. Choose the category **Utility**.
3. Give it the suggested name, such as `new_message`, and choose the language, for example **English**.
4. Set the variable type to **Name**, paste the suggested text into the body, and add the sample values shown on
   the page.
5. Submit it. Meta usually decides within minutes, sometimes up to a day.
6. Back in your admin panel, enter the template's name under **Meta template name** and its language code under
   **Language** (`en` for English, `en_US` for English (US), `es` for Spanish…). Click **Save**.
{: .steps}

{% raw %}

With Twilio, create each one as a Content template for WhatsApp instead. Use the **Twilio** version of the text shown
under each event: the same text with numbered variables `{{1}}`, `{{2}}`… in the order listed. Get it approved for
WhatsApp in Twilio and paste its SID under **Twilio Content SID**.

The language code must match the language of the template in WhatsApp Manager exactly: a template made in
**English (US)** is `en_US`, not `en`. Otherwise Meta refuses every message for that event.
{: .tip}

Keep the text close to the suggestion. Templates that read like an advert can be moved to the **Marketing**
category by Meta, which costs more and is limited more strictly. If Meta rejects a template, its reason is shown in
WhatsApp Manager: edit and submit it again.

### Events and suggested texts

| Event | Sent when | Suggested text |
| --- | --- | --- |
| **New message** | Someone writes to the member about a listing or their profile, or answers them. | Hi {{name}}, {{sender}} sent you a message about {{listing}} on {{site}}. Read it and reply here: {{link}} |
| **New booking request** | A buyer asks to book one of the member's listings. | Hi {{name}}, {{sender}} would like to book {{listing}} for {{dates}}. Accept or decline the request here: {{link}} |
| **Booking confirmed** | The seller accepted the member's booking. | Hi {{name}}, your booking of {{listing}} for {{dates}} is confirmed. See the details here: {{link}} |
| **Booking declined or cancelled** | A booking request was declined, or a booking was cancelled by the other side. | Hi {{name}}, the booking of {{listing}} for {{dates}} was declined or cancelled. See the details here: {{link}} |
| **Listing approved** | A moderator approved the member's listing and it is now published. | Hi {{name}}, your listing {{listing}} on {{site}} is approved and published. See your listings here: {{link}} |
| **Listing about to expire** | One of the member's listings expires soon. | Hi {{name}}, your listing {{listing}} on {{site}} expires soon. Renew or edit it here: {{link}} |
| **Listing expired** | One of the member's listings has expired. | Hi {{name}}, your listing {{listing}} on {{site}} has expired. Renew it here: {{link}} |
| **Payment received** | The member paid for an order (sent to the buyer). | Hi {{name}}, we received your payment of {{amount}} for {{listing}} (order {{order}}). Details: {{link}} |
| **Item sold** | A buyer paid for one of the member's listings (sent to the seller). | Hi {{name}}, good news: {{listing}} has been paid for ({{amount}}, order {{order}}). Details: {{link}} |
| **Saved search alert** | New listings match one of the member's [saved searches](/saved-searches/). | Hi {{name}}, there are new listings on {{site}} for your saved search {{search}}. See them here: {{link}} |

{% endraw %}

Each message goes out with the matching email: the event's email template must exist and be sent, and a kind of email
the member switched off in their [email preferences](/automatic-emails-sent-to-users/#let-members-choose-their-emails)
isn't sent on WhatsApp either. The messages never contain what a member wrote, only who wrote and about what. Links
go to the right page of your site, where the member signs in as usual. Names and titles longer than 60 characters
are shortened.

### Other languages

1. In WhatsApp Manager, add a language to the same template (same name) and translate the text, keeping the
   variables as they are. Get it approved.
2. On the WhatsApp notifications page, list the codes under **Extra template languages**, separated by commas, for
   example `es, fr, pt_BR`.
3. Click **Save**.
{: .steps}

Each member then gets the template in the language of their profile when it is in that list, and in the event's
**Language** otherwise.

## Switch it on and send a test

1. On the WhatsApp notifications page, tick the box next to **Send notifications on WhatsApp**.
2. Check the **Daily limit** (see [Limits](#limits-that-keep-costs-down)).
3. Click **Save**.
4. Under **Send a test message**, enter **Your WhatsApp number** in international format, choose a **Template** and
   click **Send test**.
{: .steps}

On Meta, the template list includes **hello_world (Meta sample)**, which every new Meta number has, so you can test
your keys before your own templates are approved. The list otherwise shows the events you entered a template for.
*Test message sent to …* means Meta or Twilio accepted it; it can take a minute to arrive. Tests are not counted
against your limits.

Meta's free test number can only send to the few numbers you add as recipients in **API Setup**. Use your own
business number for real members.
{: .tip}

## How members turn it on

Members choose. Nothing is sent to anyone who hasn't opted in, which WhatsApp's policy requires.

- **Nova:** account menu › **WhatsApp notifications**, or **Edit profile › Notifications**.
- **Other themes:** **WhatsApp notifications** in the account menu, or the **WhatsApp notifications** panel on their
  profile page.

The member enters their **WhatsApp number** in international format (+, the country code, then the number), ticks
the box *I agree to get notifications from [your site] on WhatsApp at this number…* and clicks **Turn on WhatsApp
notifications**. If the phone number in their profile is already in international format, it is filled in for them.
The page lists the events they'll get a message for: only those you've entered a template for.

To stop, they click **Turn off WhatsApp notifications** on the same page, or, once your webhook is verified, reply
**STOP** to any message. Their number is kept, so turning it back on is one click. This number is separate from the
phone number on their profile and is never used to sign in.

The WhatsApp notifications page in your admin panel shows how many members have them on.

## Limits that keep costs down

| Limit | What it does |
| --- | --- |
| **Daily limit** | The most messages your site sends in a day, 500 unless you set another number (up to 100,000). The page shows how many went today. Once it's reached, the rest of that day's notifications are not sent, not even the next day, and **Last errors** says so. |
| Same message | The same notification about the same thing (for example, messages from the same member about the same listing) goes to a number at most once an hour. |
| Per number | A number gets at most 10 messages an hour, all events together. |

Messages are sent a moment after the page that triggered them, up to 25 at a time. Any left over are sent within a
few minutes as members visit your site. A message that couldn't go out within 6 hours, for example because the daily
limit was reached, is dropped and reported in **Last errors**.

## Costs

You pay Meta, not Yclas, for the messages. Meta charges for each template message it delivers (it used to charge for
each 24-hour conversation); the price depends on the member's country and the template's category, and **Utility**
templates are among the cheapest. With Twilio, you pay Twilio, which passes on Meta's price and adds its own fee per
message. Check [Meta's pricing](https://developers.facebook.com/docs/whatsapp/pricing) and Twilio's before you
switch it on, and set the **Daily limit** to what you are happy to spend.

A new WhatsApp Business account can only message a limited number of different people a day. Meta raises the limit as
you send messages people don't block or report, and when you verify your business.

## Last errors

The **Last errors** box shows the 15 latest problems, with numbers shortened to their last 4 digits. Click **Clear
errors** once you've fixed them.

| Error | What to do |
| --- | --- |
| *no template is set for …* | Enter a template name (Meta) or Content SID (Twilio) for that event. |
| *Meta #190 …* | The access token expired or was revoked. Generate a permanent system user token and paste it under **Access token**. |
| *Meta #132001 …* | No approved template with that name in that language. Check the **Meta template name** and the **Language** code. |
| *Meta #132000 …* | The template's variables don't match. Recreate it with the suggested text and variables of type **Name**. |
| *Meta #131030 …* | You're on Meta's test number and that member's number isn't in its allowed list. |
| *Twilio #…* | Twilio's own error, with its code. Look it up in Twilio's console under **Monitor › Logs**. |
| *… messages sent today, the limit set on this page …* | The **Daily limit** was reached. Raise it if you expect more. |
| *… messages waited more than 6 hours …* | Messages were held back by the daily limit, or your site had no visits to send them. |
| A *delivery* error | Meta or Twilio couldn't deliver a message, for example because the number has no WhatsApp. |

Messages on the page itself:

- *Enter your Meta app secret: without it the webhook is refused and replying STOP would not stop the
  notifications.* You can't switch Meta on without the **App secret**.
- *Set your Twilio Account SID and Auth Token on the Twilio integration page first.* Go to **Add-ons › Twilio**.
- *A Twilio Content SID starts with HX followed by 32 characters.* Copy the SID of the Content template, not of the
  sender or the account.

## Good to know

- **Numbers are not verified.** A member types a number and ticks the box; there's no confirmation code. Someone
  could type a wrong number, or someone else's. The hourly limits above and the daily limit cap what that number can
  get, and its owner can reply **STOP** once your webhook is verified.
- A failed message isn't retried.
- Copies of emails sent to you or your team aren't sent on WhatsApp: only members get messages.
- The message is short on purpose. Members read the details, and reply, on your site.
- Switching the feature off stops all messages at once. Members' choices are kept for when you switch it on again.

## Related guides

- [Push notifications](/push-notifications/) — free browser and phone notifications for the same moments.
- [Email templates](/automatic-emails-sent-to-users/) — the emails these messages go out with.
- [Bookings and rentals](/bookings/) — the booking events.
- [Two-step login by SMS](/2-step-sms-authentication/) — where your Twilio keys are set.
{: .cards}
