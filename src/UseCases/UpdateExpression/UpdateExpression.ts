import IInputPort from "./InputPort/IInputPort"
import IOutputPort from "./OutputPort/IOutputPort"
import Expression from "../../Entities/Expression"

class UpdateExpression implements IInputPort {
  private expression: Expression
  private outputPort: IOutputPort 

  constructor (_expression: Expression, _outputPort: IOutputPort) {
    this.expression = _expression
    this.outputPort = _outputPort
  }
  
  // currently only appends values to the expression
  updateExpression = (value: string): void => {
    let newVal:string = this.getValue() + value
    this.setValue(newVal)
    this.displayValue(newVal)
  }

  // external method calls
  private setValue (newVal: string) {
    return this.expression.setValue(newVal)
  }

  private getValue () {
    return this.expression.getValue()
  }

  private displayValue (value: string) {
    return this.outputPort.displayValue(value)
  }
}

export default UpdateExpression