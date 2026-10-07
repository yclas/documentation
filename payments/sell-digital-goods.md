---
title: Sell digital downloads
description: Let sellers attach a file from Dropbox or Google Drive to a listing and send the download link to buyers after they pay.
section: payments
order: 170
permalink: /sell-digital-goods/
keywords: digital goods, digital products, download, downloads, file, ebook, pdf, templates, sell files, dropbox, google drive, google picker, file_download, buyer instructions
updated: 2026-10-07
---

Sellers can sell files on your marketplace: e-books, templates, music, photos, plans. The seller attaches the file
from their Dropbox or Google Drive when they post, the buyer pays with [Buy Now](/pay-directly-from-ad/), and the
download link arrives in the buyer's purchase email.

## What you need

- **Buy Now** switched on with a method that pays sellers: Stripe Connect, PayPal's **Buy Now button** or the
  eWallet. See [Let members sell with Buy Now](/pay-directly-from-ad/).
- **Stock Control** on (see below).
- Dropbox or Google Drive connected, so sellers can pick their file.
- A custom field named `file_download`.

## Set it up

1. Connect a file picker in **Integrations**: **Dropbox** (enter your **Dropbox App Key**) or **Google Picker**
   (enter the **Google Picker API Key** and **Google Picker Client ID**). The steps for creating these keys are in
   [Upload photos from Google Drive and Dropbox](/cloud-photo-uploads/).
2. Go to **Listings › Custom Fields** and create a field:
   - **Name**: `file_download` (exactly this, in lower case);
   - **Type**: **File Dropbox** or **File Google Drive**;
   - **Values**: the file types sellers may choose, separated by commas, for example `.pdf,.zip,.epub`;
   - **Categories**: the categories where files are sold, or none for all.
3. Go to **Settings › Payments**, switch on **Stock Control** and click **Save changes**.
{: .steps}

Without stock control, a listing is marked as sold after its first sale, which is rarely what you want for a file.
With it on, sellers set **In Stock** to the number of copies they want to sell, for example 1000.
{: .important}

## How it works

1. The seller posts a listing with a price and picks their file with the Dropbox or Google Drive button.
2. A buyer clicks **Buy Now** and pays.
3. The buyer gets the *ads-purchased* email with a **Download** link, after any buyer instructions.
4. The seller sees the sale, with the same link, in **My Sales**.
{: .steps}

Add a `buyer_instructions` field if sellers need to tell buyers something with the file, such as a licence key or how
to install it. Its text goes into the same email. See [Special-purpose fields](/special-custom-fields/).

## Things to know

- **The link is the file's own Dropbox or Google Drive link.** Anyone who has it can share it. Don't use this for
  files that must stay strictly private.
- **Google Drive files must be shared.** Sellers need to set the file to *anyone with the link can view*, or buyers
  won't be able to open it.
- **Dropbox links can stop working.** The Dropbox picker gives a direct link that Dropbox may expire after a few
  hours. If buyers report broken links, ask sellers to use Google Drive, or to send a lasting link in the
  `buyer_instructions` field.
- **Free files.** If a listing has a file but no price (or Buy Now is off), the Nova theme shows a free **Download**
  button on the listing instead of **Buy Now**.

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — payments to sellers, stock and quantities.
- [Custom fields](/how-to-create-custom-fields/) — creating fields.
- [Special-purpose fields](/special-custom-fields/) — `buyer_instructions` and other reserved names.
{: .cards}
