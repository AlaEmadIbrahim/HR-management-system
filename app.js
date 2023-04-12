"use strict"

let employee = [];
let empCard = document.getElementById("empCard");
let cardAll = document.getElementById("card");

function Employee (employeeID,fullName,department,level,imageUrl,ranId){
   this.employeeID = employeeID;
   this.fullName = fullName;
   this.department = department;
   this.level = level;
   this.imageUrl = imageUrl;
   this.ranId = randomId();
   employee.push(this);
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
    let cardId = document.createElement('div');
    empCard.appendChild(cardId);

    let imageElm = document.createElement('img');
    imageElm.src = this.imageUrl;
    cardId.appendChild(imageElm);

    let fullName = document.createElement('h3');
    fullName.textContent = `Name: ${this.fullName}` ; 
    cardId.appendChild(fullName);

    let numberElm = document.createElement('h3');
    numberElm.textContent = `ID : ${this.employeeID}` ;
    cardId.appendChild(numberElm);
    
    let departmentElm = document.createElement('h3');
    departmentElm.textContent = `Department :${this.department}` ;
    cardId.appendChild(departmentElm);
    
    let levelElm = document.createElement('h3');
    levelElm.textContent = `Level : ${this.level}` ;
    cardId.appendChild(levelElm);
    
    let empId = document.createElement('h3');
    empId.textContent = `${this.ranId}` ; 
    cardId.appendChild(empId);
}

employee[0] = new Employee("1000", "Ghazi Samer", "Administration", "Senior", "./assets/emp4.png");
employee[1] = new Employee("1001", "Lana Ali", "Finance", "Senior", "./assets/emp33.png");
employee[2] = new Employee("1002", "Tamara Ayoub", "Marketing", "Senior", "./assets/emp33.png");
employee[3] = new Employee("1003", "Safi Walid", "Administration", "Mid-Senior", "./assets/emp4.png");
employee[4] = new Employee("1004", "Omar Zaid", "Development", "Senior", "./assets/emp4.png");
employee[5] = new Employee("1005", 'Rana Saleh', "Development", "Junior", "./assets/emp33.png");
employee[6] = new Employee("1006", "Hadi Ahmad", "Finance", "Mid-Senior", "./assets/emp4.png");

cardAll.addEventListener("submit",handleSubmit);

getData();

function EmpId (){
    const employeeID = Math.floor(Math.random() * 9000 + 1000);
    return employeeID
};

let myForm = document.getElementById('Employee');



function handleSubmit(event) {
    event.preventDefault();
    let employeeID = 1000 + employee.length;
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imageUrl = event.target.image.value; 
    let salary = Employee.prototype.calSalary();

    let newEmp = new Employee(employeeID, fullName, department, level, imageUrl, salary);
    newEmp.render();
    newEmp.calSalary();
    saveData(employee);
};

function randomId() {
    return Math.floor(1000 + Math.random() * 9000);
  };

  function saveData(data) {

    let stringfiyData = JSON.stringify(data);
    localStorage.setItem("employeeCard", stringfiyData);
}

function allRender() {
    for (let i =0 ;i < employee.length; i++){
      employee[i].render();
      employee[i].calSalary();
  
  };
  }

function getData() {
    let retrievedData = localStorage.getItem("employeeCard");
    let arrayData = JSON.parse(retrievedData);
    if (arrayData != null) {
        for (let i = 0; i < arrayData.length; i++) {
            new Employee(arrayData[i].employeeID, arrayData[i].fullName, arrayData[i].department, arrayData[i].level, arrayData[i].imageUrl, arrayData[i].ranId);
        } 
    }
    allRender();
} 


