interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}

interface Student {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
    // new (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayName() {
        return this.firstName;
    }

    workOnHomework () {
        return "Currently working";
    }
}
