// background.js
// Handles extension-wide events (install, update) and sets up listeners.

chrome.runtime.onInstalled.addListener(() => {
  console.log("Charity Ad Revenue Redirector installed");
});

// Example listener to receive messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "AD_DETECTED") {
    console.log("Ad detected event in background:", request.payload);
    // Possibly forward to backend or store in local extension state
  }
  sendResponse({ status: "OK" });
});