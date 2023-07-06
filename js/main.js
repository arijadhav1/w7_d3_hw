//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let [key, value] of Object.entries(person3)) {
    if (Array.isArray(value)) {
        console.log(`${key}: `)
        value.forEach(value => console.log(value))
    } else {
        console.log(`${key}: ${value}`)
    }
}

for (let i in Object.values(person3)) {
    if (Array.isArray(Object.values(person3)[i])){
        if (Object.values(person3)[i] ) {
            console.log('haha')
        }
    
            for (value of Object.values(person3)[i]) {
                console.log(value)
            }
        
    }
    else if (typeof Object.values(person3)[i] === 'string'){
        console.log(Object.values(person3)[i])
    }
    // else {
    //     for (let j in Object.values(person3)) {
    //         for (value of Object.values(person3)[j]) {
    //             console.log(value)
    //         }
    //     }
    // }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    printInfo = () => {
        return `Name: ${this.name} \n Age: ${this.age}`
    }

    addAge = () => {
        return this.age++
    }
}


let aryan = new Person('aryan', 22)
let bob = new Person('bob', 22)

console.log(aryan.printInfo())
console.log(bob.printInfo())

console.log(aryan.addAge())
console.log(aryan.addAge())
console.log(aryan.addAge())


console.log(aryan.printInfo())
console.log(bob.printInfo())





// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const largeNum = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve(string)
        }
        else {
            reject(string)
        }
})
}

largeNum('123456789')
    .then((result) => {
        console.log('big number')
    })
    .catch((error) => {
        console.log('small number')
    })

largeNum('12345678909')
    .then((result) => {
        console.log('big number')
    })
    .catch((error) => {
        console.log('small number')
    })


// CodeWars Question #1: Isograms
// Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1
function isIsogram(string){
    new_list = []

    for (var i = 0; i < string.length; i++) {
        if (new_list.indexOf(string[i].toLowerCase()) === -1) {
            new_list.push(string[i].toLowerCase())
        } else{
            return false
        }
    }
    return true
}

console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("moose"))
console.log(isIsogram("aba")) 


// CodeWars Question #2: Volume of a Cuboid
// Link: https://www.codewars.com/kata/58261acb22be6e2ed800003a
function volumeCuboid(length, width, height) {
    return length * width * height
}

// Previous Question might have been too easy, so just in case, CodeWars Question #3: Count Consonants
//Link: https://www.codewars.com/kata/564e7fc20f0b53eb02000106
function consonantCount(str) {
    let count = 0
      vowel = 'bcdfghjklmnpqrstvwxyz'.split('')
      for (var i = 0; i < str.length; i++) {
          if (vowel.indexOf(str[i].toLowerCase()) != -1) {
              count++
          }
      }
      return count
  }

console.log(consonantCount('qwert'))
console.log(consonantCount('aeiou'))
console.log(consonantCount('production'))
