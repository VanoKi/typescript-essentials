import {log} from 'console'

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


log(addTask(tasks, 'new', 4))


