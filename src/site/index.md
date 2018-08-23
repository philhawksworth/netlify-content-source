---
title: Content Subscriptions
subtitle: A singel source of content which can publish to otehr sites
layout: layouts/base.njk
---



## Content feeds

This site published the following content feeds which other sites can consume:

<ul class="listing">
{%- for page in collections.feed -%}
  <li><a href="{{ page.url }}">{{ page.url }}</a></li>
{%- endfor -%}
</ul>


## Subscribe to the feeds

Currently, you can't subscribe to be notified of changes per feed, you'll be notified when any feed changes. Subscribe by posting the _build hook url_ of your site to this form.

<form name="subscribe" netlify>
  <label>Netlify Deploy Hook URL</label>
  <input id="deploy_hook" name="deploy_hook" type="text" />
  <input type="submit" value="subscribe">
</form>

## Unsubscribe from the feeds

Subscribe by posting the _build hook url_ of your site to this form



