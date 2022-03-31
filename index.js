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

function mintMachine() {
  console.log("Minting button has been pressed");
}
