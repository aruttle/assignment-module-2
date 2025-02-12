// Knot data with names, instructions, and images
const knots = {
    bowline: {
        name: "Bowline",
        instructions: "Create a loop near the end of the rope. Pass the working end up through the loop, around the standing part, and back down through the loop. Pull tight.",
        image: "images/bowline.jpg"
    },
    "clove-hitch": {
        name: "Clove Hitch",
        instructions: "Wrap the rope around the post. Cross over and wrap again, tucking the end under the second wrap. Pull tight.",
        image: "images/clove-hitch.jpg"
    },
    "figure-eight": {
        name: "Figure Eight",
        instructions: "Pass the rope over itself, creating a loop. Continue wrapping the end around and pull through to form an '8' shape.",
        image: "images/figure-eight.jpg"
    }
};

// Selecting elements from the DOM
const knotSelector = document.getElementById("knot-selector");
const knotInstructions = document.getElementById("knot-instructions");
const knotTitle = knotInstructions.querySelector("h3");
const knotText = knotInstructions.querySelector("p");
const knotImage = document.getElementById("knot-image");