function person() {
	this.person = true;
}
function employer() {
	this.employer = true;
}
function developer() {
	this.developer = true;
}

employer.prototype = new person();
developer.prototype = new employer();

var per = new developer();
console.log(per);
