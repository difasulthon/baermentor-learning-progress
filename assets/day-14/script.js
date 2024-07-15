const car = {
  maker: 'Tesla',
  model: 'Model X',

  drive: function() {
    console.log(`mengendarai ${this.maker}`)
  },
  whatIsThis() {
    console.log('this', this)
  },
  driveArrow: () => {
    console.log(`mengendarai ${this.maker}`)
  }
}

const anotherCar = {
  maker: 'Audi',
  model: 'A4'
}

// const driveBind = function() {
//   console.log(`Driving a ${this.maker} ${this.model} car`)
// }
const driveBind = function(params1, params2) {
  console.log(`Driving a ${this.maker} ${this.model} car. params 1 ${params1} params 2 ${params2}`)
}

car.drive()
car.whatIsThis()
car.driveArrow()
// Normal bind without params
// driveBind.bind(car)()
// driveBind.bind(anotherCar)()

// call with params
driveBind.call(car, 'test1', 'test2')

//apply with params
driveBind.apply(car, ['test1', 'test2'])

function sayHi() {
  console.log('Hello')
}

window.sayHi()

console.log('innerHeight', window.innerHeight)

console.log('origin', window.location.origin)
console.log('location', window.location)

console.log('children', document.body.children)
console.log('innerText', document.body.children[0].innerText)

console.log('getElementById', document.getElementById('content'))

const content = document.getElementById('content')
const newBold = document.createElement('b')
// content.innerText = "Bearmentor day 14"
newBold.innerText = "Bearmentor day 14"
content.append(newBold)