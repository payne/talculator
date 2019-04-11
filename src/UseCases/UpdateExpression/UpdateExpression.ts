import IInputPort from "./InputPort/IInputPort"
import IOutputPort from "./OutputPort/IOutputPort"
import Expression from "../../Entities/Expression"

class UpdateExpression implements IInputPort {
  _expression: Expression
  _outputBoundary: IOutputPort 

  constructor (expression: Expression, outputBoundary: IOutputPort) {
    this._expression = expression
    this._outputBoundary = outputBoundary
  }
  
  // currently only appends values to the expression
  updateExpression = (value: string): void => {
    let newVal:string = this._getValue() + value
    this._setValue(newVal)
    this._displayValue(newVal)
  }

  // external method calls
  _setValue (newVal: string) {
    return this._expression.setValue(newVal)
  }

  _getValue () {
    return this._expression.getValue()
  }

  _displayValue (value: string) {
    return this._outputBoundary.displayValue(value)
  }
}

export default UpdateExpression