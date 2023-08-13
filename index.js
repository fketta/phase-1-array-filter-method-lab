function findMatching (names, strings){
    const matchingDrivers = names.filter(name =>
        name.toLowerCase().includes(strings.toLowerCase())
    );

    return matchingDrivers;
}

const drivers = ["Allan", "David", "Rick", "John", "Bobby", "Jake", "Nick"];

console.log(findMatching(drivers, "bobby"));


function fuzzyMatch(driverNames, letter) {
    return driverNames.filter(driverName =>
        driverName.toLowerCase().startsWith(letter.toLowerCase())
    );
}

const letter = "J";
const matchingDrivers = fuzzyMatch(drivers, letter);
console.log(matchingDrivers);





  function matchName (bames, strings){
    const matchingDrivers = bames.filter(bames =>
        bames.name.toLowerCase().includes(strings.toLowerCase())
    );

    return matchingDrivers;
}

const newDrivers = [
    { name: "John", hometown: "New York" },
    { name: "Alice", hometown: "Los Angeles" },
    { name: "Bob", hometown: "Chicago" },
    { name: "John", hometown: "Miami" }
  ];

  console.log(matchName(newDrivers, newDrivers.name="alice"));
