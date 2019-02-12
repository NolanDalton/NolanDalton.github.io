// JavaScript source code
var summonType = ["Epic Hero", "Epic Troop", "Elemental Fire", "Elemental Ice", "Elemental Nature", "Elemental Holy", "Elemental Dark"];
var epicHero = summonType[0];
var epicTroop = summonType[1];
var elementalFire = summonType[2];
var elementalIce = summonType[3];
var elementalNature = summonType[4];
var elementalHoly = summonType[5]
var elementalDark = summonType[6];


function summonFire() {
 //image array for the fire heroes (0-3 = 3*, 4-8 = 4*, 14-24 = 5*) These are ALL fire heroes
 var fireHeroes = [];
 //Azar and per HERO attributes
 fireHeroes[0] = new Image();
 fireHeroes[0].name = "Azar";
 fireHeroes[0].chance = 17.7500000000;
 fireHeroes[0].src = 'misc/fire-heroes/azar.png';
 //Hawkmoon
 fireHeroes[1] = new Image();
 fireHeroes[1].name = "Hawkmoon";
 fireHeroes[1].chance = 17.7500000000;
 fireHeroes[1].src = 'misc/fire-heroes/hawkmoon.png';
 //Jahangir
 fireHeroes[2] = new Image();
 fireHeroes[2].name = "Jahangir"
 fireHeroes[2].chance = 17.7500000000;
 fireHeroes[2].src = 'misc/fire-heroes/jahangir.png';
 //Nashgar
 fireHeroes[3] = new Image();
 fireHeroes[3].name = "Nashgar";
 fireHeroes[3].chance = 17.7500000000;
 fireHeroes[3].src = 'misc/fire-heroes/nashgar.png';
 //Boldtusk
 fireHeroes[4] = new Image();
 fireHeroes[4].name = "Boldtusk";
 fireHeroes[4].chance = 6.62500000;
 fireHeroes[4].src = 'misc/fire-heroes/boldtusk.png';
 //Colen
 fireHeroes[5] = new Image();
 fireHeroes[5].name = "Colen";
 fireHeroes[5].chance = 6.62500000;
 fireHeroes[5].src = 'misc/fire-heroes/colen.png';
 //Gormek5
 fireHeroes[6] = new Image();
 fireHeroes[6].name = "Gormek";
 fireHeroes[6].chance = 6.62500000;
 fireHeroes[6].src = 'misc/fire-heroes/gormek.png';
 //Kelile
 fireHeroes[7] = new Image();
 fireHeroes[7].name = "Kelile";
 fireHeroes[7].chance = 6.62500000;
 fireHeroes[7].src = 'misc/fire-heroes/kelile.png';
 //Scarlett
 fireHeroes[8] = new Image();
 fireHeroes[8].name = "Scarlett";
 fireHeroes[8].chance = 6.62500000;
 fireHeroes[8].src = 'misc/fire-heroes/scarlett.png';
 
 //Azlar
 fireHeroes[9] = new Image();
 fireHeroes[9].name = "Azlar";
 fireHeroes[9].chance = 0.62500000;
 fireHeroes[9].src = 'misc/fire-heroes/azlar.png';

//Elena
fireHeroes[10] = new Image();
fireHeroes[10].name = "Elena";
fireHeroes[10].chance = 0.62500000;
fireHeroes[10].src = 'misc/fire-heroes/elena.png';

 //Marjana
 fireHeroes[11] = new Image();
 fireHeroes[11].name = "Marjana";
 fireHeroes[11].chance = 0.62500000;
 fireHeroes[11].src = 'misc/fire-heroes/marjana.png';


//creates the images one by one in a for loop using variable "i"
var i = 0,
    len = fireHeroes.length;
for (; i< fireHeroes.length;i++) {
    var img = new Image();
    img.src = fireHeroes[i].src;
    img.chance = fireHeroes[i].chance;
    //EDIT THE ATTRIBUTES OF THE LISTED IMAGES (I.E. : Spacing, size, etc)
    img.width = '163';
    img.height = '250';
    img.alt = fireHeroes[i].name;
    document.getElementById('Fire-Summon').appendChild(img);
    summonFire = function(){};
   
}

}

function summonEpicTroop() {


}

function summonElemental() {


}
function summonEvent() {


}