---
date: {{date}}T{{time}}
tags: []
cssclasses:
- daily
<% "- " + tp.date.now("dddd", 0, tp.file.title, "YYYYMMDD").toLowerCase() %>
obsidianUIMode: <%*
let module_ID = await tp.system.prompt("Please enter a module ID");
let module_name = await tp.system.prompt("Please enter a module name");
let topic = await tp.system.prompt("Please enter a topic");
await tp.file.move("/02\ -\ Areas/" + module_ID + "/" + module_name + "/" + tp.file.title + " - " + module_ID + " - " + module_name + " - " + topic); %>
---
# <% module_name %>
## <%tp.date.now("dddd, MMMM Do, YYYY", 0, tp.file.title, "YYYYMMDDHHmm")%>

---

### <% topic %>

---

#### 
