---
date: <%tp.date.now("YYYY-MM-DD")%>T<%tp.date.now("HH:mm")%>
tags:
  - Weekly
  - partnerMeeting
cssclasses:
  - daily
  <% "- " + tp.date.weekday("dddd", 6, tp.file.title, "gggg-[W]ww - MMM -", await tp.file.rename(tp.file.title + " Ausbildungsnachweise")).toLowerCase() %>
obsidianUIMode: preview
---
# Partner Meeting
## <% tp.date.weekday("dddd", 6, tp.file.title, "gggg-[W]ww - MMM -", await tp.file.rename(tp.file.title + " Ausbildungsnachweise")) %> 

---

### Ausbildungsnachweise

---

![[<% tp.date.weekday("YYYYMMDD", 0) %>#^ABN]]

---

![[<% tp.date.weekday("YYYYMMDD", 1) %>#^ABN]]

---

![[<% tp.date.weekday("YYYYMMDD", 2) %>#^ABN]]

---

![[<% tp.date.weekday("YYYYMMDD", 3) %>#^ABN]]

---

![[<% tp.date.weekday("YYYYMMDD", 4) %>#^ABN]]

---