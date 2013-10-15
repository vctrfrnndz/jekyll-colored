---
title: About
layout: no_colophon
description: "I am a front-end developer and a product designer living in Buenos Aires, Argentina. I've been working with open standard technologies for more than 5 years, focusing on CSS, JS and PHP developments."

skills:
- name: CSS
  lvl: 80%
- name: CSS Preprocessors
  lvl: 100%
- name: Javascript (native)
  lvl: 55%
- name: jQuery
  lvl: 75%
- name: NodeJS
  lvl: 20%
- name: AngularJS
  lvl: 35%
- name: EmberJS
  lvl: 15%
---

These are some of the tools I've worked with over time:

<ul class="skills">
    {% for skill in page.skills %}
    <li>
        <h4 class="name">{{ skill.name }}</h4>
        <div class="bar">
            <div style="width: {{ skill.lvl }}" class="lvl"></div>
        </div>
    </li>
    {% endfor %}
</ul>
