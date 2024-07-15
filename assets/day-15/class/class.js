class User {
  userName = "";
  age = 0;
  #nik = 12345

  constructor(inputUserName, inputAge) {
    this.userName = inputUserName + " " + this.#nik;
    this.age = inputAge;
    this.job = "Programmer"
  }
}

// const user1 = new User();
// user1.userName = 'Doraemon';
// const user2 = new User();

// console.log('user1', user1) // { userName: 'Doraemon', age: 30 }
// console.log('user2', user2) // { userName: 'Jhon', age: 30 }

const user1 = new User('Jhon', 30)
const user2 = new User('Doraemon', 18)

console.log('user1', user1)
console.log('user1', user2)