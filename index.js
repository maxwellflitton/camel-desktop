const electron = require("electron");

const { app, BrowserWindow } = electron;


let mainWindow;


app.on("ready", () => {
    new BrowserWindow({
        height: 600,
        width: 800
        webPreferences: {
            backgroundThrottling: false
        }
    });
    mainWindow.loadUrl(`file://${__dirname}/react_app/src/index.html`);
});



