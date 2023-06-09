# !/Users/Han/AppData/Local/Microsoft/WindowsApps/python.exe
# -*- coding: utf-8 -*-
from ui_main import Ui_MainWindow
from PyQt5.QtCore import QUrl, Qt
from PyQt5.QtWidgets import QApplication, QMainWindow, QToolBar, QAction
from PyQt5.QtWebEngineWidgets import QWebEngineView

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        self.browser = QWebEngineView()

        # 在MainWindow的构造函数中添加以下代码
        #
        # self.browser.page().profile().setRequestInterceptor(self.requestInterceptor)
        # def requestInterceptor(self, details):
        #     if details.resourceType() == QWebEngineProfile.ResourceTypeMainFrame:
        #         details.setHttpHeader(b"Content-Security-Policy", b"gesture=none")

        self.setCursor(Qt.BlankCursor)
        self.browser.setUrl(QUrl("http://localhost:8080"))

app = QApplication([])
mainw = MainWindow()
mainw.showFullScreen()
app.exec_()