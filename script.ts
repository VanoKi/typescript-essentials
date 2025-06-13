import {log} from 'console'

const users = [
  { id: 1, name: "Ivan", isActive: false },
  { id: 2, name: "Anna", isActive: true }
];

type usersType = typeof users
type userType = typeof users[0]

const activateUser = (users:usersType, id:number):usersType =>{
  return users.map((user) => user.id === id ? {... user, isActive: true} : user)
}

log(activateUser(users, 1))