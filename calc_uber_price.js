class uberPrice{
    constructor(miles =0, vehicle=null){
        this.miles = miles;
        this.vehicle = vehicle;
    }


    vehicle_cost(){
        return this.vehicle == "sedan"? 10:
               this.vehicle == "SUV"? 15:
               this.vehicle == "mini"? 7:
               0;
    }

    get price(){

        return this.miles * this.vehicle_cost()

    }
}

let x = new uberPrice(miles = 10, vehicle="sedan");

console.log(x.price)

//output: 100