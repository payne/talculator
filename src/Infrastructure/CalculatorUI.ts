import {Container, MessageLoop, View, Window} from 'gui'
import { isArray } from 'util'

import Display from './Display'
import Keypad from './Keypad'

class CalculatorUI {
  private calculatorWidth: number = 400
  private calculatorHeight: number = 350
  private calculatorTitle: string = 'Simple Calculator'

  constructor (private keypad: Keypad, private display: Display) {}

  public showGui = () => {
    const win = this.createNonResizableWindow(this.calculatorTitle,
      this.calculatorWidth, this.calculatorHeight)

    const displayContainerStyles = {
      backgroundColor: '#fff',
      margin: '10px',
      paddingRight: '15px',
      height: '50px',
      display: 'flex',
      boxSizing: 'border-box',
      flexDirection: 'row-reverse'
    }

    const keypadContainerStyles = {
      width: '400px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }

    const mainContainer = this.createContainer({})
    const displayContainer = this.createContainer(displayContainerStyles)
    const keypadContainer = this.createContainer(keypadContainerStyles)

    this.addChildViewsToContainer(displayContainer,
      this.display.getDisplayView())

    this.addChildViewsToContainer(keypadContainer,
      this.keypad.getKeypadView())

    this.addChildViewsToContainer(mainContainer,
      [displayContainer, keypadContainer])

    win.setContentView(mainContainer)
    this.activateWindow(win)
    this.startMessageLoop()
  }

  private createNonResizableWindow (title: string, width: number,
    height: number) {
    const win = Window.create({})
    win.setContentSize({ width, height })
    win.setTitle(title)
    win.setResizable(false)
    win.onClose = () => MessageLoop.quit()
    return win
  }

  private activateWindow (win: Window) {
    win.activate()
  }

  private startMessageLoop () {
    MessageLoop.run()
    process.exit(0)
  }

  private createContainer (styles: any) {
    const container = Container.create()
    container.setStyle(styles)
    return container
  }

  private addChildViewsToContainer (container: Container,
    childViews: View[] | View) {
    if (isArray(childViews)) {
      childViews.map((child) => {
        container.addChildView(child)
      })
    } else {
      container.addChildView(childViews)
    }
    return container
  }
}

export default CalculatorUI
