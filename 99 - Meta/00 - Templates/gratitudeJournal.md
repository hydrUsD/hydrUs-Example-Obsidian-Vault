<% tp.file.create_new(
	tp.file.find_tfile(
		"Gratitude Journal Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - Gratitude Journal"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>