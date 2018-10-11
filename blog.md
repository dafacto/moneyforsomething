---
layout: page
permalink: /blog/
title: The Money for Something Blog
---

<ul class="posts">
{% for post in site.posts %}
  <li><a href="{{post.url}}">
    <span>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      {{ post.date | date: date_format }}
    </span>
    {{ post.title }}
  </a></li>
{% endfor %}
</ul>
