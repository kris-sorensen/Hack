let color = '#222';

console.log('log')
  
chrome.runtime.onInstalled.addListener(() => {


  console.log('background is running')
  
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
