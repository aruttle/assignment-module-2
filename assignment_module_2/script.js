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
        instructions: "Make a loop with the working end, then wrap it around the standing part and tuck it back through the loop to form an '8' shape. Pull tight.",
        image: "images/figure-eight.jpg"
    },
    "reef": {
        name: "Reef Knot (Square Knot)",
        instructions: "Tie a left over right knot, then a right over left knot. Pull tight to secure. This knot is used to join two ropes of equal diameter.",
        image: "images/square-knot.jpg"
    },
    "cleat-hitch": {
        name: "Cleat Hitch",
        instructions: "Wrap the rope around the base of the cleat. Cross over and loop back in a figure-eight motion. Finish with a locking half hitch under the last wrap.",
        image: "images/cleat-hitch.jpg"
    },
    "double-hitch": {
        name: "Double Hitch",
        instructions: "Form a loop with the thicker rope. Pass the thinner rope through the loop, around both parts of the loop, and tuck it under itself. Pull tight.",
        image: "images/double-hitch.jpg"
    }
};


// Selecting elements from the DOM
const knotSelector = document.getElementById("knot-selector");
const knotInstructions = document.getElementById("knot-instructions");
const knotTitle = knotInstructions.querySelector("h3");
const knotText = knotInstructions.querySelector("p");
const knotImage = document.getElementById("knot-image");

// Function to update the displayed knot details
function updateKnotDetails() {
    const selectedKnot = knotSelector.value;
    const knotData = knots[selectedKnot];

    knotTitle.textContent = knotData.name;
    knotText.textContent = knotData.instructions;
    knotImage.src = knotData.image;
    knotImage.alt = `${knotData.name} knot`;
}

// Event listener for dropdown selection change
knotSelector.addEventListener("change", updateKnotDetails);