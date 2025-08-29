
// Part 1: Variables & Conditionals

let userName = "Kingsley";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult ✅");
} else {
  console.log(userName + " is a minor ❌");
}


// Part 2: Custom Functions


// Function 1: Greet user
function greet(name) {
  return "Hello, " + name + "! 👋";
}

// Function 2: Add numbers
function addNumbers(a, b) {
  return a + b;
}

console.log(greet(userName));
console.log("Sum:", addNumbers(5, 7));


// Part 3: Loops


// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

// Loop 2: While loop
let counter = 0;
while (counter < 3) {
  console.log("While loop count:", counter);
  counter++;
}


// Part 4: DOM Interactions


// 1. Change text content
document.getElementById("title").textContent = "Hello from JavaScript! 🚀";

// 2. Add event listener to button
document.getElementById("actionBtn").addEventListener("click", () => {
  document.getElementById("description").textContent = greet(userName);

  // 3. Dynamically add list items
  let list = document.getElementById("list");
  list.innerHTML = ""; // clear list first
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    list.appendChild(li);
  }
});
