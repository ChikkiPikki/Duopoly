var propertyList = [];
var utilityList = [];
var stationList =[];

class Property{
	constructor(name, price,  upgradePrice, type, rents, position, x, y, width, height){
		this.name = name;
		this.price = price;
		this.upgradePrice = upgradePrice;
		this.type = type;
		this.rents = rents;
		this.mortgageValue = this.price/2;
		this.position = position;
		this.x = x;
		this.y = y;
		this.width=width;
		this.height=height;
		this.hotelPossible = true;
		switch(this.type){
			case "brown" :
			case "dark_blue":
				this.others = 1;
				break;
			default:
	 		 	this.others = 2;
				break;
		}
		propertyList.append(this);

	}
};

class Utility{
	constructor(name, price, position, rent, x, y, width, height){
		this.name = name;
		this.price = price;
		this.position = position;
		this.rent = rent;
		this.mortgageValue = this.price/2;
		this.x = x;
		this.y = y;
		this.width=width;
		this.height=height;
		this.hotelPossible=false;
		this.others=2;
		utilityList.append(this);

	}
};

class Station{
	constructor(name,  position, x, y, width, height){
		this.name = name;
		this.price = 200;
		this.position = position;
		this.mortgageValue = this.price/2
		this.x = x;
		this.y = y;
		this.width=width;
		this.height=height;
		this.hotelPossible = false;
		this.others=3;
		stationList.append(this);

	}
}
var utility_electric_company = new Utility("Electric Company", 150,13, [4, 10]);
var utility_water_works = new Utility("Water Works", 150, 29, [4, 10]);

var blue_euston_road = new Property("Euston Road", 100,  50, "blue",  [6, 12, 30, 90, 270, 400, 550], 10);
var blue_pentoville_road = new Property("Pentoville Road", 120,  50, "blue",  [8, 16, 40, 100, 300, 450, 600], 9);
var blue_the_angel_islington = new Property("The Angel, Islington", 100,  50, "blue",  [6, 12, 30, 90, 270, 400, 550], 7);

var pink_whitehall = new Property("Whitehall", 140, 100, "pink",  [10, 20, 50, 150, 450, 625, 750], 14);
var pink_pall_mall = new Property("Pall Mall", 140, 100, "pink",  [10, 20, 50, 150, 450, 625, 750], 12);
var pink_northumberland_avenue = new Property("Northumberland Avenue", 160, 100, "pink",  [12, 24, 60, 180, 500, 700, 900], 15);

var brown_whitechapel_road = new Property("Whitechapel Road", 60, 50, "brown",  [4, 8, 20, 60, 180, 320, 450],4);
var brown_old_kent_road = new Property("Old Kent Road", 60, 50, "brown",  [2, 4, 10, 30, 90, 160, 250],2);

var dark_blue_mayfair = new Property("Mayfair", 400, 200, "dark_blue", [50, 100, 200, 600, 1400, 1700, 2000], 40;
var dark_blue_park_lane = new Property("Park Lane", 350, 200, "dark_blue", [35, 175, 500, 1100, 1300, 1500], 38);

var green_bond_street = new Property("Bond Street", 320, 200, "green", [28, 56, 150, 450, 1000, 1200, 1400], 35);
var green_oxford_street = new Property("Oxford Street", 300, 200, "green", [26, 52, 130, 390, 900, 1100, 1275],33);
var green_regent_street = new Property("Regent Street", 300, 200, "green", [26, 52, 130, 390, 900, 1100, 1275], 32);

var orange_bow_street = new Property("Bow Street", 180, 100, "orange", [14, 28, 70, 200, 550, 750, 950], 17);
var orange_malborough_street = new Property("Malborough Street", 180, 100, "orange", [14, 28, 70, 200, 550, 750, 950], 19);
var orange_vine_street = new Property("Vine Street", 200, 100, "orange",  [16, 32, 80, 220, 600, 800, 1000], 20);

var red_fleet_street = new Property("Fleet Street", 220, 150, "red", [18, 36, 90, 250, 700, 875, 1050], 24);
var red_strand = new Property("Strand", 220, 150, "red", [18, 36, 90, 250, 700, 875, 1050], 22);
var red_trafalagur_square = new Property("Trafalagur Square", 240, 150, "red", [20, 40, 100, 300, 750, 925, 1100],25);

var yellow_coventry_street = new Property("Coventry Street", 260, 150, "yellow", [22, 44, 110, 330, 800, 975, 1150], 28);
var yellow_leicester_square = new Property("Leicester Square", 260, 150, "yellow", [22, 44, 110, 330, 800, 975, 1150], 27);
var yellow_piccadilly = new Property("Picadilly", 280, 150, "yellow", [24, 48, 120, 360, 850, 1025, 1200], 29);

var station_fenchurch_st = new Station("Fenchurch St. Station", 26);
var station_kings_cross = new Station("Kings's Cross Station", 6 );
var station_liverpool_st = new Station("Liverpool St. Station", 36);
var station_marylebone = new Station("Marylebone Station", 16);

module.exports = [
			propertyList, stationList, utilityList

		]
