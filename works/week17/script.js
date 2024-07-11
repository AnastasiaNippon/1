class Transport {
    constructor(type, price, brand) {
      this.type = type;
      this.price = price;
      this.brand = brand;
    }
  
    getInfo() {
      return `Type: ${this.type}, Brand: ${this.brand}, Price: ${this.price}`;
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class Car extends Transport {
    constructor(type, price, brand, doors) {
      super(type, price, brand);
      this.doors = doors;
    }
  
    getDoorsCount() {
      return this.doors;
    }
  
    getInfo() {
      return `${super.getInfo()}, Doors: ${this.doors}`;
    }
  }
  
  class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
      super(type, price, brand);
      this.maxSpeed = maxSpeed;
    }
  
    getMaxSpeed() {
      return this.maxSpeed;
    }
  
    getInfo() {
      return `${super.getInfo()}, Max Speed: ${this.maxSpeed} km/h`;
    }
  }
  
  const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
  ];
  
  const transports = data.map(item => {
    if (item.type === 'car') {
      return new Car(item.type, item.price, item.brand, item.doors);
    } else if (item.type === 'bike') {
      return new Bike(item.type, item.price, item.brand, item.maxSpeed);
    }
  });
  
  const transportList = document.getElementById('transport-list');
  
  transports.forEach(transport => {
    const transportCard = document.createElement('div');
    transportCard.classList.add('transport-card');
  
    const transportImage = document.createElement('img');
    transportImage.src = data.find(item => item.brand === transport.brand).image;
    transportCard.appendChild(transportImage);
  
    const transportInfo = document.createElement('div');
    transportInfo.classList.add('transport-card-info');
  
    const transportTitle = document.createElement('h2');
    transportTitle.textContent = transport.brand;
    transportInfo.appendChild(transportTitle);
  
    const transportDetails = document.createElement('p');
    transportDetails.textContent = transport.getInfo();
    transportInfo.appendChild(transportDetails);
  
    transportCard.appendChild(transportInfo);
    transportList.appendChild(transportCard);
  });
  