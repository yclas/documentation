---
title: Private and business accounts
description: Ask new members whether they're a private seller or a business when they sign up, ask each type its own questions, decide who can post where, and charge businesses a different price to post.
section: users
order: 700
permalink: /account-types/
keywords: account type, account types, private, business, private seller, business account, buyer, seller, sign up as business, register as business, business only, only businesses can post, dealers only, who can post, category for businesses, private sellers only, business price, different price for businesses, dealer price, trade price, fields per account type, only dealers able to post listings
updated: 2026-10-20
---

Many marketplaces have two kinds of members: private people selling a few things, and businesses such as dealers,
shops and agencies. These options let you treat them differently from the moment they sign up:

- new members say whether they're **private** or a **business** on the sign-up form, and you can rename the two
  types, for example *Buyer* and *Seller*;
- each type can be asked its own questions, such as a company name only for businesses;
- you choose who can post at all, and who can post in each category;
- businesses can pay a different price to post than private sellers.

They build on [business accounts](/business-sellers/), so switch those on first: everything on this page does nothing
while **Business accounts** is off. All of it is available on every plan and is off until you switch it on.

## Ask the account type at sign-up

1. Go to **Settings › General**.
2. In **Business sellers**, make sure **Business accounts** is on.
3. Switch on **Ask the account type at sign-up**.
4. If you like, give the two types your own names (see the table).
5. Click **Save changes** in the bar at the bottom.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Ask the account type at sign-up** | New members choose between the two types when they sign up. |
| **Name of the private type** | What the private type is called on the sign-up form. Empty means *Private*. Up to 40 characters. |
| **Name of the business type** | What the business type is called. Empty means *Business*. Up to 40 characters. |
| **Approve business accounts** | Off by default. When on, a new business account can't post until you approve it under **Business** in the sidebar. See [Business sellers](/business-sellers/#approve-business-accounts). |

The choice is on the sign-up form of the **Nova** and **Default** themes. If your site uses another theme, leave
this switch off.
{: .note}

### What new members see

The sign-up form asks *I am signing up as* with your two types, and the member must pick one.

Members who sign up with a [social login](/how-to-login-using-social-auth-facebook-google-twitter/) button are asked
once, on a **One more step** page, straight after their first sign-in. They click **Continue** and carry on to the
page they were going to. Members who sign up with their phone number start as private and can switch later.

A member who chooses the business type gets a business account straight away, or, with **Approve business accounts**
on, one that waits for your approval. Members can change their type later on their **Edit profile** page, under
**Account type**.

### Emails about business accounts

While **Ask the account type at sign-up** is on:

- you get an email when a new business account waits for your approval, with a link to the **Business** page. It goes
  to the **Sender email** in [Email settings](/general-email-configuration/);
- the member gets an email when you approve or reject their business account.

These emails have a fixed text and aren't in [Email templates](/automatic-emails-sent-to-users/).

## Ask each type its own questions

With account types on, every [user custom field](/users-custom-fields/) has an extra setting, **Only for**, with a
tick box for each type.

- Leave both unticked to ask everyone.
- Tick one type to ask only that type.
{: .steps}

On the sign-up form, a field for one type appears once the member picks that type, and an answer is never saved for
the other type. So a required *Company name* field ticked for businesses only doesn't get in the way of private
members.

**Only for** applies to the sign-up form. On their **Edit profile** page, members see every field that isn't
admin-only.
{: .note}

## Choose who can post

### Only business accounts can post

Switch on **Only business accounts can post** in **Settings › General › Business sellers** to make your site a
marketplace where businesses sell and everyone else browses.

- Other members can still browse, message sellers and save favourites.
- When they try to post, they're taken to their profile with *Only business accounts can post on this site. Switch
  your account to Business in your profile to post.*
- Visitors who aren't signed in are asked to sign in or sign up first.
- You, your administrators and your moderators can always post.

Turn on **Approve business accounts** too. Otherwise any member can switch their account to Business and post
straight away.
{: .important}

### Who can post in each category

Each category can be limited to one type of account:

1. Go to **Listings › Categories** and open the category.
2. In **Who can post here**, choose an option (see the table).
3. Click **Save** in that card.
{: .steps}

| Option | Who can post |
| --- | --- |
| **Same as parent (…)** | The default: the category follows the category above it. The brackets show what that is. |
| **Everyone** | Every member, whatever the parent says. |
| **Business accounts only** | Only business accounts. |
| **Private sellers only** | Everyone except business accounts. |

Subcategories follow the nearest category above them that has a rule, so setting *Vehicles* to **Business accounts
only** covers *Vehicles › Cars* too, unless you give *Cars* its own rule.

- The posting form only lists the categories each member may post in. Moving a listing into a category they can't
  post in is refused.
- Visitors who post without an account count as private sellers.
- Rows of a business seller's [bulk import or stock feed](/business-sellers/#the-business-dashboard) for a category
  they can't post in are skipped and reported as a problem.
- Administrators and moderators can post in every category.

The card only shows while **Business accounts** is on. If **Only business accounts can post** is also on, private
members can't post anywhere, whatever the category says.

## Charge businesses a different price

If you [charge for posting](/pay-to-post/), each category has a **Business price** next to its **Price**. Business
accounts pay the business price; everyone else pays the price.

1. Go to **Listings › Categories** and open the category.
2. Enter the **Business price**. Leave it at 0 to charge businesses the normal price.
3. Click **Submit**.
{: .steps}

How the price is found, from the listing's category upwards:

- at each level, a business pays that category's **Business price** if it has one, otherwise its **Price**;
- a category with neither uses the category above it.

So a subcategory with its own **Price** but no **Business price** charges businesses its **Price**, not the
parent's business price. The easiest set-up is to put both prices on your top-level categories and leave
subcategories at 0.
{: .tip}

Business prices are only set on each category's own page. The *… to post* label in the category list and the price
table in [Make money](/make-money/) show the normal price. Business accounts see their price on the posting form and
pay it at checkout, and it applies to their bulk imports and stock feeds too. [Coupons](/how-to-use-coupon-system/)
work on either price.

## Good to know

- If you switch **Business accounts** off, all of this stops: the sign-up form no longer asks the type, everyone
  can post in every category, and everyone pays the normal price. Your settings are kept for when you switch it back
  on.
- A business account that is waiting for approval, or that you rejected, can't post anywhere.
- The type names you choose are used on the sign-up form, the **One more step** page and the approval emails.
  Elsewhere, such as the **Edit profile** page, your site says *Private seller* and *Business*.

## Related guides

- [Business sellers](/business-sellers/) — the Business badge, approvals, bulk import and stock feeds.
- [User custom fields](/users-custom-fields/) — the questions you ask members.
- [Pay to post](/pay-to-post/) — charge per listing and category.
- [Sign-up and login settings](/registration-and-login/) — the rest of the sign-up form.
{: .cards}
