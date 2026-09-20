<% tp.file.create_new(
	tp.file.find_tfile(
		"Daily Highlights and Lowlights Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - Daily Highlights & Lowlights"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>