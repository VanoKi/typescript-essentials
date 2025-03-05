"use strict";
const Sasha = {
    firstName: 'Sasha',
    age: 22
};
const Ivan = {
    firstName: 'Ivan',
    age: 65
};
const getOlderUser = (user1, user2) => {
    if (user1.age > user2.age)
        return user1;
    if (user1.age < user2.age)
        return user2;
    return null;
};
console.log(getOlderUser(Sasha, Ivan));
