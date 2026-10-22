---
title: DAC7 seller report for EU marketplaces
nav_title: DAC7 seller report
description: Collect your sellers' tax details and download the yearly figures the EU's DAC7 rules ask marketplaces to report to the tax office.
section: payments
order: 165
permalink: /dac7-seller-report/
keywords: dac7, dac 7, eu directive 2021/514, platform reporting, seller reporting, tax report, tax office, tax details, tin, tax identification number, seller tax, de minimis, 30 sales, 2000 euros, reportable sellers, oecd, model rules, digital platforms, sellers report
updated: 2026-10-22
---

Under the EU's DAC7 rules, a marketplace where people sell goods, rent out property or offer services must collect
each seller's tax details and tell the tax office, once a year, what each seller was paid. Yclas helps you do it:
sellers enter their tax details in their account, and you download the year's figures, seller by seller and quarter
by quarter, to file with your tax office.

Yclas prepares the figures; filing the report is up to you. This page is not tax advice. Check with your tax office
or accountant whether DAC7 applies to your marketplace and how to file.
{: .important}

## Switch it on

DAC7 is off until you switch it on.

1. Open the **DAC7 seller report** page: go to **Analytics**, click **Sales between your users and your commission**,
   then **DAC7 seller report (EU)** at the bottom of the page. You can also open `/oc-panel/dac7` on your site.
2. Tick **Ask sellers for their tax details**.
3. Click **Save**.
{: .steps}

Only administrators can open this page; moderators can't see sellers' tax details. If the switch is greyed out with
*Set by Yclas support for this site*, ask us through **Support** to change it.

## What sellers fill in

Sellers get a **Tax details** page in their account (in the Nova account menu; in other themes it is at
`/oc-panel/taxdetails`). They choose whether they sell as an individual or a business, and enter:

- their full legal name or registered business name;
- their tax identification number (TIN) and the country that issued it;
- their VAT number, if they have one;
- their date of birth (individuals) or business registration number (businesses);
- the country where they live or the business is established;
- their primary address;
- optionally, the IBAN of the account they are paid into.

The tax number, date of birth, address and IBAN are stored encrypted, and are only used for this report. Nothing
changes for buyers.

## The yearly report

When DAC7 is on, the page shows one year at a time; pick the year at the top (up to four years back).

| Part | What it shows |
| --- | --- |
| **Sellers paid** | Every seller who was paid on your site in that year. |
| **To report** | The sellers you must report. |
| **Details missing** | Sellers you must report whose tax details are missing or incomplete. |

The table lists each seller with whether they must be reported, whether their tax details are **Complete**,
**Incomplete** or **Missing**, their number of sales and bookings, what they were paid and the fees you kept.

- **Paid to seller** is the price less your commission, with refunds left out.
- **Your fees** are the commission and service fees you kept.
- **Who is left out:** a seller of goods with fewer than 30 sales and no more than €2,000 in the year
  (**Under the limits**), and sellers whose country is outside the EU (**Outside the EU**). Bookings (services and
  rentals) have no lower limit. A seller who hasn't entered their details yet is treated as reportable.
- Amounts in another currency than euros aren't converted, so check those sellers yourself.
- Your own administrators are never counted as sellers.

## Download and remind

- **Download CSV (sellers to report)** saves the reportable sellers, with their tax details and every figure per
  quarter, for your filing.
- **Download CSV (all sellers)** saves every seller paid that year.
- **Remind *n* sellers with missing details** emails the reportable sellers whose details are missing. The email asks
  them to add their tax details and has a button to the **Tax details** page. A seller isn't reminded again within
  7 days.

If some sales can't be matched to a seller (their listing was deleted and they were paid outside Stripe Connect, so
nothing names the seller), the page says how many and for how much. Find them in **Orders** and add them to the
seller's figures yourself.
{: .note}

## Related guides

- [Marketplace sales report](/marketplace-sales-report/) — everything your members sold, and what you earned.
- [EU VAT](/eu-vat/) — charge VAT on what you sell.
- [Commission and service fees](/commission-and-service-fees/) — the fees that appear in the report.
- [Business sellers](/business-sellers/) — business accounts and their details.
{: .cards}
