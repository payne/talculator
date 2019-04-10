import * as gui from "gui"

const YueWindow = gui.Window.create({})

YueWindow.activate()
YueWindow.onClose = () => gui.MessageLoop.quit()

gui.MessageLoop.run()
process.exit(0)