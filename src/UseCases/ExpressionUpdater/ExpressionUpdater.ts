import Expression from '../../Entities/Expression'
import IInputPort from './InputPort/IInputPort'
import {InputData} from './InputPort/IInputPort'
import IOutputPort from './OutputPort/IOutputPort'

class ExpressionUpdater implements IInputPort {
  private expression: Expression
  private outputPort: IOutputPort

  constructor (expression: Expression, outputPort: IOutputPort) {
    this.expression = expression
    this.outputPort = outputPort
  }

  public updateExpression (inputData: InputData): void {
    const currentExpression = this.expression.getValue()
    const newExpression = this.getNewExpression(currentExpression, inputData)

    this.expression.setValue(newExpression)
    this.outputPort.displayValue(newExpression)
  }

  public getNewExpression (currentExpression: string, inputData: InputData): string {
    let newExpression = ''
    const newVal = inputData.value
    const type = inputData.type

    if (type === 'digit') {
      if (this.isZero(currentExpression)) {
        newExpression = newVal
      } else {
        newExpression = currentExpression + newVal
      }
    } else if (type === 'operator') {
        if (!this.isLastTermOperator(currentExpression)) {
          newExpression = `${currentExpression} ${newVal} `
        } else {
          newExpression = currentExpression
        }
    } else if (type === 'clearEntry') {
      newExpression = this.getSubExpressionWithoutLastTerm(currentExpression)
    } else if (type === 'decimal') {
      const lastTerm = this.getLastTerm(currentExpression)
      if (!lastTerm.includes('.')) {
          newExpression = currentExpression + newVal
        } else {
          newExpression = currentExpression
        }
    } else if (type === 'equals') {
      // tslint:disable-next-line: no-eval
      const result: number = eval(currentExpression)
      newExpression = result.toString()
    } else if (type === 'answerClear') {
      newExpression = '0'
    } else {
      newExpression = currentExpression
    }

    return newExpression
  }

  public getLength (expressionVal: string) {
    return expressionVal.length
  }

  public getLastTerm (expressionVal: string) {
    const components = expressionVal.split(' ')
    let l = components.length - 1

    // make sure that the last child is not an empty string or a space
    while (l >= 0) {
    if (!components[l]) {
        l -= 1
      } else {
        break
      }
    }

    return components[l]
  }

  public isZero (expressionVal: string) {
    return expressionVal === '0'
  }

  public isNumber (expressionVal: string) {
    const value = expressionVal

    if (!value) { return false }

    const components = value.split(' ')

    /*
     *  An expression that is a number has only one component
     *  and it is not NaN
     */

    return (components.length === 1 && !isNaN(parseFloat(components[0])))
  }

  public getSubExpressionWithoutLastTerm (expressionVal: string) {
    const value = expressionVal
    const components = value.split('')
    let l = components.length - 1

    if (l === 0) { return '0' }
    /*
     *  an operator is preceded and followed by a space
     *  remove the spaces and return the valid expression
     */
    if (components[l] === ' ') { l = l - 2 }

    return value.substr(0, l)
  }

  public getLastNumber (expressionVal: string) {
    const components = expressionVal.split(' ')
    let l = components.length - 1

    while (l >= 0) {
      const num = parseFloat(components[l])
      if (!isNaN(num)) {
        return components[l]
      } else {
        l -= 1
      }
    }
    return
  }

  public isLastTermOperator (expressionVal: string) {
    const lastVal = this.getLastTerm(expressionVal)

    return lastVal.match(/\D/) !== null && !lastVal.includes('.')
  }
}

export default ExpressionUpdater
