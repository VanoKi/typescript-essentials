import {log} from 'console'

const tasks = [
  {
    id: 1,
    title: "Project",
    subtasks: [
      { id: 101, title: "Setup repo" },
      { id: 102, title: "Write code" }
    ]
  },
  {
    id: 2,
    title: "Lunch",
    subtasks: [
      { id: 201, title: "Buy food" },
      { id: 202, title: "Eat" }
    ]
  }
];


type TaskType = typeof tasks[0]
// type SunaTaskType = typeof tasks[0]

const renameSubtask = (
  tasks: TaskType[],
  taskId: number,
  subtaskId: number,
  newTitle: string
): TaskType[] => {
  // ...
  return tasks.map(task => task.id === taskId ?
    {...task, subtasks: task.subtasks.map(el => el.id === subtaskId ? {...el, title: newTitle} : el)}
    : task)
}

log(renameSubtask(tasks, 1, 202, 'fuck the nun'))


