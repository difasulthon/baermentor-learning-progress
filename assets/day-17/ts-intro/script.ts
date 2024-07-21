console.log('hello')

let number: number // Type inference
let string: string
number = 30

console.log('number', number)

function sayHello(name: string) {
  console.log(`Hello ${name}`)
}
sayHello("Difa")

// Type safe Object

type Biodata = {
  name: string,
  age: number
}

function generateBiodata(object: Biodata) {
  return `Hi ${object.name} you are ${object.age} years old`
}

console.log(generateBiodata({
  name: 'Difa',
  age: 26,
}))

function generateData(data: Biodata[]): void {
  data.forEach(item => console.log(item.name, item.age))
}

const data = [
  {name: 'Difa', age: 100},
  {name: 'Iqbal', age: 200}
]
generateData(data)

let button = document.getElementById('button')