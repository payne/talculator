import IInputPort from "./InputPort/IInputPort"
import {InputData} from "./InputPort/IInputPort"
import IOutputPort from "./OutputPort/IOutputPort"
import Expression from "../../Entities/Expression"

class ExpressionUpdater implements IInputPort {
  private expression: Expression
  private outputPort: IOutputPort

  constructor (_expression: Expression, _outputPort: IOutputPort) {
    this.expression = _expression
    this.outputPort = _outputPort
  }

  updateExpression (inputData: InputData): void {
    let currentExpression = this.expression.getValue()
    let newExpression = this.getNewExpression(currentExpression, inputData)

    this.expression.setValue(newExpression)
    this.outputPort.displayValue(newExpression)
  }

  getNewExpression (currentExpression:string, inputData: InputData): string {
    let newExpression = ""
    let newVal = inputData.value
    let type = inputData.type

    if (type === "digit") {
      if (this.isZero(currentExpression)) newExpression = newVal
      else newExpression = currentExpression + newVal
    } 
    else if (type === "operator") {
      if (!this.isLastTermOperator(currentExpression)) {
        newExpression = `${currentExpression} ${newVal} `
      } else {
        newExpression = currentExpression
      }
    } 
    else if (type === "clearEntry") {
      newExpression = this.getSubExpressionWithoutLastTerm(currentExpression)
    } 
    else if (type === "decimal") {
      let lastTerm = this.getLastTerm(currentExpression)
      if(!lastTerm.includes(".")) {
          newExpression = currentExpression + newVal
        } else {
          newExpression = currentExpression
        }
    } 
    else if (type === "equals") {
      let result:number = eval(currentExpression)
      console.log(result)
      newExpression = result.toString()
    }
    else if (type === "answerClear") {
      newExpression = "0"
    } 
    else {
      newExpression = currentExpression
    }

    return newExpression
  }

  getLength (expressionVal: string) {
    return expressionVal.length
  }

  getLastTerm (expressionVal: string) {
    let components = expressionVal.split(" ")
    let l = components.length - 1

    // make sure that the last child is not an empty string or a space
    while(l >= 0) {
    if (!components[l]) {
        l -= 1
      } else {
        break
      }
    }

    return components[l]
  }

  isZero (expressionVal: string) {
    return expressionVal === "0"
  }

  isNumber (expressionVal: string) {
    let value = expressionVal

    if(!value) return false

    let components = value.split(" ")

    /**
     *  An expression that is a number has only one component 
     *  and it is not NaN 
     **/

    return (components.length === 1 && !isNaN(parseFloat(components[0])))    
  }

  getSubExpressionWithoutLastTerm (expressionVal: string) {
    let value = expressionVal
    let components = value.split("")
    let l = components.length - 1

    if(l === 0) return "0"    
    /**
     *  an operator is preceded and followed by a space
     *  remove the spaces and return the valid expression
     **/
    if(components[l] === " ") l = l - 2

    return value.substr(0, l)
  }
  
  getLastNumber (expressionVal: string) {
    let components = expressionVal.split(" ")
    let l = components.length - 1
    
    while (l >= 0) {
      let num = parseFloat(components[l])
      if(!isNaN(num)) {
        return components[l]
      } else {
        l -= 1
      }
    }
    return
  }

  isLastTermOperator(expressionVal: string) {
    let lastVal = this.getLastTerm(expressionVal)

    return lastVal.match(/\D/) !== null && !lastVal.includes(".")
  }
}

export default ExpressionUpdater
