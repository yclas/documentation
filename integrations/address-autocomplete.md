---
title: Suggest real addresses as people type
nav_title: Address autocomplete
description: Give your address fields a list of real addresses to pick from, with your own getAddress.io, Loqate or Google Places account, so addresses, postcodes and map pins come out right.
section: integrations
order: 95
permalink: /address-autocomplete/
keywords: address autocomplete, address lookup, address finder, postcode lookup, postcode finder, address suggestions, autocomplete, type ahead, google places, places api, places api (new), loqate, addressy, pca predict, getaddress, getaddress.io, uk addresses, postcode, zip code, shipping address, map pin, address busy, no address found, reload the page
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- As people type an address, they get a list of real addresses. Picking one fills in the address, postcode, map pin and location.
- Choose a provider per country: getAddress.io or Loqate for the UK, Google Places anywhere.
- It's off by default and uses your own account and key: the provider bills you directly.
- Daily limits cap how many requests your site sends, so you stay in control of the bill.
</div>

Typed addresses are full of typos, missing postcodes and pins in the wrong place. With address autocomplete, people
start typing an address and pick the right one from a list. The address is spelled correctly, the postcode is filled
in, and the listing lands on the map in the right spot.

It works on the posting form, the profile, business locations and the shipping address in the cart. It's **off by
default**, and while it's off your pages load exactly as before.

## Choose a provider

You use your own account with an address provider and pay them directly. You can use one provider for every country,
or a different one per country.

| Provider | Covers | Good for |
| --- | --- | --- |
| **getAddress.io** | The UK only | UK sites. Simple plans that count the addresses picked per day. |
| **Loqate** | The UK and most other countries | Full addresses down to the flat number. Picking a street, postcode or building opens the addresses inside it. |
| **Google Places** | Almost every country | Sites outside the UK, or as the provider for "everyone else". Suggests street addresses, not business names or towns. |

A common set-up is getAddress.io or Loqate for the United Kingdom and Google Places for every other country.

## Get your key

### Google Places

1. In [Google Cloud](https://console.cloud.google.com/), open the project you want to bill and switch on
   [Places API (New)](https://console.cloud.google.com/apis/library/places.googleapis.com).
2. Open [Credentials](https://console.cloud.google.com/apis/credentials) and click **Create credentials › API key**.
3. Edit the key. Under **API restrictions**, choose **Restrict key** and tick only **Places API (New)**. Under
   **Application restrictions**, leave **None**.
4. Click **Save** and copy the key.
{: .steps}

Do **not** restrict this key to websites (HTTP referrers). The requests come from our server, not from the visitor's
browser, so a website restriction blocks them all. Use a separate key from your [Google Maps](/how-to-configure-Google-Map-Settings/)
key, which is restricted to your website.
{: .warning}

Your key stays on our server and is never shown in your pages, so restricting it to Places API (New) is enough to
keep it safe.

### Loqate

Create a **Capture** key (*Address Capture*, with Interactive Find and Retrieve) in your
[Loqate](https://www.loqate.com/) account. To get the map pin, add geocoding to your Loqate plan; without it, the
address and postcode are still filled in.

### getAddress.io

Sign up at [getAddress.io](https://getaddress.io/) and copy your API key. It only has UK addresses.

## Turn it on

1. Go to **Add-ons** and open **Address autocomplete** (in the **Maps** tab).
2. Tick **Suggest addresses as people type**.
3. Under **Provider per country**, choose the **Provider for all other countries**, or **None** if you only want
   suggestions in the countries you add below.
4. In **Countries your addresses are in**, list the two-letter codes of the countries your addresses are in,
   separated by commas, for example `GB, IE`. Suggestions only come from these countries. Leave it empty for
   anywhere.
5. To use a different provider in a country, fill in a **Country** (for example `GB`) and its
   **Provider for this country**. There are three empty rows; save to get more.
6. Under **Your keys**, paste the key of each provider you chose.
7. Under **Forms that get suggestions**, tick the forms you want (see below).
8. Check the two daily limits and click **Save**.
{: .steps}

If the page says *Switched on, but no provider has a key yet*, paste the key of the provider you chose and save.
{: .note}

Keys are never shown again once saved: their boxes say *Already set. Leave blank to keep it.* To change a key, paste
the new one and save. To delete one, tick **Remove this key** under it and save.

### Which provider answers

- **The shipping address in the cart** has its own country field, so it uses the provider for the country the buyer
  chooses there.
- **Other forms** have no country field. If you list just one country in **Countries your addresses are in**, they
  use that country's provider; otherwise the **Provider for all other countries**.

getAddress.io only has UK addresses. Choose it for `GB`, or as the provider for all countries only if your site's
addresses are all in the UK.
{: .tip}

## Forms that get suggestions

| Form | Where |
| --- | --- |
| **Post a listing and edit a listing** | The address field of the posting form. Show it with [Listing page and form fields](/how-to-manage-advertisement-fields/). |
| **Profile** | The address on members' **Edit profile** page. |
| **Business locations** | The branches of a business listing, in [directory mode](/directory-mode/#several-locations-per-business). |
| **Shipping address in the cart** | The buyer's address when [Shippo](/shippo/) needs one for shipping rates. |

All four are ticked until you choose. The suggestions work on every theme.

## What people see

1. They click into the address field and start typing. After 3 characters, up to 6 matching addresses appear.
2. They pick one with the mouse, a tap, or the arrow keys and Enter. With Loqate, a street, postcode or building
   shows **Show addresses** to open the addresses inside it.
3. The form is filled in for them.
{: .steps}

Picking an address fills in:

- **The address**, written in full.
- **The postcode**, where the form has a postcode field: the cart's, or a [custom field](/how-to-create-custom-fields/)
  called *Postcode*, *Zip* or *Postal code*. Otherwise it is part of the address.
- **The point on the map**: the latitude and longitude, and the pin on the form's map moves there. Works with both
  OpenStreetMap and Google Maps.
- **The location**, when one of your [locations](/how-to-add-locations/) has the same name as the address's town,
  district or region. A location the person chose themselves is never changed.

People can always ignore the list and type the address in full, as before.

When the suggestions come from Google, the list shows *Google Maps* at the bottom, as Google's terms require. Keep it
there: you don't need to add anything.
{: .note}

## Daily limits and your bill

The provider bills your account, so the page has two limits on what your site sends to it. Past either one, people
type the address in full as before, until the next day (the day starts at midnight UTC).

| Setting | What it does |
| --- | --- |
| **Most addresses picked a day** | Each pick asks the provider for the full address once. The default is 500. |
| **Most suggestion requests a day** | Typing one address takes about 3 to 6 requests. Leave it empty for 5 per pick (2,500 a day with the default 500 picks). |

The page sums it up, for example *At most 2,500 suggestion requests and 500 picks a day are sent to your provider.*
What that costs depends on your provider:

- **Google** bills the typing and the pick together as one session plus a Place Details (Essentials) request, with a
  free monthly allowance. Suggestion requests are billed one by one when no address is picked after them.
- **Loqate** charges for each address picked.
- **getAddress.io** counts requests against your plan, which counts the addresses picked per day.

Check your provider's prices, and set a budget or quota in its own console too. Our limits cap how much your site
asks for; only the provider can cap what it charges.
{: .tip}

Each visitor also has limits of their own, so one person or bot can't use up your site's allowance. Answers from
Loqate and getAddress.io are kept for 10 minutes, so the same street typed twice is only paid for once.

## Troubleshooting

**"Address suggestions are busy. Please write the address in full."** Your site reached a daily limit, or the
provider refused your key. If the provider refuses it (a wrong key, a key restricted to websites, Places API (New)
not switched on, no credit left or over its own quota), suggestions pause for 5 minutes and try again. Check the
key's restrictions and your account with the provider, and raise the daily limits if you reach them often.

**"Address suggestions stopped because this page has been open a long time. Reload it to get them again."**
Suggestions stop on a page left open for more than about 4 hours. Reloading the page brings them back.

**"No address found. Keep typing or write it in full."** The provider has nothing for what was typed. Google only
suggests street addresses, so a business name or a town on its own finds nothing. Also check **Countries your
addresses are in**: an address in another country is never suggested.

**No suggestions at all.**

- Check that **Suggest addresses as people type** is ticked, the form is ticked under **Forms that get
  suggestions**, and the country has a provider with a key (not **None**).
- getAddress.io never answers for countries other than the UK.
- Suggestions start after 3 characters.
- A custom theme with its own address field names may not get suggestions.

**The address is filled in but the pin doesn't move.** With Loqate, your plan needs geocoding for the map point. The
form also needs its map: see [Maps](/how-to-configure-Google-Map-Settings/#how-listings-get-onto-the-map).

## Related guides

- [Maps](/how-to-configure-Google-Map-Settings/) — OpenStreetMap or Google Maps, and the map in the posting form.
- [Auto-locate visitors](/auto-locate-visitors/) — suggest visitors' nearest area and sort listings by distance.
- [Locations](/how-to-add-locations/) — the locations a picked address is matched to.
- [Shippo](/shippo/) — shipping rates from the buyer's address.
{: .cards}
