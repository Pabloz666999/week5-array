const heroes = [
  {
    nama: "Alucard",
    role: "Fighter",
    gender: "M",
    power: "Lifesteal",
    umur: 29,
  },
  {
    nama: "Miya",
    role: "Marksman",
    gender: "F",
    power: "Rapid Arrows",
    umur: 24,
  },
  {
    nama: "Tigreal",
    role: "Tank",
    gender: "M",
    power: "Sacred Hammer",
    umur: 40,
  },
  {
    nama: "Kagura",
    role: "Mage",
    gender: "F",
    power: "Seimei Umbrella",
    umur: 23,
  },
  {
    nama: "Hayabusa",
    role: "Assassin",
    gender: "M",
    power: "Ninjutsu",
    umur: 27,
  },
  {
    nama: "Angela",
    role: "Support",
    gender: "F",
    power: "Love Waves",
    umur: 18,
  },
  {
    nama: "Balmond",
    role: "Fighter",
    gender: "M",
    power: "Cyclone Sweep",
    umur: 35,
  },
  {
    nama: "Ling",
    role: "Assassin",
    gender: "M",
    power: "Dragon's Descent",
    umur: 21,
  },
  {
    nama: "Johnson",
    role: "Tank",
    gender: "M",
    power: "Transform Car",
    umur: 38,
  },
  {
    nama: "Lancelot",
    role: "Assassin",
    gender: "M",
    power: "Thorned Rose",
    umur: 25,
  },
];

// 1. map()
const namaUpperCase = heroes.map(hero => hero.nama.toUpperCase());
console.log("1. map(), Mengubah semua nama menjadi huruf besar (UpperCase) : \n", namaUpperCase);

// 2. filter() + map()
const namaLebih5Huruf = heroes.filter(hero => hero.nama.length > 5).map(hero => hero.nama);
console.log("\n2. filter(), Mencari nama dengan panjang lebih dari 5 huruf : \n", namaLebih5Huruf);

// 3. reduce()
const namaTotal = heroes.reduce((total, hero) => total + hero.nama.length, 0);
console.log("\n3. reduce(), Total semua karakter dari nama : ", namaTotal);

const umurTotal = heroes.reduce((total, hero) => total + hero.umur, 0);
console.log("   Total semua umur dari heroes : ", umurTotal);

// 4. find()
const namaFind = heroes.find(hero => hero.nama.includes("Ling"));
console.log("\n4. find(), Mencari nama yang mengandung kata 'Ling' : \n", namaFind);

// 5. some()
const namaSome = heroes.some(hero => hero.nama.length > 9);
console.log("\n5. some(), Mengecek apakah ada nama yang lebih dari 9 karakter : ", namaSome);

// 6. every()
const namaEvery = heroes.every(hero => hero.nama.length > 6);
console.log("\n6. every(), Mengecek apakah semua nama memiliki panjang lebih dari 6 karakter : ", namaEvery);




