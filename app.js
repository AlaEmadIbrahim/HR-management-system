"use strict"
let employee = [];
function Employee (employeeID,fullName,department,level,imageUrl,salary){
   this.employeeID = employeeID;
   this.fullName = fullName;
   this.department = department;
   this.level = level;
   this.imageUrl = imageUrl;
   this.calSalary ();
   employee.push(this)
}
Employee.prototype.calSalary = function (){
    let sal = 0;
    if (this.level == "Senior"){
        sal = Math.floor(Math.random()* (2000 - 1500) + 1500) 
    }
    else if (this.level == "Mid-Senior"){
        sal = Math.floor(Math.random()* (1500 - 1000) + 1000) 
    }
    else if (this.level == "Junior"){
        sal = Math.floor(Math.random()* (1000 - 500) + 500) 
    }
    this.salary = sal-(sal * 0.075)
    console.log(this.salary)
}

Employee.prototype.render = function (){
    document.write(`Name : ${this.fullName}&nbsp&nbsp&nbsp&nbsp&nbsp Salary: ${this.salary} </br>`);
}

let Ghazi  = new Employee(1000,"Ghazi Samer", "Administration","Senior");
let Lana   = new Employee(1001,"Lana Ali", "Finance","Senior");
let Tamara = new Employee(1002,"Tamara Ayoub", "Marketing","Senior");
let Safi   = new Employee(1003,"Safi Walid", "Administration","Mid-Senior");
let Omar   = new Employee(1004,"Omar Zaid", "Development","Senior");
let Rana   = new Employee(1005,"Rana Saleh", "Development","Junior");
let Hadi   = new Employee(1006,"Hadi Ahmad", "Finance","Mid-Senior");

for (let i =0 ;i < employee.length; i++){
    employee[i].render();
}


