/* This is a web tracker for The Minish Cap made by cubesolver111
   For any suggestions or questions, dm me on discord*/

//This section consists of variables for marking the items.
//If a variable has the word 'has' in it, it is a true/false variable
//that gets taoggled when clicked.
//If the variable is a number, there are multiple upgrades to the item or
//it is treated as a counter that is incremented on click, then reset after a certain point.
//The variables are broken up into 8 groups of 8 as they appear in the rows on the tracker.

var sword = 0;
var hasJar = false;
var hasCane = false;
var boomerang = 0;
var wallet = 0;
var hasDWSBig = false;
var dwsSmallKey = 0;

var shield = 0;
var hasMitts = false;
var hasLantern = false;
var bombs = 0;
var stonesWilds = 0;
var hasCOFBig = false;
var cofSmallKey = 0;

var hasBoots = false;
var hasCape = false;
var hasFlute = false;
var bow = 0;
var stonesClouds = 0;
var hasFOWBig = false;
var fowSmallKey = 0;

var bottles = 0;
var hasJabber = false;
var hasMushroom = false;
var hasLLRKey = false;
var hasStonesFalls = false;
var hasTODBig = false;
var todSmallKey = 0;

var hasGripRing = false;
var hasBracelets = false;
var hasFlippers = false;
var hasGraveKey = false;
var hasCarlov = false;
var hasPOWBig = false;
var powSmallKey = 0;

var hasEarth = false;
var hasFire = false;
var hasWater = false;
var hasWind = false;
var cryptSmallKey = 0;
var hasDHCBig = false;
var dhcSmallKey = 0;

var greenArrow = 0;
var greenBracket = 0;
var greenP = 0;
var blue6 = 0;
var blueL = 0;
var redArrow = 0;
var red3 = 0;
var redE = 0;

var hasSpin = false;
var hasRock = false;
var hasDash = false;
var hasThrust = false;
var hasRoll = false;
var hasSwordBeam = false;
var hasPerilBeam = false;
var hasGreatSpin = false;

//This section handles the toggling and incrementing of each item.
//Like the variables, it is split up into 8 groups of 8 as the items appear
//in each row on the tracker.
//I could make every item with multiple upgrades use the same type of function as
//the kinstones and small keys, but I prefer the more descriptive image names.
//The only one I am considering changing to fit this style is the bow.

//Row 1
function changeSword() {
  if (sword==0) {
    $('#swords').css({filter:'grayscale(0%)'});
    sword++;
  }
  else if (sword==1) {
    $('#swords').attr('src', 'images/item sprites/Green Sword.png');
    sword++;
  }
  else if (sword==2) {
    $('#swords').attr('src', 'images/item sprites/Red Sword.png');
    sword++;
  }
  else if(sword==3) {
    $('#swords').attr('src', 'images/item sprites/Blue Sword.png');
    sword++;
  }
  else if (sword==4) {
    $('#swords').attr('src', 'images/item sprites/Four Sword.png');
    sword++;
  }
  else {
    $('#swords').attr('src', "images/item sprites/Smith's Sword.png");
    $('#swords').css({filter:'grayscale(100%)'});
    sword=0;
  }
}
function changeJar() {
  if(hasJar==false) {
    $('#jar').css({filter:'grayscale(0%)'});
    hasJar=true;
  }
  else {
    $('#jar').css({filter:'grayscale(100%)'});
    hasJar=false;
  }
}
function changeCane() {
  if(hasCane==false) {
    $('#cane').css({filter:'grayscale(0%)'});
    hasCane=true;
  }
  else {
    $('#cane').css({filter:'grayscale(100%)'});
    hasCane=false;
  }
}
function changeRang() {
  if(boomerang==0) {
    $('#rang').css({filter:'grayscale(0%)'});
    boomerang=1;
  }
  else if(boomerang==1) {
    $('#rang').attr('src', 'images/item sprites/Magical Boomerang.png');
    boomerang=2;
  }
  else {
    $('#rang').attr('src', 'images/item sprites/Boomerang.png');
    $('#rang').css({filter:'grayscale(100%)'});
    boomerang=0;
  }
}
function changeWallet() {
  if(wallet==0) {
    $('#wallet').attr('src', 'images/item sprites/Wallet300alt.png');
    $('#wallet').css({filter:'grayscale(0%)'});
    wallet++;
  }
  else if(wallet==1) {
    $('#wallet').attr('src', 'images/item sprites/Wallet500alt.png');
    wallet++;
  }
  else if(wallet==2) {
    $('#wallet').attr('src', 'images/item sprites/Wallet999alt.png');
    wallet++;
  }
  else {
    $('#wallet').attr('src', 'images/item sprites/Wallet300.png');
    $('#wallet').css({filter:'grayscale(100%)'});
    wallet=0;
  }
}
function changeDWSBig() {
  if(hasDWSBig==false) {
    $('#dwsBig').css({filter:'grayscale(0%)'});
    hasDWSBig=true;
  }
  else {
    $('#dwsBig').css({filter:'grayscale(100%)'});
    hasDWSBig=false;
  }
}
function changeDWSSmall() {
  if(dwsSmallKey<4) {
    dwsSmallKey++;
    $('#dwsSmall').css({filter:'grayscale(0%)'});
    $('#dwsSmall').attr('src','images/item sprites/Small Key' + dwsSmallKey + '.png');
  }
  else {
    $('#dwsSmall').css({filter:'grayscale(100%)'});
    $('#dwsSmall').attr('src','images/item sprites/Small Key.png');
    dwsSmallKey=0;
  }
}


//Row 2
function changeShield() {
  if(shield==0) {
    $('#shields').css({filter:'grayscale(0%)'});
    shield++;
  }
  else if (shield==1) {
    $('#shields').attr('src','images/item sprites/Mirror Shield.png');
    shield++;
  }
  else {
    $('#shields').attr('src','images/item sprites/Small Shield.png');
    $('#shields').css({filter:'grayscale(100%)'});
    shield=0;
  }
}
function changeMitts() {
  if(hasMitts==false) {
    $('#mitts').css({filter:'grayscale(0%)'});
    hasMitts=true;
  }
  else {
    $('#mitts').css({filter:'grayscale(100%)'});
    hasMitts=false;
  }
}
function changeLantern() {
  if(hasLantern==false) {
    $('#lantern').css({filter:'grayscale(0%)'});
    $('#lantern').attr('src','images/item sprites/Flame Lantern (Lit).png');
    hasLantern=true;
  }
  else {
    $('#lantern').css({filter:'grayscale(100%)'});
    $('#lantern').attr('src','images/item sprites/Flame Lantern.png');
    hasLantern=false;
  }
}
function changeBombs() {
  if(bombs==0) {
    $('#bomb').css({filter:'grayscale(0%)'});
    bombs++;
  }
  else if(bombs==1) {
    $('#bomb').attr('src','images/item sprites/Remote Bombs.png');
    bombs++;
  }
  else {
    $('#bomb').attr('src','images/item sprites/Bomb.png');
    $('#bomb').css({filter:'grayscale(100%)'});
    bombs=0;
  }
}
function changeStonesWilds() {
  if (stonesWilds<3) {
    stonesWilds++;
    $('#goldWilds').attr('src','images/item sprites/Kinstones/Gold Kinstone (Wilds)' + stonesWilds +'.png');
    $('#goldWilds').css({filter:'grayscale(0%)'});
  }
  else {
    $('#goldWilds').attr('src','images/item sprites/Kinstones/Gold Kinstone (Wilds).png');
    $('#goldWilds').css({filter:'grayscale(100%)'});
    stonesWilds=0;
  }

}
function changeCOFBig() {
  if(hasCOFBig==false) {
    $('#cofBig').css({filter:'grayscale(0%)'});
    hasCOFBig=true;
  }
  else {
    $('#cofBig').css({filter:'grayscale(100%)'});
    hasCOFBig=false;
  }
}
function changeCOFSmall() {
  if(cofSmallKey<2) {
    cofSmallKey++;
    $('#cofSmall').css({filter:'grayscale(0%)'});
    $('#cofSmall').attr('src','images/item sprites/Small Key' + cofSmallKey + '.png');
  }
  else {
    $('#cofSmall').attr('src','images/item sprites/Small Key.png');
    $('#cofSmall').css({filter:'grayscale(100%)'});
    cofSmallKey=0;
  }
}

//Row 3
function changeBoots() {
 if(hasBoots==false) {
   $('#boots').css({filter:'grayscale(0%)'});
   hasBoots=true;
 }
 else {
   $('#boots').css({filter:'grayscale(100%)'});
   hasBoots=false;
 }
}
function changeCape() {
  if(hasCape==false) {
    $('#cape').css({filter:'grayscale(0%)'});
    hasCape=true;
  }
  else {
    $('#cape').css({filter:'grayscale(100%)'});
    hasCape=false;
  }
}
function changeFlute() {
  if(hasFlute==false) {
    $('#ocarina').css({filter:'grayscale(0%)'});
    hasFlute=true;
  }
  else {
    $('#ocarina').css({filter:'grayscale(100%)'});
    hasFlute=false;
  }
}
function changeBow() {
  if(bow==0) {
    $('#bow').css({filter:'grayscale(0%)'});
    $('#bow').attr('src','images/item sprites/Bow30.png');
    bow++;
  }
  else if (bow==1) {
    $('#bow').attr('src','images/item sprites/Bow50.png');
    bow++;
  }
  else if (bow==2) {
    $('#bow').attr('src','images/item sprites/Bow70.png');
    bow++;
  }
  else if (bow==3) {
    $('#bow').attr('src','images/item sprites/Bow99.png');
    bow++;
  }
  else if(bow==4) {
    $('#bow').attr('src','images/item sprites/Light Arrow30.png');
    bow++;
  }
  else if (bow==5) {
    $('#bow').attr('src','images/item sprites/Light Arrow50.png');
    bow++;
  }
  else if (bow==6) {
    $('#bow').attr('src','images/item sprites/Light Arrow70.png');
    bow++;
  }
  else if (bow==7) {
    $('#bow').attr('src','images/item sprites/Light Arrow99.png');
    bow++;
  }
  else {
    $('#bow').attr('src','images/item sprites/Bow.png');
    $('#bow').css({filter:'grayscale(100%)'});
    bow=0;
  }
}
function changeStonesClouds() {
  if(stonesClouds<5) {
    stonesClouds++;
    $('#goldClouds').attr('src','images/item sprites/Kinstones/Gold Kinstone (Clouds)' + stonesClouds + '.png');
    $('#goldClouds').css({filter:'grayscale(0%)'});
  }
  else {
    $('#goldClouds').attr('src','images/item sprites/Kinstones/Gold Kinstone (Clouds).png');
    $('#goldClouds').css({filter:'grayscale(100%)'});
    stonesClouds=0;
  }
}
function changeFOWBig() {
  if(hasFOWBig==false) {
    $('#fowBig').css({filter:'grayscale(0%)'});
    hasFOWBig=true;
  }
  else {
    $('#fowBig').css({filter:'grayscale(100%)'});
    hasFOWBig=false;
  }
}
function changeFOWSmall() {
  if(fowSmallKey<4) {
    fowSmallKey++;
    $('#fowSmall').css({filter:'grayscale(0%)'});
    $('#fowSmall').attr('src','images/item sprites/Small Key' + fowSmallKey + '.png');
  }
  else {
    $('#fowSmall').attr('src','images/item sprites/Small Key.png');
    $('#fowSmall').css({filter:'grayscale(100%)'});
    fowSmallKey=0;
  }
}

//Row 4
function changeBottle() {
  if(bottles<4) {
    bottles++;
    $('#bottle').css({filter:'grayscale(0%)'});
    $('#bottle').attr('src','images/item sprites/Empty Bottle' + bottles + '.png');
  }
  else {
    $('#bottle').css({filter:'grayscale(100%)'});
    $('#bottle').attr('src','images/item sprites/Empty Bottle.png');
    bottles=0;
  }
}
function changeJabber() {
  if(hasJabber==false) {
    $('#jabber').css({filter:'grayscale(0%)'});
    hasJabber=true;
  }
  else {
    $('#jabber').css({filter:'grayscale(100%)'});
    hasJabber=false;
  }
}
function changeMushroom() {
  if(hasMushroom==false) {
    $('#mushroom').css({filter:'grayscale(0%)'});
    hasMushroom=true;
  }
  else {
    $('#mushroom').css({filter:'grayscale(100%)'});
    hasMushroom=false;
  }
}
function changeLLRKey() {
  if(hasLLRKey==false) {
    $('#llrKey').css({filter:'brightness(120%)'});
    hasLLRKey=true;
  }
  else {
    $('#llrKey').css({filter:'grayscale(100%)'});
    hasLLRKey=false;
  }
}
function changeStonesFalls() {
  if(hasStonesFalls==false) {
    $('#goldFalls').css({filter:'grayscale(0%)'});
    hasStonesFalls=true;
  }
  else {
    $('#goldFalls').css({filter:'grayscale(100%)'});
    hasStonesFalls=false;
  }
}
function changeTODBig() {
  if(hasTODBig==false) {
    $('#todBig').css({filter:'grayscale(0%)'});
    hasTODBig=true;
  }
  else {
    $('#todBig').css({filter:'grayscale(100%)'});
    hasTODBig=false;
  }
}
function changeTODSmall() {
  if(todSmallKey<4) {
    todSmallKey++;
    $('#todSmall').css({filter:'grayscale(0%)'});
    $('#todSmall').attr('src','images/item sprites/Small Key' + todSmallKey + '.png');
  }
  else {
    $('#todSmall').attr('src','images/item sprites/Small Key.png');
    $('#todSmall').css({filter:'grayscale(100%)'});
    todSmallKey=0;
  }
}

//Row 5
function changeGripRing() {
  if(hasGripRing==false) {
    $('#gripRing').css({filter:'grayscale(0%)'});
    hasGripRing=true;
  }
  else {
    $('#gripRing').css({filter:'grayscale(100%)'});
    hasGripRing=false;
  }
}
function changeBracelets() {
  if(hasBracelets==false) {
    $('#bracelets').css({filter:'grayscale(0%)'});
    hasBracelets=true;
  }
  else {
    $('#bracelets').css({filter:'grayscale(100%)'});
    hasBracelets=false;
  }
}
function changeFlippers() {
  if(hasFlippers==false) {
    $('#flippers').css({filter:'grayscale(0%)'});
    hasFlippers=true;
  }
  else {
    $('#flippers').css({filter:'grayscale(100%)'});
    hasFlippers=false;
  }
}
function changeGraveKey() {
  if(hasGraveKey==false) {
    $('#graveKey').css({filter:'grayscale(0%)'});
    hasGraveKey=true;
  }
  else {
    $('#graveKey').css({filter:'grayscale(100%)'});
    hasGraveKey=false;
  }
}
function changeCarlov() {
  if(hasCarlov==false) {
    $('#carlovMedal').css({filter:'grayscale(0%)'});
    hasCarlov=true;
  }
  else {
    $('#carlovMedal').css({filter:'grayscale(100%)'});
    hasCarlov=false;
  }
}
function changePOWBig() {
  if(hasPOWBig==false) {
    $('#powBig').css({filter:'grayscale(0%)'});
    hasPOWBig=true;
  }
  else {
    $('#powBig').css({filter:'grayscale(100%)'});
    hasPOWBig=false;
  }
}
function changePOWSmall() {
  if(powSmallKey<5) {
    powSmallKey++;
    $('#powSmall').css({filter:'grayscale(0%)'});
    $('#powSmall').attr('src','images/item sprites/Small Key' + powSmallKey + '.png');
  }
  else {
    $('#powSmall').attr('src','images/item sprites/Small Key.png');
    $('#powSmall').css({filter:'grayscale(100%)'});
    powSmallKey=0;
  }
}

//Row 6
function changeEarth() {
  if(hasEarth==false) {
    $('#earth').css({filter:'grayscale(0%)'});
    hasEarth=true;
  }
  else {
    $('#earth').css({filter:'grayscale(100%)'});
    hasEarth=false;
  }
}
function changeFire() {
  if(hasFire==false) {
    $('#fire').css({filter:'grayscale(0%)'});
    hasFire=true;
  }
  else {
    $('#fire').css({filter:'grayscale(100%)'});
    hasFire=false;
  }
}
function changeWater() {
  if(hasWater==false) {
    $('#water').css({filter:'grayscale(0%)'});
    hasWater=true;
  }
  else {
    $('#water').css({filter:'grayscale(100%)'});
    hasWater=false;
  }
}
function changeWind() {
  if(hasWind==false) {
    $('#wind').css({filter:'grayscale(0%)'});
    hasWind=true;
  }
  else {
    $('#wind').css({filter:'grayscale(100%)'});
    hasWind=false;
  }
}
function changeCryptSmall() {
  if(cryptSmallKey<3) {
    cryptSmallKey++;
    $('#cryptKey').css({filter:'grayscale(0%)'});
    $('#cryptKey').attr('src','images/item sprites/Crypt Key' + cryptSmallKey + '.png');
  }
  else {
    $('#cryptKey').attr('src','images/item sprites/Crypt Key.png');
    $('#cryptKey').css({filter:'grayscale(100%)'});
    cryptSmallKey=0;
  }
}
function changeDHCBig() {
  if(hasDHCBig==false) {
    $('#dhcBig').css({filter:'grayscale(0%)'});
    hasDHCBig=true;
  }
  else {
    $('#dhcBig').css({filter:'grayscale(100%)'});
    hasDHCBig=false;
  }
}
function changeDHCSmall() {
  if(dhcSmallKey<6) {
    dhcSmallKey++;
    $('#dhcSmall').css({filter:'grayscale(0%)'});
    $('#dhcSmall').attr('src','images/item sprites/Small Key' + dhcSmallKey + '.png');
  }
  else {
    $('#dhcSmall').attr('src','images/item sprites/Small Key.png');
    $('#dhcSmall').css({filter:'grayscale(100%)'});
    dhcSmallKey=0;
  }
}

//Row 7
function changeGreenArrow() {
  if(greenArrow<20) {
    greenArrow++;
    $('#gArrow').css({filter:'grayscale(0%)'});
    $('#gArrow').attr('src','images/item sprites/Kinstones/Green Arrow/Green Kinstone Arrow' + greenArrow + '.png');
  }
  else {
    $('#gArrow').css({filter:'grayscale(100%)'});
    $('#gArrow').attr('src','images/item sprites/Kinstones/Green Arrow/Green Kinstone Arrow.png');
    greenArrow=0;
  }
}
function changeGreenBracket() {
  if(greenBracket<20) {
    greenBracket++;
    $('#gBracket').css({filter:'grayscale(0%)'});
    $('#gBracket').attr('src','images/item sprites/Kinstones/Green Bracket/Green Kinstone Bracket' + greenBracket + '.png');
  }
  else {
    $('#gBracket').css({filter:'grayscale(100%)'});
    $('#gBracket').attr('src','images/item sprites/Kinstones/Green Bracket/Green Kinstone Bracket.png');
    greenBracket=0;
  }
}
function changeGreenP() {
  if(greenP<20) {
    greenP++;
    $('#gP').css({filter:'grayscale(0%)'});
    $('#gP').attr('src','images/item sprites/Kinstones/Green P/Green Kinstone P' + greenP + '.png');
  }
  else {
    $('#gP').css({filter:'grayscale(100%)'});
    $('#gP').attr('src','images/item sprites/Kinstones/Green P/Green Kinstone P.png');
    greenP=0;
  }
}
function changeBlue6() {
  if(blue6<10) {
    blue6++;
    $('#b6').css({filter:'grayscale(0%)'});
    $('#b6').attr('src','images/item sprites/Kinstones/Blue 6/Blue Kinstone 6' + blue6 + '.png');
  }
  else {
    $('#b6').css({filter:'grayscale(100%)'});
    $('#b6').attr('src','images/item sprites/Kinstones/Blue 6/Blue Kinstone 6.png');
    blue6=0;
  }
}
function changeBlueL() {
  if(blueL<10) {
    blueL++;
    $('#bL').css({filter:'grayscale(0%)'});
    $('#bL').attr('src','images/item sprites/Kinstones/Blue L/Blue Kinstone L' + blueL + '.png');
  }
  else {
    $('#bL').css({filter:'grayscale(100%)'});
    $('#bL').attr('src','images/item sprites/Kinstones/Blue L/Blue Kinstone L.png');
    blueL=0;
  }
}
function changeRedArrow() {
  if(redArrow<10) {
    redArrow++;
    $('#rArrow').css({filter:'grayscale(0%)'});
    $('#rArrow').attr('src','images/item sprites/Kinstones/Red Arrow/Red Kinstone Arrow' + redArrow + '.png');
  }
  else {
    $('#rArrow').css({filter:'grayscale(100%)'});
    $('#rArrow').attr('src','images/item sprites/Kinstones/Red Arrow/Red Kinstone Arrow.png');
    redArrow=0;
  }
}
function changeRed3() {
  if(red3<10) {
    red3++;
    $('#r3').css({filter:'grayscale(0%)'});
    $('#r3').attr('src','images/item sprites/Kinstones/Red 3/Red Kinstone 3' + red3 + '.png');
  }
  else {
    $('#r3').css({filter:'grayscale(100%)'});
    $('#r3').attr('src','images/item sprites/Kinstones/Red 3/Red Kinstone 3.png');
    red3=0;
  }
}
function changeRedE() {
  if(redE<10) {
    redE++;
    $('#rE').css({filter:'grayscale(0%)'});
    $('#rE').attr('src','images/item sprites/Kinstones/Red E/Red Kinstone E' + redE + '.png');
  }
  else {
    $('#rE').css({filter:'grayscale(100%)'});
    $('#rE').attr('src','images/item sprites/Kinstones/Red E/Red Kinstone E.png');
    redE=0;
  }
}

//Row 8
function changeSpinAttack() {
  if(hasSpin==false) {
    $('#spinAttack').css({filter:'grayscale(0%)'});
    hasSpin=true;
  }
  else {
    $('#spinAttack').css({filter:'grayscale(100%)'});
    hasSpin=false;
  }
}
function changeRockBreaker() {
  if(hasRock==false) {
    $('#rockBreaker').css({filter:'grayscale(0%)'});
    hasRock=true;
  }
  else {
    $('#rockBreaker').css({filter:'grayscale(100%)'});
    hasRock=false;
  }
}
function changeDashAttack() {
  if(hasDash==false) {
    $('#dashAttack').css({filter:'grayscale(0%)'});
    hasDash=true;
  }
  else {
    $('#dashAttack').css({filter:'grayscale(100%)'});
    hasDash=false;
  }
}
function changeDownThrust() {
  if(hasThrust==false) {
    $('#downThrust').css({filter:'grayscale(0%)'});
    hasThrust=true;
  }
  else {
    $('#downThrust').css({filter:'grayscale(100%)'});
    hasThrust=false;
  }
}
function changeRollAttack() {
  if(hasRoll==false) {
    $('#rollAttack').css({filter:'grayscale(0%)'});
    hasRoll=true;
  }
  else {
    $('#rollAttack').css({filter:'grayscale(100%)'});
    hasRoll=false;
  }
}
function changeSwordBeam() {
  if(hasSwordBeam==false) {
    $('#swordBeam').css({filter:'grayscale(0%)'});
    hasSwordBeam=true;
  }
  else {
    $('#swordBeam').css({filter:'grayscale(100%)'});
    hasSwordBeam=false;
  }
}
function changePerilBeam() {
  if(hasPerilBeam==false) {
    $('#perilBeam').css({filter:'grayscale(0%)'});
    hasPerilBeam=true;
  }
  else {
    $('#perilBeam').css({filter:'grayscale(100%)'});
    hasPerilBeam=false;
  }
}
function changeGreatSpinAttack() {
  if(hasGreatSpin==false) {
    $('#greatSpinAttack').css({filter:'grayscale(0%)'});
    hasGreatSpin=true;
  }
  else {
    $('#greatSpinAttack').css({filter:'grayscale(100%)'});
    hasGreatSpin=false;
  }
}

//This function sets up the listeners for when a user clicks on each item.
//As with the rest of the code, it is split up into 8 groups of 8.
function setUp() {
  $('#swords').click(changeSword);
  $('#jar').click(changeJar);
  $('#cane').click(changeCane);
  $('#rang').click(changeRang);
  $('#wallet').click(changeWallet);
  $('#dwsBig').click(changeDWSBig);
  $('#dwsSmall').click(changeDWSSmall);

  $('#shields').click(changeShield);
  $('#mitts').click(changeMitts);
  $('#lantern').click(changeLantern);
  $('#bomb').click(changeBombs);
  $('#goldWilds').click(changeStonesWilds);
  $('#cofBig').click(changeCOFBig);
  $('#cofSmall').click(changeCOFSmall);

  $('#boots').click(changeBoots);
  $('#cape').click(changeCape);
  $('#ocarina').click(changeFlute);
  $('#bow').click(changeBow);
  $('#goldClouds').click(changeStonesClouds);
  $('#fowBig').click(changeFOWBig);
  $('#fowSmall').click(changeFOWSmall);

  $('#bottle').click(changeBottle);
  $('#jabber').click(changeJabber);
  $('#mushroom').click(changeMushroom);
  $('#llrKey').click(changeLLRKey);
  $('#goldFalls').click(changeStonesFalls);
  $('#todBig').click(changeTODBig);
  $('#todSmall').click(changeTODSmall);

  $('#gripRing').click(changeGripRing);
  $('#bracelets').click(changeBracelets);
  $('#flippers').click(changeFlippers);
  $('#graveKey').click(changeGraveKey);
  $('#carlovMedal').click(changeCarlov);
  $('#powBig').click(changePOWBig);
  $('#powSmall').click(changePOWSmall);

  $('#earth').click(changeEarth);
  $('#fire').click(changeFire);
  $('#water').click(changeWater);
  $('#wind').click(changeWind);
  $('#cryptKey').click(changeCryptSmall);
  $('#dhcBig').click(changeDHCBig);
  $('#dhcSmall').click(changeDHCSmall);

  $("#gArrow").click(changeGreenArrow);
  $("#gBracket").click(changeGreenBracket);
  $('#gP').click(changeGreenP);
  $('#b6').click(changeBlue6);
  $('#bL').click(changeBlueL);
  $("#rArrow").click(changeRedArrow);
  $('#r3').click(changeRed3);
  $('#rE').click(changeRedE);

  $('#spinAttack').click(changeSpinAttack);
  $('#rockBreaker').click(changeRockBreaker);
  $('#dashAttack').click(changeDashAttack);
  $('#downThrust').click(changeDownThrust);
  $('#rollAttack').click(changeRollAttack);
  $('#swordBeam').click(changeSwordBeam);
  $('#perilBeam').click(changePerilBeam);
  $('#greatSpinAttack').click(changeGreatSpinAttack);
}

$(document).ready(setUp);
