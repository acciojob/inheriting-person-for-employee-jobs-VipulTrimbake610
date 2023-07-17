// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function() {
	console.log("Hello, my name is "+this.name+", I am "+this.age+" years old.");
}
function Employee(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
}
// const person = new Person("Alice", 25);
// console.log(person);
// person.greet();
Employee.prototype.jobGreet(){
	console.log("Hello, my name is "+this.name+", I am "+this.age+" years old, and my job title is "+this.jobTitle+".");
}
// console.log(person.__proto__.greet());
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
