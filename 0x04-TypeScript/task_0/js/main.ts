interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "Nigeria",
}

const student2: Student = {
    firstName: "Ibrahim",
    lastName: "Ajibose",
    age: 22,
    location: "Nigeria",
}

const stArray: Array<Student> = [student1, student2]

const table = document.createElement("table")
const thead = document.createElement("thead")
const tbody = document.createElement("tbody")
const tbHeadrow = document.createElement("tr")
const firstNameHeader = document.createElement("th")
const locationHeader = document.createElement("th")

firstNameHeader.textContent = "First Name"
locationHeader.textContent  = "Location"
tbHeadrow.appendChild(firstNameHeader)
tbHeadrow.appendChild(locationHeader)
thead.appendChild(tbHeadrow)
table.appendChild(thead)

stArray.forEach((student) => {
    const tbrow = document.createElement("tr")
    const firstNameCell = document.createElement("td")
    const locationCell = document.createElement("td")

    firstNameCell.textContent = student.firstName
    locationCell.textContent = student.lastName

    tbrow.appendChild(firstNameCell)
    tbrow.appendChild(locationCell)
    tbody.appendChild(tbrow)
});

table.appendChild(tbody)




