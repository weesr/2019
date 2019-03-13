---
permalink: /submission/
title: "Call for papers"
author_profile: true
classes: wide
redirect_from: 
  - /call-for-papers/
---

{% capture publication %}
#### Publication
SPLC workshop papers will be published in volume 2 of the SPLC conference proceedings published by ACM.
{% endcapture %}
<div class="notice--success">{{ publication | markdownify }}</div>


{% capture submissions %}
#### Submissions
Please send your papers using [EasyChair](https://easychair.org/conferences/?conf=weesr2019)
{% endcapture %}
<div class="notice--success">{{ submissions | markdownify }}</div>


{% capture instructions %}
#### Instructions
* Submissions must must be written in English according to the 2017 [ACM Master Article Template](https://www.acm.org/publications/proceedings-template)
* Papers must be at most 8 pages, including figures, tables and references.
* All the papers must be electronically submitted by [EasyChair](https://easychair.org/conferences/?conf=weesr2019)
* All submissions will be reviewed by at least two (2) experts.
{% endcapture %}
<div class="notice">{{ instructions | markdownify }}</div>

~~~~
%% LaTeX instructions
%% If you are using LaTeX, please use the following template and conference information:

\documentclass[sigconf]{acmart}

\acmConference[SPLC'19]{23rd International Systems and Software Product Line Conference}{9--13 September, 2019}{Paris, France}
~~~~




