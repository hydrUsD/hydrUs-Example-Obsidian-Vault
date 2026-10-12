---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
week: <%tp.date.now("ww")%>
tags:
  - Daily
cssclasses:
  - daily
  <%*
// Dynamically generate the day class here
let dayClass = "- " + tp.date.now("dddd", 0, tp.file.title, "YYYYMMDD").toLowerCase(); 
// Print the day class directly in the frontmatter for reference
tR += dayClass; 
%>
obsidianUIMode:
---
# DAILY NOTE
## <% tp.date.now("dddd, MMMM Do, YYYY", 0, tp.file.title, "YYYYMMDD") %>

***

### Tasks
- 

---

### ToDo’s
- [ ] 

***

`BUTTON[btn-ausbildungsnachweis]`

---
### Lock file: `INPUT[obsidianUIMode][]`