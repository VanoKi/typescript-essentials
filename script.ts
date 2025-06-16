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

const removeSubtask = (
  tasks: TaskType[],
  taskId: number,
  subtaskId: number
): TaskType[] => {
  return tasks.map(task => task.id === taskId ?
    {... task, subtasks: task.subtasks.filter(el => el.id !== subtaskId)} : {...task, subtasks: task.subtasks.filter(el => el)})
}


log(removeSubtask(tasks, 1, 201))

