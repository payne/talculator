import Expression from '../../Entities/Expression'
import IUseCaseOutputPort from '../UseCaseOutputPort/OutputPort'
import IExpressionUpdaterInputPort, {IExpressionUpdaterRequestModel} from './InputPort/IExpressionUpdaterInputPort'

class ExpressionUpdater implements IExpressionUpdaterInputPort {
  constructor (private expression: Expression,
    private outputPort: IUseCaseOutputPort) {}

  public updateExpression (inputData: IExpressionUpdaterRequestModel): void {
    const currentExpression = this.expression.getValue()
    const newExpression = this.getNewExpression(currentExpression, inputData)

    this.expression.setValue(newExpression)
    this.outputPort.displayValue(newExpression)
  }

  public getNewExpression (currentExpression: string,
    inputData: IExpressionUpdaterRequestModel): string {
    let newExpression = ''
    const newVal = inputData.value
    const newValType = inputData.valueType

    if (newValType === 'digit') {
      if (this.isZero(currentExpression)) {
        newExpression = newVal
      } else {
        newExpression = currentExpression + newVal
      }
    } else if (newValType === 'operator') {
        if (!this.isLastValueOperator(currentExpression)) {
          newExpression = `${currentExpression} ${newVal} `
        } else {
          newExpression = currentExpression
        }
    } else if (newValType === 'clearLastValue') {
      if (currentExpression === 'Infinity') {
          newExpression = '0'
        } else {
          newExpression =
            this.getSubExpressionWithoutLastValue(currentExpression)
        }
    } else if (newValType === 'decimalPoint') {
      const lastValue = this.getLastValue(currentExpression)
      if (!lastValue.includes('.')) {
          newExpression = currentExpression + newVal
        } else {
          newExpression = currentExpression
        }
    } else if (newValType === 'clearExpression') {
      newExpression = '0'
    } else {
      newExpression = currentExpression
    }

    return newExpression
  }

  public getLastValue (expressionVal: string) {
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

  public getSubExpressionWithoutLastValue (expressionVal: string) {
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

  public isLastValueOperator (expressionVal: string) {
    const lastVal = this.getLastValue(expressionVal)

    return lastVal.match(/\D/) !== null && !lastVal.includes('.')
  }
}

export default ExpressionUpdater
