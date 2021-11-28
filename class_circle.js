class circle {
    constructor(radius=1,color='red'){
        this.radius = radius;
        this.color = color;
    }

    get getradius(){
        return this.radius; 
    }

    set changeradius(value){
        this.radius = value;
    }

    get getcolor(){
        return this.color;
    }

    set changecolor(value){
        this.color = value;
    }

    get area(){
        return Math.PI * this.radius ** 2
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    tostring(){
        return JSON.stringify([this.constructor.name,this])
    }

}

let c = new circle(radius= 3, color='blue');

console.log(c.getradius); //3

c.changeradius = 10;

console.log(c.getradius); //10

console.log(c.getcolor); //blue

c.changecolor = "red";

console.log(c.getcolor); //red

console.log(c.area); //314.1592653589793

console.log(c.circumference); //62.83185307179586

console.log(c.tostring()); //["circle",{"radius":10,"color":"red"}]