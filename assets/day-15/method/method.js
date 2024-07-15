class User {
  firstName = '';
  lastName = '';
  userName = '';
  age = 0;

  constructor(inputUserName, inputAge, inputFirstName, inputLastName) {
    this.userName = inputUserName;
    this.age = inputAge;
    this.firstName = inputFirstName;
    this.lastName = inputLastName;
  }

  #getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  greeting() {
    return `hello I'm ${this.#getFullName()}`;
  }

  introduction() {
    return `hello I'm ${this.#getFullName()} and ${this.age} years old`
  }
}

const user1 = new User('Jhon', 30, 'Hokage', 'Java')
const user2 = new User('Doraemon', 18, 'Python', 'Uzumaki')

// console.log('user1', user1)
console.log('user1', user1.greeting())
console.log('user1', user1.introduction())
// console.log('user2', user2)