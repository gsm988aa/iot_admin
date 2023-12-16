# -*- coding: utf-8 -*-
from PyQt5.QtWebEngineWidgets import QWebEngineView

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
        self.setCursor(Qt.BlankCursor)


        self.browser.setContextMenuPolicy(Qt.NoContextMenu)  # 禁止上下文菜单

        self.browser.setUrl(QUrl("http://localhost:8080/"))

        self.setCentralWidget(self.browser)  # 将browser设置为MainWindow的中央部件


if __name__ == '__main__':
    app = QApplication([])
    mainw = MainWindow()
    mainw.show()
    app.exec_()
