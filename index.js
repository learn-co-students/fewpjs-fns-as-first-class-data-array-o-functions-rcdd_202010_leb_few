let wakeDog = (dogName, dogBreed) => {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}
let leashDog = (dogName, dogBreed) => {
  console.log(`Leash ${dogName} the ${dogBreed}`)
  return `Leash ${dogName} the ${dogBreed}`
}
let walkToPark = (dogName, dogBreed) => {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}
let throwFrisbee = (dogName, dogBreed) => {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`)
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}
let walkHome = (dogName, dogBreed) => {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}
let unleashDog = (dogName, dogBreed) => {
  console.log(`Unleash ${dogName} the ${dogBreed}`)
  return `Unleash ${dogName} the ${dogBreed}`
}
let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
function exerciseDog(dogName, dogBreed){
  return routine.map(elem => elem(dogName, dogBreed))
}
