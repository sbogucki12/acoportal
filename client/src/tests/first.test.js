const add = (a,b) => a + b;
const generateGreeting = (name = "Juggernaut") => `Hello ${name}!`;




test('should add two numbers', () => {
    const result = add(3,4);
    expect(result).toBe(7);   
});

test("should greet the user by name", () => {
    const greeting = generateGreeting("John");
    expect(greeting).toBe("Hello John!");
});

test("should generate greeting to Juggernaut", () => {
    const greeting = generateGreeting();
    expect(greeting).toBe("Hello Juggernaut!");
});

