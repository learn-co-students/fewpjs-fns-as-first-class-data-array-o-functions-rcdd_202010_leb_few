function wakeDog(dogName="Byron", dogBreed="poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
    return  `Wake ${dogName} the ${dogBreed}`
}


function leashDog(dogName="Byron", dogBreed="poodle") {
  let activity="Leash ${dogName} the ${dogBreed}";
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}
function walkToPark(dogName="Byron", dogBreed="poodle") {
  let activity="`Walk to the park with ${dogName} the ${dogBreed}";
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}
function throwFrisbee(dogName="Byron", dogBreed="poodle") {
  let activity="Throw the frisbee for ${dogName} the ${dogBreed}";
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
function walkHome(dogName="Byron", dogBreed="poodle") {
  let activity="Walk home with ${dogName} the ${dogBreed}";
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}
function unleashDog(dogName="Byron", dogBreed="poodle") {
  let activity="Unleash ${dogName} the ${dogBreed}";
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}
const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName, dogBreed) {
  return routine.map(funct => funct(dogName, dogBreed))
}