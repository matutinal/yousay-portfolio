---
title: "Qui sommes-nous"
description: "Découvrez YOUSAY Consulting, votre partenaire en transformation RH et accompagnement au changement"
layout: base.html
---

<header class="grid">
  <nav class="flex no-wrap justify-between align-items-center py-md">
    <a
      class="font-size-xl font-weight-xxl uppercase line-height-flush undecorated"
      href="/"
    >
      {{ site.title }}
    </a>
    <div class="inline-flex gap-md align-items-center">
      <ul class="unlisted inline-flex gap-md align-items-center">
        <li><a href="/#services" class="button --simple">Notre offre</a></li>
        <li><a href="/qui-sommes-nous/" class="button --simple --active">Qui sommes-nous</a></li>
        <li><a href="/blog/" class="button --simple">Actualités</a></li>
        <li><a href="#contact" class="button --primary">Contact</a></li>
      </ul>
    </div>
  </nav>
</header>

<main class="grid">
  <!-- Page Header -->
  <section class="span-8 start-3 py-xxl center">
    <h1 class="font-size-xxxl font-weight-xxl line-height-flush mb-md">{{ title }}</h1>
    <p class="font-size-lg line-length-md">
      {{ description }}
    </p>
  </section>

  <!-- Content Section -->
  <section class="span-10 start-2 pb-xxl">
    <div class="grid gap-xl">
      {{ body }}
    </div>
  </section>
</main>

<footer class="grid py-lg bg-neutral-100">
  <div class="span-10 start-2 flex justify-between align-items-center">
    <p class="font-size-sm">© 2025 {{ site.title }}. Tous droits réservés.</p>
    <div class="flex gap-md">
      <a href="https://linkedin.com/company/yousay-consulting" class="font-size-sm" target="_blank">LinkedIn</a>
    </div>
  </div>
</footer>
