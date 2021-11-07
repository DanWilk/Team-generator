const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates intern object and imports emplyee data', () => {
    const intern = new Intern('Dave Heck', 1, 'none@none.com','UofR');

    expect(intern.name).toBe('Dave Heck');
    expect(intern.email).toBe('none@none.com');
    expect(intern.School).toBe('UofR');
});

test('recieves school data from intern', () => {
    const intern = new Intern('Dave Heck', 1, 'none@none.com','UofR');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.School));
})

test('checks that intern role has been overwritten', () => {
    const intern = new Intern('Dave Heck', 1, 'none@none.com','UofR');

    expect(intern.role).toBe('Intern');
})