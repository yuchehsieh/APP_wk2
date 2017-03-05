function great(){
console.log('h1');
}
great();

function logGreeting(fn) {
	fn();
}
logGreeting(greet);

var greetMe = function() {
	console.log('Hi Boy');
}
greetMe();

logGreeting(greetMe);

logGreeting(function() {
	console.log('Hi Boy');
});
