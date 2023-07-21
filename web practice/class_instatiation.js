class Player {
	constructor(name, type) {
		console.log( 'player', this);
		this. name = name;
		this. type type;
	introduce() {
		console.log('Hi I an ${this.name}, im a ${this.type}');
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
		console.log( 'wizard', this);
	play() {		
		console.log( 'WEEEEEEE I am a ${this. type}');
	}
}	

const wiz1 = new Wizard("kelly ", " healer");
wiz1.play();
wiz1.introduce();


 