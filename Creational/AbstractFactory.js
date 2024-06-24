//Abstract Class
class Company {
  createMonitor() {}
  createGPU() {}
}
//ConcreteFactory1
class MSI extends Company {
  createMonitor() {
    return new MSIMonitor();
  }
  createGPU() {
    return new MSIGPU();
  }
}

//ConcreteFactory2
class ASUS extends Company {
  createMonitor() {
    return new ASUSMonitor();
  }
  createGPU() {
    return new ASUSGPU();
  }
}

//interfaceProductA
class Monitor {}

//interfaceProductB
class GPU {}

class MSIMonitor extends Monitor {
  constructor() {
    super();
    console.log("Create MSI Monitor");
  }
}
class ASUSMonitor extends Monitor {
  constructor() {
    super();
    console.log("Create ASUS Monitor");
  }
}

class MSIGPU extends GPU {
  constructor() {
    super();
    console.log("Create MSI GPU");
  }
}
class ASUSGPU extends GPU {
  constructor() {
    super();
    console.log("Create ASUS GPU");
  }
}

const MSIManufactor = new MSI();
const MSIMonitor2 = MSIManufactor.createMonitor();
const MSIGPU2 = MSIManufactor.createGPU();

const ASUSManufactor = new ASUS();
const ASUSMonitor2 = ASUSManufactor.createMonitor();
const ASUSGPU2 = ASUSManufactor.createGPU();
