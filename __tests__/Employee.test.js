const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('Dave Heck', 1, 'none@none.com');

    expect(employee.name).toBe('Dave Heck');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('none@none.com');
});

test('gets the name value from employee object', () => {
    const employee = new Employee('Dave Heck', 1, 'none@none.com');

    expect(employee.getName()).toEqual(expect.any(String))
})

test('gets the id value from employee object', () => {
    const employee = new Employee('Dave Heck', 1, 'none@none.com');

    expect(employee.getId()).toEqual(expect.any(String))
})

test('gets the email value from employee object', () => {
    const employee = new Employee('Dave Heck', 1, 'none@none.com');

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test('gets employee role', () => {
        const employee = new Employee('Dave Heck', 1, 'none@none.com');
    
        expect(employee.getRole()).toEqual(expect.any(String))
})