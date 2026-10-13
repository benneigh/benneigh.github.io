---
layout: page
scholarly_page: true
title: Research
permalink: /research/
nav: true
nav_order: 1
---

<div class="research-page">
  <nav class="section-cards" aria-label="Research directions">
    <a class="section-card" href="#designing-ai-for-learning">
      <span class="section-card-number" aria-hidden="true">01</span>
      <span class="section-card-title">Designing the GenAI Help Learners Receive</span>
      <span class="section-card-text">Which choices in AI assistance help students develop understanding and judgment?</span>
    </a>
    <a class="section-card" href="#human-ai-collaboration">
      <span class="section-card-number" aria-hidden="true">02</span>
      <span class="section-card-title">GenAI in the Hands of Students, Developers, and Teachers</span>
      <span class="section-card-text">How do people use, judge, and shape AI in the settings where they learn and work?</span>
    </a>
    <a class="section-card" href="#novice-programmers">
      <span class="section-card-number" aria-hidden="true">03</span>
      <span class="section-card-title">Novice Struggle and Scaffolding</span>
      <span class="section-card-text">Where do learners struggle, and which scaffolds help them reason, plan, and make progress?</span>
    </a>
  </nav>

  <section class="research-direction" id="designing-ai-for-learning" aria-labelledby="learning-title">
    <span class="research-direction-number" aria-hidden="true">01</span>
    <h2 id="learning-title">Designing the GenAI Help Learners Receive</h2>
    <p class="research-question">Which choices in AI assistance help students develop understanding and judgment?</p>
    <div class="research-detail-grid">
      <div>
        <p>I designed and deployed <strong>MerryQuery</strong>, an educational assistant that grounds its responses in course materials, cites sources, structures explanations as steps, and gives instructors control over how much of a solution it reveals. It has supported more than 750 students across three semesters and received the AAAI 2025 Best Technical Demonstration Award.</p>
        <p>In a 14-week classroom study, 162 consenting students generated more than 4,000 queries. Seventy-one percent reported that the assistant helped them learn, yet students ranked teaching assistants and course materials above it. These findings motivate closer study of the instructional choices behind AI help.</p>
        <p>I developed <strong>HelpLens</strong>, an eight-dimension framework and annotated dataset comparing teaching-staff and LLM responses to 172 authentic programming questions. The model offered code more often; staff more often calibrated help to the type of question. This work characterizes assistance and informs future studies of its effects on learning.</p>
      </div>
      <figure class="research-figure">
        <div class="academic-figure-crop crop-merryquery">
          <img src="{{ '/assets/img/research/merryquery-helplens.png' | relative_url }}" alt="An annotated MerryQuery response demonstrates step-by-step explanations and citations to course materials." loading="lazy" width="1350" height="1484">
        </div>
        <figcaption>MerryQuery makes the source and structure of its assistance visible. Instructors can shape the help to fit their course.</figcaption>
        <a class="figure-source" href="https://exploremq.benyamintabarsi.com/">Explore the system <span aria-hidden="true">↗</span></a>
      </figure>
    </div>
    <div class="research-work">
      <h3>Selected work</h3>
      <ul>
        <li><a href="{{ '/publications/#tabarsi2025merryquery' | relative_url }}">MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students</a><span class="work-venue">AAAI 2025 · Best Demo</span><p>I led the design and evaluation of the classroom assistant.</p></li>
        <li><a href="{{ '/publications/#tabarsi2026merryquery' | relative_url }}">MerryQuery in the Loop: How Students Use and Perceive a GenAI-Powered Assistant</a><span class="work-venue">SIGCSE 2026 · SRC poster</span><p>A semester-long study of students' use and perceptions of GenAI support.</p></li>
        <li><a href="{{ '/publications/#tabarsi2026helplens' | relative_url }}">Characterizing Teaching Staff and LLM Responses to Forum Queries in Introductory Programming</a><span class="work-venue">In preparation</span><p>HelpLens: a pedagogical framework and annotated dataset for analyzing instructional choices.</p></li>
      </ul>
    </div>
    <div class="research-future"><h3>Where this work is going</h3><p>I will compare evaluation-first, production-first, and balanced learning activities, using MerryQuery and HelpLens to study how assistance affects students' independent debugging, explanation, and verification skills after a delay.</p></div>
  </section>

  <section class="research-direction" id="human-ai-collaboration" aria-labelledby="collaboration-title">
    <span class="research-direction-number" aria-hidden="true">02</span>
    <h2 id="collaboration-title">GenAI in the Hands of Students, Developers, and Teachers</h2>
    <p class="research-question">How do people use, judge, and shape AI in the settings where they learn and work?</p>
    <div class="research-detail-grid">
      <div>
        <p>In interviews with 16 early-adopter software developers, we found that LLMs supported implementation, refactoring, and debugging, while people continued to check, revise, and often discard the output. Human judgment and foundational knowledge remained central to their work.</p>
        <p>I led a systematic review of 52 studies of student-facing LLM tools in computing education. Most evaluated students' perceptions; fewer measured academic performance. None cast AI as a teammate, opening questions about how AI might support peer learning.</p>
        <p>I lead <strong>ExLAIM</strong>, an NSF ExLENT-funded co-design program. In Summer 2026, nine K–12 teachers and seven undergraduate developers built five classroom tools on MerryQuery. Teachers asked for human checkpoints: editable drafts, review before release, and control over when AI contributes.</p>
      </div>
      <figure class="research-figure">
        <div class="academic-figure-crop crop-exlaim">
          <img src="{{ '/assets/img/research/exlaim-collaboration.png' | relative_url }}" alt="Two ExLAIM interfaces: editable AI feedback drafts and a teacher view of peer-to-peer help requests in Team Mode." loading="lazy" width="1327" height="1127">
        </div>
        <figcaption>Tools co-designed in ExLAIM preserve teacher review and make peer help visible through Team Mode.</figcaption>
      </figure>
    </div>
    <div class="research-work">
      <h3>Selected work</h3>
      <ul>
        <li><a href="{{ '/publications/#tabarsi2026llms' | relative_url }}">LLMs' Reshaping of People, Processes, Products, and Society in Software Development</a><span class="work-venue">Empirical Software Engineering · Equal contribution</span><p>A qualitative study of where developers use AI and where human expertise remains essential.</p></li>
        <li><a href="{{ '/publications/#tabarsi2026studentfacing' | relative_url }}">Student-Facing LLM Tools in Computing Education</a><span class="work-venue">Under review · Preprint available</span><p>A systematic review of roles, designs, evaluations, and reported impacts across 52 studies.</p></li>
        <li><a href="{{ '/publications/#tabarsi2026codesigning' | relative_url }}">Teachers and Developers Building Together: The ExLAIM Six-Week Co-Design Program</a><span class="work-venue">Under review</span><p>I led the program and study of how teacher and developer perspectives become classroom tools.</p></li>
        <li><a href="{{ '/publications/#reichert2026humancentered' | relative_url }}">Human-Centered Design of LLM-Powered Educational Chatbots</a><span class="work-venue">AI-HCI 2026</span><p>Research with secondary teachers on the design of classroom chatbots.</p></li>
      </ul>
    </div>
    <div class="research-future"><h3>Where this work is going</h3><p>I will study AI-supported peer learning through Team Mode, measuring group performance alongside individual learning. Future co-design cohorts will include K–12 students and industry developers, following their ideas from proposals through sustained classroom use.</p></div>
  </section>

  <section class="research-direction" id="novice-programmers" aria-labelledby="novices-title">
    <span class="research-direction-number" aria-hidden="true">03</span>
    <h2 id="novices-title">Novice Struggle and Scaffolding</h2>
    <p class="research-question">Where do learners struggle, and which scaffolds help them reason, plan, and make progress?</p>
    <div class="research-detail-grid">
      <div>
        <p>I evaluated programming struggle and progress detectors against think-aloud protocols, screen recordings, and learners' reports. The detectors sometimes mistook copied starter blocks for progress or unusual correct strategies for struggle. Logs show behavior, but they do not fully explain a learner's reasoning.</p>
        <p>In a quasi-experiment with 199 sixth-graders, students using <strong>Parsons problems</strong> (scrambled code blocks to reorder) were scored higher on the science task, spent less time coding, ran their programs more often, and stayed closer to a correct solution. The scaffold reduced the search for blocks and left room to test and explore.</p>
        <p>I also contributed to <strong>Jigsaw</strong>, a visual tool for decomposing and planning programming problems, recognized with the IEEE VL/HCC 2024 Best Research Paper Award.</p>
      </div>
      <figure class="research-figure">
        <div class="academic-figure-crop crop-parsons">
          <img src="{{ '/assets/img/research/parsons-scaffolding.png' | relative_url }}" alt="Two students' block-based programs: a student using a Parsons scaffold has edited a working rule while a control student's condition remains empty." loading="lazy" width="1350" height="1457">
        </div>
        <figcaption>Six minutes into the task, one student using the scaffold had revised a working rule while a control student's condition was still empty. The broader study examined both programming traces and task outcomes.</figcaption>
        <a class="figure-source" href="{{ '/publications/#tabarsi2024scaffolding' | relative_url }}">Read about the study <span aria-hidden="true">↗</span></a>
      </figure>
    </div>
    <div class="research-work">
      <h3>Selected work</h3>
      <ul>
        <li><a href="{{ '/publications/#tabarsi2024scaffolding' | relative_url }}">Scaffolding Novices: Analyzing When and How Parsons Problems Impact Novice Programming</a><span class="work-venue">ICER 2024</span><p>I studied how scaffolding changed learners' programming processes and outcomes in an integrated science assignment.</p></li>
        <li><a href="{{ '/publications/#tabarsi2023exploring' | relative_url }}">Exploring Novices' Struggle and Progress During Programming</a><span class="work-venue">VL/HCC 2023</span><p>Validating data-driven detectors against think-aloud accounts of students' experiences.</p></li>
        <li><a href="{{ '/publications/#reichert2024jigsaw' | relative_url }}">Jigsaw: A Visual Tool for Decomposing and Planning Programming Problems</a><span class="work-venue">VL/HCC 2024 · Best Paper</span><p>A collaborative contribution to visual support for programming problem solving.</p></li>
      </ul>
    </div>
    <div class="research-future"><h3>Where this work is going</h3><p>I will use these methods to understand what learners can do independently after AI-supported work, and to develop learner models for peer collaboration that check behavioral traces against students' own accounts.</p></div>
  </section>

  <aside class="research-extension">
    <h2>Beyond computing classrooms</h2>
    <p>These questions also inform <a href="{{ '/publications/#li2026safetalk' | relative_url }}">SafeTalk</a>, an expert-informed AI coaching system for rehearsing parent–teen health conversations. I mentored its design and evaluation, extending this work on responsible AI support into health communication.</p>
  </aside>
  <p><a class="academic-text-link" href="{{ '/publications/' | relative_url }}">See all publications <span aria-hidden="true">↗</span></a></p>
</div>
