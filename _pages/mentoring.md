---
layout: page
permalink: /mentoring/
title: Mentoring
nav: true
nav_order: 4
description: "Mentoring of undergraduate and graduate researchers and teachers in computing education and GenAI projects."
---

## Undergraduate Researchers

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

{% for project_group in site.data.mentees.undergraduates %}

### {{ project_group.project }}

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
  {% for student in project_group.students %}
  <div class="col mb-4">
    <div class="card h-100 hoverable text-center px-3 py-4">
      <div class="mentee-avatar mx-auto mb-3">
        {% if student.img %}
          <img src="{{ student.img }}" alt="{{ student.name }}" loading="lazy">
        {% else %}
          <i class="fa-solid fa-user-graduate" aria-hidden="true"></i>
          <span class="sr-only">No photo available</span>
        {% endif %}
      </div>

      <div class="card-body p-0 d-flex flex-column">
        <h5 class="card-title mb-2">
          {% if student.link %}
            <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
            {{ student.name }}
          {% endif %}
        </h5>

        <div class="text-muted small mb-3">{{ student.institution }}</div>

        <div class="mt-auto text-muted small">
          <i class="fa-solid fa-calendar mr-1" aria-hidden="true"></i>{{ student.term }}
        </div>
      </div>
    </div>

  </div>
  {% endfor %}
</div>
{% endfor %}

<hr>

## Master's Students

{% for project_group in site.data.mentees.masters %}

### {{ project_group.project }}

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
  {% for student in project_group.students %}
  <div class="col mb-4">
    <div class="card h-100 hoverable text-center px-3 py-4">
      <div class="mentee-avatar mx-auto mb-3">
        {% if student.img %}
          <img src="{{ student.img }}" alt="{{ student.name }}" loading="lazy">
        {% else %}
          <i class="fa-solid fa-user-graduate" aria-hidden="true"></i>
          <span class="sr-only">No photo available</span>
        {% endif %}
      </div>

      <div class="card-body p-0 d-flex flex-column">
        <h5 class="card-title mb-2">
          {% if student.link %}
            <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
            {{ student.name }}
          {% endif %}
        </h5>

        <div class="text-muted small mb-3">{{ student.institution }}</div>

        <div class="mt-auto text-muted small">
          <i class="fa-solid fa-calendar mr-1" aria-hidden="true"></i>{{ student.term }}
        </div>
      </div>
    </div>

  </div>
  {% endfor %}
</div>
{% endfor %}

<hr>

## Teacher Research Interns

{% for project_group in site.data.mentees.teachers %}

### {{ project_group.project }}

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
  {% for student in project_group.students %}
  <div class="col mb-4">
    <div class="card h-100 hoverable text-center px-3 py-4">
      <div class="mentee-avatar mx-auto mb-3">
        {% if student.img %}
          <img src="{{ student.img }}" alt="{{ student.name }}" loading="lazy">
        {% else %}
          <i class="fa-solid fa-user-graduate" aria-hidden="true"></i>
          <span class="sr-only">No photo available</span>
        {% endif %}
      </div>

      <div class="card-body p-0 d-flex flex-column">
        <h5 class="card-title mb-2">
          {% if student.link %}
            <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
            {{ student.name }}
          {% endif %}
        </h5>

        <div class="text-muted small mb-3">{{ student.institution }}</div>

        <div class="mt-auto text-muted small">
          <i class="fa-solid fa-calendar mr-1" aria-hidden="true"></i>{{ student.term }}
        </div>
      </div>
    </div>

  </div>
  {% endfor %}
</div>
{% endfor %}
