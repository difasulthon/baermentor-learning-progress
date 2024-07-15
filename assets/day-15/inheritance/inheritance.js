class Animal {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method
  walk() {
    console.log(`${this.name} is walking`)
  }

  talk(audio) {
    console.log(`${this.name} is talk ${audio}`)
  }
}

// inheritance
class Cat extends Animal {
  constructor() {
    super("doraemon")
  }
}

const cat = new Cat();
cat.walk();
cat.talk('meong');