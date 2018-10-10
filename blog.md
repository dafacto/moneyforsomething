---
layout: page
permalink: /blog/
---

# Blog

<ol>

{% for post in site.posts %}
  <li><a href="{{post.url}}">{{ post.title }}</a></li>
{% endfor %}

</ol>
