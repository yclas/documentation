---
title: Send members and orders to ActiveCampaign, Constant Contact and Zoho CRM
nav_title: ActiveCampaign, Constant Contact, Zoho
description: Add new members to your ActiveCampaign or Constant Contact lists with your tags, turn them into Zoho CRM leads, and record paid orders as won deals, from your own accounts.
section: integrations
order: 905
permalink: /crm-email-marketing/
keywords: activecampaign, active campaign, constant contact, zoho, zoho crm, crm, email marketing, mailing list, email list, list, tags, contacts, leads, deals, won deal, closed won, pipeline, deal stage, oauth, redirect uri, client id, client secret, api url, api key, data centre, data center, enterprise, business integrations, salesforce, klaviyo, subscribed to emails, subscriber
updated: 2026-11-02
plans: Enterprise (ask Yclas to switch it on)
---

<div class="summary" markdown="1">
- **ActiveCampaign:** new members become contacts, with your tags and the list you pick; paid orders can become won deals.
- **Constant Contact:** new members are added to the list you pick, with your tags.
- **Zoho CRM:** new members become Leads, paid orders become Deals at Closed Won.
- Only members who are **Subscribed to emails** are added to an email list.
- Part of Enterprise business integrations. Only admins can set them up, from your own account with each service.
</div>

If you already run your email marketing or your sales pipeline in ActiveCampaign, Constant Contact or Zoho CRM, your
marketplace can keep it up to date for you. Each new member arrives there as a contact or a lead, with the tags you
choose, and paid orders can be recorded as won deals. Nobody has to export a spreadsheet and import it again.

You connect your own account with each service. Yclas stores the keys on your site, and the service's own plans and
costs apply.

## Before you start

These three integrations are part of **Business integrations**, an Enterprise feature, next to Salesforce, Klaviyo and
ShipStation. They appear only on sites where Yclas has switched Enterprise on:

1. Ask us through [Support](/use-yclas-support-system/) to switch Enterprise on for your site.
2. In your admin panel, open **Enterprise** in the menu, switch on **Business integrations** and click **Save**.
3. The integrations now have their own cards in **Add-ons**, under the **Enterprise** tab.
{: .steps}

They send through your site's [webhooks](/webhooks/), so your plan must include webhooks. If it doesn't, the page says
*This integration sends through your site's webhooks, which your plan doesn't include.* Ask Yclas support to switch
them on. If **Enable webhooks** is off on the Webhooks page, the integration page tells you that nothing is sent until
you switch it on.

Only administrators can open these pages.
{: .note}

## Which one does what

| | New members | Paid orders | Profile changes |
| --- | --- | --- | --- |
| **ActiveCampaign** | Added to or updated in your contacts (name, email, phone), with your tags. Members who are subscribed to emails are also added to the list you pick. | A won deal with the order's amount, in the deal stage you pick. Nothing if you don't pick a stage. | The contact is updated. Their lists and tags are left as they are. |
| **Constant Contact** | Members who are subscribed to emails are added to the list you pick (or updated, by email), with your tags. Other members aren't sent. | Not sent. | Not sent. |
| **Zoho CRM** | A new Lead (name, email, phone), or the Lead with the same email is updated, with your tags. | A Deal at **Closed Won**, with its amount, buyer and seller. | Not sent. |

### Who goes on an email list

Members choose whether they get your emails with **Subscribed to emails** in their profile, and the **Unsubscribe**
link in your emails switches it off (see [Newsletters](/how-to-send-the-newsletter/)). Only members with it on are added
to an ActiveCampaign list or to Constant Contact. In ActiveCampaign, the others still become contacts, but without a
list. Zoho CRM is a sales tool, not an email list, so every new member becomes a Lead.

Members are subscribed to emails when they create an account. Before you send them marketing emails from another
service, check that your sign-up terms and [privacy policy](/cookie-consent/) say so, as the law in your members'
countries requires.
{: .important}

## Connect ActiveCampaign

1. In ActiveCampaign, open **Settings › Developer** and copy your **API URL** (it looks like
   `https://youraccount.api-us1.com`) and your **API key**.
2. In your admin panel, go to **Add-ons**, open the **Enterprise** tab and click **ActiveCampaign**.
3. Paste them into **API URL** and **API key**.
4. Optionally, in **Tags**, type the tags to add to new members, separated by commas, for example `member, website`.
   Tags that don't exist yet are created.
5. Click **Connect ActiveCampaign**. Your details are checked with ActiveCampaign before they're saved.
6. Once connected, the page loads your lists and deal stages. Pick a **List** to subscribe new members to, and a
   **Deal stage for paid orders** if you want deals. Leave either on **None** to skip it.
7. Click **Save and check**.
{: .steps}

Deals are owned by the ActiveCampaign user the API key belongs to.

## Connect Constant Contact

Constant Contact connects through an application you create in its developer portal. You then allow access once.

1. In your admin panel, go to **Add-ons**, open the **Enterprise** tab and click **Constant Contact**. Copy the
   **Redirect URI** shown on the page.
2. In the Constant Contact developer portal, create an application that uses the Authorization Code flow with
   refresh tokens, and add the redirect URI to it. Copy its **API key (client ID)** and generate a **Client secret**.
3. Back on the page, paste them into **API key (client ID)** and **Client secret**. Optionally, add **Tags** for new
   members, separated by commas. Missing tags are created.
4. Click **Connect Constant Contact**. Constant Contact asks you to sign in and allow access, then sends you back.
   **Access** now says *Allowed*.
5. Pick the **List** new members go to, and click **Save and check**.
{: .steps}

Constant Contact needs a list. Until you pick one, sign-ups aren't added, and the delivery log says *Pick a list on the
Constant Contact page*.
{: .warning}

## Connect Zoho CRM

Zoho CRM also connects through a client you register with Zoho, in the data centre where your Zoho account is.

1. In your admin panel, go to **Add-ons**, open the **Enterprise** tab and click **Zoho CRM**. Copy the
   **Redirect URI**.
2. Choose your **Data centre**: the end of the address you sign in to Zoho at. For example, `crm.zoho.eu` is
   **Europe (zoho.eu)**.
3. In the Zoho API Console of that data centre, add a **Server-based Application** with the redirect URI, and copy
   its **Client ID** and **Client secret**.
4. Paste them into the page. Optionally, add **Tags** for new Leads, separated by commas.
5. Click **Connect Zoho CRM**, sign in to Zoho and allow access. You come back with **Access** set to *Allowed*.
{: .steps}

## Settings

| Setting | What it does |
| --- | --- |
| **API URL** and **API key** | *ActiveCampaign.* From **Settings › Developer** in ActiveCampaign. |
| **API key (client ID)** and **Client secret** | *Constant Contact.* From your application in its developer portal. |
| **Data centre**, **Client ID** and **Client secret** | *Zoho CRM.* Your Zoho region and the client from its API Console. |
| **Redirect URI** | *Constant Contact and Zoho CRM.* The address to add to your app at the service. Copy it exactly. |
| **Access** | *Constant Contact and Zoho CRM.* Whether you've allowed access at the service. |
| **List** | The list new members are subscribed to (ActiveCampaign, optional) or added to (Constant Contact, required). Only members subscribed to emails. |
| **Tags** | Added to new members or Leads, separated by commas. |
| **Deal stage for paid orders** | *ActiveCampaign.* The pipeline stage of the won deal for each paid order. Empty: no deals. |

Saved secrets are never shown again: the field shows *Saved* with only their last 4 characters. Leave a secret empty to keep
it. For Constant Contact and Zoho CRM, changing the app's details sends you back to the service to allow access again.

## Check it works

Once connected, a **Connected to …** table shows what the integration sends and whether it is **Active**:

- **Check the connection** sends a test call to the service.
- **Delivery log** lists every call, with the service's answer.

Each call is queued and sent within a minute or two. If the service doesn't answer, it is tried again for about 7
hours. Sign up a test member, then look for them in your account at the service, with their tags and list.

## Disconnect

Click **Disconnect** and confirm. Nothing more is sent, access is withdrawn at the service where it allows it, and the
saved details are removed from your site. What was already sent stays in your account at the service.

## Good to know

- Only new events are sent. Members who signed up before you connected, and members or listings brought in by an
  [import](/how-to-import-users/), aren't sent.
- An existing contact or Lead with the same email is updated, not duplicated.
- If the lists or deal stages don't load, the page says *The choices couldn't be read*, with the reason. Reload the
  page to try again.
- If a saved list or stage no longer exists at the service, it shows with *(?)* after it. Pick another one.
- For anything these integrations don't send, use [webhooks](/webhooks/) with Zapier, Make or Pabbly Connect.

## Related guides

- [Webhooks](/webhooks/) — the delivery log, and other apps through Zapier, Make and Pabbly Connect.
- [Newsletters](/how-to-send-the-newsletter/) — email members from your own site, and who is subscribed.
- [Export users](/how-to-export-users/) — download your members as a CSV file.
- [Integrations](/integrations-overview/) — every service you can connect.
{: .cards}
