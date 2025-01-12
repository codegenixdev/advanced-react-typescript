const fullName = null;

// Nullish (??)
console.log(fullName ?? "Guest"); // "Guest"

// Default (||)
console.log(fullName || "Guest"); // "Guest"

// The key difference:

const username = "";
console.log(username ?? "Guest"); // ""    (keeps empty string)
console.log(username || "Guest"); // "Guest" (replaces empty string)
