<% tp.file.create_new(
	tp.file.find_tfile(
		"Reading Journal Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - Reading Journal"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>