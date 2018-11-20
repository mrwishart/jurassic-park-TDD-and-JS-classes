const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let testPark, parkName, parkPrice, dinosaur1, dinosaur2, dinosaur3;

  beforeEach(function () {

    parkName = "Jurassic";
    parkPrice = 50.00;

    testPark = new Park(parkName, parkPrice);

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegasaurus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('raptor', 'carnivore', 51);
  })

  it('should have a name', function () {

    const actual = testPark.name;
    const expected = parkName;

    assert.strictEqual(actual, expected);

  });

  it('should have a ticket price', function () {

    const actual = testPark.price;
    const expected = parkPrice;

    assert.strictEqual(actual, expected);

  });

  it('should have a collection of dinosaurs', function () {

    const actual = testPark.dinosaurs;
    const expected = [];

    assert.deepStrictEqual(actual, expected);

  });

  it('should be able to add a dinosaur to its collection', function () {

    testPark.addDinosaur(dinosaur1);
    const actual = testPark.dinosaurs;
    const expected = [dinosaur1];

    assert.deepStrictEqual(actual, expected);

  });

  it('should be able to remove a dinosaur from its collection', function () {

    testPark.addDinosaur(dinosaur1);
    testPark.addDinosaur(dinosaur2);
    testPark.removeDinosaur(dinosaur1);
    const actual = testPark.dinosaurs;
    const expected = [dinosaur2];

    assert.deepStrictEqual(actual, expected);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {

    testPark.addDinosaur(dinosaur1);
    testPark.addDinosaur(dinosaur2);
    testPark.addDinosaur(dinosaur3);
    const actual = testPark.findMostPopularDinosaur();
    const expected = dinosaur3;

    assert.strictEqual(actual, expected);

  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
