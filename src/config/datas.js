const initialDatas = {
  tasks: [
    { id: 1, content: "Faire mon sport" },
    { id: 2, content: "Sortir les poubelles" },
    { id: 3, content: "Acheter du pain" },
    { id: 4, content: "Laver la voiture" },
  ],
  columns: [
    {
      id: 1,
      title: "Tâches a faire",
      tasksId: [1, 2, 3, 4]
    },
    {
      id: 2,
      title: "Tâches en cours",
      tasksId: []
    },
    {
      id: 3,
      title: "Tâches terminées",
      tasksId: []
    },
  ],
  columnOrder: [1, 2, 3]
}

export default initialDatas