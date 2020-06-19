// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume() {
    return this.length * this.width * this.height;
  }

  surfaceArea() {
    const side1Area = this.length * this.width,
          side2Area = this.length * this.height,
          side3Area = this.width * this.height;

    return 2 * (side1Area + side2Area + side3Area);
  }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:

const newCuboid = new Cuboid(4, 5, 5);
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// volume and surfaceArea don't have to be redefined because a Cube is
// still a Cuboid
class Cube extends Cuboid {
  constructor(side) {
    super(side, side, side);
  }
}

// cube volume and surface area
// let a = edge length
// let V = volume
// let A = surface area
// V = a^3
// A = 6a^2
// let a = 5
// V = 125
// A = 150

const cube = new Cube(5);
console.log(cube.volume());
console.log(cube.surfaceArea());

//  LocalWords:  surfaceArea LocalWords
