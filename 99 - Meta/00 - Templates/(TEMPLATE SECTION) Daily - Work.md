### Work
#### ${currentTicket1}

```todoist
name: "Jetzige Aufgaben"
filter: "(today | overdue) & @work & @next"
autorefresh: 120
sorting:
  - date
  - priority
groupBy: project
```

```todoist
name: "Nächste Aufgaben"
filter: "(today | overdue) & @work & @waiting"
autorefresh: 120
sorting:
  - date
  - priority
groupBy: project
```

#### Commit-Message vor Feierabend
```Markdown

```

***