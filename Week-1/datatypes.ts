let studentName: string = "Pavani";
let marks: number = 92;
let isPassed: boolean = true;

console.log("Data type of studentName is --> " + typeof studentName);
console.log("Data type of marks is --> " + typeof marks);
console.log("Data type of isPassed is --> " + typeof isPassed);

function displayStudentDetails(name: string, score: number, passed: boolean): void {
    console.log(`Student Name : ${name}`);
    console.log(`Marks        : ${score}`);
    console.log(`Result       : ${passed ? "Pass" : "Fail"}`);
}

displayStudentDetails(studentName, marks, isPassed);

export {};