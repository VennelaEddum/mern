// access_modifiers.ts

class Employee {
    // Public: Accessible from anywhere
    public name: string;

    // Private: Accessible only inside this class
    private salary: number;

    // Protected: Accessible inside this class and child classes
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    // Public method
    public displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
    }

    // Private method
    private displaySalary(): void {
        console.log(`Salary: ${this.salary}`);
    }

    // Public method to access private method
    public showSalary(): void {
        this.displaySalary();
    }
}

// Child Class
class Manager extends Employee {
    public showDepartment(): void {
        console.log(`Department: ${this.department}`);
    }
}

// Creating Objects
const emp = new Employee("Pavani", 50000, "IT");

console.log(emp.name);      // Public - Accessible
emp.displayDetails();
emp.showSalary();           // Accessing private data through public method

// console.log(emp.salary);      // Error: salary is private
// console.log(emp.department);  // Error: department is protected

const mgr = new Manager("Shiva", 70000, "HR");
mgr.showDepartment();

export {};