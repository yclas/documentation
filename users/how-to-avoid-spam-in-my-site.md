---
title: Fight spam
description: Every tool Yclas gives you against spam listings, fake accounts and junk messages, and a sensible setup to start with.
section: users
order: 90
permalink: /how-to-avoid-spam-in-my-site/
keywords: spam, spammers, fake accounts, bots, junk listings, scam, moderation, captcha, recaptcha, akismet, black list, banned words, disposable email, fraud
updated: 2026-10-07
---

Every marketplace attracts spam sooner or later: fake "loan offers" and "spell casters", bots that sign up by the
hundred, and messages to your sellers that are really phishing. A few listings like that make a site look abandoned,
so it's worth setting up your defences early.

Yclas has several layers of protection. None is perfect alone; together they stop almost everything.

## A good starting setup

If you do nothing else, do this:

| Step | Where | Guide |
| --- | --- | --- |
| Keep **Captcha** on (it is on new sites), and ideally switch to reCAPTCHA. | **Listings › Settings** and **Integrations › reCaptcha** | [reCAPTCHA](/set-recaptcha-website/) |
| Keep the **Black list** add-on on (it is on new sites). | **Addons › Black list** | [Black list and banned words](/activate-blacklist-works/) |
| Add an Akismet key. | **Integrations › Akismet** | below |
| Turn on **User Must Verify Email**. | **Settings › General**, **Sign-ups** | [Sign-up and login settings](/registration-and-login/) |
| If spam still gets through, approve listings before they go live. | **Settings › General**, **How new listings go live** | [Moderation](/how-ads-moderation-works/) |

## Every tool, and what it stops

### Stop bots at the door

- **Captcha and reCAPTCHA** — a challenge on the forms bots love: posting a listing, signing up, contact forms,
  reviews, forum posts and the newsletter sign-up. See [reCAPTCHA](/set-recaptcha-website/).
- **Hidden trap fields** — the sign-up and contact forms include a field people never see. Bots fill it in and are
  quietly turned away. This is automatic.
- **Email checks** — new accounts must use an address whose domain can receive mail; with the Black list on,
  throwaway addresses from disposable-email services are refused. You can also require email confirmation, allow only
  certain domains, block others and block subdomain addresses. See [Sign-up and login settings](/registration-and-login/).

### Catch spam in what people write

- **Akismet** — sends new listings, contact messages and forum posts to Akismet's spam filter. Anything it flags is
  refused. When a new listing is flagged and the Black list is on, its poster is also marked as a spammer.
- **Banned words** — reject or mask listings that contain words you choose, such as "western union" or "casino".
  See [Black list and banned words](/activate-blacklist-works/#banned-words).
- **Moderation** — nothing goes live until you or a moderator approves it. The most reliable filter, at the cost of
  your time. See [Moderation](/how-ads-moderation-works/).

### Slow spammers down

- **Require Login to Post** and **Limit published listings per day**, in **Listings › Settings**, make mass-posting
  much harder. See [Publishing options](/how-to-configure-publish-options/).
- **Require Login to Contact** stops anonymous messages to your sellers.
- **Login limits** block an account for a while after repeated wrong passwords. See
  [Sign-up and login settings](/registration-and-login/#too-many-wrong-passwords).

### Deal with spammers who got through

- **Mark as spam** — on a listing in **All listings**, or on the member in **Users**. The member is signed out and,
  with the Black list on, their email address can't post or send messages again. See
  [Black list and banned words](/activate-blacklist-works/).
- **Report this listing** — let members flag suspicious listings to you. See [Reported listings](/flag-ad-inappropriate/).
- **Fraud checks on payments** — FraudLabs Pro screens card payments. See [Other integrations](/other-integrations/).

Public profiles of members without any listings are hidden from search engines automatically, so accounts created
only to place links on your site get no benefit from it.
{: .note}

## Set up Akismet

Akismet is a spam filter run by Automattic, the company behind WordPress. It's free for personal sites and paid for
commercial ones.

1. Get an API key at [akismet.com](https://akismet.com/).
2. In the admin panel, go to **Integrations** and open **Akismet**.
3. Paste the key into **API key** and click **Save**.
{: .steps}

To switch Akismet off, empty the field and click **Save**.

Akismet sometimes flags genuine posts. If a member says their listing is refused as spam ("This post has been
considered as spam!"), check whether they were marked as spam in **Users**, restore them, and consider moderation
instead for that kind of content.
{: .warning}

## Cleaning up after a spam attack

1. In **Users**, open the **Spam** and **Unconfirmed** tabs and sort by **Newest** to see the latest fake accounts.
2. Delete the accounts you're sure about. Deleting removes their listings too.
3. In **All listings**, search for the spammers' typical words and mark what's left as spam.
4. Add those words to **Banned Words**, and switch on the tools from the starting setup above that you hadn't yet.
{: .steps}

## Related guides

- [reCAPTCHA](/set-recaptcha-website/) — the strongest bot check.
- [Black list and banned words](/activate-blacklist-works/) — block repeat offenders and spammy words.
- [Moderation](/how-ads-moderation-works/) — approve listings before they go live.
- [Help your members avoid scams](/5-facts-get-scammed/) — advice to share with buyers and sellers.
{: .cards}
