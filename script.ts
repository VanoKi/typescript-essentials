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

const toggleTaskStatus = (
  todoLists: TodoListType[],
  todoListId: string,
  taskId: number): TodoListType[] => {
  return todoLists.map(tl => tl.id === todoListId ? {...tl, tasks: tl.tasks.map(task => task.id === taskId ? {...task, isDone: !task.isDone} : task)} : tl)
}
log(toggleTaskStatus(todoLists, "todolist-1", 2))

const removeTask = (
  todoLists: TodoListType[],
  todoListId: string,
  taskId: number): TodoListType[] => {
  return todoLists.map(tl => tl.id === todoListId ?
    {...tl, tasks: tl.tasks.filter(l => l.id !== taskId)}
    : tl)
}
// log(removeTask(todoLists, 'todolist-1', 3))

const updateTaskTitle = (
  todoLists: TodoListType[],
  todoListId: string,
  newTaskTitle: string,
  TaskId: number
): TodoListType[] => {
  return todoLists.map(tl => tl.id === todoListId ? {
    ...tl,
    tasks: tl.tasks.map(task => task.id === TaskId ? {...task, title: newTaskTitle} : task)
  } : tl)
}
// log(updateTaskTitle(todoLists, "todolist-1", 'React', 2))

