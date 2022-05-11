class Vehicle {
  /**
   * ENCAPSULATION
   * Kemampuan class menyembunyikan data (private data)
   */
  #material = 'plastic';
  mileage = 0;

  constructor(name, fuel, prodDate) {
    this.name = name;
    this.fuel = fuel;
    this.prodDate = prodDate;
  }

  /**
   * ABSRACTION
   * Menyembunyikan proses.
   */
  get year() {
    return this.prodDate.getFullYear();
  }

  set year(year) {
    return this.prodDate.setFullYear(year);
  }

  go(miles) {
    this.mileage += miles;
    this.fuel -= 2 * miles;
  }

  get material() {
    return this.#material;
  }
}

class Car extends Vehicle {
  constructor(name, fuel, color) {
    super(name, fuel, color);
  }

  /**
   * POLYMORPHISM
   * Method go pada class Car berbeda dengan Parent Class (Vehicle)
   */
  go(miles) {
    this.mileage += miles;
    this.fuel -= 1 * miles;
  }
}

const myCar = new Car('Kijang', 40, new Date(2015, 3, 17));

/**
 * INHERITANCE
 * Setiap instance Car sudah memiliki mileage karna proses Inheritance
 */
console.log(myCar.mileage);


console.log(myCar.year);
myCar.year = 2010;
console.log(myCar.year);
console.log(myCar.material);