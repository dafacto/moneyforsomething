---
layout: page
title: Books & Podcasts
permalink: /books/
---

# Reading List


{% for book in site.data.books %}

{{ book.url }}


<a href="{{ book.url }}"><img src="/assets/img/{{ book.image }}"></a>

<strong>{{ book.title }}</strong><br>
{{ book.author }}

{{ book.description }}


{% endfor %}


