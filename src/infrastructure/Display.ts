import {Label, View} from "gui"
import IResponse from "../Boundaries/OutputPort/IResponse"

class Display implements IResponse {
  private label: Label

  constructor () {
    this.label = Label.create("0")
  }

  getDisplayView (): View {
    return this.label
  }

  presentValue(newVal: string) {
    this.setText(newVal)
  }

  //external method calls 
  private setText(newVal: string) {
    return this.label.setText(newVal)
  }
}

export default Display