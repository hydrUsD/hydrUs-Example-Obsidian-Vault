<% tp.file.create_new(
	tp.file.find_tfile(
		"5-Minute Evening Reflection Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - 5-Minute Reflection"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>