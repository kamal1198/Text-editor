const butInstall = document.getElementById("buttonInstall");
let windowPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
  // console.log("'beforeinstallprompt' event fired");
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  windowPrompt = window.deferredPrompt;
  if (!windowPrompt) {
    return;
  }
  windowPrompt.prompt();
  window.deferredPrompt = null;
  butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (e) => {
  window.deferredPrompt = null;
});
