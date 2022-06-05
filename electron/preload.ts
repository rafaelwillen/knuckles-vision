import { ipcRenderer, contextBridge } from 'electron';

declare global {
  interface Window {
    Main: typeof api;
  }
}

const api = {
  /**
    Minimize the window
   */
  Minimize: () => {
    ipcRenderer.send('minimize');
  },
  /**
   * Maximize the window
   */
  Maximize: () => {
    ipcRenderer.send('maximize');
  },
  /**
   * Closes the window
   */
  Close: () => {
    ipcRenderer.send('close');
  },
  on: (channel: string, callback: (data: any) => void) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  }
};
contextBridge.exposeInMainWorld('Main', api);
