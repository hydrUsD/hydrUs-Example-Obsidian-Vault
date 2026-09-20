<% tp.file.create_new(
	tp.file.find_tfile(
		"Skill Mastery Log Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - Skill Mastery Log"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>