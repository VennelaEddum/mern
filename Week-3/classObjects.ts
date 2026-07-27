// class_objects.ts

class Student {
    // Properties
    public name: string;
    public rollNo: number;
    public course: string;

    // Constructor Overloading
    constructor(name: string, rollNo: number);
    constructor(name: string, rollNo: number, course: string);

    // Constructor Implementation
    constructor(name: string, rollNo: number, course?: string) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course ?? "B.Tech";
    }

    // Method
    public displayDetails(): void {
        console.log("----- Student Details -----");
        console.log(`Name   : ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
        console.log(`Course : ${this.course}`);
        console.log("---------------------------");
    }
}

// Creating Objects
const student1 = new Student("Vennela", 4202);
const student2 = new Student("Rama", 102, "Computer Science");

// Calling Methods
student1.displayDetails();
student2.displayDetails();

// Updating a Property
student2.course = "Information Technology";

console.log("After Updating Course:");
student2.displayDetails();

export {};
