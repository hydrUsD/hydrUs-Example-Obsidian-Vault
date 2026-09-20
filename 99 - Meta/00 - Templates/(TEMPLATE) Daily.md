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

### Journal
#### TIME
> [!journal-button]- `BUTTON[5mkickstart]`
> _Jumpstart your day with focused intentions, gratitude, and self-awareness — all in just 5 minutes._

> [!journal-button]- `BUTTON[5mreflection]`
> _Wind down with an honest review of your day, highlighting wins, gratitude, and a small step for tomorrow._

> [!journal-button]- `BUTTON[dailyHighLow]`
> _Capture your day's highs and lows to gain insight, recognize patterns, and foster personal growth._

> [!journal-button]- `BUTTON[gratitudeJournal]`
> _Practice seeing the good in life — this journal helps you cultivate optimism through daily gratitude._

> [!journal-button]- `BUTTON[inspirationAndIdeas]`
> _A creative capture pad for quotes, sparks, and brainstorms — don’t let inspiration slip away._

> [!journal-button]- `BUTTON[moodTracker]`
> _Track your emotional patterns with ratings, triggers, and reflections — build emotional insight over time._

> [!journal-button]- `BUTTON[personalReflection]`
> _A guided check-in for introspection, life alignment, and personal evolution — open, honest, and evolving._

> [!journal-button]- `BUTTON[readingJournal]`
> _Reflect on books with purpose — track key takeaways, quotes, and how each read shapes your perspective._

> [!journal-button]- `BUTTON[skillMasteryLog]`
> _Log your progress and breakthroughs while mastering any skill — structured for consistent growth._

> [!journal-button]- `BUTTON[SnArelief]`
> _A stress-mapping space to unpack anxiety, test coping strategies, and plan your path to calm._

***

<%* 
// Access the cssclasses and week from frontmatter now
let cssClasses = tp.frontmatter.cssclasses || [];
let weekNum = tp.date.now("ww");
// Add the dynamically calculated day class to a separate array for checking
let dayClasses = ["- " + tp.date.now("dddd", 0, tp.file.title, "YYYYMMDD").toLowerCase()];
// Combine previous cssClasses with the new dayClasses for checking
cssClasses = cssClasses.concat(dayClasses);
/*
console.log(`\n---`);
console.log("Week Num: " + weekNum);
console.log("Odd Week: " + await tp.user.isOddWeek(weekNum));
console.log("cssClasses: " + cssClasses);
console.log("Even Thursday: " + await tp.user.isEvenThursday(weekNum, cssClasses));
console.log("School Day: " + await tp.user.isSchoolDay(weekNum, cssClasses));
console.log(`---\n `);
*/
if (tp.user.isSaturday(cssClasses)) { 
%>
<% await tp.file.include(tp.file.find_tfile("(TEMPLATE SECTION) Daily - Meal Prep.md")) %>
<%* } else if (tp.user.isSunday(cssClasses)) { %>
<% await tp.file.include(tp.file.find_tfile("(TEMPLATE SECTION) Daily - Sonntagsputz.md")) %>
<%* } else if (await tp.user.isSchoolDay(weekNum, cssClasses)) { %>
<% await tp.file.include(tp.file.find_tfile("(TEMPLATE SECTION) Daily - Berufsschule.md")) %>
<%* } else { %>
<% await tp.file.include(tp.file.find_tfile("(TEMPLATE SECTION) Daily - Work.md")) %>
<%* } %>
### Tasks

```todoist
filter: "(today | overdue) & #GTD & assigned to: me"
autorefresh: 120
sorting:
  - date
  - priority
groupBy: section
```

***

### Lock file: `INPUT[obsidianUIMode][]`