import {log} from 'console'
import * as repl from "node:repl";

type TaskType = {
  id: number
  title: string
  isDone: boolean
}

type TodoListType = {
  id: string
  title: string
  tasks: TaskType[]
}

const todoLists: TodoListType[] = [
  {
    id: "todolist-1",
    title: "Frontend",
    tasks: [
      {id: 1, title: "HTML", isDone: true},
      {id: 2, title: "CSS", isDone: false}
    ]
  },
  {
    id: "todolist-2",
    title: "Backend",
    tasks: [
      {id: 1, title: "Node.js", isDone: false},
      {id: 2, title: "MongoDB", isDone: false}
    ]
  }
]

const addTask = (
  todoLists: TodoListType[],
  todoListId: string,
  newTaskTitle: string,
  newTaskId: number
): TodoListType[] => {
  // ...
  const newTitle = {id: newTaskId, title: newTaskTitle, isDone: false}
  return todoLists.map(tl => tl.id === todoListId ?
    {...tl, tasks: [newTitle, ...tl.tasks]}
    : tl)
}
// log(addTask(todoLists, 'todolist-1', 'JS', 3))

const toggleTaskStatus = (tasks: TaskType[], id: number): TaskType[] => {
  return tasks.map(el => el.id === id ? {...el, isDone: !el.isDone} : el)
}

const removeTask = (
  todoLists: TodoListType[],
  todoListId: string,
  taskId: number): TodoListType[] => {
  return todoLists.map( tl => tl.id === todoListId ?
    {...tl, tasks: tl.tasks.filter(l => l.id !== taskId)}
    : tl)
}
log(removeTask(todoLists, 'todolist-1', 3))

const updateTitle = (tasks: TaskType[], id: number, newTitle: string): TaskType[] => {
  return tasks.map(task => task.id === id ? {...task, title: newTitle} : task)
}


