//general
const service = (weight) => {
  switch (weight) {
    case 10:
      return {
        name: "A",
        price: 100,
      };

    case 20:
      return {
        name: "B",
        price: 200,
      };

    default:
      return {
        name: "C",
        price: 300,
      };
  }
};

//simple factory

class ServiceLogistic {
  constructor(name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
  }
  static create(weight) {
    switch (weight) {
      case 10:
        return new ServiceLogistic("A", 10, 100);
      case 20:
        return new ServiceLogistic("B", 20, 200);
      default:
        return new ServiceLogistic("C", 30, 300);
    }
  }
}

const service1 = ServiceLogistic.create(50);
console.log(service1);
