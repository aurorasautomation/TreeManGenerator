const backVariants = ["1", "2"];
const backgroundVariants = ["1", "2", "3"];
const barkVariants = ["1"];
const eyebrowVariants = ["1", "2", "3", "4", "5", "6"];
const faceVariants = ["1", "2"];
const headVariants = ["1", "2", "3"];
const outfitVariants = ["1", "2"];

const FirstName = [
  "Shamus",
  "Neil",
  "Connor",
  "Ben",
  "Thomas",
  "James",
  "Jack",
  "Daniel",
  "Matthew",
  "Ryan",
  "Joshua",
  "Luke",
  "Sam",
  "Jordan",
  "Callum",
  "Liam",
  "Nathan",
  "Chris",
  "Ethan",
  "Andy",
];
const LastName = [
  "Messi",
  "Ronaldo",
  "Pillay",
  "Verstappen",
  "Hamilton",
  "Norris",
  "LeClerc",
  "Sainz",
  "Perez",
  "Button",
  "Kane",
  "Salah",
  "Sterling",
  "Sancho",
  "Smith",
  "Jones",
  "Williams",
  "Taylor",
  "Davies",
  "Brown",
];
const NameAdj = [
  "'Mighty",
  "'God",
  "'Crushing",
  "'Brilliant",
  "'All-Knowing",
  "'Powerful",
  "'Masterful",
  "'Valiant",
  "'Magical",
  "'Ultimate",
  "'Angelic",
  "'Superpowered",
  "'Blazing",
  "'Glorious",
  "'Excellent",
];
const NameNoun = [
  "Arm'",
  "Brain'",
  "Boot'",
  "Stallion'",
  "Lion'",
  "Bear'",
  "Giant'",
  "Unit'",
  "Fist'",
  "Hand'",
  "Face'",
  "Wolf'",
  "Sensei'",
  "Lord'",
  "King'",
];

function chooseBackground() {
  let chosenBackground = document.getElementById("backgroundVariant").value;
  document.getElementById("background").src =
    "./Backgrounds/" + backgroundVariants[chosenBackground] + ".svg";
}

function chooseBark() {
  let chosenBark = document.getElementById("barkVariant").value;
  document.getElementById("bark").src =
    "./Barks/" + barkVariants[chosenBark] + ".svg";
}

function chooseOutfit() {
  let chosenOutfit = document.getElementById("outfitVariant").value;
  document.getElementById("outfit").src =
    "./Outfits/" + outfitVariants[chosenOutfit] + ".svg";
}

function chooseHead() {
  let chosenHead = document.getElementById("headVariant").value;
  document.getElementById("head").src =
    "./Head/" + headVariants[chosenHead] + ".svg";
}

function chooseFace() {
  let chosenFace = document.getElementById("faceVariant").value;
  document.getElementById("face").src =
    "./Face/" + faceVariants[chosenFace] + ".svg";
}

function chooseEyebrows() {
  let chosenEyebrows = document.getElementById("eyebrowsVariant").value;
  document.getElementById("eyebrows").src =
    "./Eyebrows/" + eyebrowVariants[chosenEyebrows] + ".svg";
}

function chooseBack() {
  let chosenBack = document.getElementById("backVariant").value;
  document.getElementById("back").src =
    "./Back/" + backVariants[chosenBack] + ".svg";
}

function randomName() {
  let firstNameGiven = Math.floor(Math.random() * 20);
  let lastNameGiven = Math.floor(Math.random() * 20);
  let AdjNameGiven = Math.floor(Math.random() * 15);
  let NounNameGiven = Math.floor(Math.random() * 15);
  let backWhatever = Math.floor(Math.random() * 2);
  let barkWhatever = Math.floor(Math.random() * 1);
  let eyebrowsWhatever = Math.floor(Math.random() * 6);
  let faceWhatever = Math.floor(Math.random() * 2);
  let outfitWhatever = Math.floor(Math.random() * 2);
  let backgroundWhatever = Math.floor(Math.random() * 3);
  document.getElementById("characterName").innerHTML =
    FirstName[firstNameGiven] +
    " " +
    NameAdj[AdjNameGiven] +
    " " +
    NameNoun[NounNameGiven] +
    " " +
    LastName[lastNameGiven];
  document.getElementById("background").src =
    "./Backgrounds/" + backgroundColours[backgroundWhatever] + ".svg";
  document.getElementById("hat").src =
    "./HatRecolor/" + hatColours[backWhatever] + ".svg";
  document.getElementById("skinColor").src =
    "./SkinRecolor/" + skinColours[eyebrowsWhatever] + ".svg";
  document.getElementById("Glasses").src =
    "./Sunglasses+Recolor/" + glassesColours[barkWhatever] + ".svg";
  document.getElementById("waistCoat").src =
    "./WaistcoatRecolor/" + waistColours[faceWhatever] + ".svg";
  document.getElementById("Rings").src =
    "./RingRecolor/" + ringColours[outfitWhatever] + ".svg";
}
function randomize() {
  let backWhatever = Math.floor(Math.random() * 2);
  let barkWhatever = Math.floor(Math.random() * 1);
  let eyebrowsWhatever = Math.floor(Math.random() * 6);
  let faceWhatever = Math.floor(Math.random() * 2);
  let outfitWhatever = Math.floor(Math.random() * 2);
  let backgroundWhatever = Math.floor(Math.random() * 3);

  document.getElementById("background").src =
    "./Backgrounds/" + backgroundColours[backgroundWhatever] + ".svg";
  document.getElementById("hat").src =
    "./HatRecolor/" + hatColours[backWhatever] + ".svg";
  document.getElementById("skinColor").src =
    "./SkinRecolor/" + skinColours[eyebrowsWhatever] + ".svg";
  document.getElementById("Glasses").src =
    "./Sunglasses+Recolor/" + glassesColours[barkWhatever] + ".svg";
  document.getElementById("waistCoat").src =
    "./WaistcoatRecolor/" + waistColours[faceWhatever] + ".svg";
  document.getElementById("Rings").src =
    "./RingRecolor/" + ringColours[outfitWhatever] + ".svg";
}

function calcTotalNumberOfVariance() {
  const LastName = [
    "Messi",
    "Ronaldo",
    "Pillay",
    "Verstappen",
    "Hamilton",
    "Norris",
    "LeClerc",
    "Sainz",
    "Perez",
    "Button",
    "Kane",
    "Salah",
    "Sterling",
    "Sancho",
    "Smith",
    "Jones",
    "Williams",
    "Taylor",
    "Davies",
    "Brown",
  ];
  document.getElementById("totalNumberOfVariants").innerHTML =
    backVariants.length *
    backgroundVariants.length *
    barkVariants.length *
    outfitVariants.length *
    faceVariants.length *
    headVariants.length *
    FirstName.length *
    LastName.length;
}

function mintMachine() {
  console.log("Minting button has been pressed");
}
