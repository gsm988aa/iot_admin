# -*- coding: utf-8 -*-
from ui_main import Ui_MainWindow
from PyQt5.QtCore import QUrl,Qt
from PyQt5.QtWidgets import QApplication, QMainWindow, QToolBar, QAction
from PyQt5.QtWebEngineWidgets import QWebEngineView

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.ui = Ui_MainWindow()
        self.ui.setupUi(self)
        self.browser = QWebEngineView()
        self.setCursor(Qt.BlankCursor)
        self.browser.setUrl(QUrl("http://localhost:8080"))
app = QApplication([])
mainw = MainWindow()
mainw.showFullScreen()
app.exec_()



