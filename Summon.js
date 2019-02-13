// JavaScript source code
var summonType = ["Epic Hero", "Epic Troop", "Elemental Fire", "Elemental Ice", "Elemental Nature", "Elemental Holy", "Elemental Dark"];
var epicHero = summonType[0];
var epicTroop = summonType[1];
var elementalFire = summonType[2];
var elementalIce = summonType[3];
var elementalNature = summonType[4];
var elementalHoly = summonType[5]
var elementalDark = summonType[6];
 //image array for the fire heroes (0-3 = 3*, 4-8 = 4*, 14-24 = 5*) These are ALL fire heroes
 var fireHeroes = [];
 //Azar and per HERO attributes
 fireHeroes[0] = new Image();
 fireHeroes[0].fireName = "Azar";
 fireHeroes[0].chance = 17.7500000000;
 fireHeroes[0].src = 'misc/fire-heroes/azar.png';
 //Hawkmoon
 fireHeroes[1] = new Image();
 fireHeroes[1].fireName = "Hawkmoon";
 fireHeroes[1].chance = 17.7500000000;
 fireHeroes[1].src = 'misc/fire-heroes/hawkmoon.png';
 //Jahangir
 fireHeroes[2] = new Image();
 fireHeroes[2].fireName = "Jahangir"
 fireHeroes[2].chance = 17.7500000000;
 fireHeroes[2].src = 'misc/fire-heroes/jahangir.png';
 //Nashgar
 fireHeroes[3] = new Image();
 fireHeroes[3].fireName = "Nashgar";
 fireHeroes[3].chance = 17.7500000000;
 fireHeroes[3].src = 'misc/fire-heroes/nashgar.png';
 //Boldtusk
 fireHeroes[4] = new Image();
 fireHeroes[4].fireName = 'Boldtusk';
 fireHeroes[4].chance = 6.62500000;
 fireHeroes[4].src = 'misc/fire-heroes/boldtusk.png';
 //Colen
 fireHeroes[5] = new Image();
 fireHeroes[5].fireName = "Colen";
 fireHeroes[5].chance = 6.62500000;
 fireHeroes[5].src = 'misc/fire-heroes/colen.png';
 //Gormek5
 fireHeroes[6] = new Image();
 fireHeroes[6].fireName = "Gormek";
 fireHeroes[6].chance = 6.62500000;
 fireHeroes[6].src = 'misc/fire-heroes/gormek.png';
 //Kelile
 fireHeroes[7] = new Image();
 fireHeroes[7].fireName = "Kelile";
 fireHeroes[7].chance = 6.62500000;
 fireHeroes[7].src = 'misc/fire-heroes/kelile.png';
 //Scarlett
 fireHeroes[8] = new Image();
 fireHeroes[8].fireName = "Scarlett";
 fireHeroes[8].chance = 6.62500000;
 fireHeroes[8].src = 'misc/fire-heroes/scarlett.png';
 
 //Azlar
 fireHeroes[9] = new Image();
 fireHeroes[9].fireName = "Azlar";
 fireHeroes[9].chance = 0.62500000;
 fireHeroes[9].src = 'misc/fire-heroes/azlar.png';

//Elena
fireHeroes[10] = new Image();
fireHeroes[10].fireName = "Elena";
fireHeroes[10].chance = 0.62500000;
fireHeroes[10].src = 'misc/fire-heroes/elena.png';

 //Marjana
 fireHeroes[11] = new Image();
 fireHeroes[11].fireName = "Marjana";
 fireHeroes[11].chance = 0.62500000;
 fireHeroes[11].src = 'misc/fire-heroes/marjana.png';



function summonFire() {

//creates the images one by one in a for loop using variable "i"
var i = 0,
    len = fireHeroes.length;
for (; i < fireHeroes.length;i++) {
    var img = new Image();
    img.src = fireHeroes[i].src;
    img.chance = fireHeroes[i].chance;
    //EDIT THE ATTRIBUTES OF THE LISTED IMAGES (I.E. : Spacing, size, etc)
    img.width = '163';
    img.height = '250';
    img.alt = fireHeroes[i].fireName;
    document.getElementById('Fire-Summon').appendChild(img);
    summonFire = function(){};
   
}

}

function summonEpicTroop() {

    

}
function summonEpicHero() {
    //Logs only the 4* up heroes fire heroes as of now with their data
    var i = 4;
    for (; i < 12; i++){
        document.getElementById("Epic-Hero-Summon").innerHTML = fireHeroes[i].fireName;
        console.table(fireHeroes[i]); //inspect element and view in console to see attributes of the heroes
    }
   

}

function summonEvent() {


}