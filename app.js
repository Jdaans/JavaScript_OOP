// Exercise 1 Section

class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  removeHobby(hobby) {
    const index = this.hobbies.indexOf(hobby);
    if (index !== -1) {
      this.hobbies.splice(index, 1);
    }
  }

  greeting() {
    console.log("Hello fellow person!");
  }
}

// Exercise 2 section

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
    this.occupation = "full-stack Web Developer";
  }

  greeting() {
    console.log(
      `Hello, my name is ${this.name} and I am a ${this.occupation}.`
    );
  }
}

// Exercise 3 section

let person = new Person("Josh", 0, "Woodhaven", ["reading", "video games,"]);

let coder = new Coder("Josh", 0, "Woodhaven", ["reading", "video games"]);

person.addHobby("swimming");
person.removeHobby("swimming");
person.addHobby("cooking");
person.removeHobby("cooking");

console.log(person);
console.log(coder);

console.log(coder.occupation);

person.greeting();
coder.greeting();

// Exercise 4 section

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num1, num2) {
    this.result = num1 + num2;
  }

  subtract(num1, num2) {
    this.result = num1 - num2;
  }

  multiply(num1, num2) {
    this.result = num1 * num2;
  }

  divide(num1, num2) {
    if (num2 === 0) {
      console.log("Cannot divide by zero.");
      return;
    }
    this.result = num1 / num2;
  }

  displayResult() {
    console.log(`The result is: ${this.result}`);
  }
}

let calc = new Calculator();
calc.add(5, 3);
calc.displayResult();
calc.subtract(10, 4);
calc.displayResult();
calc.multiply(2, 6);
calc.displayResult();
calc.divide(8, 2);
calc.displayResult();
