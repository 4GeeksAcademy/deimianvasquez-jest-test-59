const { sum, resta } = require("../app.js")


describe("sum function", () => {
    test(" 5 sumado 8 retorna 13", () => {
        let result = sum(5, 8)
        expect(result).toBe(13);
    })

    test(" 5 + 8 + 1 retorna 14", () => {
        let result = sum(5, 8, 1)
        expect(result).toBe(14);
    })
})


describe('resta', () => {

    // Test 1: Caso básico de resta de dos números positivos
    test('debe restar dos números positivos correctamente', () => {
        expect(resta(10, 5)).toBe(5);
    });

    // Test 2: Caso de resultado negativo
    test('debe manejar un resultado negativo', () => {
        expect(resta(5, 10)).toBe(-5);
    });

    // Test 3: Resta de un número negativo de un número positivo
    test('debe restar un número negativo de uno positivo', () => {
        expect(resta(10, -5)).toBe(15);
    });

    // Test 4: Resta de dos números negativos
    test('debe restar dos números negativos', () => {
        expect(resta(-10, -5)).toBe(-5);
    });

    // Test 5: Resta con el número cero
    test('debe manejar el cero como argumento', () => {
        expect(resta(5, 0)).toBe(5);
    });

    // Test 6: Resta de dos números iguales
    test('debe retornar 0 si los números son iguales', () => {
        expect(resta(7, 7)).toBe(0);
    });

    // Test 7: Verificar que no se mutan los argumentos
    test('no debe modificar los argumentos originales', () => {
        let num1 = 20;
        let num2 = 10;
        resta(num1, num2);
        expect(num1).toBe(20);
        expect(num2).toBe(10);
    });

    // Test 8: Considera casos de decimales
    test('debe restar números decimales correctamente', () => {
        expect(resta(10.5, 5.2)).toBeCloseTo(5.3); // Usar toBeCloseTo para decimales
    });

});



// describe('sum', () => {

//     // Test 1: Caso básico con números positivos
//     test('debe sumar números positivos correctamente', () => {
//         expect(sum(1, 2, 3)).toBe(6);
//     });

//     // Test 2: Caso con un solo argumento
//     test('debe manejar un solo argumento', () => {
//         expect(sum(5)).toBe(5);
//     });

//     // Test 3: Caso con números negativos
//     test('debe sumar números negativos', () => {
//         expect(sum(-1, -2, -3)).toBe(-6);
//     });

//     // Test 4: Caso con una mezcla de números positivos y negativos
//     test('debe sumar números positivos y negativos', () => {
//         expect(sum(10, -5, 2)).toBe(7);
//     });

//     // Test 5: Caso con el número cero
//     test('debe manejar el cero como argumento', () => {
//         expect(sum(0, 5, -5)).toBe(0);
//     });

//     // Test 6: Caso sin argumentos (debe retornar 0)
//     test('debe retornar 0 si no se pasan argumentos', () => {
//         expect(sum()).toBe(0);
//     });

// });