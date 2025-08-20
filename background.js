// background.js

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "generateAltText",
    title: "Generate Alt Text",
    contexts: ["image"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "generateAltText") {
    // Inject content.js into the current page
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
