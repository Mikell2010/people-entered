//  Create a variable, message, that stories the string: 'You have tree new notifications'
// let username = 'per'
// var message = 'You have tree new notifications'
// console.log(message + ',' + username  + '!')

//  Create a variable, messageToUser, that contains the message we have logged
// var messageToUser = message + ',' + username + '!'
// console.log(messageToUser)

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. 'Hi, my name is'
// let name = 'Michel'
// var greeting = 'Hi, my name is '


// Create a third variable, myGreeting, that contatenates the two strings
//  Log myGreeting to the console
// var myGreeting = greeting + name
// console.log(myGreeting)

// console.log(4+5) = 9
// console.log('2' + '4') = '24'
// console.log('5' + 1) = '51'
// console.log(100 + '100') = '100100'

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
const welcomeEl = document.getElementById("welcome-el")
// Create two variables (name & greeting that contains your name)
const name = "Michel"
// and the greeting we want to render on the page
const greeting = "Welcome to the website! "
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + name

// Add emoji to the end!
// WRITE YOUR CODE BELLOW HERE
// HINT: count = count + 1
welcomeEl.innerText += "👋"