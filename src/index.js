const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");
const url = require("url");

let mainWindow = null;

const createWindow = () => {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({ width, height });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "..", "index.html"),
    protocol: "file:",
    slashes: true
  }));
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
