class Creator {
  CreateProduct() {
    throw new Error("createProduct method must be overridden by subclasses");
  }
}
class Product {
  operation() {
    throw new Error("operation method must be overridden by subclasses");
  }
  doStuff() {
    return "Doing stuff";
  }
}
class ConcreteProductA extends Product {
  operation() {
    return "{Result of the ConcreteProductA}";
  }
}
class ConcreteProductB extends Product {
  operation() {
    return "{Result of the ConcreteProductB}";
  }
}
class ConcreteCreatorA extends Creator {
  CreateProduct() {
    console.log("Creating Product A");
    return new ConcreteProductA();
  }
}
class ConcreteCreatorB extends Creator {
  CreateProduct() {
    console.log("Creating Product B");
    return new ConcreteProductB();
  }
}

// Usage
const creatorA = new ConcreteCreatorA();
const productA = creatorA.CreateProduct();
console.log(productA.operation());

const creatorB = new ConcreteCreatorB();
const productB = creatorB.CreateProduct();
console.log(productB.operation());

const creator = new Creator();
const product = creator.CreateProduct();
console.log(product.operation());
