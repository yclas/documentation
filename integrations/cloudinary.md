---
title: Cloudinary video uploads
nav_title: Cloudinary videos
description: Let members upload a video with their listing, stored and streamed by your Cloudinary account, using a Video custom field.
section: integrations
order: 50
permalink: /cloudinary/
keywords: cloudinary, video, upload video, video field, custom field, upload preset, cloud name, api key, api secret, mp4
updated: 2026-10-07
---

A video sells a car, a house or a guitar better than photos alone. With Cloudinary connected, you can add a
**Video** field to your posting form: members upload a video from their device, it is stored in your
[Cloudinary](https://cloudinary.com) account, and it plays on the listing page.

Videos are large, so they aren't stored with your marketplace. Cloudinary stores and streams them, and its free plan
covers a modest number of videos. Check Cloudinary's pricing as your marketplace grows.

## Set up Cloudinary

1. Create an account at [cloudinary.com](https://cloudinary.com).
2. On the Cloudinary dashboard, note your **Cloud name**, **API Key** and **API Secret**.
3. In Cloudinary's settings, open **Upload** and add an **upload preset**:
   - Set **Signing mode** to **Unsigned**. Your site uploads straight from the member's browser, which needs an
     unsigned preset.
   - Recommended: limit the allowed formats to video formats such as `mp4`, `mov` and `webm`, and set a maximum
     file size, so the field can't be used to upload anything else.
   - Note the preset's name.
4. In your admin panel, go to **Integrations** and open **Cloudinary**.
5. Fill in the four fields (see the table below) and click **Save**.
{: .steps}

| Setting | What it does |
| --- | --- |
| **Cloudinary API Key** | With the secret, lets your site delete a listing's video from Cloudinary when the listing is deleted. |
| **Cloudinary API Secret** | The secret that goes with the API key. Keep it private. |
| **Cloudinary Cloud Name** | Your Cloudinary account's name. Needed for uploads. |
| **Cloudinary Cloud Preset** | The name of your unsigned upload preset. Needed for uploads. |

The cloud name and preset are enough for uploads. Add the API key and secret too, otherwise videos stay in your
Cloudinary account (and count towards your storage) after their listings are deleted.
{: .tip}

## Add a video field to the posting form

1. Go to **Listings › Custom Fields** and click **New field**.
2. Choose the type **Video**, give it a name and a label such as "Video", and choose the categories it applies to.
3. Click **Create field**.
{: .steps}

See [Custom fields](/how-to-create-custom-fields/) for the other options.

## What members see

In the posting form, the field shows an **Upload Video** button. It opens Cloudinary's upload window, where the
member picks one video from their device. When the upload finishes, a preview appears in the form. When the listing
is published, the video plays on the listing page with the usual play controls.

Each Video field holds one video. To allow more, add more Video fields.

Listing pages play the video as MP4. Most phones record MP4 or MOV, which play in all common browsers, but some
formats don't. If members report videos that don't play, add an incoming transformation to your upload preset that
converts uploads to MP4.
{: .note}

## Good to know

- The **Connected** label on the Integrations page may not show for Cloudinary even when it is set up. Check by
  opening the posting form of a category that has your Video field.
- Videos are public: anyone with the link can watch them, like the photos of a listing.
- If you remove the keys, existing videos keep playing (they are still on Cloudinary), but members can't upload new
  ones.

## Related guides

- [Custom fields](/how-to-create-custom-fields/) — every field type and its options.
- [Files from Google Drive and Dropbox](/cloud-photo-uploads/) — let members attach documents.
- [Photos](/how-to-configure-image-settings/) — photo settings for listings.
{: .cards}
