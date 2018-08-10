abstract class Employee {
    salary: number = 0;
    tasks: string[] = [];

    constructor(public name: string, public age: number) {
    }

    work(): void {
        const currentTask: string = this.tasks.shift();
        console.log(this.name + currentTask);
        this.tasks.push(currentTask);
    }

    protected getSalary(): number {
        return this.salary;
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
};

class Junior extends Employee {
    constructor(public name: string, public age: number) {
        super(name, age);
        this.tasks.push(" is working on a simple task");
    }
};

class Senior extends Employee {
    constructor(public name: string, public age: number) {
        super(name, age);
        this.tasks.push(" is working on a complicated task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers");
    }
};

class Manager extends Employee {
    public divident: number = 0;

    constructor(public name: string, public age: number) {
        super(name, age);
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is preparing a quarterly meeting.");
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
};

const junior = new Junior("Junior", 22);
const senior = new Senior("Senior", 26);
const manager = new Manager("Manager", 30);

junior.salary = 2000;
junior.work();
junior.work();
junior.collectSalary();

manager.collectSalary();
manager.salary = 4000;
manager.divident = 800;
manager.collectSalary();