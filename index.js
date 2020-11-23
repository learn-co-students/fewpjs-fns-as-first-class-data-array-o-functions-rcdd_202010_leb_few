wakeDog("Xerox","Border Collie");
leashDog("Boo Radley","Pibble" );

walkToPark("Bunny","Labrador");
walkHome("Santa Paws","Husky");
throwFrisbee("Mary J. Blige", "Papillon");
unleashDog("Lauren","Golden Retriever" );
let a =["Skippy","Welsh Corgi", "Lauren","Pibble","Bunny","Labrador", "Santa Paws", "Husky" , "Mary J. Blige", "Papillon","Lauren","Golden Retriever"  ];


function wakeDog(dogName, dogBreed) {
 let s= `Wake ${dogName} the ${dogBreed}`;
 return s;
}

function leashDog(dogName, dogBreed) {
  let s=`Leash ${dogName} the ${dogBreed}`;
   return s;
}

function walkToPark(dogName, dogBreed) {
    let s= `Walk to the park with ${dogName} the ${dogBreed}`;
  // let s= "Walk to the park with " +dogName+ " the " +dogBreed ;
 return s;
}
function throwFrisbee(dogName, dogBreed) {
  let s= `Throw the frisbee for ${dogName} the ${dogBreed}`;
  // let s= "Throw the frisbee for "+ dogName+" the " +dogBreed;
 return s;
}

function walkHome(dogName, dogBreed) {
  let s= `Walk home with ${dogName} the ${dogBreed}`;
  // let s= "Walk home with "+dogName +" the "+dogBreed;
 return s;
}
function unleashDog(dogName, dogBreed) {
  let s =`Unleash ${dogName} the ${dogBreed}`;
  // let s= "Unleash "+dogName+ " the " + dogBreed;
 return s;
}


// let array_of_function =
const routine= [wakeDog , leashDog, walkToPark, throwFrisbee, walkHome, unleashDog
];
// let routine  =[
//   function wakeDog(dogName, dogBreed) {
// var s= `Wake ${dogName} the ${dogBreed}`;
// return s;
// },

// function leashDog(dogName, dogBreed) {
//   var s=`Leash ${dogName} the ${dogBreed}`;
//   return s;
// },

// function walkToPark(dogName, dogBreed) {
//     var s= `Walk to the park with ${dogName} the ${dogBreed}`;
//   // let s= "Walk to the park with " +dogName+ " the " +dogBreed ;
// return s;
// },
// function throwFrisbee(dogName, dogBreed) {
//   var s= `Throw the frisbee for ${dogName} the ${dogBreed}`;
//   // let s= "Throw the frisbee for "+ dogName+" the " +dogBreed;
// return s;
// },

// function walkHome(dogName, dogBreed) {
//   var s= `Walk home with ${dogName} the ${dogBreed}`;
//   // let s= "Walk home with "+dogName +" the "+dogBreed;
// return s;
// },
// function unleashDog(dogName, dogBreed) {
//   var s =`Unleash ${dogName} the ${dogBreed}`;
//   // let s= "Unleash "+dogName+ " the " + dogBreed;
// return s;
// }

    
//     ];
     function exerciseDog(dog, breed){
       return routine.map(fn=> fn(dog, breed));        

      
    }
exerciseDog(routine);
 
// object.value(routine);
  


