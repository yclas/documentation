---
title: "Captcha: Turnstile and reCAPTCHA"
nav_title: Captcha
description: How your forms tell people from bots with Cloudflare Turnstile, Google reCAPTCHA or a picture captcha, and how to add your own keys.
section: users
order: 100
permalink: /set-recaptcha-website/
keywords: captcha, turnstile, cloudflare turnstile, recaptcha, i'm not a robot, bots, spam, site key, secret key, google, cloudflare, human verification, captcha error, error loading captcha, captcha not working, can't post, invalid key type, invalid domain, google cloud, migration, migrate, eligible for migration, recaptcha enterprise, picture captcha, image captcha
updated: 2026-10-27
plans: Available on all plans
---

A captcha is a quick check that tells people and bots apart, so bots can't flood your site with fake listings,
accounts and messages. Yclas uses one of three:

- **Cloudflare Turnstile**: an invisible check. Most visitors never see a puzzle or tick a box.
- **Google reCAPTCHA**: the "I'm not a robot" box.
- **A picture captcha**: a small image of letters and numbers that people type in.

On a yclas.com address your site already uses Turnstile, with nothing to set up.

## Which forms are protected

When the captcha is on, it appears on:

- the post-a-listing form,
- the sign-up form,
- the contact page, the contact-the-seller form and the contact form on member profiles,
- the review form, if [reviews](/review-system-works/) are on,
- new forum topics and replies, if the [forum](/add-forums-section/) is on,
- the newsletter sign-up.

It doesn't appear on the login form; [login limits](/registration-and-login/#too-many-wrong-passwords) protect that.

The contact form on a member's profile always shows a captcha to visitors who aren't signed in, even when **Captcha**
is off, because bots target it. Every other form follows the setting.

## Which captcha your forms use

Yclas picks the first one that applies:

| Situation | Your forms use |
| --- | --- |
| **Captcha** is off in **Listings › Settings** | No captcha at all. |
| You added your own Turnstile keys | Turnstile, with your keys. |
| The visitor is on your site's yclas.com address (for example `yoursite.yclas.com`) | Turnstile, with Yclas's keys. Nothing to set up. |
| You switched on reCAPTCHA | reCAPTCHA. |
| Anything else | The picture captcha. |

So if your site uses [its own domain name](/custom-domain/), visitors on that domain get reCAPTCHA or the picture,
unless you add your own Turnstile keys. They're free, and we recommend them.

On newer sites the picture captcha has a button for a new picture and hidden spam traps that turn away bots that
fill in forms too fast.
{: .note}

## Make sure the captcha is on

1. In the admin panel, go to **Listings › Settings**.
2. Under **Posting**, switch on **Captcha**.
3. Click **Save changes**.
{: .steps}

This switch controls every captcha on your site. While it's off, neither Turnstile nor reCAPTCHA is shown, even with
keys entered. It's on for new sites.
{: .important}

## Use your own Turnstile keys

Do this if your site has its own domain name. You need a free Cloudflare account.

1. In your Cloudflare dashboard, open **Turnstile** and click **Add widget**.
2. Add your domain name, for example `example.com`. Add your `yoursite.yclas.com` address too, so the check works on
   both.
3. Choose the **Managed** mode, create the widget and copy its **Site key** and **Secret key**.
4. In your admin panel, go to **Add-ons** and open **Cloudflare Turnstile**.
5. Tick **Use my own Turnstile keys** and paste the two keys into **Site key** and **Secret key**.
6. Click **Save**.
{: .steps}

Open your contact page in a private browser window and send yourself a message to check it works.

Turnstile loads when a visitor starts filling in a form, so it doesn't slow your pages down. If someone clicks
**Send** before the check has finished, the form waits a few seconds and is then sent.
{: .tip}

## Use reCAPTCHA

If you prefer Google reCAPTCHA, it's used on your own domain when you haven't added Turnstile keys. Turnstile comes
first when it applies: on your yclas.com address, and everywhere once you add your own Turnstile keys.

### Get your reCAPTCHA keys

1. Sign in to the [reCAPTCHA admin console](https://www.google.com/recaptcha/admin) with the Google account you
   want to own the keys, and create a new site.
2. Choose **reCAPTCHA v2** and then **"I'm not a robot" Checkbox**.
3. Under domains, add your site's domain, for example `example.com`.
4. Submit, and copy the **Site key** and the **Secret key**.
{: .steps}

Use v2 checkbox keys. reCAPTCHA v3 keys and Enterprise keys don't work with Yclas.
{: .warning}

### Add the keys to your site

1. Go to **Add-ons** and open **reCAPTCHA**.
2. Tick **Enable reCAPTCHA**.
3. Paste the keys into **Site key** and **Secret key**.
4. Leave **Invisible reCAPTCHA** unticked.
5. Click **Save**.
{: .steps}

Open your sign-up page on your own domain in a private browser window: you should see the "I'm not a robot" box.

## Settings reference

| Setting | Where | What it does |
| --- | --- | --- |
| **Captcha** | **Listings › Settings** | Shows a captcha on the forms listed above. Required for Turnstile and reCAPTCHA. |
| **Use my own Turnstile keys** | **Add-ons › Cloudflare Turnstile** | Uses Turnstile with your keys, on every address of your site. |
| **Site key**, **Secret key** | **Add-ons › Cloudflare Turnstile** | Your Turnstile widget's keys, from the Cloudflare dashboard. |
| **Enable reCAPTCHA** | **Add-ons › reCAPTCHA** | Uses Google reCAPTCHA instead of the picture where Turnstile doesn't apply. |
| **Site key**, **Secret key** | **Add-ons › reCAPTCHA** | Your reCAPTCHA keys: the public one shows the box, the private one checks the answer with Google. |
| **Invisible reCAPTCHA** | **Add-ons › reCAPTCHA** | Leave unticked; use checkbox keys. |

## Captcha errors when posting or signing up

If members can't post or sign up because of the captcha, open the form yourself in a private window, on the same
address they use.

**With Turnstile:**

| Problem | Fix |
| --- | --- |
| The check shows an error, or every form says the captcha is wrong, on your own domain | Check that your domain is listed in your Turnstile widget in Cloudflare, and that both keys come from the same widget. |
| One member can't send any form | Their browser or an ad blocker may be blocking Cloudflare. Ask them to allow it or try another browser. |
| You want to stop using your own keys | Untick **Use my own Turnstile keys** and click **Save**. |

**With reCAPTCHA:** Google writes the problem inside the "I'm not a robot" box, starting *ERROR for site owner*.

| Problem | Fix |
| --- | --- |
| The box says "Invalid key type", or it shows an error instead of the tick box | The keys aren't **reCAPTCHA v2** "I'm not a robot" Checkbox keys. Create a new key of that type in the [reCAPTCHA admin console](https://www.google.com/recaptcha/admin/create) and paste both new keys in **Add-ons › reCAPTCHA**. |
| The box says "Invalid domain for site key" | Add the exact domain visitors use to your key in the reCAPTCHA console. |
| The box says "Invalid site key" | The site key was mistyped, or the key was deleted in the console. Copy it again. |
| The box doesn't appear | Check **Captcha** is on in **Listings › Settings**, and [clear the cache](/modify-cache-time/). On your yclas.com address you see Turnstile instead, which is expected. |
| Every form says "Captcha is not correct" | The secret key is wrong or belongs to another key pair. Copy both keys again from the same site in the console. |
| You want to go back to the picture captcha | Untick **Enable reCAPTCHA** and click **Save**. |

While you sort out new keys, untick **Enable reCAPTCHA** (or **Use my own Turnstile keys**) and click **Save**: your
forms go back to the next captcha in the list above, so members can keep posting.
{: .tip}

## "Your reCAPTCHA keys are eligible for migration to a Google Cloud project"

Google is moving every reCAPTCHA key into a Google Cloud project and emails key owners about it. Moving a key
doesn't change its site key or secret key, so your marketplace keeps working and you don't need to change anything
in Yclas. You can follow the link in Google's email to move the key yourself, or let Google do it.

Google's free allowance covers the number of checks a typical marketplace needs. If Google asks you to add billing
details, that's between you and Google; Yclas doesn't charge for reCAPTCHA. If you'd rather not, use
[your own Turnstile keys](#use-your-own-turnstile-keys) instead, or untick **Enable reCAPTCHA** to use the picture
captcha.

After the move, keep using the same keys. If you create new keys, make sure they are **v2** "I'm not a robot"
Checkbox keys, as above.
{: .note}

## Related guides

- [Fight spam](/how-to-avoid-spam-in-my-site/) — the other anti-spam tools.
- [Publishing options](/how-to-configure-publish-options/) — the rest of the posting settings.
- [Integrations](/other-integrations/) — other services you can connect.
{: .cards}
