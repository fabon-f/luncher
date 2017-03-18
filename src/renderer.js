/* eslint-env browser */
(() => {
  const { ipcRenderer } = require("electron");

  ipcRenderer.on("game-directory", (_e, directory) => {
    localStorage.setItem("directory", directory);
  });

  const preventDrop = e => {
    e.preventDefault();
    return false;
  };
  document.addEventListener("drop", preventDrop);
  document.addEventListener("dragover", preventDrop);

  document.getElementById("game-directory").addEventListener("click", () => {
    ipcRenderer.send("game-directory");
  });
}) ();
