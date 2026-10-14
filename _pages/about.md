---
layout: about
title: About
permalink: /
subtitle: Human-Centered AI Researcher
description: Ph.D. candidate in Computer Science at NC State on the 2026–27 faculty job market, researching human–AI co-intelligence in computing education.
academic_home: true
news: true
selected_papers: false
social: false
---

<div class="academic-home scholarly-home">
  <section class="academic-intro" aria-label="About Benyamin Tabarsi">
    <figure class="academic-portrait">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Benyamin Tabarsi" width="1342" height="1791" fetchpriority="high">
    </figure>
    <div class="academic-intro-text">
      <p class="academic-bio">I am a Ph.D. candidate in Computer Science at NC State University, advised by Tiffany Barnes and Dongkuan (DK) Xu. I expect to graduate in May 2027 and am <strong>on the <span class="text-nowrap">2026–27</span> faculty job market</strong>.</p>
      <p class="academic-bio">More help isn’t always better, but less help isn’t always the answer either. I’ve seen both in my studies: AI responses that give students too much of a solution, and programming scaffolds that help beginners do better. My research seeks to understand when and why support helps students learn, and how to design educational tools accordingly.</p>
      <p class="academic-bio">I develop AI-powered tools for computing education and evaluate them in real classrooms. I also study how students, educators, and software developers use and shape AI, as well as the challenges novice programmers face and the scaffolding that supports their learning. My work draws on human–computer interaction, computing education, and AI. I combine system building, mixed-methods research, educational data mining, and participatory design.</p>
      <p class="academic-bio">My long-term goal is to advance human–AI co-intelligence, in which people guide what AI contributes while AI helps them accomplish more and build their own knowledge and skills.</p>
      <div class="academic-actions" role="group" aria-label="Contact and academic profiles">
        <a class="academic-button academic-email" href="mailto:{{ site.email | encode_email }}">{{ site.email }}</a>
        <a class="academic-button" href="{{ '/assets/pdf/Benyamin Tabarsi - CV.pdf' | relative_url }}">CV (PDF)</a>
        <a class="academic-button academic-button-outline" href="https://scholar.google.com/citations?user={{ site.scholar_userid }}">Google Scholar <span aria-hidden="true">↗</span></a>
        <div class="academic-contact">
          <a href="https://orcid.org/{{ site.orcid_id }}" title="ORCID" aria-label="ORCID"><i class="ai ai-orcid" aria-hidden="true"></i></a>
          <a href="https://github.com/{{ site.github_username }}" title="GitHub" aria-label="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/{{ site.linkedin_username }}" title="LinkedIn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
        </div>
        <a class="academic-button academic-button-feature" href="https://exploremq.benyamintabarsi.com/">Explore MerryQuery <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </section>

  <section class="academic-section research-overview" aria-labelledby="directions-heading">
    <div class="academic-section-heading">
      <h2 class="academic-section-title" id="directions-heading"><a href="{{ '/research/' | relative_url }}">Research Directions</a></h2>
      <a class="academic-text-link" href="{{ '/publications/' | relative_url }}">All papers <span aria-hidden="true">→</span></a>
    </div>
    <article class="research-entry" aria-labelledby="learning-story-title">
      <figure class="research-entry-figure">
        <a class="research-figure-link" href="{{ '/assets/img/research/merryquery-helplens.png' | relative_url }}" target="_blank" rel="noopener" aria-label="View the full MerryQuery and HelpLens figure">
          <div class="home-thumb">
            <img src="{{ '/assets/img/research/thumb-merryquery.png' | relative_url }}" alt="MerryQuery explains a programming concept in steps and cites the instructor’s course materials." width="520" height="286" loading="lazy">
          </div>
        </a>
      </figure>
      <div class="research-entry-text">
        <h3 id="learning-story-title"><a href="{{ '/research/#designing-ai-for-learning' | relative_url }}">Designing the GenAI Help Learners Receive</a></h3>
        <p>I designed and deployed <strong>MerryQuery</strong>, used by 750+ students across three semesters, to study AI assistance in computing classrooms. <strong>HelpLens</strong> compares the instructional choices in teaching-staff and LLM responses to authentic programming questions.</p>
        <ul class="research-entry-papers" aria-label="Papers on AI for learning">
          <li><a href="{{ '/publications/#tabarsi2025merryquery' | relative_url }}">MerryQuery</a> <span class="paper-venue">AAAI 2025 · <span aria-hidden="true">🏆</span> Best Demo</span></li>
          <li><a href="{{ '/publications/#tabarsi2026helplens' | relative_url }}">HelpLens: teaching-staff and LLM responses</a> <span class="paper-venue">In preparation</span></li>
        </ul>
      </div>
    </article>

    <article class="research-entry" aria-labelledby="collaboration-story-title">
      <figure class="research-entry-figure">
        <a class="research-figure-link" href="{{ '/assets/img/research/exlaim-collaboration.png' | relative_url }}" target="_blank" rel="noopener" aria-label="View the full ExLAIM and AI roles figure">
          <div class="home-thumb">
            <img src="{{ '/assets/img/research/thumb-exlaim.png' | relative_url }}" alt="An ExLAIM tool shows AI-generated feedback as an editable draft that the teacher reviews before sending." width="520" height="325" loading="lazy">
          </div>
        </a>
      </figure>
      <div class="research-entry-text">
        <h3 id="collaboration-story-title"><a href="{{ '/research/#human-ai-collaboration' | relative_url }}">GenAI in the Hands of Students, Developers, and Teachers</a></h3>
        <p>Through <strong>ExLAIM</strong>, I lead K–12 teachers and undergraduate developers in co-designing classroom AI tools. I also interviewed industry developers about how they evaluate and integrate AI-generated code.</p>
        <ul class="research-entry-papers" aria-label="Papers on human–AI collaboration">
          <li><a href="{{ '/publications/#tabarsi2026codesigning' | relative_url }}">ExLAIM: teachers and developers building together</a> <span class="paper-venue">Under review</span></li>
          <li><a href="{{ '/publications/#tabarsi2026llms' | relative_url }}">LLMs in software development</a> <span class="paper-venue">EMSE 2027</span></li>
          <li><a href="{{ '/publications/#tabarsi2026studentfacing' | relative_url }}">Student-facing LLM tools: a systematic review</a> <span class="paper-venue">Under review</span></li>
        </ul>
      </div>
    </article>

    <article class="research-entry" aria-labelledby="novices-story-title">
      <figure class="research-entry-figure">
        <a class="research-figure-link" href="{{ '/assets/img/research/parsons-scaffolding.png' | relative_url }}" target="_blank" rel="noopener" aria-label="View the full Parsons problems study figure">
          <div class="home-thumb">
            <img src="{{ '/assets/img/research/thumb-parsons.png' | relative_url }}" alt="Six minutes into a programming task, a student using a Parsons scaffold has revised a working rule while a control student’s condition remains empty." width="520" height="225" loading="lazy">
          </div>
        </a>
      </figure>
      <div class="research-entry-text">
        <h3 id="novices-story-title"><a href="{{ '/research/#novice-programmers' | relative_url }}">Novice Struggle and Scaffolding</a></h3>
        <p>I study novice programmers’ struggle and progress using programming traces, think-alouds, and classroom studies. My work on <strong>Parsons problems</strong> examines how scaffolding changes problem-solving processes and outcomes.</p>
        <ul class="research-entry-papers" aria-label="Papers on novice programmers">
          <li><a href="{{ '/publications/#tabarsi2024scaffolding' | relative_url }}">Scaffolding Novices</a> <span class="paper-venue">ICER 2024</span></li>
          <li><a href="{{ '/publications/#reichert2024jigsaw' | relative_url }}">Jigsaw: decomposing and planning programming problems</a> <span class="paper-venue">VL/HCC 2024 · <span aria-hidden="true">🏆</span> Best Paper</span></li>
          <li><a href="{{ '/publications/#tabarsi2023exploring' | relative_url }}">Exploring Novices’ Struggle and Progress</a> <span class="paper-venue">VL/HCC 2023</span></li>
        </ul>
      </div>
    </article>

  </section>

  <section class="academic-section academic-summary" aria-labelledby="teaching-mentoring-heading">
    <div class="academic-section-heading">
      <h2 class="academic-section-title" id="teaching-mentoring-heading"><a href="{{ '/teaching/' | relative_url }}">Teaching</a> &amp; <a href="{{ '/mentoring/' | relative_url }}">Mentoring</a></h2>
    </div>
    <p>As a Preparing the Professoriate Fellow, I co-taught a 250+ student introductory programming course, and I have been a teaching assistant across the computing curriculum, from discrete mathematics to machine learning. I also lead ExLAIM, an NSF-funded project whose six-week program brought K–12 teachers and undergraduate developers together to co-design classroom AI tools. For K–12 teachers, I co-led three iterations of a one-week professional development program on classroom AI use. In my teaching, I prioritize collaborative work and use worked examples to walk through problems with learners.</p>
    <p>In mentoring, I break research into manageable steps, guiding mentees from developing questions and ideas to conducting studies, writing papers, and presenting their work. I have mentored 20 undergraduate researchers from nine institutions, 3 master’s students, and 11 K–12 teachers; 14 have co-authored published or submitted work, and two have begun Ph.D. programs.</p>
  </section>
</div>
