import {log} from 'console'

const tasks = [
  { id: 1, title: "Write code", status: { completed: false } },
  { id: 2, title: "Eat", status: { completed: false } },
  { id: 3, title: "Sleep", status: { completed: false } }
];

type TaskType = typeof  tasks[0]

const completeTask = (tasks: TaskType[], id: number): TaskType[] => {
  return tasks.map(task => task.id === id ? {...task, status: {completed: true} } : task)}

log(completeTask(tasks, 1))

// log(tasks[0].status.completed = true)