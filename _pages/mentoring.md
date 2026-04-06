---
layout: page
permalink: /mentoring/
title: Mentoring
nav: true
nav_order: 4
description: "Research mentoring of undergraduate and teacher interns in computing education and AI."
---

{% assign total_mentees = site.data.mentees.undergraduates.size | plus: site.data.mentees.teachers.size %}
{% assign all_projects = "" %}
{% for s in site.data.mentees.undergraduates %}
{% for p in s.projects %}
{% assign all_projects = all_projects | append: p | append: "||" %}
{% endfor %}
{% endfor %}
{% for s in site.data.mentees.teachers %}
{% for p in s.projects %}
{% assign all_projects = all_projects | append: p | append: "||" %}
{% endfor %}
{% endfor %}
{% assign projects_arr = all_projects | split: "||" | uniq %}
{% assign total_projects = projects_arr.size %}

<div class="mentoring">

<p class="mentoring-stats">
  {{ total_mentees }} research mentees &middot; {{ total_projects }} projects
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

## Undergraduate Researcher Interns

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
  {% for student in site.data.mentees.undergraduates %}
  <div class="col mb-4">
    <div class="card mentee-card h-100 text-center">
      <div class="mentee-avatar">
        {% if student.img %}
          <img src="{{ student.img }}" alt="{{ student.name }}" loading="lazy">
        {% else %}
          <i class="fa-solid fa-user-graduate" aria-hidden="true"></i>
          <span class="sr-only">No photo available</span>
        {% endif %}
      </div>
      <div class="card-body px-3 py-3 d-flex flex-column">
        <h5 class="mentee-name mb-1">
          {% if student.link %}
            <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
            {{ student.name }}
          {% endif %}
        </h5>
        <div class="mentee-project mb-1">
          {% for project in student.projects %}{{ project }}{% unless forloop.last %} · {% endunless %}{% endfor %}
        </div>
        <div class="mentee-institution text-muted mb-2">{{ student.institution }}</div>
        <div class="mt-auto">
          <span class="mentee-term-badge">
            <i class="fa-regular fa-calendar mr-1" aria-hidden="true"></i>{{ student.term }}
          </span>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<div class="mentoring-divider"></div>

## Teacher Research Interns

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
  {% for student in site.data.mentees.teachers %}
  <div class="col mb-4">
    <div class="card mentee-card h-100 text-center">
      <div class="mentee-avatar">
        {% if student.img %}
          <img src="{{ student.img }}" alt="{{ student.name }}" loading="lazy">
        {% else %}
          <i class="fa-solid fa-user-graduate" aria-hidden="true"></i>
          <span class="sr-only">No photo available</span>
        {% endif %}
      </div>
      <div class="card-body px-3 py-3 d-flex flex-column">
        <h5 class="mentee-name mb-1">
          {% if student.link %}
            <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
            {{ student.name }}
          {% endif %}
        </h5>
        <div class="mentee-project mb-1">
          {% for project in student.projects %}{{ project }}{% unless forloop.last %} · {% endunless %}{% endfor %}
        </div>
        <div class="mentee-institution text-muted mb-2">{{ student.institution }}</div>
        <div class="mt-auto">
          <span class="mentee-term-badge">
            <i class="fa-regular fa-calendar mr-1" aria-hidden="true"></i>{{ student.term }}
          </span>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<div class="mentoring-divider"></div>

## Graduate Developers

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
  {% for student in site.data.mentees.masters %}
  <div class="col mb-4">
    <div class="card mentee-card h-100 text-center">
      <div class="mentee-avatar">
        {% if student.img %}
          <img src="{{ student.img }}" alt="{{ student.name }}" loading="lazy">
        {% else %}
          <i class="fa-solid fa-user-graduate" aria-hidden="true"></i>
          <span class="sr-only">No photo available</span>
        {% endif %}
      </div>
      <div class="card-body px-3 py-3 d-flex flex-column">
        <h5 class="mentee-name mb-1">
          {% if student.link %}
            <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
            {{ student.name }}
          {% endif %}
        </h5>
        <div class="mentee-project mb-1">
          {% for project in student.projects %}{{ project }}{% unless forloop.last %} · {% endunless %}{% endfor %}
        </div>
        <div class="mentee-institution text-muted mb-2">{{ student.institution }}</div>
        <div class="mt-auto">
          <span class="mentee-term-badge">
            <i class="fa-regular fa-calendar mr-1" aria-hidden="true"></i>{{ student.term }}
          </span>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

</div>
