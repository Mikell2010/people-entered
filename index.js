// document.getElementById("count-el").innerText = 5

//let count = 0
//console.log(count)


// Create a variable, myAge, and set its value to your age
//let myAge = 37

// Log the myAge variable to the console
//console.log(myAge)

// let firtsBatch = 5
// let secondBatch = 7

// let count = firtsBatch + secondBatch
// console.log(count)

// // Create two variables, myAge and humanDogRatio
// let myAge = 37
// let humanDogRatio = 7
// // Multiply the two together and store the result in myDogAge
// let myDogAge = myAge * humanDogRatio

// // Log myDogAge to the console
// console.log(myDogAge)

// let count = 5
// count = count + 1
// console.log(count)
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment() {
//     console.log("The button was clicked")
// }


// function countdown() {

//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// // Setting up the race 
// countdown()
// //GO
// // Playyers are running the race
// // Race is finished
// // Get ready for a new race
// countdown()

// Create a function that logs out the number 42 to the console
// Call/invoke the function
// function myLogger() {
//     console.log(42)
// }
// myLogger()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// // Create a function that logs out the sum of all the lap times
// function sum(){
    
//     console.log(lap1 + lap2 + lap3)    
// } 
// sum()

// let lapsCompleted = 0
// //Created a function that increments the lapsCompleted variable with one
// //Run it three times

// // Function to increment lapsCompleted by one
// function incrementLaps() {
//     lapsCompleted++;
// }

//   // Run the function three times
// incrementLaps();
// incrementLaps();
// incrementLaps();

//   console.log(lapsCompleted); // Output should be 3


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)


// let count = 0
// function increment(){
//   //console.log('clicked')//cuando apreto el btn de la web en la consola aparece clicked
//   count = count + 1
//   console.log(count)//al apretar el btn en la web aumento en 1 en la consola 
// }

// change the count-el in the HTML to reflect the new count

// console.log(countEl)

// 1.Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0
console.log(saveEl)


function increment(){
  count += 1
  countEl.textContent = count
  //console.log(count)
}

// Create a function, save(), which logs out the count when its called

function save(){
  // 2.Create a variable that contains both the count and the dash separator, i.e "12 - "
  let countStr = count + ' - '
  // 3. Render the variable in the saveEl using innerText
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
  // NB: Make sure to not delete the existing content of the paragraph
  console.log(count)
}
