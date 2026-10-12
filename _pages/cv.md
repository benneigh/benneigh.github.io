---
layout: page
scholarly_page: true
permalink: /cv/
title: CV
nav: true
nav_order: 6
cv_pdf: Benyamin Tabarsi - CV.pdf
---

{% assign cv_url = '/assets/pdf/' | append: page.cv_pdf | relative_url %}

<div class="cv-page">
  <div class="cv-pdf-actions">
    <a class="cv-pdf-download" href="{{ cv_url }}">Download CV (PDF) <span aria-hidden="true">↓</span></a>
    <span class="cv-pdf-updated">Last updated October 2026</span>
  </div>

  <div class="cv-pdf-frame">
    <embed src="{{ cv_url }}" type="application/pdf" title="Benyamin Tabarsi CV">
  </div>
  <p class="cv-pdf-fallback">If the PDF does not display here, <a href="{{ cv_url }}">open it directly</a>.</p>
</div>
