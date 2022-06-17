---
title: Hello World
layout: base.njk
---

Hallo neue World!

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url }})

{% endfor %}