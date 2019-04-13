import {Window, Container, View, MessageLoop} from "gui"
import { isArray } from "util";
import Keypad from "./Keypad";
import Display from "./Display";

class CalculatorUI {
  private keypad: Keypad
  private display: Display

  constructor(keypad: Keypad, display: Display) {
    this.keypad = keypad 
    this.display = display
  }

  showGui = () => {
    let win = this.createWindow()
    let mainContainer = this.createContainer({})
    let displayContainer = this.createContainer({})
    let keypadContainer = this.createContainer({})
    displayContainer.setStyle({backgroundColor: "#fff", margin: "10px",
    paddingRight: "15px", height: "50px", display: "flex", boxSizing: "border-box",
    flexDirection: "row-reverse"})
    this.addChildViewsToContainer(displayContainer, this.getDisplay())
    this.addChildViewsToContainer(keypadContainer, this.getKeypad())
    keypadContainer.setStyle({ width: "400px", display: "flex", flexDirection: "row"
    , flexWrap: "wrap", justifyContent: "center"})
    this.addChildViewsToContainer(mainContainer, [displayContainer, keypadContainer])
    win.setContentView(mainContainer)
    this.startMessageLoop()
  }

  private createWindow () {
    let win = Window.create({})
    win.setContentSize({ width: 400, height: 350 })
    win.setTitle("Simple Calculator")
    win.setResizable(false)
    win.onClose = () => MessageLoop.quit()
    win.activate()
    return win
  }

  private startMessageLoop () {
    MessageLoop.run()
    process.exit(0)
  }

  private createContainer (style: any) {
    let container = Container.create()
    container.setStyle(style)
    return container
  }

  private addChildViewsToContainer (container: Container, childViews: View[] | View) {
    if (isArray(childViews)) {
      childViews.map(child => {
        container.addChildView(child)
      })
    } else {
      container.addChildView(childViews)
    }
    return container
  }

  //external method calls 

  private getDisplay () {
    return this.display.getDisplay()
  }

  private getKeypad () {
    return this.keypad.getKeyPad()
  }

}

export default CalculatorUI