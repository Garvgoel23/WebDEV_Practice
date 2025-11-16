// var, let, const
const age = 30;
const name ='john';

// concatenation
console.log('my name is' + name +'and my age is' +age)

const s ='Hello World';
console.log(s.toUpperCase);
console.log(s.split(''));

//Arrays
const num = new Array(1,2,3,4,5);
const fruits = ['apple', 'orange', 'pear'];
fruits[3] = 'grapes';
fruits.push('mango');
fruits.unshift('berry');
fruits.pop();
 
console.log(fruits);
const person={
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    hpbbies: ['music', 'dance', 'sports'],
    address:{
        street:'50 left',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstname);

const todos=[
    {
       id: 1,
       text: ' Take out trash',
       isCompleted: true 
    },
    {
       id: 2,
       text: 'meeting',
       isCompleted: true 
    },
    {
       id: 3,
       text: 'doctor appointment',
       isCompleted: false
    },
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// for loop
for(let i = 0; i<=10; i++){
    console.log(i);
} 

// while
let i =0;
while(i<10){
    console.log(i);
    i++;
}

for(let todo of todos){
    console.log(todo.text);
}
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);


const x = 1;
if (x===10){
    console.log('x is 10');
}else if(x>10){
    console.log('x is not  greater 10');
}
else{
    console.log('x is not 10');
}

switch(color){
    case 'red':
        console.log('color is red');
        break;

}

function addNums(num1, num2){
    console.log(num1 + num2);
}
addNums(2,5);
