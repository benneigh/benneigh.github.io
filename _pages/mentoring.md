---
layout: page
scholarly_page: true
permalink: /mentoring/
title: Mentoring
nav: true
nav_order: 4
---

{% assign m = site.data.mentees %}

<div class="mentoring">

<p class="mentoring-stats">
  {{ m.undergraduates.size }} undergraduate researchers from 9 institutions · {{ m.masters.size }} master’s students · {{ m.teachers.size }} K–12 teachers
</p>

<p class="mentoring-intro">
  Mentoring is one of my favorite parts of research. I work with undergraduates, master's students, and K-12
  teachers and I try to give every mentee ownership of a question they care
  about. Fourteen of my mentees have co-authored published or submitted work. One community-college mentee
  transferred to NC State and stayed on the project, and two mentees have begun Ph.D. programs. In Summer 2026, seven undergraduate
  developers (two team leads and five developers) and nine K-12 teachers took part in ExLAIM, an ExLENT-funded program I
  lead, co-designing classroom tools for MerryQuery.
</p>

<h2>Undergraduate Researcher Interns</h2>

{% include mentee_cards.liquid mentees=m.undergraduates %}

<div class="mentoring-divider"></div>

<h2>Teacher Research Interns</h2>

{% include mentee_cards.liquid mentees=m.teachers %}

<div class="mentoring-divider"></div>

<h2>Graduate Developers</h2>

{% include mentee_cards.liquid mentees=m.masters %}

</div>
