/*
    Takes width & height values from the user and calculates
    the area, perimeter, and distance to opposite corner of
    the rectangle made from those values.
*/
function getRectData() {

    // Gets the form and takes values for width & height
    let form = document.forms.getRectValues;
    let width = form.elements.width.value;
    let height = form.elements.height.value;

    // Validates that all user input is greater than 0
    if (width <=0 || height <= 0) {
        document.getElementById("results").innerHTML = "Error: Please only enter numbers greater than 0.";
    } else {
        // Calls the functions to get area, perimeter, & distance to opposite corner
        let area = getArea(width, height);
        let perimeter = getPerimeter(width, height);
        let oppositeCornerDistance = getOppositeCornerDistance(width, height);
        // Debug
        console.log("Area: "+area+"\nPerimeter: "+perimeter+"\nOpposite corner distance: "+oppositeCornerDistance);

        // Reports results to the screen
        document.getElementById("results").innerHTML = "The area of this rectangle is " + area + " units squared, the perimeter is " + perimeter + " units, and the distance between the opposite corners is " + oppositeCornerDistance + " units.";
    }

    // Debug
    console.log("Width: " + width + "\nHeight: " + height);

    

}

// Calculates the area
function getArea(width, height) {
    return width * height;
}

// Calculates the perimeter
function getPerimeter(width, height) {
    return (2*width) + (2*height);
}

// Calculates the distance to the opposite corner
function getOppositeCornerDistance(width, height) {
    return Math.pow(width, 2) + Math.pow(height, 2);
}