// PROBLEM

const calculateArea = (shape, width, height) => {
    if (shape === "rectangle") {
        return width * height;
    } else if (shape === "triangle") {
        return 0.5 * width * height;
    }
    else {
        console.log("Invalid shape provided.")
    }
}

const rectangleArea = calculateArea("rectangle", 5, 3)
const triangleArea = calculateArea("triangle", 4, 6)
const circleArea = calculateArea("circle", 2);

console.log("Rectangle area:", rectangleArea); // Output: Rectangle area: 15
console.log("Triangle area:", triangleArea); // Output: Triangle area: 12
console.log("Circle area:", circleArea); // Error will be thrown here

// In this code, the calculateArea function is designed to calculate the area of a rectangle or a triangle based on the provided shape, width, and height. However, there's an error when calling the function with the shape "circle" because the function doesn't handle that case, and it expects three arguments (shape, width, and height) while only two arguments (shape and radius) are provided.
// Your task is to identify the issue and provide possible debugging solutions or ask clarifying questions if needed.


////////////////////// Solutions

// Clarifying Q: Is the goal here to potentially create a new function specific to circles, or to modify the current function to include additional cases, especially when not enough arguments are given?

////// Benefits of creating a new function like calculateCircleArea(radius) is that it separates concerns, making the code more modular and easier to maintain.
///// Downsides are that you'd need to call the appropriate function based on the shape, possibly leading to conditional logic or a switch statement 

//Revised function solution:

const calculateAreaRev = (shape, width, height, radius) => {
    if (shape === "rectangle") {
        if (width === undefined || height === undefined) {
            console.log("Error: Missing width or height for rectangle");
            return;
        }
        return width * height;
    } else if (shape === "triangle") {
        if (width === undefined || height === undefined) {
            console.log("Error: Missing width or height for rectangle");
            return;
        }
        return 0.5 * width * height;
    } else if (shape === "circle") {
        if (radius === undefined){
            console.log("Error: Missing radius for circle.");
            return;
        }
        return Math.PI * radius ** 2;
    } else {
        console.log("Error: Invalid shape provided")
    }

}

const rectangleAreaRev = calculateAreaRev("rectangle", 5, 3);
const triangleAreaRev = calculateAreaRev("triangle", 4, 6);
const circleAreaRev = calculateAreaRev("circle", undefined, undefined, 2);
console.log("Rectangle area:", rectangleAreaRev); // Output: Rectangle area: 15
console.log("Triangle area:", triangleAreaRev); // Output: Triangle area: 12
console.log("Circle area:", circleAreaRev); // Output: Circle area: 12.566370614359172