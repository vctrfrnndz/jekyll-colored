---
title: Projects
layout: page
description: "I like to build stuff during my spare time, either to learn new skills, for fun or just to revisit topics that interest me. These are some of the projects I've been working on:"

projects:
- name: JSblackjack
  description: My first ever JS app, a blackjack game powered by HTML5, JS and CSS animations. Cool huh?
  url: http://vctrfrnndz.github.io/JSblackjack/
- name: Kick
  description: Kick is a lightweight Less.js mixin library that makes CSS even easier to work with.
  url: http://github.com/vctrfrnndz/Kick
---

<section class="projects">
{% for project in page.projects %}
    {% if project.image %}
      <img src="{{ project.image }}" alt="{{ project.name }}">
    {% endif %}
    <a href="{{ project.url }}">
      <article class="project">
          <h2 class="title">{{ project.name }} <span class="icon icon-github"></span></h2>
          <p class="description">{{ project.description }}</p>
      </article>
    </a>
{% endfor %}
</section>