// function alert1(){
//     alert("say hello")
// }
// alert1();
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}


async function hack(){
    let speed = 5000;
    let speed2 = 3000;
    await sleep(speed);

    // Delete the existing DOM body
    document.body.remove();

    // Add the hack elements
    addHackElement();

    // Play laughing audio
    const laughingAudio = new Audio('LaughPhone.m4a');
    console.log(laughingAudio);
    
    const html = document.querySelector('hack');
    html.append(laughingAudio);
    laughingAudio.play();

    // Add the hacking terminal and start adding code
    
    await sleep(speed2)
    addHackingTerminal();
    addCode();
}


function addHackElement() {
  // add new tags
  const html = document.querySelector('html')
  html.style.background = 'black';
  const hackEl = document.createElement('hack')

  html.append(hackEl)
  const header = document.createElement('h1')
  header.innerText = "This website has been hacked and deleted"
  hackEl.append(header)

  // add skull gif
  const skull = document.createElement('img')
  skull.setAttribute('src', 'https://thumbs.gfycat.com/BareGaseousBarasinga-size_restricted.gif')
  document.querySelector('hack').append(skull);
}

function addHackingTerminal() {

  const hackingContainer = document.createElement('div');
  hackingContainer.setAttribute('id', 'hacking-container')
  document.querySelector('html').append(hackingContainer);

  const terminalHeader = document.createElement('h2');
  terminalHeader.innerText = 'Your computer files are now being deleted   ψ(｀∇´)ψ'
  hackingContainer.append(terminalHeader);
  
  const hackingTerminal = document.createElement('div');
  hackingTerminal.setAttribute('id', 'hacking-terminal')
  hackingContainer.append(hackingTerminal);
}

const codeArray = [
  "{const hackingContainer = document.createElement('div');hackingContainer.setAttribute('id', 'hacking-container')document.querySelector('html').append(hackingContainer); const hackingTerminal = document.createElement('div');hackingTerminal.setAttribute('id', 'hacking-terminal')hackingContainer.append(hackingTerminal);}",
  "{const html = document.querySelector('html')const hackEl = document.createElement('hack')html.append(hackEl)const header = document.createElement('h1')header.innerText = 'Your website has been hacked and deleted'hackEl.append(header)const skull = document.createElement('img')skull.setAttribute('src', 'https://thumbs.gfycat.com/BareGaseousBarasinga-size_restricted.gif')document.querySelector('hack').append(skull);}",
  "{// add new tagsconst html = document.querySelector('html')const hackEl = document.createElement('hack')html.append(hackEl)const header = document.createElement('h1')header.innerText = 'Your website has been hacked and deleted'hackEl.append(header)// add skull gifconst skull = document.createElement('img')skull.setAttribute('src', 'https://thumbs.gfycat.com/BareGaseousBarasinga-size_restricted.gif')document.querySelector('hack').append(skull);}"
]

function addCode() {
  const codeLine = document.createElement('p');
  codeLine.innerText = codeArray[Math.floor(Math.random() * codeArray.length)];
  const hackingTerminal = document.querySelector('#hacking-terminal')
  hackingTerminal.prepend(codeLine);
  hackingTerminal.scrollTop = 0;
  setTimeout(() => {addCode()}, Math.random() * 200);
}

hack();
