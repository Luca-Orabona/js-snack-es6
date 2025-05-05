
// Snack 1
const bici = [
    { name: "Carbon Blade", peso: 6.8 },
    { name: "Speedster Pro", peso: 7.1 },
    { name: "AeroStorm", peso: 7.4 },
    { name: "Velocità X", peso: 6.9 },
    { name: "Strada Veloce", peso: 7.2 },
    { name: "WindCutter", peso: 7.5 },
    { name: "Road Phantom", peso: 6.7 },
    { name: "AluRider", peso: 8.1 },
    { name: "Race Eagle", peso: 7.0 },
    { name: "TitanRunner", peso: 8.3 }
];


let pesoMinBici = bici[0].peso;
console.log(pesoMinBici);

for (let i = 1; i < bici.length; i++) {

    if(bici[i].peso < pesoMinBici) {

        pesoMinBici = bici[i];
    }
}


console.log(`la bici con peso minore è: "${pesoMinBici.name.toUpperCase()}"`);
console.log(`Con un peso di "${pesoMinBici.peso}"`);