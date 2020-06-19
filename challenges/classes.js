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

  surfaceArea () {
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

//  LocalWords:  surfaceArea
