---
title: Custom CSS
description: Add your own CSS to change colours, fonts, spacing or hide elements when the theme options don't go far enough.
section: design
order: 70
permalink: /how-to-use-custom-css/
keywords: css, custom css, style, stylesheet, colours, fonts, hide element, design, customise, nova variables
updated: 2026-10-07
---

CSS is the language that tells a browser how a page looks: colours, fonts, sizes, spacing, what's visible. With
**Custom CSS** you add your own rules on top of your theme, for changes that [Theme options](/theme-options/)
don't offer, such as a different font size for listing titles or hiding a section you don't need.

You need to know a little CSS to use this page. If you don't, start with Theme options: colours, the logo, the
sidebar and the home page sections are all there.
{: .note}

## Add your CSS

1. In the admin panel, go to **Design › Custom CSS**.
2. Switch on **Use custom CSS**.
3. Type or paste your CSS in the editor (the box labelled `web-custom.css`). The Tab key indents, as in a code editor.
4. Click **Save changes**. You see *CSS file saved*.
5. Open your site and reload the page to check the result.
{: .steps}

Your CSS is loaded on every page visitors and members see, including their account pages, after the theme's own
styles, so your rules win when they target the same thing. It is not loaded in the admin panel, so a mistake can
never lock you out of it.

Each save publishes a new version of the file, so visitors get your changes straight away. **Open saved file**
shows the version that is live.

## Switch it off without losing it

Switch **Use custom CSS** off and click **Save changes**. Your site goes back to the theme's own look, and your CSS
stays in the editor for later. This is the quickest way to check whether a display problem comes from your CSS.

## Find what to change

Your browser can show you which CSS rules style any part of the page:

1. Open your site in Chrome, Edge, Firefox or Safari.
2. Right-click the element you want to change and choose **Inspect**.
3. The panel that opens shows the element's class names (for example `nv-hero`) and the rules that apply to it.
   You can try changes there before copying them to **Custom CSS**.
{: .steps}

## Examples for Nova

Nova keeps its main colours and shapes in CSS variables, so many changes are one line:

```css
/* Rounder or squarer cards and buttons */
:root {
  --nova-radius: 8px;
  --nova-radius-sm: 6px;
}

/* A smaller home page headline */
.nv-hero h1 {
  font-size: clamp(30px, 5vw, 48px) !important;
}

/* Hide the "1,234 listings" counter above the headline */
.nv-hero .nv-pill {
  display: none;
}

/* A taller logo in the header */
.nv-brand img {
  max-height: 56px;
}

/* A coloured footer */
.nv-footer {
  background: #f3f6ff;
}
```

For the accent colour of buttons and links, use **Accent color** in [Theme options](/theme-options/) rather than
CSS: it also adjusts the hover colour and the light tints for you.
{: .tip}

## Things to know

- **Your CSS follows you when you switch theme**, but class names differ between themes, so rules written for one
  theme may do nothing, or something unexpected, in another. Review it after a [theme switch](/how-to-change-theme/).
- **Only CSS goes here.** Don't paste `<style>` or `<script>` tags. For scripts, verification tags or tracking
  codes, use [Add code to the head and footer](/html-in-head-element/).
- **Keep a copy.** Paste your CSS into a text file on your computer before big edits, so you can go back.
- **If the panel says it can't read your file**, it shows an empty editor. Saving the empty editor keeps your
  current CSS; anything you type replaces it. If this persists, [contact support](/use-yclas-support-system/).
- **Changes don't show?** Reload the page with Ctrl+F5 (⌘+Shift+R on a Mac), and check that **Use custom CSS** is
  on. See [My changes don't show up](/changes-not-showing/).

## Related guides

- [Theme options](/theme-options/) — colours, layout and home page without code.
- [Add code to the head and footer](/html-in-head-element/) — scripts and meta tags.
- [Choose and change your theme](/how-to-change-theme/) — and our custom theme service.
{: .cards}
