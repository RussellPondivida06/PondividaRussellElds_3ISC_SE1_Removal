class School{
    constructor(name, location, population){
        this.name = name;
        this.location = location;
        this.population = population;
    }
    population(){
        console.log( ${this.name} is in ${this.location} and has a population of ${this.population});
    }
}
School.prototype.offer = function(courses){
    const offer = courses.join(', ');
    console.log(this.name==='UST'?${this.name} offers ${courses}: '');
}
School.prototype.population;