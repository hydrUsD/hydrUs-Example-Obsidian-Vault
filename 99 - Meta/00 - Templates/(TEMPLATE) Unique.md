---
date: {{date}}T{{time}}
tags: []
cssclasses:
- daily
<% "- " + tp.date.now("dddd", 0, tp.file.title, "YYYYMMDD").toLowerCase() %>
obsidianUIMode: 
---
# {{tp.file.title.split(" - ")[1]}}
## <%tp.date.now("dddd, MMMM Do, YYYY", 0, tp.file.title, "YYYYMMDDHHmm")%>

---

### {{tp.file.title.split(" - ")[2]}}