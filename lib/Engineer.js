const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super(name, id, email);

        this.GitHub = GitHub;
        this.role = 'Engineer'
    }

    getRole() {
        return `${this.role}`;
    }

    getGithub() {
        return `GitHub: ${this.GitHub}`;
    }


}

module.exports = Engineer;