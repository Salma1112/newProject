class Usar {
    constructor(name, mobleNumber, address, birthdate){
        this.name = name;
        this.mobleNumber = mobleNumber;
        this.address = address;
        this.birthdate = birthdate;
    }
}

function getAge(dateString) {
    var today = new Date();
    var DOB = new Date(dateString);
    var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
    totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
    var years = today.getFullYear() - DOB.getFullYear();
    if (DOB.getMonth() > today.getMonth())
        years = years - 1;
    else if (DOB.getMonth() === today.getMonth())
        if (DOB.getDate() > today.getDate())
            years = years - 1;

    var days;
    var months;

    if (DOB.getDate() > today.getDate()) {
        months = (totalMonths % 12);
        if (months == 0)
            months = 11;
        var x = today.getMonth();
        switch (x) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                var a = DOB.getDate() - today.getDate();
                days = 31 - a;
                break;
            }
            default: {
                var a = DOB.getDate() - today.getDate();
                days = 30 - a;
                break;
            }
        }

    }
    else {
        days = today.getDate() - DOB.getDate();
        if (DOB.getMonth() === today.getMonth())
            months = (totalMonths % 12);
        else
            months = (totalMonths % 12) + 1;
    }

    const age = {
        "years": years,
        "months": months,
        "days": days,
    };

    return age;
}

//global varaibles

const nameInput = document.getElementById("nameInput");
const mobileInput = document.getElementById("mobileInput");
const addressInput = document.getElementById("addressInput");
const dateInput = document.getElementById("dateInput");
const mainDiv = document.getElementById("mainDiv");
const resultDiv = document.getElementById("resultDiv");
const resultText = document.getElementById("resultH3");

function validateEnteries() {
    if (nameInput.value == "") {
        alert("please enter valied name");
    } else if (mobileInput.value == ""){
        alert("please enter valied mobile number");
    } else if (addressInput.value == ""){
        alert("please enter valied address");
    } else if (dateInput.value == "") {
        alert("please enter valied date");
    } else {
        calculateAge();
    }
}

function calculateAge() {
    const newUsar = new Usar(nameInput.value, mobileInput.value, addressInput.value, dateInput.value);
    const age = getAge(newUsar.birthdate);
    resultDiv.style.display = "block";
    mainDiv.style.display = "none";
    resultText.innerText =
    `
    Name: ${newUsar.name} \n
    Address: ${newUsar.address} \n
    Mobile Number: ${newUsar.mobleNumber} \n
    Age in Years: ${age.years} \n
    Age in Months: ${age.months} \n
    Age in Days: ${age.days}
    `;
}

function reset() {
  nameInput.value = "";
  addressInput.value = "";
  mobileInput.value = "";
  dateInput.value = "";
  mainDiv.style.display = "block";
  resultDiv.style.display = "none";
}
