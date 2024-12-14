"use strict";

// fetch("API_URL")
// .then(response => response.json()) // Parse the response as JSON
// .then(data => console.log(data))  // Use the data
// .catch(error => console.error("Error:", error)); // Handle errors

// Fetch data from the API
const sat = fetch("https://api.wheretheiss.at/v1/satellites/25544");

// Step 1: Declare a variable outside the promise to store the data
let DATA;

// Step 2: Use .then() to handle the asynchronous fetch
sat
  .then((response) => {
    // Step 3: Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then((data) => {
    // Step 4: Store the data in the global variable
    DATA = data;
    console.log(DATA); // Now DATA is accessible after the promise resolves
    let x = DATA.altitude;
    console.log(x);
  })
  .catch((error) => {
    // Step 5: Handle any errors
    console.error("Error fetching data:", error);
  });

let x = DATA.altitude;
console.log(x);
