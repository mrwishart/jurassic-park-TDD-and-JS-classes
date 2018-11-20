const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let testPark, parkName, parkPrice, dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5, dinosaur6;

  beforeEach(function () {

    parkName = "Jurassic";
    parkPrice = 50.00;

    testPark = new Park(parkName, parkPrice);

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegasaurus', 'herbivore', 30);
    dinosaur3 = new Dinosaur('raptor', 'omnivore', 51);

    dinosaur4 = new Dinosaur('t-rex', 'carnivore', 35);
    dinosaur5 = new Dinosaur('stegasaurus', 'herbivore', 43);
    dinosaur6 = new Dinosaur('t-rex', 'carnivore', 46);
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

  it('should be able to find all dinosaurs of a particular species', function () {

    testPark.addDinosaur(dinosaur1);
    testPark.addDinosaur(dinosaur2);
    testPark.addDinosaur(dinosaur3);
    testPark.addDinosaur(dinosaur4);
    testPark.addDinosaur(dinosaur5);
    testPark.addDinosaur(dinosaur6);

    const actual = testPark.findAllDinosaurBySpecies('t-rex');
    const expected = [dinosaur1, dinosaur4, dinosaur6];

    const actual2 = testPark.findAllDinosaurBySpecies('raptor');
    const expected2 = [dinosaur3];

    const actual3 = testPark.findAllDinosaurBySpecies('notADinosaur');
    const expected3 = [];

    assert.deepStrictEqual(actual, expected);
    assert.deepStrictEqual(actual2, expected2);
    assert.deepStrictEqual(actual3, expected3);

  });

  describe('Park Revenue', function () {

    it ('calculate the number of visitors per day', function () {

      testPark.addDinosaur(dinosaur1);
      testPark.addDinosaur(dinosaur2);
      testPark.addDinosaur(dinosaur3);
      testPark.addDinosaur(dinosaur4);
      testPark.addDinosaur(dinosaur5);
      testPark.addDinosaur(dinosaur6);

      const actual = testPark.numberOfVisitorsPerDay ();
      const expected = 255;

      assert.strictEqual(actual, expected);

    });

    it ('calculate the number of visitors per year', function () {

      testPark.addDinosaur(dinosaur1);
      testPark.addDinosaur(dinosaur2);
      testPark.addDinosaur(dinosaur3);
      testPark.addDinosaur(dinosaur4);
      testPark.addDinosaur(dinosaur5);
      testPark.addDinosaur(dinosaur6);

      const actual = testPark.numberOfVisitorsPerYear (2003);
      const expected = 93075; // 255 * 365 days per year

      const actual2 = testPark.numberOfVisitorsPerYear (2004);
      const expected2 = 93330; // 255 * 366 days per year

      assert.strictEqual(actual, expected);
      assert.strictEqual(actual2, expected2);

    });

    it ('calculate the total revenue from ticket sales per year', function () {

      testPark.addDinosaur(dinosaur1);
      testPark.addDinosaur(dinosaur2);
      testPark.addDinosaur(dinosaur3);
      testPark.addDinosaur(dinosaur4);
      testPark.addDinosaur(dinosaur5);
      testPark.addDinosaur(dinosaur6);

      const actual = testPark.totalRevenueByYear (2003);
      const expected = 4653750; // 93075 * 50

      const actual2 = testPark.totalRevenueByYear (2004);
      const expected2 = 4666500; // 93075 * 50

      assert.strictEqual(actual, expected);
      assert.strictEqual(actual2, expected2);

    });

  });

  it('should be able to remove all dinosaurs of a particular species', function () {

    testPark.addDinosaur(dinosaur1);
    testPark.addDinosaur(dinosaur2);
    testPark.addDinosaur(dinosaur3);
    testPark.addDinosaur(dinosaur4);
    testPark.addDinosaur(dinosaur5);
    testPark.addDinosaur(dinosaur6);

    testPark.removeDinosaurBySpecies('stegasaurus');

    const actual = testPark.dinosaurs;
    const expected = [dinosaur1, dinosaur3, dinosaur4, dinosaur6];

    assert.deepStrictEqual(actual, expected);

    testPark.addDinosaur(dinosaur2);
    testPark.addDinosaur(dinosaur5);

    testPark.removeDinosaurBySpecies('t-rex');

    const actual2 = testPark.dinosaurs;
    const expected2 = [dinosaur3, dinosaur2, dinosaur5]

    assert.deepStrictEqual(actual2, expected2);

  });

  it ('should be able to provide an object, listing all the dietary types', function () {

    testPark.addDinosaur(dinosaur1);
    testPark.addDinosaur(dinosaur2);
    testPark.addDinosaur(dinosaur3);
    testPark.addDinosaur(dinosaur4);
    testPark.addDinosaur(dinosaur5);
    testPark.addDinosaur(dinosaur6);

    const actual = testPark.listDietaryTypes();
    const expected = {
      'carnivore': 3,
      'herbivore': 2,
      'omnivore': 1
    }

    assert.deepStrictEqual(actual, expected);

  });

});
