---
layout: page
permalink: /mentoring/
title: Mentoring
nav: true
nav_order: 4
description: "Research mentoring of undergraduate, master's, and K-12 teacher interns in computing education and AI."
---

{% assign m = site.data.mentees %}
{% assign total_mentees = m.undergraduates.size | plus: m.masters.size | plus: m.teachers.size %}
{% assign all_projects = "" %}
{% for group in m %}
{% for s in group[1] %}
{% for p in s.projects %}
{% assign all_projects = all_projects | append: p | append: "||" %}
{% endfor %}
{% endfor %}
{% endfor %}
{% assign projects_arr = all_projects | split: "||" | uniq %}
{% assign total_projects = projects_arr.size %}

<div class="mentoring">

<p class="mentoring-stats">
  {{ total_mentees }} research mentees &middot; {{ total_projects }} projects &middot; 9 institutions across 5 states
</p>

<p class="mentoring-intro">
  Mentoring is the part of research I enjoy most. I work with undergraduates, master's students, and K-12
  teachers on real, publishable projects, and I try to give every mentee ownership of a question they care
  about. Fourteen of my mentees have co-authored published or submitted work. One community-college mentee
  transferred to NC State and stayed on the project, and another is starting a Ph.D. Many of the Summer 2026
  mentees below came through <strong>ExLAIM</strong>, an ExLENT-funded program I lead that pairs student
  developers with K-12 teachers to co-design classroom AI tools.
</p>

<figure class="text-center mb-5" style="max-width: 600px; margin: 0 auto;">
  <img
    src="../assets/img/mentoring/su2023-group-photo.jpeg"
    alt="Yadhira Marcos-Avila, Heidi Reichert, myself, Shiva Gadireddy, and Samantha Gonzalez (from left to right)"
    class="img-fluid rounded z-depth-1"
  >
  <figcaption class="caption">
    Group Photo from Summer 2023: Yadhira Marcos-Avila, Heidi Reichert, myself, Shiva Gadireddy, and Samantha
    Gonzalez (from left to right)
  </figcaption>
</figure>

<h2>Undergraduate Researcher Interns</h2>

{% include mentee_cards.liquid mentees=m.undergraduates %}

<div class="mentoring-divider"></div>

<h2>Teacher Research Interns</h2>

{% include mentee_cards.liquid mentees=m.teachers %}

<div class="mentoring-divider"></div>

<h2>Graduate Developers</h2>

{% include mentee_cards.liquid mentees=m.masters %}

</div>
