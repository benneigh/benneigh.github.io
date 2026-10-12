---
layout: page
scholarly_page: true
permalink: /publications/
title: Publications
description: Peer-reviewed publications, manuscripts under review, and work in progress.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2>Peer-reviewed publications</h2>
{% bibliography --query @*[status=published] %}

<h2>Under review</h2>
{% bibliography --query @*[status=under_review] --group_by none %}

<h2>In preparation</h2>
{% bibliography --query @*[status=in_preparation] --group_by none %}

<h2>Other preprints</h2>
{% bibliography --query @*[status=preprint] --group_by none %}

</div>
