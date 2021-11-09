

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = officeItems.filter(x => x === "computer").length;

console.log(count);


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if( peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough");
    } else {
        console.log("not old enough");
    }
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough");
   } else {
       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough");
   }
}

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for( let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        let userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HE's" : "SHE's"
        
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. " + userGender + " good to see Mad Max Fury Road.")
   } else {
    let userGender = peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? "HIM" : "HER"
       
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let "+ userGender + " in.")
 }
}

[2, 5, 435, 4, 3] // "The light is on"
[1, 1, 1, 1, 3]   // "The light is on"
[9, 3, 4, 2]      // "The light is off"

var lights = false;

var switches = [ 2, 5, 435, 4, 3];

for( var i = 0; i < switches.length; i++ ) {
    for( var j = 0; j < switches[i]; j++ ) {
        lights = !lights;
    }
}

if( lights ) {
    console.log("The lights are on");
} else {
    console.log("The lights are off");
}

var lights = false;

var switches = [ 1, 1, 1, 1, 3];

for( var i = 0; i < switches.length; i++ ) { // 2 1
    for( var j = 0; j < switches[i]; j++ ) {
        lights = !lights;
    }
}

if( lights ) {
    console.log("The lights are on");
} else {
    console.log("The lights are off");
}

var lights = false;

var switches = [ 9, 3, 4, 2];

for( var i = 0; i < switches.length; i++ ) { // 2 1
    for( var j = 0; j < switches[i]; j++ ) {
        lights = !lights;
    }
}

if( lights ) {
    console.log("The lights are on");
} else {
    console.log("The lights are off");
}