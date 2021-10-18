const initialDatas = {
  tasks : {
    "task-1": { id: 1, content: "Faire mon sport" },
    "task-2": { id: 2, content: "Sortir les poubelles" },
    "task-3": { id: 3, content: "Acheter du pain" },
    "task-4": { id: 4, content: "Laver la voiture" },
  },
  columns: {
    "column-1": {
      id: 1,
      title: "Tâches a faire",
      tasksId: [1, 2, 3, 4]
    },
    "column-2": {
      id: 2,
      title: "Tâches en cours",
      tasksId: []
    },
    "column-3": {
      id: 3,
      title: "Tâches terminées",
      tasksId: []
    },
  },
  columnOrder: [1, 2, 3]
}

export default initialDatas