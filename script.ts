import {log} from 'console'

const tasks = [
  { id: 1, title: "Do homework" },
  { id: 2, title: "Wash dishes" },
  { id: 3, title: "Read book" }
];

type tasksType = typeof tasks
type taskType = typeof tasks[0]

const removeTask = (tasks:tasksType, id:number):tasksType => {
  return tasks.filter(task => task.id !== id)
}

console.log(removeTask(tasks, 2))