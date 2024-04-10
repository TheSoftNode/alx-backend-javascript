class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Create a new instance of Car with the same attributes
    return new Car(this._brand, this._motor, this._color);
  }
}

export default Car;

