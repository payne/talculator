import {Button, View} from 'gui'

import CalculatorController from '../Boundaries/Calculator/CalculatorController'
import ExpressionUpdaterController from '../Boundaries/ExpressionUpdater/ExpressionUpdaterController'

class Keypad {
  private expressionUpdaterController: ExpressionUpdaterController
  private calculatorController: CalculatorController

  constructor (expressionUpdaterController: ExpressionUpdaterController,
    calculatorController: CalculatorController) {
    this.expressionUpdaterController = expressionUpdaterController
    this.calculatorController = calculatorController
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

    const expressionUpdaterCallback =
      this.expressionUpdaterController.updateExpression.bind(
        this.expressionUpdaterController)

    const calculatorCallback =
      this.calculatorController.evaluateExpression.bind(
        this.calculatorController)

    const digitKeys = this.createKeyArray(digits, 'digit',
      expressionUpdaterCallback, keyStyles)

    const operatorKeys = this.createKeyArray(operators, 'operator',
    expressionUpdaterCallback, keyStyles)

    const equalsKey = this.createKeyArray([equals], 'equals',
      calculatorCallback, keyStyles)

    const decimalPointKey = this.createKeyArray([decimalPoint],'decimal' ,
      expressionUpdaterCallback, keyStyles)

    const answerClearKey = this.createKeyArray([answerClear], 'answerClear',
     expressionUpdaterCallback, keyStyles)

    const clearEntryKey = this.createKeyArray([clearEntry], 'clearEntry',
      expressionUpdaterCallback, keyStyles)

    allKeys = allKeys.concat(digitKeys, operatorKeys, equalsKey,
      decimalPointKey, answerClearKey, clearEntryKey)

    return allKeys
  }

  public createKeyArray (keyValues: string[], keyType: string, callback: any,
    styles: any) {
    const keys: View[] = []

    keyValues.map((val) => {
      const key = Button.create(val)
      key.onClick = () => callback({
        value: val,
        type: keyType
      })
      key.setStyle(styles)
      keys.push(key)
    })

    return keys
  }
}

export default Keypad
