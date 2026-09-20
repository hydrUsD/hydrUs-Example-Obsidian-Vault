<% tp.file.create_new(
	tp.file.find_tfile(
		"Personal Reflection Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - Personal Reflection"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>