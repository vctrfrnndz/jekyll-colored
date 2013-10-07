---
title: Projects
layout: page
description: "I like to build stuff during my spare time, either to learn new skills, for fun or just to revisit topics that interest me. These are some of the projects I've been working on:"

projects:
- name: JSblackjack
  description: My first ever JS app, a blackjack game powered by HTML5, JS and CSS animations. Cool huh?
  url: http://vctrfrnndz.github.io/JSblackjack/
---

<section>
{% for project in page.projects %}
    <article>
        <a href="{{ project.url }}">{{ project.name }}</a>
        <p>{{ project.description }}</p>
    </article>
{% endfor %}
</section>