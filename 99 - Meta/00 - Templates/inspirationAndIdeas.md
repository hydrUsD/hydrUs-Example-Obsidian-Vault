<% tp.file.create_new(
	tp.file.find_tfile(
		"Inspiration and Ideas Capture Template"
	),
	(tp.date.now(
		"YYYYMMDD") + " - Inspiration & Ideas Capture"
	),
	true,
	app.vault.getAbstractFileByPath(
		"06 - Daily/Daily - Journal"
	)
)%>