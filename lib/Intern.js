const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, School) {
        super(name, id, email);

        this.School = School;
        this.role = 'Intern'
    }

    getRole() {
        return `${this.role}`;
    }

    getSchool() {
        return `School: ${this.School}`;
    }
}

module.exports = Intern;