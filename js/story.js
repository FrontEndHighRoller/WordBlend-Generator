// 1. Declare variables and capture input.
const adjective = prompt("Please type an adjective");
const verb = prompt("Please type an verb");
const noun = prompt("Please type an noun");
// 2. Combine the input with other words to create a story.
const msg = `<p>There once was a ${adjective} programer who wanted to use JavaScript to ${verb} the ${noun}</p>`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector("main").innerHTML = msg;