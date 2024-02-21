const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 800,  // 7寸屏
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('./dist/index.html');  // vue打包的文件

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  // 设置菜单
  const menu = Menu.buildFromTemplate([
    {
      label: '菜单',
      submenu: [
        {
          label: '重新加载',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            mainWindow.reload();
          },
        },
        {
          label: '全屏',
          accelerator: 'F11',
          click: () => {
            mainWindow.setFullScreen(!mainWindow.isFullScreen());
          },
        },
        {
          label: '退出',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          },
        },
      ],
    },
  ]);

  Menu.setApplicationMenu(menu);

  // 注册全局快捷键
  globalShortcut.register('CmdOrCtrl+R', () => {
    mainWindow.reload();
  });

  globalShortcut.register('F11', () => {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
  });
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('will-quit', () => {
  // 注销所有全局快捷键
  globalShortcut.unregisterAll();
});
