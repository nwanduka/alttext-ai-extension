// background.js

// Run when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  // Create a context menu item for images
  chrome.contextMenus.create({
    id: "generateAltText",
    title: "Generate Alt Text with AltText AI",
    contexts: ["image"], // Only show when right-clicking images
  });
});

// Add a click event listener for the context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generateAltText") {
    // For now, just log the image URL
    console.log("Selected image:", info.srcUrl);

    // Later: send this image to AI to generate alt text
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (url) => alert("AltText AI will generate alt text for: " + url),
      args: [info.srcUrl],
    });
  }
});
