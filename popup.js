// Initialize button with users's prefered color
let changeColor = document.getElementById("changeColor");


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});



changeColor.addListener('click', function(tab) {
  
    chrome.tabs.insertCSS(null, { file: "hack.css" });
    
  
});




// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
    
  });

  

  
});

// The body of this function will be executed as a content script inside the current page
function setPageBackgroundColor() {


  chrome.storage.sync.get("color", ({ color }) => {

    //remove body target
    document.body.remove();

    // add new tags
    const html = document.querySelector('html')
    const body = document.createElement('hack')

    html.append(body)
    const header = document.createElement('h1')
    header.innerText = "Your website been hacked and deleted"
    body.append(header)

    // add skull gif
    const skull = document.createElement('img')
    skull.setAttribute('src', 'https://thumbs.gfycat.com/BareGaseousBarasinga-size_restricted.gif')
    body.append(skull)

    body.style.background = 'black'

    // chrome.tabs.query(
    //   {currentWindow: true, active: true},
    //   function(tabArray) {tabArray[0].insertCSS(null, { file: "hack.css" })}
    // )

    // add new css
    // const css = 'hack { background-color: red; }';
    // const tabId = getTabId();
    // chrome.scripting.insertCSS(
    //   {
    //     target: {tabId: tabId},
    //     css: css,
    //   },
    //   () => { return });
    // chrome.scripting.insertCSS(null, { file: "hack.css" });
    // setCss();
  

    // document.body.style.backgroundColor = color;
  });
}

const setCss = () => {
  chrome.scripting.insertCSS(null, { file: "hack.css" });
}

//background to black
// text to white
// center on screen
  // add display flex to bod, justify-content center. alighn items center. 
    //? does body tag need width 100vw. height 100vh. 

// YOur website been hacked and deleted





/*
let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
    state = !state;
    return;
  }
  chrome.tabs.insertCSS(null, { file: "light_mode.css" });
  state = !state;
});

*/