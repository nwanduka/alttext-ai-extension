// content.js
(function () {
  // Create a small popup div
  const popup = document.createElement("div");
  popup.innerText = "✅ AltText AI triggered!";
  popup.style.position = "fixed";
  popup.style.top = "10px";
  popup.style.right = "10px";
  popup.style.padding = "10px 15px";
  popup.style.background = "black";
  popup.style.color = "white";
  popup.style.zIndex = "999999";
  popup.style.borderRadius = "6px";
  popup.style.fontSize = "14px";

  document.body.appendChild(popup);

  // Remove popup after 3 seconds
  setTimeout(() => popup.remove(), 3000);
})();
