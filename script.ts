import {log} from 'console'
import * as repl from "node:repl";

type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

let tasks: TaskType[] = [
  { id: 1, title: "HTML", isDone: true },
  { id: 2, title: "CSS", isDone: false },
  { id: 3, title: "JS", isDone: false }
];

const addTask = (
  tasks: TaskType[],
  title: string,
  id: number
): TaskType[] => {
  // ...
  const newTask = {id, title, isDone: false}
  return [newTask, ...tasks]
}

const toggleTaskStatus = (tasks:TaskType[], id:number):TaskType[] => {
  return tasks.map( el => el.id === id ? {...el, isDone: true} : el)
}

log(toggleTaskStatus(tasks, 3))


