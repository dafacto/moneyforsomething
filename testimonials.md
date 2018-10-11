---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
permalink: /praise/
title: Praise for Money for Something
---


{% for testimonial in site.data.testimonials %}
  <div class="testimonial">
    <p>{{ testimonial.quote }}</p>
    <div class="testimonial-source">
      <div><img src="/assets/img/{{ testimonial.image }}"></div>
      <div>
        <strong>{{ testimonial.name }}</strong><br>
        <small>{{ testimonial.byline }}</small>
      </div>
    </div>
  </div>
{% endfor %}


