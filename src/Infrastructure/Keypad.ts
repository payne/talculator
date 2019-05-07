import {Button, View} from 'gui'

import CalculatorController from '../Boundaries/Calculator/CalculatorController'
import { ICalculatorDTO } from '../Boundaries/Calculator/InputPort/ICalculatorRequest'
import ExpressionUpdaterController from '../Boundaries/ExpressionUpdater/ExpressionUpdaterController'
import {IExpressionUpdaterDTO} from '../Boundaries/ExpressionUpdater/InputPort/IExpressionUpdaterRequest'

class Keypad {
  constructor (private expressionUpdaterController: ExpressionUpdaterController,
    private calculatorController: CalculatorController) {}

  public getKeypadView (): View[] {
    const digits = ['0','1','2','3','4','5','6','7','8','9']
    const operators = ['+', '-', '/', '*']
    const equals = '='
    const decimalPoint = '.'
    const expressionClear = 'EC'
    const clearLastValue = 'CLV'

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

    const expressionClearKey = this.createKeyArray([expressionClear],
      'clearExpression', expressionUpdaterCallback, keyStyles)

    const clearLastValueKey = this.createKeyArray([clearLastValue],
      'clearLastValue', expressionUpdaterCallback, keyStyles)

    allKeys = allKeys.concat(digitKeys, operatorKeys, equalsKey,
      decimalPointKey, expressionClearKey, clearLastValueKey)

    return allKeys
  }

  public createKeyArray (keyValues: string[],
    keyType: IExpressionUpdaterDTO['valueType'] | ICalculatorDTO['type'],
    callback: any, styles: any) {
    const keys: View[] = []

    keyValues.map((val) => {
      const key = Button.create(val)
      key.onClick = () => callback({
        value: val,
        valueType: keyType
      })
      key.setStyle(styles)
      keys.push(key)
    })

    return keys
  }
}

export default Keypad
