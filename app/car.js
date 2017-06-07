class Car {  
    constructor(name, model, type){
        this.type =type;
        this.model = model;
        this.name = name;
        this.isSaloon;
        this.speed;
        this.numOfDoors = 4;
        this.numOfWheels = 4;
        if(this.name === 'Porshe' || this.name === 'Koenigsegg'){
            this.numOfDoors = 2;
        }
        if(this.name === undefined || this.model === undefined){
            this.name = "General";
            this.model ="GM";
  }
        else{
            this.name = name;
        }
        if(type === "trailer"){
            this.numOfWheels = 8;
            this.speed = "0 km/h";
         }
        if(this.numOfWheels === 8){
            this.isSaloon = false;
        }
        else{
            this.isSaloon = true;
        }
}
    drive(num) {
            if(this.type === 'trailer'){
                this.speed = '77 km/h';
            }
            if(this.name === 'Porshe'){
                this.speed = '250 km/h';
            }
            return this;
        }

}

module.exports = Car;