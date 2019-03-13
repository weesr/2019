---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
sitemap: false
classes: wide
---

{% include base_path %}

A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.

---

{% for post in site.pages %}
  {% if post.url contains '404.html'  or post.sitemap == false %}
  {% else %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
