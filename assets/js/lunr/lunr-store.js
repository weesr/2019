---
layout: null
---

var store = [
  {%- for doc in site.pages -%}
    {%- if doc.url contains '404.html' or doc.url contains '/assets/' or doc.url contains '.xml' or doc.url contains '/sitemap/' or doc.url contains '.txt' or doc.sitemap == false  -%}
    {%- else -%}
      {%- if doc.header.teaser -%}
        {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture -%}
      {%- else -%}
        {%- assign teaser = site.teaser -%}
      {%- endif -%}
      {
        "title": {{ doc.title | jsonify }},
        "excerpt":
          {%- if site.search_full_content == true -%}
            {{ doc.content | newline_to_br |
              replace:"<br />", " " |
              replace:"</p>", " " |
              replace:"</h1>", " " |
              replace:"</h2>", " " |
              replace:"</h3>", " " |
              replace:"</h4>", " " |
              replace:"</h5>", " " |
              replace:"</h6>", " "|
              replace:"#", " " |
              replace:"##", " " |
              replace:"###", " " |
              strip_html | strip_newlines | jsonify }},
          {%- else -%}
            {{ doc.content | newline_to_br |
              replace:"<br />", " " |
              replace:"</p>", " " |
              replace:"</h1>", " " |
              replace:"</h2>", " " |
              replace:"</h3>", " " |
              replace:"</h4>", " " |
              replace:"</h5>", " " |
              replace:"</h6>", " "|
              replace:"#", " " |
              replace:"##", " " |
              replace:"###", " " |
            strip_html | strip_newlines | truncatewords: 50 | jsonify }},
          {%- endif -%}
        "categories": {{ doc.categories | jsonify }},
        "tags": {{ doc.tags | jsonify }},
        "url": {{ doc.url | absolute_url | jsonify }},
        "teaser":
          {%- if teaser contains "://" -%}
            {{ teaser | jsonify }}
          {%- else -%}
            {{ teaser | absolute_url | jsonify }}
          {%- endif -%}
      }{%- endif -%}{%- unless forloop.last -%},{%- endunless -%}
  {%- endfor -%}]
