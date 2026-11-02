---
title: Check sellers' IDs automatically with Stripe Identity or Onfido
nav_title: Automatic ID checks
description: Let sellers verify their ID on Stripe Identity's or Onfido's secure page and get the ID verified badge, without you looking at their documents.
section: users
order: 42
permalink: /id-verification/
keywords: id verification, identity verification, id check, kyc, stripe identity, onfido, onfido studio, selfie, liveness, passport, driving licence, driver's license, identity card, verified seller, id verified, badge, webhook, workflow, automatic verification, decide automatically, verify my id
updated: 2026-11-02
plans: Available on all plans
---

<div class="summary" markdown="1">
- Sellers take a photo of their ID on Stripe Identity's or Onfido's secure page instead of uploading it to you.
- A passed check can give the **ID verified** badge straight away, or wait for your approval.
- You use your own Stripe or Onfido account, and they charge you for each check.
- Off by default: until you choose a provider, you check ID documents by hand as before.
</div>

With [verification requests](/review-system-works/#verification-requests), sellers send you a photo of their ID and you
check it yourself. That works while requests are few. As your marketplace grows, an ID verification service can do it
for you: the seller photographs their ID (and, if you like, their face) on the provider's secure page, the provider
checks the document is genuine, and your site gets the result.

Your site supports two providers: **Stripe Identity** and **Onfido**. You use your own account with them, and they
bill you for each check.

## What it does, and what it doesn't

- It checks that the ID document is genuine. With a selfie, it also checks that the person holding the document took
  the photo.
- It does **not** compare the name on the document with the name on the seller's account, and one ID could verify
  several accounts. If that matters on your marketplace, leave **Decide automatically** off and look at each result
  before approving.
- It only handles ID documents, for the **ID verified** badge. Business documents, professional licences and
  insurance certificates are still sent to you and checked by hand (see
  [Verified members](/verified-user/#verification-levels)).

Your site never sees or keeps the seller's ID. It only stores whether the check passed, the provider's reference and a
short reason. The images stay with the provider, under your account with them.
{: .note}

## What you need

- **Verification requests** switched on: **Settings › General › Trust & safety › Verification requests**.
- An account with **Stripe** (with Identity activated) or **Onfido**.
- A budget for the checks. Each check is charged by the provider to your own account, at their prices. See Stripe
  Identity's and Onfido's pricing pages; a selfie usually costs extra.

## Set up Stripe Identity

1. In your Stripe dashboard, activate **Identity**.
2. In your admin panel, go to **Add-ons**, open the **Security** tab and click **ID verification**.
3. Copy the webhook address shown under **Stripe Identity**.
4. In Stripe, add a webhook endpoint with that address, for the events
   `identity.verification_session.verified`, `identity.verification_session.requires_input`,
   `identity.verification_session.processing` and `identity.verification_session.canceled`. Copy its signing secret.
5. Back on **ID verification**, set **Who checks ID documents** to **Stripe Identity**.
6. Paste the signing secret into **Webhook signing secret** (it starts with `whsec_`).
7. Fill in **Secret key** if needed (see below).
8. Tick **Also ask for a selfie matched to the document** if you want a selfie too.
9. Choose whether to **Decide automatically** (see [Decide automatically](#decide-automatically)) and click **Save**.
{: .steps}

**Secret key**: if your site already takes [Stripe payments](/stripe/) with its own keys, you can leave it empty: the
box says *Empty: your Stripe payments key is used*. If you connected Stripe with the one-click button, your site has
no secret key of its own, so enter one here. You can use a secret key (`sk_live_…`) or a restricted key (`rk_live_…`).

A restricted key needs **write** access to Identity verification sessions and **read** access to verification
reports. Without the read access, the limit of 3 failed attempts per check (below) can't work, and a seller could keep
retrying, each attempt possibly charged by Stripe.
{: .warning}

## Set up Onfido

1. In **Onfido Studio**, build a workflow, for example document and selfie, and copy its **Workflow ID**.
2. In your admin panel, go to **Add-ons**, open the **Security** tab and click **ID verification**.
3. Copy the webhook address shown under **Onfido**.
4. In Onfido, add a webhook for the event `workflow_run.completed` at that address, and copy its token.
5. Create an API token in Onfido.
6. Back on **ID verification**, set **Who checks ID documents** to **Onfido**.
7. Choose the **Region of your account**: **Europe**, **United States** or **Canada**. It must be the region your
   Onfido account is in.
8. Paste the **Workflow ID**, the **API token** and the **Webhook token**.
9. Choose whether to **Decide automatically** and click **Save**.
{: .steps}

## Settings

| Setting | What it does |
| --- | --- |
| **Who checks ID documents** | **The site team, by hand (default)**, **Stripe Identity** or **Onfido**. |
| **Decide automatically** | A passed check gives the badge at once. Unticked, each result is written on the request and you approve or reject it yourself. |
| **Secret key** (Stripe) | Optional when your site takes Stripe payments with its own keys. |
| **Webhook signing secret** (Stripe) / **Webhook token** (Onfido) | Lets your site receive results the moment they are ready. |
| **Also ask for a selfie matched to the document** (Stripe) | The seller also takes a selfie, which Stripe matches to the photo on the ID. With Onfido, the selfie is part of the workflow you build. |
| **Region of your account**, **Workflow ID**, **API token** (Onfido) | Your Onfido account's details. |

Saved keys and tokens are never shown again: the box says *Already set. Leave blank to keep it.* To replace one, type
the new one. To delete it, tick **Remove the saved one** and click **Save**.

The webhooks are optional but strongly recommended. Without them, a result only arrives when the seller comes back to
their **Trust & verification** page.
{: .tip}

## What the seller sees

Under **Get verified** on their **Trust & verification** page, the seller sees *Verify your ID online with Stripe
Identity* (or Onfido) and a **Verify my ID with Stripe Identity** button. Business documents and licences are still
uploaded with the form below it.

1. The seller clicks **Verify my ID with …** and goes to the provider's secure page.
2. They photograph their ID (and their face, if you asked for a selfie) and finish there.
3. The provider sends them back to their **Trust & verification** page, which shows the result: *Your ID is
   verified.*, *Thanks! Your ID is being checked. We will let you know by email.*, or another message.
{: .steps}

If they leave before finishing, the card says *Your ID check is not finished, or is still being checked.* with two
buttons:

- **Continue your ID check** takes them back to the provider's page.
- **Start again** cancels the check and lets them start a new one.

A check left unfinished for more than a day has expired: the seller is asked to start again. A seller can start up to
3 requests a day, and starting again counts as a new request.

## Decide automatically

| Result | **Decide automatically** on | Off |
| --- | --- | --- |
| The check passed | The seller gets the **ID verified** badge and an email at once. | The result is written on the request. You approve it. |
| Onfido declined it | The request is rejected with Onfido's reason, and the seller is told by email. | The result is written on the request. You decide. |
| A Stripe attempt failed | The seller can try again in the same check, up to 3 attempts. After the third, the check is closed and they can start a new one. | The same, and the result is written on the request. |
| The provider couldn't decide | The request stays with you in **Verification requests**. | The same. |
| The seller didn't finish, or started again | The check is closed without an email, and the seller can start a new one. | The same. |

## Your verification requests

Requests checked online appear with the others: go to **Add-ons › Trust & safety** and click **Verification
requests**.

- While a check isn't finished, the request says *Checked online by Stripe Identity: the seller has not finished, or
  the result is not in yet.* and only **Reject** is shown. **Approve** appears once the result is in.
- With **Decide automatically** off, the provider's result is shown on the request, for example *Stripe Identity: the
  ID check passed.* Then approve or reject it as usual.
- **Reject** also cancels the check at the provider, so the seller can't finish it afterwards.

There is no **Open document** link for these requests: the document stays with the provider. To see it, look the
check up in your Stripe or Onfido dashboard.

## Privacy

Your site doesn't store or download any ID images or ID data. Onfido receives the seller's name to open the check;
nothing else about them is sent from your site. Stripe gets only what the seller enters on its page, plus an internal number that links the check to their account.

Mention the provider you use in your [privacy policy](/cookie-consent/), as the settings page reminds you.

## Troubleshooting

**"Stripe Identity is chosen but its keys are missing, so ID documents still go to the site team."** Sellers still
upload IDs for you to check. Add the missing secret key (Stripe, if your site has no Stripe payments key) or the API
token and workflow ID (Onfido).

**"The Stripe key must be a secret key (sk_...) or a restricted key (rk_...)."**
Use the secret key (`sk_…`) or a restricted key (`rk_…`), not the publishable key (`pk_…`).

**"The Stripe webhook signing secret starts with whsec_."** Copy the signing secret of the webhook endpoint, not your
API key.

**"The Onfido workflow ID is not valid."** Copy the workflow's ID from Onfido Studio, not its name.

**Sellers see "We could not reach the ID check service" or "The ID check could not be started".** Check your keys,
that Identity is activated in Stripe, and for Onfido that the region matches your account.

**Results only arrive when the seller comes back.** The webhook is missing or its secret is wrong. Check the webhook
address and events in the provider's dashboard, and paste the signing secret or token again.

**The ID verification page says verification requests are switched off.** Switch on **Verification requests** in
**Settings › General › Trust & safety**.

## Related guides

- [Verified members](/verified-user/) — the verified badge and its levels.
- [Verification requests](/review-system-works/#verification-requests) — checking documents by hand.
- [Stripe and Stripe Connect](/stripe/) — the Stripe keys your site already uses.
- [Business sellers](/business-sellers/) — business accounts and their details.
{: .cards}
