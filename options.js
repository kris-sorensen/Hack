let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Reacts to a button click by marking marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  // let current = event.target.parentElement.querySelector(
  //   `.${selectedClassName}`
  // );
  // if (current && current !== event.target) {
  //   current.classList.remove(selectedClassName);
  // }

  // // Mark the button as selected
  // let color = event.target.dataset.color;
  // event.target.classList.add(selectedClassName);
  // chrome.storage.sync.set({ color });

  // Create the skull gif
  
  // // Remove all children of the body tag
  // const body = document.querySelector('body')
  // while (body.lastChild) {
    //   body.removeChild(body.lastChild)
    // }

  // console.log('this is running')
  
  // document.querySelector('body').remove();
  // const html = document.querySelector('html')
  // const body = document.createElement('body')
  // html.appendChild(body)
  
  // const skull = document.createElement('img')
  // skull.setAttribute('src', 'https://thumbs.gfycat.com/BareGaseousBarasinga-size_restricted.gif')
  // // add the skull gif to the body
  // body.append(skull)


}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color;

    // For each color we were provided…
    for (let buttonColor of buttonColors) {
      // …crate a button with that color…
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      button.style.backgroundColor = buttonColor;

      // …mark the currently selected color…
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      // …and register a listener for when that button is clicked
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

// Initialize the page by constructing the color options
constructOptions(presetButtonColors);
