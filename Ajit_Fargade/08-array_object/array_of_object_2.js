
let students = [
    {
        name: "Ajit",
        age: 12
    },
    {
        name: "Bandu",
        age: 5
    },
    {
        name: "Chetan",
        age: 11
    },
    {
        name: "Dasu",
        age: 9
    }
];

let index = 0;

while (index < students.length) {
    if (students[index].age >= 10 ) {
        students[index].group = "Big group";
    } else {
        students[index].group = "small group";
    }
    index = index + 1;
}

console.log(students);
