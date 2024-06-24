//interface
class Builder {
  reset() {}
  setSeats(number) {}
  setEngine(engine) {}
  setTripComputer(number) {}
  setGPS(number) {}
}

class Car {}
class Manual {}

class CarBuilder extends Builder {
  car = new Car();
  reset() {
    this.car = new Car();
  }
  setSeats(number) {
    this.car.Seat = number;
  }
  setEngine(engine) {
    this.car.engine = engine;
  }
  setTripComputer(number) {
    this.car.TripComputer = number;
  }
  setGPS(number) {
    this.car.GPS = number;
  }
  getResult() {
    return this.car;
  }
}
class CarManualBuilder extends Builder {
  carManual = new Manual();
  reset() {
    this.carManual = new Manual();
  }
  setSeats(number) {
    this.carManual.Seat = number;
  }
  setEngine(engine) {
    this.carManual.engine = engine;
  }
  setTripComputer(number) {
    this.carManual.TripComputer = number;
  }
  setGPS(number) {
    this.carManual.GPS = number;
  }
  getResult() {
    return this.carManual;
  }
}

class Director {
  makeSUV(builder) {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine(2);
    builder.setTripComputer(2);
    builder.setGPS(2);
  }
  makeSportCar(builder) {
    builder.reset();
    builder.setSeats(1);
    builder.setEngine(1);
    builder.setTripComputer(1);
    builder.setGPS(1);
  }
}

const director = new Director();
let builder = new CarBuilder();
director.makeSUV(builder);
let car = builder.getResult();
console.log(car);
