const Park = function(name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
  
  if (index > -1) {
    this.dinosaurs.splice(index, 1);
  }
};

Park.prototype.findMostPopularDinosaur = function () {

  let mostPopular = this.dinosaurs[0];

  for (let i = 1; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
      mostPopular = this.dinosaurs[i];
    }
  }

  return mostPopular;

};

Park.prototype.findAllDinosaurBySpecies = function (species) {

  let foundDinosaurs = [];

  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      foundDinosaurs.push(dinosaur);
    }
  }

  return foundDinosaurs;

};

Park.prototype.numberOfVisitorsPerDay = function () {

  let numberOfVisitorsPerDay = 0;

  for (dinosaur of this.dinosaurs) {
    numberOfVisitorsPerDay += dinosaur.guestsAttractedPerDay;
  }

  return numberOfVisitorsPerDay;

};

module.exports = Park;
