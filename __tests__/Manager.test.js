const Employee = require('../lib/Employee');
const Mananger = require('../lib/Manager');

test('creates manager object and imports employee data', () => {
    const manager = new Mananger( 'Dave Heck', 1, 'none@none.com','434-444-5454');

    expect(manager.name).toBe('Dave Heck');
    expect(manager.email).toBe('none@none.com');
    expect(manager.officeNumber).toEqual(expect.any(String));
})

test('checks if role has been changed to manager', () => {
    const manager = new Mananger( 'Dave Heck', 1, 'none@none.com','434-444-5454');
    
    expect(manager.getRole()).toBe('Manager');
})

