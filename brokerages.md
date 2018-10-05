---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
permalink: /brokerages/
---

# Brokerages


{% for brokerage in site.data.brokerages %}

<a href="{{ brokerage.url }}"><strong>{{ brokerage.name }}</strong></a> ({{ brokerage.country }})<br>
{{ brokerage.description }}

{% endfor %}


