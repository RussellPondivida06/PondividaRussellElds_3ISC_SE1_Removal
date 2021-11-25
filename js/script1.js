function Dog(breed, color, gender){
    this.breed = breed;
    this.color = color;
    this.gender = gender;
    this.speak = function(){
        console.log("Meow");
    }
    this.eat = function(){
        console.log("I love to eat tuna");
    }
}

let tintin = new tintin("Ragdoll", "Calico", "female");

tintin.speak();
tintin.eat();