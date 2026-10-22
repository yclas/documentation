---
title: Sell digital downloads
description: Let sellers attach a file to a listing, stored privately, so only buyers who paid can download it a set number of times.
section: payments
order: 170
permalink: /sell-digital-goods/
keywords: digital goods, digital products, digital downloads, download, downloads, digital file, file, ebook, e-book, pdf, templates, patterns, music, sell files, download limit, downloads per purchase, private file, protected download, dropbox, google drive, google picker, file_download, buyer instructions
updated: 2026-10-22
---

Sellers can sell files on your marketplace: e-books, sewing patterns, music, photos, templates, plans. The seller
uploads the file to their listing, a buyer pays with [Buy Now](/pay-directly-from-ad/), and the buyer gets a private
download link. Nobody else can open the file: not visitors, not search engines, not someone the buyer forwards an old
link to.

There are two ways to sell files. **Digital downloads** (below) is the one to use: the file is kept privately on your
site. The older way, a [Dropbox or Google Drive field](#the-older-way-a-dropbox-or-google-drive-field), still works
on sites that use it.

## Switch on digital downloads

Digital downloads are off until you switch them on. They sit with the Buy Now settings, so set up Buy Now first (see
[Let members sell with Buy Now](/pay-directly-from-ad/)).

1. Go to **Make money** and click **Manage** on the **Take a commission on sales** card to open the **Commission on
   sales** page.
2. With **Buy now** on, switch on **Digital downloads**.
3. In **Downloads per purchase**, choose how many times a buyer may download what they bought: from 1 to 100,
   5 by default.
4. Click **Save**.
{: .steps}

If the switch is missing, Yclas support has set it for your site; ask us through **Support** to change it.

## How sellers add a file

1. In **My Listings**, open the listing's menu (the **···** button in Nova, the download icon in other themes) and
   click **Digital file**.
2. Choose the file and click **Upload file**.
{: .steps}

Each listing has one file, up to 200 MB. Sellers can upload documents and books (PDF, EPUB, MOBI, Word, Excel,
PowerPoint), archives (ZIP, 7Z, RAR), audio and video (MP3, WAV, FLAC, MP4, MOV), images and design files (JPG, PNG,
TIFF, PSD, AI, EPS), 3D models (STL, OBJ, 3MF) and fonts. To change the file, upload a new one with **Replace file**;
**Remove the file** takes it off the listing.

The listing needs a price and Buy Now like any other listing. A listing with a file:

- asks the buyer for no shipping address and adds no shipping cost;
- is never marked as sold and takes nothing from its stock, so it can be sold again and again.

## What the buyer gets

1. The buyer clicks **Buy Now** and pays.
2. The purchase email (*ads-purchased*) holds a **Download** link. The link works for 24 hours.
3. Signed in, the buyer can also download it any time from **My Payments**, with a **Download** button that shows how
   many downloads are left.
{: .steps}

Each download counts towards the **Downloads per purchase** limit. When it is used up, the buyer sees *Downloaded the
maximum number of times* and is asked to contact the seller. The file itself is handed out through a link that
expires after a few minutes, so a copied link soon stops working.

## Good to know

- **Refunds and cancellations.** A refunded or cancelled order can't download the file any more.
- **Deleted listings.** Buyers who paid keep their download if the seller later deletes the listing.
- **Removing the file.** If a seller removes the file, buyers who already paid can no longer download it. Ask sellers
  to replace a file rather than remove it.
- **Switching off.** If you switch digital downloads off, sellers can't add files and listings are sold normally
  again. Everything already bought can still be downloaded.
- **Buyer instructions.** A `buyer_instructions` field, for a licence key or how to install, still works: its text
  goes into the same email. See [Special-purpose fields](/special-custom-fields/).

## The older way: a Dropbox or Google Drive field

Before digital downloads, sellers attached a file from Dropbox or Google Drive through a custom field named
`file_download`, and the buyer got that file's own Dropbox or Google Drive link in their purchase email.

This still works, with these limits:

- The link is the file's own sharing link. Anyone who has it can pass it on, and there's no download limit.
- Google Drive files must be shared as *anyone with the link can view*, and Dropbox may expire its links after a few
  hours.
- Without [stock control](/stock-control/), the listing is marked as sold after its first sale. Switch on **Stock
  Control** in **Settings › Payments** and ask sellers to set **In Stock** to the number of copies they want to sell.

When a listing with a `file_download` link has a price, the link is never shown on the listing page: only the seller
and buyers who paid (in their purchase email) get it. A listing without a price shows a free **Download** button
instead of **Buy Now** in the Nova and Default themes.

For new files, use digital downloads instead: the file stays private and the number of downloads is limited.
{: .tip}

## Related guides

- [Let members sell with Buy Now](/pay-directly-from-ad/) — payments to sellers, stock and quantities.
- [Commission and service fees](/commission-and-service-fees/) — what you keep from each sale.
- [Checkout, payments and invoices for members](/member-payments/) — My Payments and My Sales.
- [Special-purpose fields](/special-custom-fields/) — `buyer_instructions` and other reserved names.
{: .cards}
