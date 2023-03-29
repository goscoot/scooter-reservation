export interface Scooter {
  id: number;
  brand: string;
  name: string;
  amount: number;
  range: number;
  price: number;
  thumbnail: string;
  description: string;
  color: string;
}

export const scooters: Scooter[] = [
  {
    id: 1,
    brand: "Ducati",
    name: "Ducati Pro – III Electric Scooter",
    amount: 3,
    range: 50,
    price: 29,
    thumbnail: "./src/assets/ducatipro3.webp",
    description:
      "The PRO-III is the most technically advanced scooter in the Ducati Urban e-mobility series.",
    color: "black",
  },
  {
    id: 2,
    brand: "Pure",
    name: "Pure Advance Electric Scooter",
    amount: 5,
    range: 40,
    price: 24,
    thumbnail: "./src/assets/pureadvance.webp",
    description:
      "Face forwards with Pure Advance. Our innovative, forward-facing riding position gives you greater stability and balance for a safer, more comfortable ride.",
    color: "silver",
  },
  {
    id: 3,
    brand: "KQI2",
    name: "KQI2 PRO ELECTRIC KICK SCOOTER",
    amount: 4,
    range: 40,
    price: 24,
    thumbnail: "./src/assets/kqi2pro.webp",
    description:
      "KQI2 Pro Electric Kick Scooter is a high-performance and feature-packed personal transportation device that is perfect for modern commuters seeking a fast, efficient, and eco-friendly way to travel.",
    color: "white",
  },
  {
    id: 4,
    brand: "FLOW",
    name: "Flow St Kilda XTS Pro Electric Scooter ",
    amount: 3,
    range: 45,
    price: 29,
    thumbnail: "./src/assets/flowxtspro.webp",
    description:
      "With an incredible 45km max range from a single charge, the St Kilda XTS Pro is the ultimate cruiser built with the demands of everyday life in mind. Constructed from aviation-grade aluminium alloy and engineered to the highest standards, the St Kilda XTS Pro looks stunning and boasts performance to match.‘",
    color: "black",
  },
  {
    id: 5,
    brand: "Aprilia",
    name: "Aprilia eSR2 EVO Electric Scooter ",
    amount: 4,
    range: 45,
    price: 29,
    thumbnail: "./src/assets/apriliaesr2.webp",
    description:
      "With an incredible 45km max range from a single charge, the St Kilda XTS Pro is the ultimate cruiser built with the demands of everyday life in mind. Constructed from aviation-grade aluminium alloy and engineered to the highest standards, the St Kilda XTS Pro looks stunning and boasts performance to match.",
    color: "black",
  },
  {
    id: 6,
    brand: "Ducati",
    name: "Ducati Pro II Evo Electric Scooter",
    amount: 3,
    range: 40,
    price: 24,
    thumbnail: "./src/assets/ducatipro2.webp",
    description:
      "The PRO-II EVO is a Ducati electric scooter with double suspension and connection to the Ducati Urban e-Mobility App. It has a 350W motor, 374Wh battery, and can cover up to 40 km on a single charge.",
    color: "black",
  },
  {
    id: 7,
    brand: "Segway",
    name: "Segway Ninebot MAX G30D",
    amount: 3,
    range: 65,
    price: 39,
    thumbnail: "./src/assets/segwayg30d.webp",
    description:
      "The Ninebot KickScooter F30D is an electric scooter that provides an intelligent and eco-friendly way to commute around the city. With a maximum speed of 20 km/h and a range of up to 30 km on a single charge, it is equipped with 10-inch pneumatic tires and electronic front and disc rear brakes for safe and smooth riding.",
    color: "black",
  },
  {
    id: 8,
    brand: "Segway",
    name: "Segway KickScooter P65E",
    amount: 2,
    range: 65,
    price: 39,
    thumbnail: "./src/assets/segwaye45d.webp",
    description:
      "The Segway KickScooter P65E offers you the ability to cruise through the city for a range of up to 65 km and at a maximum speed of 25 km/h. This is one of our few models that comes with SegPower Cross Season tyres, allowing you to ride through any kind of weather safely.",
    color: "black",
  },
];
