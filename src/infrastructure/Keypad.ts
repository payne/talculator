import {Button, View} from 'gui'

import Controller from '../Boundaries/Controller'

class Keypad {
  private controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  public getKeypadView (): View[] {
    const digits = ['0','1','2','3','4','5','6','7','8','9']
    const operators = ['+', '-', '/', '*']
    const equals = '='
    const decimalPoint = '.'
    const answerClear = 'AC'
    const clearEntry = 'CE'

    const keyStyles = {
      width: '20%',
      margin: '10px'
    }
    let allKeys: View[] = []
    const callback = this.controller.updateExpression.bind(this.controller)

    const digitKeys = this.createKeyRow(digits, 'digit', callback , keyStyles)
    const operatorKeys = this.createKeyRow(operators, 'operator', callback, keyStyles)
    const equalsKey = this.createKeyRow([equals], 'equals', callback, keyStyles)
    const decimalPointKey = this.createKeyRow([decimalPoint],'decimal' ,callback,
      keyStyles)
    const answerClearKey = this.createKeyRow([answerClear], 'answerClear', callback,
      keyStyles)
    const clearEntryKey = this.createKeyRow([clearEntry], 'clearEntry', callback,
      keyStyles)

    allKeys = allKeys.concat(digitKeys, operatorKeys, equalsKey, decimalPointKey,
      answerClearKey, clearEntryKey)

    return allKeys
  }

  public createKeyRow (keyValues: string[], keyType: string, callback: any, style: any) {
    const keys: View[] = []

    keyValues.map((val) => {
      const key = Button.create(val)
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
