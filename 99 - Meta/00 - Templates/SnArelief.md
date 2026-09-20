<% tp.file.create_new(
	tp.file.find_tfile(
		"Stress and Anxiety Relief Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - Stress and Anxiety Relief"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>