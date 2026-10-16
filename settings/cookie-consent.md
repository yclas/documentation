---
title: Cookie consent and privacy
description: Ask visitors which cookies they accept, let members download their data and delete their account, and put together the privacy pieces a marketplace needs.
section: settings
order: 120
permalink: /cookie-consent/
keywords: cookie, cookies, consent, banner, cookie categories, gdpr, eu, privacy, privacy policy, cookies policy, terms, eprivacy, analytics, tracking, delete account, delete my account, download my data, data export, right to be forgotten, digital services act
updated: 2026-10-16
---

Cookies are small files a website stores in the visitor's browser. Your marketplace uses them to keep members signed
in and to remember choices such as their language or location. Services you add, such as
[Google Analytics](/google-analytics/) or advertising, set cookies of their own.

In many countries, including the EU and the UK, you must ask visitors before setting any cookies that aren't strictly
needed, and let your members see and delete the data you hold about them. Yclas has the basics built in, all in
**Settings › General › Access & privacy**:

| Setting | What it does |
| --- | --- |
| **Ask for cookie consent** | A cookie banner where visitors choose which cookies they accept. Analytics and ad code wait until they agree. |
| **Privacy & data for users** | Members can download their data and delete their account themselves. |
| **Report this listing** | Visitors report illegal or harmful listings with a reason. See [Reported listings](/flag-ad-inappropriate/). |
| **Cookie notice** | The older, simpler banner that only informs visitors. |

New sites have the first three switched on. On a site created earlier they are off until you switch them on.

This guide is general information, not legal advice. The rules depend on where you and your members are; check
them for your marketplace.
{: .note}

## Ask for cookie consent

1. In the admin panel, go to **Settings › General**.
2. In **Access & privacy**, switch on **Ask for cookie consent**.
3. Click **Save changes** in the bar at the bottom.
{: .steps}

New visitors now see a banner at the bottom of the page with three categories:

- **Necessary**: always on, it can't be unticked. These are the cookies your site needs to work, such as staying
  signed in.
- **Analytics**: Google Analytics, set up in [Integrations › Google Analytics](/google-analytics/).
- **Marketing**: the ad code in your [banners and ad slots](/how-to-add-banner/).

Visitors click **Accept all**, **Reject non-essential**, or tick the categories they want and click **Save
preferences**. Until they accept a category, its code doesn't load at all. Their choice is remembered on that browser
for six months, and the banner doesn't come back during that time.

You still see your own ads in the admin panel while you edit them, so saving your theme options never loses the ad code.

### Let visitors change their mind

Any link to `#cookie-settings` opens the banner again. Add one to your cookies policy page or your footer
[menu](/modify-top-menu/), for example with the text *Cookie settings*. New sites already have it in their **Cookies
policy** page.

### What the banner doesn't hold back

The banner controls Google Analytics and your theme's ad code. It doesn't know about code you paste yourself into
**Code in the page head** or **Code in the footer** (in **Settings › General › Advanced**), or into a text widget. If you
add tracking or chat tools there, either load them through a consent tool that waits for the visitor's choice, or
leave them out.
{: .important}

To change the banner's wording, edit its texts in **Settings › Translations** (search for "This site uses cookies").
See [Language and translations](/how-to-change-language/).

### The older Cookie notice

**Cookie notice** shows a bar saying *We use cookies to track usage and preferences*, with a **Got it!** button and a
**Learn more** link to a general explanation of cookies. It only informs: it doesn't block anything, and analytics and
ads run whether or not the visitor clicks.

If you switch on **Ask for cookie consent**, the categories banner replaces this notice, so visitors never see two
banners. You can switch **Cookie notice** off.

If you'd rather use a consent management platform (Cookiebot, CookieYes, Iubenda and similar), paste its code into
**Code in the page head** (see [Add code to the head and footer](/html-in-head-element/)), follow its instructions to
connect your tools, and leave both Yclas banners off.
{: .tip}

## Let members download their data and delete their account

With **Privacy & data for users** on, every member has a **Privacy & data** page in their account. In Nova it's in
the account menu, and in the Default theme there's a link on the profile page. With any theme, it's at
`yoursite.com/oc-panel/profile/privacy`, which you can link from a page or your menu. It has two parts:

**Download my data.** One click downloads a file with their profile, their listings, the messages they wrote, their
favourites, orders and reviews. Photos aren't included.

**Delete my account.** The member types their password and confirms. Members who joined with Facebook, Google or
another social login and have no password click **Email me a confirmation link instead** and confirm from the email;
the link works once, for one hour.

When an account is deleted:

- its listings, favourites and reviews are removed;
- the messages the member wrote are blanked, and the people they wrote to see them from "Deleted user";
- orders stay for your accounting, but without the member's personal details;
- the person is signed out everywhere. This can't be undone.

Administrator accounts can't be deleted this way. To close your own account, give another account the administrator
role first, or contact [Yclas support](/use-yclas-support-system/).

The Yclas mobile apps offer the same two options, which app stores require.
{: .note}

## Legal pages

Most marketplaces need three pages:

- **A privacy policy** explaining what personal data you collect (accounts, listings, messages), why, how long you
  keep it, which services you share it with (payment providers, email service, analytics) and how members can get or
  delete their data.
- **A cookies policy** listing the cookies your site sets, with the `#cookie-settings` link.
- **Terms of service** members agree to.

New sites start with all three in [Pages](/how_to_add_pages/) (*Terms of service*, *Privacy policy* and *Cookies
policy*) with placeholder text. Replace it with your own before you rely on them. On an older site, create them in
**Pages**.

Then tell Yclas which page is which, in **Listings › Settings**, section **Posting**:

| Setting | What it does |
| --- | --- |
| **Terms of service** | Sellers must tick that they accept this page before posting. Leave it empty for no checkbox. |
| **Privacy policy** | Stays readable even on a [private site](/private-site/), for visitors who aren't signed in. |
| **Cookies policy** | Stays readable even on a private site. |

Link the pages from your footer [menu](/modify-top-menu/) so visitors can find them. To make visitors accept your
terms before they use the site at all, see [Terms of use and age alert](/activate-access-terms-alert/).

Every email your site sends includes an unsubscribe link, and members can stop newsletters and the
[email digest](/email-digest/) from their profile.

## Related guides

- [Reported listings](/flag-ad-inappropriate/) — let visitors report illegal or harmful listings.
- [Google Analytics](/google-analytics/) — measuring visits, and the cookies it sets.
- [Add code to the head and footer](/html-in-head-element/) — where other consent tools are installed.
- [General settings](/change-site-name-site-description/) — the other settings in Access & privacy.
{: .cards}
