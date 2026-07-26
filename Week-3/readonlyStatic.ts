// static_readonly.ts

class Student {
    // Static properties
    public static collegeName: string = "ABC Engineering College";
    public static totalStudents: number = 0;

    // Readonly property
    public readonly rollNo: number;

    public name: string;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;

        // Increment static count
        Student.totalStudents++;
    }

    // Static method
    public static showCollege(): void {
        console.log(`College: ${Student.collegeName}`);
    }

    // Instance method
    public displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
    }
}

// Accessing static members
Student.showCollege();

// Creating objects
const student1 = new Student("Pavani", 101);
const student2 = new Student("Hanuma", 102);

// Display details
student1.displayDetails();
student2.displayDetails();

// Readonly property
console.log(`Student 1 Roll No: ${student1.rollNo}`);

// student1.rollNo = 201;   // Error: Cannot assign to 'rollNo' because it is a read-only property.

// Static property
console.log(`Total Students: ${Student.totalStudents}`);

export {};