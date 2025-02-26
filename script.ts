// Определите тип исходя из структуры объекта
    const course = {
        name: 'Java',
        lessons: ['variables', 'functions', 'conditions'],
    };

function isComplete(obj: {name: string, lessons: string[]}) {
    return obj.lessons.length >= 4;
}

console.log(isComplete(course))
// isComplete(course); // false

