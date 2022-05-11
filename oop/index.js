class Car {
  // attributes
  name = 'Avanza';
  fuel = 43;
  mileage = 0;
  cc = 1300;

  // constructor berjalan ketika pertama kali instance dibuat
  constructor(color, transmisionType) {
    this.color = color;
    this.transmType = transmisionType;
  }

  /**
   * STATIC METHOD
   * Dapat dijalankan (invoke) tanpa perlu instance.
   */
  static priceList() {
    return {
      jakarta: 200_000_000,
      bandung: 230_000_000,
    }
  }

  /**
   * METHOD
   * Hanya dapat dijalankan (invoke) oleh instance.
   */
  go(miles) {
    this.mileage += miles;
    this.fuel -= 2 * miles;
  }
}

console.log(Car.priceList());

// membuat instance baru dari Class Car
const myCar = new Car('Matallic Green', 'Manual');
// console.log(myCar)

// console.log('<<< Sebelum pergi');
// console.log('Bensin:', myCar.fuel, 'Liters');
// console.log('Jarak Tempuh:', myCar.mileage, 'KM');

// myCar.go(10);

// console.log('\n<<< Sesudah pergi');
// console.log('Bensin:', myCar.fuel, 'Liters');
// console.log('Jarak Tempuh:', myCar.mileage, 'KM');