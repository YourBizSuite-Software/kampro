// src/data/vehicles.js

// --- Image loader (works with 1..11, JPG/JPEG/PNG, any case) ---------------
const ALL = import.meta.glob("../assets/*/*.{jpg,jpeg,JPG,JPEG,png,PNG}", { eager: true });

function loadImages(folder) {
  const imgs = [];
  // Try 1..11 so you can add more later; if only 1..4 exist, that's fine.
  for (let i = 1; i <= 11; i++) {
    const candidates = [
      `../assets/${folder}/${i}.JPG`,
      `../assets/${folder}/${i}.JPEG`,
      `../assets/${folder}/${i}.jpg`,
      `../assets/${folder}/${i}.jpeg`,
      `../assets/${folder}/${i}.png`,
      `../assets/${folder}/${i}.PNG`,
    ];
    for (const key of candidates) {
      if (ALL[key]?.default) {
        imgs.push(ALL[key].default);
        break;
      }
    }
  }
  return imgs;
}

// --- Small helpers for filler fields ---------------------------------------
const trims = ["SE", "Sport", "Limited", "XLT", "LE", "Premium", "Base", ""];
const bodies = ["Sedan", "SUV", "Truck", "Coupe", "Wagon", "Hatchback", ""];
const drivetrains = ["FWD", "RWD", "AWD", "4WD", ""];
const transmissions = ["Automatic", "Manual", "CVT", ""];
const engines = ["I4", "V6", "V8", "Turbo I4", "Hybrid", ""];
const pick = (a) => a[Math.floor(Math.random() * a.length)];

// --- Your vehicles: folder -> exact specs you provided ---------------------
// Folder names MUST match your /src/assets subfolders exactly (typos included).
const base = [
  { folder: "2025Chevrolet1500", year: 2025, make: "Chevrolet", model: "1500 Pickup Truck", price: 31999, miles: 48000 },

  { folder: "2024JeepWagoneer", year: 2024, make: "Jeep", model: "Wagoneer", price: 39999, miles:48000 },

  { folder: "2022CadillacEscalade", year: 2022, make: "Cadillac", model: "Escalade", price: 55999, miles: 45000 },

  { folder: "2024HondaAccordHybrid", year: 2024, make: "Honda", model: "Accord Hybrid . EX-L Sedan", price: 29999, miles: 19000 },

  { folder: "2018LexusNX300", year: 2018, make: "Lexus", model: "NX . 300 F Sport", price: 26599, miles: 68000 },

  { folder: "2024FordBronco", year: 2024, make: "Ford", model: "Bronco", price: 32999, miles:19000 },

  { folder: "2019DodgeChallenger", year: 2019, make: "Dodge", model: "Challenger", price: 17999, miles: 70000 },

  { folder: "2014HondaCRV", year: 2014, make: "Honda", model: "CR-V", price: 14999, miles: 101000 },
  
  { folder: "2015HondaAccordLimited", year: 2015, make: "Honda", model: "Accord Limited", price: 14999, miles: 109000 },
  
  { folder: "2017ChevroletEquinox", year: 2017, make: "Chevrolet", model: "Equinox . LT Sport", price: 11999, miles: 62000 },

  { folder: "2017FordExplorer", year: 2017, make: "Ford", model: "Explorer", price: 14599, miles: 96000 },

  { folder: "2017HondaAccord", year: 2017, make: "Honda", model: "Accord", price: 13999, miles: 85000 },

  { folder: "2017HondaCRV", year: 2017, make: "Honda", model: "CR-V", price: 18999, miles: 105000 },

  { folder: "2017HondaCRVBlack", year: 2017, make: "Honda", model: "CR-V", price: 24999, miles: 55000 },

  { folder: "2017HondaOdysseyLimited", year: 2017, make: "Honda", model: "Odessey Limited", price: 22999, miles: 109000 },

  { folder: "2018ChevroletEquinox", year: 2018, make: "Chevrolet", model: "Equinox. LT Sport", price: 9999, miles: 58000 },

  { folder: "2018Chrysler300", year: 2018, make: "Chrysler", model: "300", price: 12999, miles: 95000 },

  { folder: "2018HondaAccordBlack", year: 2018, make: "Honda", model: "Accord", price: 18999, miles: 55000 },
  
  { folder: "2018HondaAccordWhite", year: 2018, make: "Honda", model: "Accord", price: 21999, miles: 44000 },


  { folder: "2018ToyotaCamry", year: 2018, make: "Toyota", model: "Camry", price: 12999, miles: 106000 },
  
  { folder: "2019JeepGrandCherokee", year: 2019, make: "Jeep", model: "Grand Cherokee", price: 17999, miles: 145000 },

  { folder: "2019ToyotaCamry", year: 2019, make: "Toyota", model: "Camry", price: 18999, miles: 55000 },

  { folder: "2020ToyotaCorola", year: 2020, make: "Toyota", model: "Corola", price: 14999, miles: 109000 },

  { folder: "2021Chevrolet1500", year: 2021, make: "Chevrolet", model: "1500 Pickup Truck", price: 24999, miles: 20000 },

  { folder: "2021Chrysler300", year: 2021, make: "Chrysler", model: "300", price: 21000, miles: 50000 },

  { folder: "2021FordFusion", year: 2021, make: "Ford", model: "Fusion", price: 8999, miles: 57000 },

  { folder: "2021HondaAccord", year: 2018, make: "Honda", model: "Accord", price: 22999, miles: 48000 },

  { folder: "2022ChevroletMalibu", year: 2022, make: "Chevrolet", model: "Malibu", price: 18000, miles: 24000 },
  
  { folder: "2022DodgeRam1500", year: 2022, make: "Dodge", model: "Ram 1500", price: 24999, miles: 42000 },

  { folder: "2022GMC1500", year: 2022, make: "GMC", model: "1500 Pickup Truck", price: 24999, miles: 48000 },
  
  { folder: "2022HondaAccord", year: 2022, make: "Honda", model: "Accord", price: 27999, miles: 33000 },
  
  { folder: "2024Chevrolet1500Black", year: 2024, make: "Chevrolet", model: "1500 Pickup Truck", price: 22999, miles: 109000 },

  { folder: "2011ChevroletMalibu", year: 2011, make: "Chevrolet", model: "Malibu", price: 6999, miles: 109000 },
  
];

// --- Build final export -----------------------------------------------------
export const vehicles = base.map((v, idx) => {
  const images = loadImages(v.folder);
  return {
    id: idx + 1,
    year: v.year,
    make: v.make,
    model: v.model,
    price: v.price,
    miles: v.miles,
    image: images[0] || "",
    images,
    // lightweight filler so existing UI keeps working
    trim: pick(trims),
    body: pick(bodies),
    drivetrain: pick(drivetrains),
    transmission: pick(transmissions),
    engine: pick(engines),
    folder: v.folder,
  };
});