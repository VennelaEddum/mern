// Program with Type Annotations
// 1. Variable Annotations
let bookTitle: string = "Atomic Habits";
let publishedYear: number = 2018;
let isBestSeller: boolean = true;

// 2. Function Parameter and Return Type Annotations
function getBookInfo(title: string, year: number): string {
    return `${title} was published in ${year}.`;
}

// 3. Array Annotation
let authors: string[] = ["James Clear"];

// 4. Using the annotated variables and function
const message: string = getBookInfo(bookTitle, publishedYear);

console.log(message);
console.log(`Author(s): ${authors.join(", ")}`);
console.log(`Best Seller: ${isBestSeller ? "Yes" : "No"}`);
export{}