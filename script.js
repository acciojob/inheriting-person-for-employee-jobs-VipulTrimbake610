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
Employee.prototype.jobGreet = function(){
	console.log("Hello, my name is "+this.name+", I am "+this.age+" years old, and my job title is "+this.jobTitle+".");
}
const person = new Person("Alice", 25);
const employee = new Employee("Bob", 30,"Manager");
// console.log(person);
person.greet();
employee.jobGreet();
// console.log(person.__proto__.greet());
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
