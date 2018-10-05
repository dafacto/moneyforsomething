---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
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


