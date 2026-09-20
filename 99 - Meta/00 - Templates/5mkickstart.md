<% tp.file.create_new(
	tp.file.find_tfile(
		"5-Minute Morning Kickstart Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - 5-Minute Kickstart"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>