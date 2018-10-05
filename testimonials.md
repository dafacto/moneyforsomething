---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /praise/
---

# Praise for Money for Something


{% for testimonial in site.data.testimonials %}

<img src="/assets/img/{{ testimonial.image }}">

<strong>{{ testimonial.name }}</strong><br>
{{ testimonial.byline }}

{{ testimonial.quote }}

{% endfor %}


