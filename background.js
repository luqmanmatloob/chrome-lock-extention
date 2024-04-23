chrome.runtime.onInstalled.addListener(function() {
  chrome.windows.create({
    url: "popup.html",
    type: "popup",
    width: 500,
    height: 500
  });
});
