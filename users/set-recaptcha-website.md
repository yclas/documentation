---
title: reCAPTCHA
description: Replace the built-in image captcha with Google's "I'm not a robot" check on your posting, sign-up and contact forms.
section: users
order: 100
permalink: /set-recaptcha-website/
keywords: recaptcha, captcha, i'm not a robot, bots, spam, site key, secret key, google, human verification
updated: 2026-10-07
---

A captcha is a quick test that tells people and bots apart. Yclas has two:

- a **built-in captcha**: a small image of letters and numbers that people type in (click the image for a new one);
- **Google reCAPTCHA**: the "I'm not a robot" box. Most people only need to tick it, it's easier on phones, and
  it stops far more bots than the image.

We recommend reCAPTCHA for every live marketplace. It's free.

## Which forms are protected

When the captcha is on, it appears on:

- the post-a-listing form,
- the sign-up form,
- the contact page, the contact-the-seller form and the contact form on member profiles,
- the review form, if [reviews](/review-system-works/) are on,
- new forum topics and replies, if the [forum](/add-forums-section/) is on,
- the newsletter sign-up.

It doesn't appear on the login form; [login limits](/registration-and-login/#too-many-wrong-passwords) protect that.

## Step 1: make sure the captcha is on

1. In the admin panel, go to **Listings › Settings**.
2. Under **Posting**, switch on **Captcha**.
3. Click **Save changes**.
{: .steps}

This switch controls every captcha on your site. While it's off, reCAPTCHA isn't shown either, even with keys
entered. It's on for new sites.
{: .important}

## Step 2: get your reCAPTCHA keys

1. Sign in to the [reCAPTCHA admin console](https://www.google.com/recaptcha/admin) with the Google account you
   want to own the keys, and create a new site.
2. Choose **reCAPTCHA v2** and then **"I'm not a robot" Checkbox**.
3. Under domains, add your site's domain, for example `example.com`. If you use your own domain, add your
   `yoursite.yclas.com` address too, so both work.
4. Submit, and copy the **Site key** and the **Secret key**.
{: .steps}

Use v2 checkbox keys. reCAPTCHA v3 keys and Enterprise keys don't work with Yclas.
{: .warning}

## Step 3: add the keys to your site

1. Go to **Integrations** and open **reCaptcha**.
2. Tick **Enable reCaptcha**.
3. Paste the keys into **reCAPTCHA Site Key** and **reCAPTCHA Secret Key**.
4. Leave **Invisible reCAPTCHA** unticked.
5. Click **Save**.
{: .steps}

Open your sign-up page in a private browser window: you should see the "I'm not a robot" box where the image captcha
used to be.

## Settings reference

| Setting | Where | What it does |
| --- | --- | --- |
| **Captcha** | **Listings › Settings** | Shows a captcha on the forms listed above. Required for reCAPTCHA. |
| **Enable reCaptcha** | **Integrations › reCaptcha** | Uses Google reCAPTCHA instead of the built-in image. |
| **reCAPTCHA Site Key** | **Integrations › reCaptcha** | The public key, used to show the box. |
| **reCAPTCHA Secret Key** | **Integrations › reCaptcha** | The private key, used to check the answer with Google. |
| **Invisible reCAPTCHA** | **Integrations › reCaptcha** | Leave unticked; use checkbox keys. |

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The box says "Invalid domain for site key" | Add the exact domain visitors use to your key in the reCAPTCHA console. |
| The box doesn't appear | Check **Captcha** is on in **Listings › Settings**, and [clear the cache](/modify-cache-time/). |
| Every form says "Captcha is not correct" | The secret key is wrong or belongs to another key pair. Copy both keys again from the same site in the console. |
| You want to go back to the image captcha | Untick **Enable reCaptcha** and click **Save**. |

## Related guides

- [Fight spam](/how-to-avoid-spam-in-my-site/) — the other anti-spam tools.
- [Publishing options](/how-to-configure-publish-options/) — the rest of the posting settings.
- [Integrations](/other-integrations/) — other services you can connect.
{: .cards}
