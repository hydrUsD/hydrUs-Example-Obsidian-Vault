<% tp.file.create_new(
	tp.file.find_tfile(
		"Mood Tracker Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - Mood Tracker"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>