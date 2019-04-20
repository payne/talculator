import {Button, View} from "gui"
import Controller from "../Boundaries/Controller"

class Keypad {
  private controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  getKeypadView (): View[] {
    let digits = ["0","1","2","3","4","5","6","7","8","9"]
    let operators = ["+", "-", "/", "*"]
    let equals = "="
    let decimalPoint = "."
    let answerClear = "AC"
    let clearEntry = "CE"

    let keyStyles = {
      width: "20%",
      margin: "10px"
    }    
    let allKeys :View[] = []
    let callback = this.controller.updateExpression.bind(this.controller)

    let digitKeys = this.createKeyRow(digits, "digit", callback , keyStyles)    
    let operatorKeys = this.createKeyRow(operators, "operator", callback, keyStyles)
    let equalsKey = this.createKeyRow([equals], "equals", callback, keyStyles)
    let decimalPointKey = this.createKeyRow([decimalPoint],"decimal" ,callback, 
      keyStyles)
    let answerClearKey = this.createKeyRow([answerClear], "answerClear", callback, 
      keyStyles)
    let clearEntryKey = this.createKeyRow([clearEntry], "clearEntry", callback,
      keyStyles)
    
    allKeys = allKeys.concat(digitKeys, operatorKeys, equalsKey, decimalPointKey, 
      answerClearKey, clearEntryKey)
    
    return allKeys
  }

  createKeyRow(keyValues: string[], keyType: string, callback: any, style: any) {
    let keys: View[] = []

    keyValues.map((val) => {
      let key = Button.create(val)
      key.onClick = () => callback({
        value: val,
        type: keyType
      })
      key.setStyle(style)
      keys.push(key)
    })

    return keys
  }
}

export default Keypad 