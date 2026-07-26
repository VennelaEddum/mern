// Special Data Types: any, unknown, void
// 1. Using 'any'
let data: any = 100;
console.log("Number:", data);

data = "TypeScript";
console.log("String:", data);

data = false;
console.log("Boolean:", data);


// 2. Using 'unknown'
let userInput: unknown = "Welcome";

if (typeof userInput === "string") {
    console.log("Uppercase:", userInput.toUpperCase());
}

userInput = 50;

if (typeof userInput === "number") {
    console.log("Square:", userInput * userInput);
}


// 3. Using 'void'
function displayMessage(msg: string): void {
    console.log("Message:", msg);
}

displayMessage("Experiment Completed Successfully!");
export{}