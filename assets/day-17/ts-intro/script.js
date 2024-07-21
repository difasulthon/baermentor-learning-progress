console.log('hello');
var number; // Type inference
var string;
number = 30;
console.log('number', number);
function sayHello(name) {
    console.log("Hello ".concat(name));
}
sayHello("Difa");
function generateBiodata(object) {
    return "Hi ".concat(object.name, " you are ").concat(object.age, " years old");
}
console.log(generateBiodata({
    name: 'Difa',
    age: 26,
}));
function generateData(data) {
    data.forEach(function (item) { return console.log(item.name, item.age); });
}
var data = [
    { name: 'Difa', age: 100 },
    { name: 'Iqbal', age: 200 }
];
generateData(data);
var button = document.getElementById('button');
