---
title: REST API
description: Read and write your marketplace's listings, categories, users, messages and orders from your own app, website or script.
section: developers
order: 10
permalink: /api-documentation/
keywords: api, rest, json, mobile app, ios, android, integration, api key, user token, endpoint, developer
updated: 2026-10-07
---

Every Yclas marketplace comes with a REST API. Developers use it to build mobile apps, show your listings on
another website, sync data with other systems or automate jobs such as creating paid orders.

This page is the full reference. It is written for developers; if you only want to connect a ready-made service,
you don't need it.

## Before you start

- **Base address.** Every request goes to your marketplace's own address followed by `/api/v1/`, for example
  `https://www.your-marketplace.com/api/v1/categories`. Use your custom domain if you have one, and always use HTTPS.
- **Your API key.** In the admin panel, go to **Settings › General**, open **Advanced** and copy the **API Key**.
  Every marketplace gets a random key when it is created. You can replace it with your own value and click **Save**;
  the old key stops working straight away.
- **No sign-up or extra plan needed.** The API is part of every marketplace.

Your API key opens the whole marketplace: with it anyone can list your orders (including buyers' email
addresses) and create orders marked as paid. Keep it on a server or inside a compiled app, never in a public web
page's JavaScript, and change it in **Settings › General** if it leaks.
{: .warning}

## Three levels of access

| Level | How you prove it | What it opens |
| --- | --- | --- |
| Public | Nothing | Categories, locations, custom field definitions and vehicle data. |
| API key | `apikey` parameter, or an `apikey` HTTP header | Listings, users, orders, blog posts, pages, FAQs, translations, and signing members in or up. |
| User token | `user_token` parameter | Acting as one member: their listings, favourites, messages and profile. |

You get a **user token** when a member signs in or registers through the API (see [Sign in and sign up](#sign-in-and-sign-up)).
Each member has one token, and it stays the same until it is regenerated, so store it securely in your app and
send it with every request made on the member's behalf. Requests that use a user token don't need the API key.

Send the user token as a query or body parameter (`user_token=…`). A `user_token` HTTP header is not read reliably,
and many servers drop headers with underscores in their names.
{: .note}

## How requests work

### Addresses and methods

```
/api/v1/<resource>(/<action>)(/<id>)(.<format>)
```

The HTTP method picks the action when you don't name one:

| Method | Action | Example |
| --- | --- | --- |
| `GET` | List, or show one item when you add an id | `GET /api/v1/categories/3` |
| `POST` | Create | `POST /api/v1/ads` |
| `PUT` | Update | `PUT /api/v1/ads/12` |
| `DELETE` | Delete | `DELETE /api/v1/favorites/12` |

A named action works with any method, so `POST /api/v1/auth/login` and `GET /api/v1/auth/login` do the same thing.

If your client or hosting can't send `PUT` or `DELETE`, send a `GET` with `?method=PUT` (or `DELETE`, `POST`), or
send the real method in an `X-HTTP-Method-Override` header.

### Sending data

Send parameters in the query string, as a form body (`application/x-www-form-urlencoded` or `multipart/form-data`
for file uploads) or as JSON with `Content-Type: application/json`. Query and body parameters are merged.

### Output formats

Responses are JSON by default. Add an extension for another format:

| Format | Example |
| --- | --- |
| JSON (default) | `/api/v1/categories/3` or `/api/v1/categories/3.json` |
| XML | `/api/v1/categories/3.xml` |
| CSV | `/api/v1/categories.csv` |
| HTML (a readable dump, for debugging) | `/api/v1/categories.html` |

Add `attachment=name` to download the response as `name.<format>`. For JSONP, add `callback=yourFunction`.

### Filtering

Most lists accept any of the item's database fields as a filter: `GET /api/v1/categories?id_category_parent=1`.

| Filter | Meaning | Example |
| --- | --- | --- |
| `field=value` | Equal to | `id_user=5` |
| `field>=value` | Greater than or equal to | `price>=100` |
| `field<=value` | Less than or equal to | `price<=500` |
| `field!=value` | Not equal to | `status!=40` |
| `field__between=a,b` | Between two values, inclusive | `price__between=100,500` |

Unknown fields are ignored. Private fields (passwords, tokens, email addresses, IP addresses, wallet balances and
the like) can never be used to filter or sort.

### Searching, sorting and choosing fields

| Parameter | What it does | Example |
| --- | --- | --- |
| `q` | Text search, on the endpoints that support it (listings, categories, locations, blog). | `q=mountain+bike` |
| `sort` | Comma-separated fields; a leading `-` sorts newest/highest first. | `sort=-published,title` |
| `fields` | Return only these fields. | `fields=id_ad,title,price` |

### Pagination

Listings, your own listings, users, orders, blog posts and messages are paginated with `page` (starting at 1) and
`items_per_page` (10 by default). Every list also returns:

- an `X-Total-Count` header with the total number of matching items;
- a `Link` header with the `next`, `last`, `first` and `previous_page` addresses, where they exist.

Categories, locations, pages and FAQs always return everything in one response.

You can combine all of these: `GET /api/v1/listings?q=bike&id_category=7&price<=500&sort=-published&page=2&items_per_page=20&apikey=…`

### Errors

Errors come back with a matching HTTP status and a body like this:

```json
{"code": 401, "error": "Wrong Api Key"}
```

| Status | Typical cause |
| --- | --- |
| `401` | Missing or wrong API key or user token, or wrong email and password. |
| `404` | The item doesn't exist, isn't yours or isn't published, or **a list has no results** (`No records found`). |
| `405` | The method isn't supported for that address. |
| `500` | Validation failed. The messages are joined with ` - `, for example `Category must not be empty - Title must not be empty - `. |
| `503` | The marketplace is in [maintenance mode](/how-to-activate-maintenance-mode/): `{"ERROR": "Maintenance mode"}`. |

An empty list is a `404`, not an empty array, so treat `No records found` as "zero results" in your app.
If your client can't read error statuses, add `suppressResponseCodes=true`: every response is then `200` and the
real code is in a `responseCode` field.
{: .tip}

## Public endpoints

No key needed.

### Categories

| Request | Returns |
| --- | --- |
| `GET /api/v1/categories` | All categories, with `icon`, `price` (formatted) and `translate_name`. Filter, sort and search (`q` looks in name and description). |
| `GET /api/v1/categories/{id}` | One category, plus `parents`, `siblings` (its own id and those of its subcategories) and `customfields`. |
| `GET /api/v1/categories/all` | The whole tree in a nested format. |
| `GET /api/v1/categories/count` | Number of listings per category. Add `id_location` to count only one location. |

Useful filters: `id_category_parent=1` (children of category 1), `parent_deep=1` (top level), `has_image=1`.

### Locations

| Request | Returns |
| --- | --- |
| `GET /api/v1/locations` | All locations, with `icon`, `translate_name` and `location_parent_name`. Filter, sort and search. |
| `GET /api/v1/locations/{id}` | One location, plus `siblings` (its own id and those of its sub-locations). |
| `GET /api/v1/locations/all` | The whole tree in a nested format. |

If **Automatically Sort All Locations Alphabetically** is on in **Settings › General**, the list is always sorted
by name and your `sort` is ignored.

### Custom fields

These describe the [custom fields](/how-to-create-custom-fields/) your forms use: type, label, options and which
categories they apply to.

| Request | Returns |
| --- | --- |
| `GET /api/v1/customfields` | Every listing custom field (same as `/customfields/ads`). |
| `GET /api/v1/customfields/category/{id}` | The listing fields that apply to one category. |
| `GET /api/v1/customfields/categories/{id}-{id}-{id}` | The fields for several categories at once, ids separated by hyphens. |
| `GET /api/v1/customfields/user` | Every [user custom field](/users-custom-fields/). |

In listings, a custom field's value is stored as `cf_<name>`, for example `cf_mileage`.

### Vehicle data

When [vehicle data](/vehicle-data/) is switched on, the brand, model and generation lists behind its drop-downs
are available too: `GET /api/v1/autodatabrands`, `/autodatabrands/{id}` (with its models),
`/autodatamodels`, `/autodatamodels/{id}` (with its generations), `/autodatagenerations` and
`/autodatagenerations/{id}`.

## Endpoints that need the API key

### Sign in and sign up

| Request | Parameters | Returns |
| --- | --- | --- |
| `GET /api/v1/auth` or `/api/v1/auth/login` | `email`, `password`, optional `device_id` | The member, including `user_token`. |
| `POST /api/v1/auth` | `name`, `email`, optional `password` (one is generated if you leave it out), optional `cf_…` user custom fields | The new member, including `user_token`. |
| `GET /api/v1/auth/social` | `social_network` (`google` or `facebook`), `token`, optional `device_id` | The member, including `user_token`. Creates the member if needed. |

```
GET /api/v1/auth/login?email=member@example.com&password=…&apikey=YOUR_KEY
```

```json
{"user": {"id_user": "42", "name": "Ana", "user_token": "06f8bbb8c7da102e5decf0820fb0d6c0b282d637", "image": "https://…", …}}
```

`device_id` stores the device's push-notification id on the member, for mobile apps.

For social sign-in, `token` is an **access token your app got from Google or Facebook**. The provider must be set
up in [social login](/how-to-login-using-social-auth-facebook-google-twitter/), and the marketplace checks the
token with the provider: a Google token must have been issued to the same client ID, and Facebook needs the app
secret saved in the settings. The member's identity, email and name always come from the provider. If an account
with that email already exists and the provider hasn't confirmed the email, sign-in is refused with `409` and the
member has to sign in with their password.

Common errors: `Wrong Api Key`, `Wrong user name or password`, `User already exists`, `Invalid social login`.

### Listings

Published listings, as visitors see them. Expired listings and past events are left out.

| Request | Returns |
| --- | --- |
| `GET /api/v1/listings` | Published listings, newest first. Each has `price` (formatted), `thumb`, `url` and `customfields` (with each field's `value`). Paginated. |
| `GET /api/v1/listings/{id}` | One published listing, with all `images`, its `category`, `location`, the seller's public `user` profile and `customfields`. |

- `q` searches listing titles.
- `id_category` and `id_location` include subcategories and sub-locations.
- Add `latitude` and `longitude` to get a `distance` for each listing (listings without coordinates are left out),
  and `sort=distance` to show the nearest first.
- Any other listing field works as a filter: `id_user=5`, `price__between=100,500`, `cf_condition=new`.

```
GET /api/v1/listings?latitude=41.40&longitude=2.20&sort=distance&items_per_page=20&apikey=YOUR_KEY
```

Listing `status` values: `0` not published, `1` published, `20` waiting for email confirmation, `30` spam, `40`
sold, `50` unavailable.

### Users

| Request | Returns |
| --- | --- |
| `GET /api/v1/users` | Active members' public profiles. Filter, sort, paginated. |
| `GET /api/v1/users/{id}` | One member's public profile. Send that member's `user_token` too and you get their full profile, as at sign-in. |

A public profile contains the id, name, description, role, location, dates, rating, phone, address, coordinates,
language, user custom fields (`cf_…`) and `image`. Email addresses are never included.

### Orders

| Request | Returns |
| --- | --- |
| `GET /api/v1/orders` | All orders, newest first, each with the buyer's `user` (id and email), `product` name and `coupon`. Filter, sort, paginated. |
| `GET /api/v1/orders/{id}` | One order. |
| `GET /api/v1/orders/products` | The product ids you can use when creating an order. |
| `POST /api/v1/orders` | Creates an order **and marks it as paid**. |

Useful filters: `id_user`, `id_ad`, `id_product`, `status` (`0` created, `1` paid, `5` refused, `10` waiting for
confirmation, `99` refunded), `paymethod`, `created`, `pay_date`.

To create an order, send `id_user`, `id_ad` and `id_product`. Optional: `amount` (otherwise the normal price is
used), `currency`, `featured_days` (for featuring), `paymethod` (defaults to `API`) and `txn_id` (your payment
provider's transaction id). Because the order is confirmed as paid, the purchase takes effect immediately, exactly
as if the member had paid on your site. Use it to record payments taken somewhere else.

| Product id | Product |
| --- | --- |
| `1` | Post in a paid category |
| `2` | Move a listing back to the top |
| `3` | Feature a listing (send `featured_days`) |
| `4` | Buy the item (marketplace checkout) |
| `5` | Application fee |
| `6` | Custom |
| `7` | Add money to the wallet |
| other | A [membership plan](/membership-plans/), by its plan id |

### Blog posts, pages and FAQs

| Request | Returns |
| --- | --- |
| `GET /api/v1/blog` | Published [blog posts](/how-to-create-a-blog/), newest first, each with its `url`. `q` searches title and text. Paginated. |
| `GET /api/v1/blog/{id}` | One post. |
| `GET /api/v1/pages` | Published [pages](/how_to_add_pages/), in menu order. |
| `GET /api/v1/pages/{id}` | One page. |
| `GET /api/v1/faqs` | Published [FAQ](/create-frequent-asked-questions-faq/) entries, in order. |
| `GET /api/v1/faqs/{id}` | One FAQ entry. |

Filter by `locale` to get one language, for example `locale=es_ES`.

### Translations

Fetch the wording of your site in each language, including your own edits from
[Language and translations](/how-to-change-language/), to use in an app.

| Request | Returns |
| --- | --- |
| `GET /api/v1/translation` | Your site's languages, each with its name and `last_update_apps` / `last_update_messages` (Unix time of your last edit, or `null`). |
| `GET /api/v1/translation/translate/{locale}` | Every translated text for that language, as `"original": "translation"`. |
| `GET /api/v1/translation/translate/{locale}?q=Search` | The translation of one text. |
| `GET /api/v1/translation/export/{locale}` | Downloads the translation as a `.po` file, or `.mo` with `mo=1`. |

Add `all=1` to include texts that aren't translated yet (with an empty translation), and `file=apps` for the
texts used by the mobile apps instead of the website's (`file=messages`, the default). An unknown locale falls back
to `en_US`. Compare the `last_update_…` times with the time you last downloaded to know when to fetch again.

## Endpoints that need a user token

These act as the signed-in member. Send `user_token` with every request.

### The member's listings

| Request | Parameters | Returns |
| --- | --- | --- |
| `GET /api/v1/ads` | Filters, sort, pagination | The member's own listings in any status, newest first. |
| `GET /api/v1/ads/{id}` | | One of the member's listings, with images, category, location and custom fields. |
| `POST /api/v1/ads` | See below | Posts a new listing. |
| `PUT /api/v1/ads/{id}` | Any of the fields below | Updates the listing. |
| `DELETE /api/v1/ads/{id}` | | Deactivates the listing (it isn't deleted). Returns `true`. |
| `POST /api/v1/ads/image/{id}` | `image` (file upload) | Adds a photo after the existing ones. |
| `DELETE /api/v1/ads/delete_image/{id}` | `num_image` | Removes photo number `num_image`. |
| `POST /api/v1/ads/set_primary_image/{id}` | `num_image` | Makes that photo the main one. |

Listing fields: `id_category` (required), `title` (required, 2–145 characters), `description` (required unless
you turned descriptions off), `id_location`, `price`, `address`, `phone`, `website`, `stock`, `latitude`,
`longitude` and any custom field as `cf_<name>`.

A new listing goes through the same rules as one posted on your site: spam checks, banned words,
[moderation](/how-ads-moderation-works/), confirmation emails and paid categories. The answer tells you what to show
the member:

```json
{"message": "Please pay before we publish your listing.", "checkout_url": "https://…/ad/checkout/123", "ad": {…}}
```

`message` is the text to show (it depends on the marketplace's moderation setting). When `checkout_url` isn't
empty, open it so the member can pay. Changing the category of a listing in a paid category can also return a
`checkout_url`.

Administrators can update and deactivate any listing with their own token. Setting `stock` to `0` marks a listing
as unavailable, and raising it again republishes it.

### Favourites

| Request | Returns |
| --- | --- |
| `GET /api/v1/favorites` | The member's [favourites](/add-chosen-ads-favourites/) that are still published, newest first, each with the listing's title (`ad`), `price` and `image`. |
| `POST /api/v1/favorites/{id_ad}` | Adds the listing to favourites. |
| `DELETE /api/v1/favorites/{id_ad}` | Removes it. |

### Messages

These use your marketplace's [messaging system](/how-to-use-messaging-system/). Messages are grouped in threads,
and a thread is identified by the id of its first message (`id_message_parent`).

| Request | Returns |
| --- | --- |
| `GET /api/v1/messages` | The member's threads, newest first, each with `user_from`, `user_to` (name, last sign-in, picture) and the `ad` it is about (title, price, status, picture), if any. Paginated. |
| `GET /api/v1/messages/unread` | Only threads with unread messages for the member. |
| `GET /api/v1/messages/{id_message_parent}` | Every message in a thread, oldest first. Messages to the member are marked as read. |
| `POST /api/v1/messages` | Sends a message (see below). Returns the message. |

Filter threads with `id_ad` (messages about one listing) or `id_user_from` (threads started by one member).
A thread with no `id_ad` is a direct message between members.

To send a message, always include `message` and one of:

| Send | To |
| --- | --- |
| `id_ad` (and optional `price`, an offer) | Contact the seller of a published listing. |
| `id_user` | Message a member directly. |
| `id_message_parent` (and optional `price`) | Reply in an existing thread. |

If the member already has an open thread with that seller about that listing (or with that member), the message is
added to it instead of starting a new one.

### Profile

| Request | Parameters | Returns |
| --- | --- | --- |
| `PUT /api/v1/profile` | `name`, `email`, `description`, `password`, `phone`, `address`, `cf_…` user custom fields | `User updated`, or the validation errors with `400`. |
| `POST /api/v1/profile/picture` | `profile_image` (file upload) | `true`. |
| `DELETE /api/v1/profile/picture_delete` | optional `num_image` (default `1`) | `true`. |

To read the member's own profile, use `GET /api/v1/users/{id}` with their `user_token`.

## Tips

- **Cache what rarely changes.** Categories, locations, custom fields and translations change only when you edit
  them, so fetch them once per session rather than on every screen.
- **Build links with `url`.** Listings, blog posts, pages and FAQs include their public address, which already
  follows your marketplace's URL settings.
- **Prices come formatted.** `price` in listings and categories is formatted for display in your site's currency
  and format. In favourites and messages it is the plain number.
- **Test safely.** Create a test member and a test category, and use them while you develop; switch them off
  when you are done.

## Related guides

- [General settings](/change-site-name-site-description/) — where the API key lives.
- [Custom fields](/how-to-create-custom-fields/) — the extra listing fields the API returns as `cf_…`.
- [Social login](/how-to-login-using-social-auth-facebook-google-twitter/) — needed for `auth/social`.
- [Mobile apps](/native-apps/) — ready-made apps built on this API.
{: .cards}
