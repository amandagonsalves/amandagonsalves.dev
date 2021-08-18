---
to: src/project/<%= h.lowerAndDash(title) %>/index.md
---

---
title: "<%= h.inflection.titleize(title) %>"
description: "<%= h.inflection.titleize(title) %>"
head:
- - meta
  - name: description
    content: "<%= h.inflection.titleize(description) %>"
- - meta
  - property: "og:type"
    content: "website"
- - meta
  - property: "og:title"
    content: "<%= h.inflection.titleize(title) %>"
---

<ProjectPage title="<%= h.inflection.titleize(title) %>" description="<%= h.inflection.titleize(description) %>" link="<%= link %>" />
