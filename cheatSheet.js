// Test structure
describe('makePoniesPink', () => {
    beforeAll(() => {
      /* Runs before all tests */
    });
    afterAll(() => {
      /* Runs after all tests */
    });
    beforeEach(() => {
      /* Runs before each test */
    });
    afterEach(() => {
      /* Runs after each test */
    });
  })

// Matchers
// Basic matchers
expect('Sergio').toBe('Ramón'); // Strict equality (===)
expect(42).not.toBe(3); // Strict equality (!==)
expect([1, 2]).toEqual([1, 2]); // Deep equality
expect({ a: undefined, b: 2 }).toEqual({ b: 2 }); // Deep equality

// Truthiness
// Matches anything that an if statement treats as true (not false, 0, '', null, undefined, NaN)
expect('foo').toBeTruthy();
// Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)
expect('').toBeFalsy();
// Matches only null
expect(null).toBeNull();
// Matches only undefined
expect(undefined).toBeUndefined();
// The opposite of toBeUndefined
expect(7).toBeDefined();
// Matches true or false
expect(true).toEqual(expect.any(Boolean));

//Numbers
expect(2).toBeGreaterThan(1);
expect(1).toBeGreaterThanOrEqual(1);
expect(1).toBeLessThan(2);
expect(1).toBeLessThanOrEqual(1);
expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
expect(3).toEqual(expect.any(Number));

//Strings
expect('long string').toMatch('str');
expect('string').toEqual(expect.any(String));
expect('coffee').toMatch(/ff/);
expect('pizza').not.toMatch('coffee');
expect('string').toEqual(expect.any(String));

//Arrays
expect(['Alice', 'Bob', 'Eve']).toHaveLength(3);
expect(['Alice', 'Bob', 'Eve']).toContain('Alice');
expect([{ a: 1 }, { a: 2 }]).toContainEqual({ a: 1 });
expect([]).toEqual(expect.any(Array));

//Objects
expect({ a: 1 }).toHaveProperty('a');
expect({ a: 1 }).toHaveProperty('a', 1);
expect({ a: { b: 1 } }).toHaveProperty('a.b');
expect({ a: 1, b: 2 }).toMatchObject({ a: 1 });
expect({ a: 1, b: 2 }).toMatchObject({
  a: expect.any(Number),
  b: expect.any(Number),
});

// Skipping tests
// Don’t run these tests:
describe.skip('makePoniesPink', () => {

})
tests.skip('make each pony pink', () => {
  
})

// Run only these tests:
describe.only('makePoniesPink', () => {
  
})
tests.only('make each pony pink', () => {
  
})

// These examples are taken from Artem Sapegin's own repository
// for a complete reference to all the entries, go to: 
// https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md