---
layout: page
permalink: /mentoring/
title: Mentoring
nav: true
nav_order: 4
description: "Mentoring of undergraduate and graduate researchers and teachers in computing education and GenAI projects."
---

## Undergraduate Researchers

<figure style="max-width: 600px; margin: 0 auto 2rem;" class="text-center">
    <img src="../assets/img/mentoring/su2023-group-photo.jpeg" alt="Yadhira Marcos-Avila, Heidi Reichert, myself, Shiva Gadireddy, and Samantha Gonzalez (from left to right)" class="img-fluid rounded z-depth-1">
    <figcaption style="margin-top: 10px; font-style: italic; font-size: 0.9em;">Group Photo from Summer 2023: Yadhira Marcos-Avila, Heidi Reichert, myself, Shiva Gadireddy, and Samantha Gonzalez (from left to right)</figcaption>
</figure>

{% for project_group in site.data.mentees.undergraduates %}

### {{ project_group.project }}

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
  {% for student in project_group.students %}
  <div class="col">
    <div class="card h-100 hoverable">
      {% if student.img %}
      <img src="{{ student.img }}" class="card-img-top" alt="{{ student.name }}" style="object-fit: cover; height: 250px;">
      {% endif %}
      <div class="card-body">
        <h5 class="card-title">
          {% if student.link %}
          <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
          {{ student.name }}
          {% endif %}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted" style="font-size: 0.9rem;">{{ student.institution }}</h6>
        <p class="card-text" style="font-size: 0.85rem;"><i class="fas fa-calendar pe-1"></i> {{ student.term }}</p>
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

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
  {% for student in project_group.students %}
  <div class="col">
    <div class="card h-100 hoverable">
      {% if student.img %}
      <img src="{{ student.img }}" class="card-img-top" alt="{{ student.name }}" style="object-fit: cover; height: 250px;">
      {% endif %}
      <div class="card-body">
        <h5 class="card-title">
          {% if student.link %}
          <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
          {{ student.name }}
          {% endif %}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted" style="font-size: 0.9rem;">{{ student.institution }}</h6>
        <p class="card-text" style="font-size: 0.85rem;"><i class="fas fa-calendar pe-1"></i> {{ student.term }}</p>
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

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-5">
  {% for student in project_group.students %}
  <div class="col">
    <div class="card h-100 hoverable">
      {% if student.img %}
      <img src="{{ student.img }}" class="card-img-top" alt="{{ student.name }}" style="object-fit: cover; height: 250px;">
      {% endif %}
      <div class="card-body">
        <h5 class="card-title">
          {% if student.link %}
          <a href="{{ student.link }}" target="_blank" rel="noopener noreferrer">{{ student.name }}</a>
          {% else %}
          {{ student.name }}
          {% endif %}
        </h5>
        <h6 class="card-subtitle mb-2 text-muted" style="font-size: 0.9rem;">{{ student.institution }}</h6>
        <p class="card-text" style="font-size: 0.85rem;"><i class="fas fa-calendar pe-1"></i> {{ student.term }}</p>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endfor %}
