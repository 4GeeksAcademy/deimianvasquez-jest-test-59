const { isUpperCase } = require("../app")


describe("Test replit", () => {

    // First test possibility
    test('The string HELLO should return true', () => {
        const result = isUpperCase('HELL0');
        expect(result).toBe(true);
    })
    // Second test possibility
    test('Testing for Hello (mixed)', () => {
        const result = isUpperCase('Hello');
        expect(result).toBe(false);
    })
    // Third test possibility
    test('Testing for hello (lower)', () => {
        const result = isUpperCase('Hello');
        expect(result).toBe(false);
    })
    // Forth test possibility
    test('Boolean shoud return false', () => {
        const result = isUpperCase(true);
        expect(result).toBe(false);
    })
    // Fifth test possibility
    test('Number shoud return false', () => {
        const result = isUpperCase(12341234);
        expect(result).toBe(false);
    })

})