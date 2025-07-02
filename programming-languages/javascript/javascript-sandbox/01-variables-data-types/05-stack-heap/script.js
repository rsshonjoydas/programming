// Value is stored in the stack
const name = 'John';
const age = 30;

// Reference is stored in the heap
const person = {
  name: 'Shonjoy',
  age: 40,
};

let newName = name;
newName = 'John Doe';

let newPerson = person;
newPerson.name = 'John Wick';

console.log(name, newName); // John, John Doe
console.log(person, newPerson); // { name: 'John Wick', age: 40 }, { name: 'John Wick', age: 40 }
