var propertyList = [];
var utilityList = [];
var stationList = [];

class Property {
  constructor(
    name,
    price,
    upgradePrice,
    type,
    rents,
    position,
    x,
    y,
    width,
    height
  ) {
    this.name = name;
    this.price = price;
    this.upgradePrice = upgradePrice;
    this.type = type;
    this.rents = rents;
    this.mortgageValue = this.price / 2;
    this.position = position;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hotelPossible = true;
    switch (this.type) {
      case "brown":
      case "dark_blue":
        this.others = 1;
        break;
      default:
        this.others = 2;
        break;
    }
    propertyList.push(this);
  }
}

class Utility {
  constructor(name, price, position, rent, x, y, width, height) {
    this.name = name;
    this.price = price;
    this.position = position;
    this.rent = rent;
    this.mortgageValue = this.price / 2;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hotelPossible = false;
    this.others = 2;
    utilityList.push(this);
  }
}

class Station {
  constructor(name, position, x, y, width, height) {
    this.name = name;
    this.price = 200;
    this.position = position;
    this.mortgageValue = this.price / 2;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hotelPossible = false;
    this.others = 3;
    stationList.push(this);
  }
}
var utility_electric_company = new Utility("Electric Company", 150, 13, [
  4,
  10,
]);
var utility_water_works = new Utility("Water Works", 150, 29, [4, 10]);

var brown_barcelona = new Property(
  "Barcelona",
  60,
  50,
  "brown",
  [4, 8, 20, 60, 180, 320, 450],
  2
);
var brown_madrid = new Property(
  "Madrid",
  60,
  50,
  "brown",
  [2, 4, 10, 30, 90, 160, 250],
  4
);

var blue_brasilia = new Property(
  "Brasilia",
  100,
  50,
  "blue",
  [6, 12, 30, 90, 270, 400, 550],
  7
);
var blue_salvador = new Property(
  "Salvador",
  120,
  50,
  "blue",
  [8, 16, 40, 100, 300, 450, 600],
  9
);
var blue_rio_de_janeiro = new Property(
  "Rio de Janeiro",
  100,
  50,
  "blue",
  [6, 12, 30, 90, 270, 400, 550],
  10
);

var pink_cannes = new Property(
  "Cannes",
  140,
  100,
  "pink",
  [10, 20, 50, 150, 450, 625, 750],
  12
);
var pink_bordeaux = new Property(
  "Bordeaux",
  140,
  100,
  "pink",
  [10, 20, 50, 150, 450, 625, 750],
  14
);
var pink_paris = new Property(
  "Paris",
  160,
  100,
  "pink",
  [12, 24, 60, 180, 500, 700, 900],
  15
);

var orange_delhi = new Property(
  "Delhi",
  180,
  100,
  "orange",
  [14, 28, 70, 200, 550, 750, 950],
  17
);
var orange_chennai = new Property(
  "Chennai",
  180,
  100,
  "orange",
  [14, 28, 70, 200, 550, 750, 950],
  19
);
var orange_mumbai = new Property(
  "Mumbai",
  200,
  100,
  "orange",
  [16, 32, 80, 220, 600, 800, 1000],
  20
);

var red_manchester = new Property(
  "Manchester",
  220,
  150,
  "red",
  [18, 36, 90, 250, 700, 875, 1050],
  22
);
var red_birmingham = new Property(
  "Birmingham",
  220,
  150,
  "red",
  [18, 36, 90, 250, 700, 875, 1050],
  24
);
var red_london = new Property(
  "London",
  240,
  150,
  "red",
  [20, 40, 100, 300, 750, 925, 1100],
  25
);

var yellow_hiroshima = new Property(
  "Hiroshima",
  260,
  150,
  "yellow",
  [22, 44, 110, 330, 800, 975, 1150],
  27
);
var yellow_yokohama = new Property(
  "Yokohama",
  260,
  150,
  "yellow",
  [22, 44, 110, 330, 800, 975, 1150],
  28
);
var yellow_tokyo = new Property(
  "Tokyo",
  280,
  150,
  "yellow",
  [24, 48, 120, 360, 850, 1025, 1200],
  29
);

var green_shanghai = new Property(
  "Shanghai",
  320,
  200,
  "green",
  [28, 56, 150, 450, 1000, 1200, 1400],
  32
);
var green_ = new Property(
  "Regent Street",
  300,
  200,
  "green",
  [26, 52, 130, 390, 900, 1100, 1275],
  33
);
var green_beijing = new Property(
  "Beijing",
  300,
  200,
  "green",
  [26, 52, 130, 390, 900, 1100, 1275],
  35
);

var dark_los_angeles = new Property(
  "Los Angeles",
  400,
  200,
  "dark_blue",
  [50, 100, 200, 600, 1400, 1700, 2000],
  38
);
var dark_new_york_city = new Property(
  "New York City",
  350,
  200,
  "dark_blue",
  [35, 175, 500, 1100, 1300, 1500],
  40
);

var station_fenchurch_st = new Station("Fenchurch St. Station", 26);
var station_kings_cross = new Station("Kings's Cross Station", 6);
var station_liverpool_st = new Station("Liverpool St. Station", 36);
var station_marylebone = new Station("Marylebone Station", 16);

module.exports = [propertyList, stationList, utilityList];
