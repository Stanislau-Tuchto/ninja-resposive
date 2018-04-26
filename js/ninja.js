// todo list
class Ninja{

    constructor(name, age, weight, power){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.power = power;
    }
    getNinjaSound(){
        return "wohaa! I'm "+this.name;
    }
}
let ninja1 =  new Ninja("Jon", 25, 78, 200);
console.log(ninja1.getNinjaSound());