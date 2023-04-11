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

var image = new Image(); 
image.src = "./assets/emp1.png"; 
image.style.border = "10px solid teal";
image.style.borderRadius = "10px";
image.style.width = "222px";
document.body.appendChild(image)


Employee.prototype.render = function (){
    document.write(`</br> Name : ${this.fullName}- ID: ${this.employeeID} </br> - Department: ${this.department}- Level: ${this.level} </br>${this.salary} `);
}


let Ghazi  = new Employee(1000,"Ghazi Samer", "Administration","Senior");
// let Lana   = new Employee(1001,"Lana Ali", "Finance","Senior");
// let Tamara = new Employee(1002,"Tamara Ayoub", "Marketing","Senior");
// let Safi   = new Employee(1003,"Safi Walid", "Administration","Mid-Senior");
// let Omar   = new Employee(1004,"Omar Zaid", "Development","Senior");
// let Rana   = new Employee(1005,"Rana Saleh", "Development","Junior");
// let Hadi   = new Employee(1006,"Hadi Ahmad", "Finance","Mid-Senior");

for (let i =0 ;i < employee.length; i++){
    employee[i].render();
};

function EmpId (){
    const employeeID = Math.floor(Math.random() * 9000 + 1000);
    return employeeID
};

let myForm = document.getElementById('Employee');

myForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    let FullName = event.target.FullName.value;
    let Department = event.target.Department.value;
    let Level = event.target.Level.value;
    let image = event.target.image.value;

    let newEmp = new Employee (EmpId(),FullName,Department,Level,image);
    newEmp.render();

};