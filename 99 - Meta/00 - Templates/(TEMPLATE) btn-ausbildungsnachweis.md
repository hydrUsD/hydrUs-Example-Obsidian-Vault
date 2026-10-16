<%*
let cssDate = tp.frontmatter.cssclasses.toString();
let today = cssDate.split(",")[1];
let tDate = moment(today, "dddd").format("d");
let weekday = tp.date.weekday("d", 0);
let sameDay = tDate === weekday;
let offset = 0;
if (!sameDay) {
	offset = tDate - 1;
}
let day = tp.date.weekday("dddd", offset);
let date = tp.date.weekday("dd, DD.MM.", offset);
tR += `- ${date} ^ABN\n`;
let module = await tp.system.prompt(`Welches fand am ${day} statt?`);
tR += `\t- ${module}\n`
let topics;
while ((topics = await tp.system.prompt(`Welche Themen wurden am ${day} bearbeitet? (Press ESC to quit)`)) !== null) {
	tR += `\t\t- ${topics}\n`;
}
-%>