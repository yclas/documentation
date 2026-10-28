---
layout: home
title: Yclas Help Centre
description: Step-by-step guides for building, running and growing your marketplace on Yclas.
permalink: /
popular:
  - /how-to-add-categories/
  - /how-to-create-custom-fields/
  - /custom-domain/
  - /setup-payment-gateways/
  - /troubleshooting-email-errors/
---
<section class="home__block">
  <div class="wrap">
    <h2 class="block-title">New to Yclas? Start here</h2>
    <div class="quick-grid">
      <a class="quick" href="/how-to-get-a-free-classifieds-site/"><b>1</b><span><strong>Create your marketplace</strong><small>Sign up and get a site in a couple of minutes.</small></span></a>
      <a class="quick" href="/admin-panel-tour/"><b>2</b><span><strong>Find your way around</strong><small>A quick tour of the admin panel.</small></span></a>
      <a class="quick" href="/how-to-add-categories/"><b>3</b><span><strong>Set up categories</strong><small>Organise what people can list.</small></span></a>
      <a class="quick" href="/how-to-change-theme/"><b>4</b><span><strong>Make it yours</strong><small>Theme, logo, colours and menus.</small></span></a>
      <a class="quick" href="/custom-domain/"><b>5</b><span><strong>Connect your domain</strong><small>Use your own web address.</small></span></a>
      <a class="quick" href="/launch-checklist/"><b>6</b><span><strong>Launch</strong><small>Everything to check before you invite members.</small></span></a>
    </div>
  </div>
</section>

{%- comment -%} Recently updated: the 6 articles with the newest `updated:` date {%- endcomment -%}
{%- assign dated = site.pages | where_exp: "p", "p.updated" | where_exp: "p", "p.section" | sort: "updated" | reverse %}
<section class="home__block">
  <div class="wrap">
    <h2 class="block-title">Recently updated</h2>
    <ul class="recent">
      {%- for d in dated limit: 6 %}
      {%- assign s = site.data.sections | where: "id", d.section | first %}
      <li><a href="{{ d.url }}"><span><strong>{{ d.title }}</strong><em>{{ s.title }}</em></span><small>{{ d.updated | date: "%-d %b %Y" }}</small></a></li>
      {%- endfor %}
    </ul>
  </div>
</section>
