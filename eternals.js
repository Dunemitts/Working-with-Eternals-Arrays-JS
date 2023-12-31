const allHeroes = [
    {
        heroName: "Kingo",
        attribute1: "sword",
        attribute2: "gun",
        attribute3: "acting",
    },
    {
        heroName: "Thena",
        attribute1: "spear",
        attribute2: "teleport",
        attribute3: "telepathy",
    },
    {
        heroName: "Sersi",
        attribute1: "multilingual",
        attribute2: "healing",
        attribute3: "immortality",
    },
    {
        heroName: "Ikaris",
        attribute1: "strength",
        attribute2: "durability",
        attribute3: "laser",
    },
    {
        heroName: "Zuras",
        attribute1: "invulnerability",
        attribute2: "energy",
        attribute3: "matter manipulation",
    },
]

let list = document.getElementById("heroList");
allHeroes.forEach((heroes) => {
    let li = document.createElement("li");
    li.innerText = heroes.heroName;
    list.appendChild(li);
});

let selectedHeroes = [];

const selecting = (attribute, index, arr) => {
    let desiredAttribute = document.querySelector("#heroAttribute").value;
    if (arr[index].attribute1 == desiredAttribute || arr[index].attribute2 == desiredAttribute || arr[index].attribute3 == desiredAttribute){
        selectedHeroes.push(arr[index])
        attributePaste(arr[index])
    }
}

const attributePaste = (selectedHero) => {
    let str = `${selectedHero.heroName} is skilled at fighting with ${selectedHero.attribute1}, ${selectedHero.attribute2}, and ${selectedHero.attribute3}.<br>`;
    let area = document.querySelector(".areaPaste");
    area.innerHTML = str;
    let pic = document.querySelector("#profile");
    pic.src = selectedHero.heroName + ".png";
}