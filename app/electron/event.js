import { BrowserWindow } from 'electron';

export default class EventBuilder {
  mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
  }

  build(master: ipcMain, events: Array = ['close', 'minimize', 'maximize']) {
    events.map(event => master.on(event, this[event].bind(this)));
  }

  close() {
    this.mainWindow.close();
  }

  minimize() {
    this.mainWindow.minimize();
  }

  maximize() {
    this.mainWindow.maximize();
  }
}
