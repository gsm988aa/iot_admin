# -*- coding: utf-8 -*-
from ui_main import Ui_MainWindow
from PyQt5 import Qt
from PyQt5.QtCore import QUrl
from PyQt5.QtWidgets import QApplication, QMainWindow, QToolBar, QAction
from PyQt5.QtWebEngineWidgets import QWebEngineView

class MainWindow(QMainWindow):

    def __init__(self):
        super().__init__()
        # 使用ui文件导入定义界面类
        self.ui = Ui_MainWindow()
        # 初始化界面
        self.ui.setupUi(self)
        self.browser = QWebEngineView()
        self.browser.setCursor(Qt.BlankCursor)

        # 使用界面定义的控件，也是从ui里面访问
        self.browser.setUrl(QUrl("http://localhost:8080"))

app = QApplication([])
mainw = MainWindow()
mainw.showFullScreen()
app.exec_()


#apt install python3-dev qt5-default libqt5webkit5-dev
# SyntaxError: Non-UTF-8 code starting with '\xd3' in file /root/Desktop/qtweb/qtweb.py on line 10, but no encoding declared; see http://python.org/dev/peps/pep-0263/ for details

