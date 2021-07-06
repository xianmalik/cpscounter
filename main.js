const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
      height: 800,
      width: 450,
      webPreferences: {
      	nodeIntegration: true
      }
  });
  // mainWindow.setMenu(null);
  mainWindow.loadURL('file://' + __dirname + '/index.html');
});