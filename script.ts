type User = {
    firstName: string
    age: number
}

const Sasha: User = {
    firstName: 'Sasha',
    age: 22
}
const Ivan: User = {
    firstName: 'Ivan',
    age: 65
}

const getOlderUser = (user1: User, user2: User): User | null => {
    if(user1.age > user2.age) return user1
    if(user1.age < user2.age) return user2
    return null
}

console.log(getOlderUser(Sasha, Ivan));
