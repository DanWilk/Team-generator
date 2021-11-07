const Engineer = require('../lib/Engineer');

test('creates engineer object and imports emplyee data', () => {
    const engineer = new Engineer('Dave Heck', 1, 'none@none.com','DanWilk');

    expect(engineer.name).toBe('Dave Heck');
    expect(engineer.email).toBe('none@none.com');
    expect(engineer.GitHub).toBe('DanWilk');
});

test('checks if role has been overridden', () => {
    const engineer = new Engineer('Dave Heck', 1, 'none@none.com','DanWilk');
    
    expect(engineer.getRole()).toBe('Engineer');
});

test('returns Github accout', () => {
    const engineer = new Engineer('Dave Heck', 1, 'none@none.com','DanWilk');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.GitHub));
});