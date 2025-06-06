const themeSelector = document.querySelector("select");
function changeTheme() {
// check to see what the current value of our select is.
// The current value is conveniently found in themeSelector.value!
const selectedTheme = themeSelector.value;

// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
const body = document.body;
const logo = document.querySelector("img");

if (selectedTheme === "dark") {
    body.classList.add("dark");
    logo.src = "byui-logo_white.png";
}
else {
    body.classList.remove("dark");
    logo.src = "byui-logo_blue.webp";
}
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);