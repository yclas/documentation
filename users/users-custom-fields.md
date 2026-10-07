---
title: User custom fields
description: Ask members for extra details such as company, age or a WhatsApp number when they sign up, and show them on their profile.
section: users
order: 30
permalink: /users-custom-fields/
keywords: user fields, custom fields, profile fields, registration form, sign-up form, extra information, company, whatsapp, language, required field
updated: 2026-10-07
---

User custom fields add your own questions to members' accounts. Use them to collect what your marketplace needs to
know about people, such as a company name, a licence number or whether someone is a private seller or a business,
and decide whether each answer is asked at sign-up, shown on the member's public profile, or kept for your eyes only.

They're separate from [listing custom fields](/how-to-create-custom-fields/), which describe the items people post.

## Create a field

1. Go to **Users** and click **User fields** (it's also under **Settings › User Custom Fields** in the sidebar).
2. Click **New field**.
3. Fill in the form (see the table below) and click **Create field**.
{: .steps}

The field appears straight away on members' **Edit profile** page, and on the sign-up form if you switched on
**Show on sign-up**.

## Field settings

| Setting | What it does |
| --- | --- |
| **Name** | The internal name, using lowercase letters, numbers and dashes, at least three characters. It can't be changed later, and some names switch on special behaviour (see below). |
| **Type** | What kind of answer the field takes (see the next table). It can't be changed later either. |
| **Label** | The question members see, for example "Company". |
| **Tooltip** | An optional hint shown next to the field. |
| **Values** | For **Select** and **Radio** only: the choices, separated by commas, for example `Private, Business`. |
| **Show on sign-up** | Asks for the field on the registration form. |
| **Show on profile** | Shows the answer on the member's public profile page. |
| **Required** | Members must fill it in to register. |
| **Searchable** | Adds the field as a filter on the public [members directory](/member-profiles/#the-members-directory). |
| **Admin Privileged** | Hides the field from members: only administrators can see and edit it, on the member's page in **Users**. Use it for internal notes or checks. |

### Field types

| Type | Members enter |
| --- | --- |
| **Text 256 Chars** | A short line of text. |
| **Text Long** | Several lines of text. |
| **Number** / **Number Decimal** | A whole number, or a number with decimals. |
| **Date** | A date, picked from a calendar. |
| **Select** / **Radio** | One choice from your list of values, as a drop-down or as buttons. |
| **Email** | An email address. |
| **Country** | A country, from a ready-made list. |
| **Checkbox** | Yes or no. |
| **Language** | One of your site's languages. |

## Edit, reorder or delete fields

- To change a field's label, tooltip, values or switches, click it in the list, make your changes and click
  **Save changes**.
- To change the order fields appear in, drag them by the handle on the left. The order is saved automatically.
- To delete a field, open it and click **Delete field** on the right.

Deleting a field also deletes every answer members gave in it. This can't be undone.
{: .warning}

## Field names with special behaviour

A few names make Yclas do more than store the answer. Create the field with exactly this **Name**:

| Name | Suggested type | What it does |
| --- | --- | --- |
| `verifiedbadge` | **Checkbox** | Shows a "verified" tick next to the member's name. Members can't tick it themselves. See [Verified members](/verified-user/). |
| `whatsapp` | **Text 256 Chars** | Asks for a WhatsApp number (with country code) and shows a WhatsApp button on the member's profile. |
| `skype`, `telegram` | **Text 256 Chars** | Show Skype and Telegram buttons on the member's profile. See [Messaging between members](/how-to-use-messaging-system/). |
| `language` | **Language** | Emails your site sends to this member use the language they chose, on [multilingual sites](/how-to-activate-multilingual-mode/). |
| `paypalaccount` | **Email** | The PayPal address buyers pay this seller at. See [PayPal](/paypal/). |
| `bitcoinaddress` | **Text 256 Chars** | A Bitcoin address shown on the seller's listings. See [Special-purpose fields](/special-custom-fields/). |
| `vatnumber`, `vatcountry` | **Text 256 Chars**, **Country** | The member's VAT number and country, checked against the EU VIES service. See [VAT and taxes](/eu-vat/). |

## Tips

- Keep the sign-up form short. Every extra required field loses you some sign-ups; ask for the rest later on the
  profile page.
- Labels and tooltips are shown exactly as you type them. On a multilingual site, write them in your main language
  and add translations in [Language and translations](/how-to-change-language/).
- Answers to fields that are neither shown on sign-up nor admin-only can still be filled in by members on their
  **Edit profile** page.
- You can add up to about 65 user fields.
- User fields are included when you [export users](/how-to-export-users/).

## Related guides

- [Verified members](/verified-user/) — the `verifiedbadge` field in detail.
- [Member profiles](/member-profiles/) — where profile fields are shown.
- [Custom fields](/how-to-create-custom-fields/) — extra fields for listings.
- [Sign-up and login settings](/registration-and-login/) — the rest of the registration form.
{: .cards}
