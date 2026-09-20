#### Berufsschule
<%*
/**
 * School Schedule Definition
 * Supports: Tuesday + alternating Even Thursdays
 * Classes follow the form: {time: "HH:mm", class: "Name"}
 */
const schoolSchedule = {
  tuesdayOdd: [
    { time: "07:30", class: "WBL (GRM)" },
    { time: "09:20", class: "DB (BG)" },
    { time: "11:10", class: "EVP (GRM)" },
    { time: "13:00", class: "EVP (LTA)" }
  ],
  tuesdayEven: [
    { time: "07:30", class: "DIF 9 (LK)" },
    { time: "09:20", class: "EVP (LTA)" },
    { time: "11:10", class: "WBL (GRM)" },
    { time: "13:00", class: "STDM (LK)" }
  ],
  thursdayEven: [
    { time: "07:30", class: "STDM (LK)" },
    { time: "09:20", class: "EVP (SOR)" },
    { time: "11:10", class: "E (AT)" },
    { time: "13:00", class: "DIF 9 (GRM)" }
  ]
};
%>
##### Schulfächer
<%*
let cssClasses = tp.frontmatter.cssclasses || [];
let weekNum = tp.date.now("ww", 0, tp.file.title, "YYYYMMDD");
// Add the dynamically calculated day class to a separate array for checking
let dayClasses = ["- " + tp.date.now("dddd", 0, tp.file.title, "YYYYMMDD").toLowerCase()];
// Combine previous cssClasses with the new dayClasses for checking
cssClasses = cssClasses.concat(dayClasses);
let todaysClasses = [];
if (await tp.user.isEvenThursday(weekNum, cssClasses)) {
  todaysClasses = schoolSchedule.thursdayEven;
} else if (tp.user.isTuesday(cssClasses) && (await tp.user.isOddWeek(weekNum))) {
  todaysClasses = schoolSchedule.tuesdayOdd;
} else if (tp.user.isTuesday(cssClasses) && !(await tp.user.isOddWeek(weekNum))) {
  todaysClasses = schoolSchedule.tuesdayEven;
};
// If no classes: insert nothing
if (todaysClasses.length === 0) {
  tR += "";
  return;
};
let out = "### 🏫 Today’s Classes\n\n";
for (let c of todaysClasses) {
  // Timestamp in YYYYMMDDHHmm
  const stamp = tp.date.now("YYYYMMDD", 0, tp.file.title, "YYYYMMDD") + c.time.replace(":", "");
  // Date in YYYYMMDD HH:mm
  const date = tp.date.now("YYYY-MM-DD", 0, tp.file.title, "YYYYMMDD") + " " + c.time;
  // Filename format: TIMESTAMP - CLASS - 
  const filename = `${stamp} - ${c.class} - `;
  // Topic as templater function
  const topic = "Find way to parse tp.file.title function without resolving it!";
  // class tag
  const classTag = c.class.replace("(", "").replace(" ","-").replace(")", "");
  // Content to pre-fill frontmatter for the new class note
  const initialFrontmatter =
  `---
  date: ${date}
  tags: [ Berufsschule, ${classTag}, ]
  cssclasses:
    - daily
    ${cssClasses}
  obsidianUIMode: 
  timestamp: ${stamp}
  class: ${c.class}
  topic: ${topic}
---
# ${(c.class || "404 - Class not found") + " - " + ("Topic TBD (See metadata for more infos)")}
## ${tp.date.now("dddd, MMMM Do, YYYY", 0, tp.file.title, "YYYYMMDD")}

---

### "Topic TBD (See metadata for more infos)"

  `;
  // Ensure the note exists (body: frontmatter + base headings)
  await tp.file.create_new(`${initialFrontmatter}`, `${filename}`, false, tp.app.vault.getAbstractFileByPath(`02 - Areas/Area - Berufsschule/Year 2/${c.class}`));
  console.log(out);
  // Insert backlink
  out += `- [[${filename}]] (${c.time})\n`;
};
tR += out;
%>

***
