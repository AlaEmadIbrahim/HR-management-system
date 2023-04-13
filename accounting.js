"use strict";

let tableOne = document.getElementById("tableMain");
let tableTwo = document.getElementById("tableFooter");
let employeeCard = localStorage.getItem("employeeCard");
let emp = JSON.parse(employeeCard);

getAccountData("Administration");
getAccountData("Marketing");
getAccountData("Development");
getAccountData("Finance");

function getAccountData(department) {
    let numEmp = 0;
    let totalSal = 0;
    let avgSal;
    let numDepEmp = 0;
    let totalDepSal = 0;
    let avgDepSal;

    emp.forEach((element) => {
        numEmp = numEmp + 1;
        totalSal = totalSal + element.salary;
        avgSal = totalSal / numEmp;

        if (element.department == department) {
            numDepEmp = numDepEmp + 1;
            totalDepSal = totalDepSal + element.salary;
            avgDepSal = totalDepSal / numDepEmp;
        }
    });

    let dep = [department, numDepEmp, totalDepSal, avgDepSal];
    let all = [numEmp, totalSal, avgSal];

    for (let i = 0; i < 1; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            let depCell = document.createElement("td");
            depCell.textContent = dep[j];
            row.appendChild(depCell);
        }
        tableOne.appendChild(row);
    }
    for (let i = 0; i < 1; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let cell = document.createElement("td");
            cell.textContent = all[j];
            row.appendChild(cell);
        }

        tableTwo.appendChild(row);
    }
}