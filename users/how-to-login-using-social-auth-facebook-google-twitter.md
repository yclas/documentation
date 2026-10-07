---
title: Social login
description: Let members sign up and sign in with their Google or Facebook account, or with your own OAuth2 provider.
section: users
order: 60
permalink: /how-to-login-using-social-auth-facebook-google-twitter/
keywords: social login, sign in with google, continue with facebook, facebook login, google login, oauth, oauth2, single sign-on, sso, hybridauth, client id, client secret, redirect uri, data deletion, data deletion request, data deletion instructions url, user data deletion, facebook app review, meta app, privacy policy url
updated: 2026-10-07
---

Social login adds **Sign in with Google** and **Continue with Facebook** buttons to your login and sign-up pages.
Members join with two clicks and no new password to remember, which means more sign-ups and fewer "forgot password"
emails. You can also connect any service that supports OAuth2, such as your organisation's own sign-in system.

You'll need a free developer account with each provider you want to use. Setting one up takes about 15 minutes.

Your site must use HTTPS for Google and Facebook to accept it. Every `yoursite.yclas.com` address does; for your own
domain see [Connect your own domain](/custom-domain/).
{: .note}

## Before you start: your redirect addresses

Each provider asks for the address it should send members back to after they sign in. Replace
`https://www.example.com` with your site's address, exactly as it appears in the browser:

| Provider | Redirect address |
| --- | --- |
| Google | `https://www.example.com/social/login/1?hauth.done=Google` |
| Facebook | `https://www.example.com/social/login/1?hauth_done=Facebook` |
| OAuth2 | `https://www.example.com/social/oauth/1` |

Note the dot in `hauth.done` for Google and the underscore in `hauth_done` for Facebook. If you later move to another
domain, add the new addresses at each provider.

## Set up Google

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/) and create a project for your marketplace.
2. Open **APIs & Services › OAuth consent screen** and fill in your app name, support email and your site's
   address. Choose **External** users.
3. Open **APIs & Services › Credentials**, click **Create credentials › OAuth client ID** and choose
   **Web application**.
4. Under **Authorised JavaScript origins**, add your site's address, for example `https://www.example.com`.
5. Under **Authorised redirect URIs**, add the Google redirect address from the table above.
6. Click **Create** and copy the **Client ID** and **Client secret**.
7. Publish your consent screen (move it from testing to production). Until you do, only test users you list can
   sign in.
{: .steps}

Google renames these screens from time to time; look for "OAuth client" and "redirect URI" if the names differ.

## Set up Facebook

1. Go to [Meta for Developers](https://developers.facebook.com/apps/) and create an app that uses
   **Facebook Login**.
2. In the Facebook Login settings, add the Facebook redirect address from the table above to
   **Valid OAuth Redirect URIs**, and save.
3. Make sure the app may ask for the **email** permission.
4. In the app's basic settings, add your domain, your privacy policy address and a **User data deletion** address
   (see below), then copy the **App ID** and **App Secret**.
5. Switch the app to live (published) mode, so anyone can use it, not only you.
{: .steps}

### Facebook's data deletion request

Facebook asks every app that uses Facebook Login for a way people can ask to have their data deleted, and won't let
you publish the app without it. Your site doesn't have an automatic deletion callback, so give Facebook a page with
instructions instead:

1. In the admin panel, go to **Pages** and create a page called, for example, *Delete your data*.
2. Explain how members can have their account and data deleted: for example, by writing to you through your
   contact page, or to your email address, from the email address of their account. Say how quickly you'll do it.
3. Publish the page and copy its address, such as `https://www.example.com/delete-your-data.html`.
4. In your Facebook app, under **App settings › Basic**, choose **Data deletion instructions URL** in **User data
   deletion** and paste the address. Save.
{: .steps}

When a member asks, delete their account in **Users** (see [Manage users](/manage-users/#delete-a-member)). That
removes their account, listings, photos and everything else linked to it from your site. Members can't delete their
own accounts themselves, so the request always comes to you.

Link the same page from your privacy policy, so members who didn't sign in with Facebook find it too. See
[Pages](/how_to_add_pages/).
{: .tip}

## Switch on social login on your site

1. In the admin panel, go to **Addons** and open **Social login**.
2. Click **Enable**.
3. Under **Google**, tick **Enabled** and paste the Client ID into **Id** and the Client secret into **Secret**.
4. Under **Facebook**, tick **Enabled** and paste the App ID into **Id** and the App Secret into **Secret**.
5. Click **Save**.
6. Sign out and open your login page: the new buttons appear above the form. Try each one.
{: .steps}

### Social login settings

| Setting | What it does |
| --- | --- |
| **Enable** / **Disable** | Switches the Social login add-on on or off. |
| **Enabled** (per provider) | Shows that provider's button on the login and sign-up pages. |
| **Id**, **Secret** | The keys from the provider's developer console. |
| **OAuth2: Client id**, **Client secret** | The keys from your OAuth2 provider. |
| **URL authorize**, **URL access token**, **URL resource owner details** | The three addresses your OAuth2 provider publishes for the "authorization code" flow. |

A provider's **Enabled** box is what puts its button on the page. To remove social login completely, untick
**Enabled** for each provider as well as clicking **Disable**.
{: .note}

## Connect your own OAuth2 provider

If your members already have accounts in another system that supports OAuth2 or OpenID Connect (a company directory,
a membership platform, Auth0, Keycloak and the like), you can let them sign in with those.

1. In your provider, register a new web application with the OAuth2 redirect address from the table above.
2. Copy its client ID, client secret and the authorize, token and user-info addresses.
3. Under **OAuth2** on the Social login page, tick **Enabled**, fill in the five fields and click **Save**.
{: .steps}

An **OAuth** button then appears with the other social buttons. The provider must return the member's email
address and a unique ID (`sub` or `id`) from its user-info address.

## How accounts are matched

- The first time someone uses a social button, Yclas creates an account with the name and email address the provider
  gives. If [email verification](/registration-and-login/#confirm-email-addresses) is on, they confirm it first.
- If an account with that email already exists, it's linked when the provider confirms the address is verified (Google
  and Facebook do). Otherwise the member sees "An account with this email already exists. Please log in with your
  password."
- If the provider doesn't share an email address, the member is asked to type one before the account is created.
- After that, the same button always signs them into the same account, even if they change their email at the provider.

Members who joined with a social button have no password of their own. If they want to sign in with email and
password too, they can use **Forgot password?** on the login page to set one.
{: .tip}

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Google says `redirect_uri_mismatch` | The redirect address at Google must match exactly, including `https`, `www` and `?hauth.done=Google`. |
| Facebook says the URL is blocked | Add the Facebook redirect address (with `hauth_done`) to **Valid OAuth Redirect URIs**, and check the app is live. |
| Only you can sign in with Google | Publish the consent screen, or add the person as a test user. |
| The buttons don't appear | Tick **Enabled** for the provider and click **Save**, then [clear the cache](/modify-cache-time/) if needed. |

## Related guides

- [Sign-up and login settings](/registration-and-login/) — who may sign up and how.
- [Two-step login](/2-step-authentication/) — extra protection for password logins.
- [Add-ons](/addons/) — the other optional features on the Addons page.
{: .cards}
