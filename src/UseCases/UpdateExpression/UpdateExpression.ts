import IInputPort from "./InputPort/IInputPort";
import IOutputPort from "./OutputPort/IOutputPort";
import Expression from "../../Entities/Expression";

class UpdateExpression implements IInputPort {
  private expression: Expression;
  private outputPort: IOutputPort;

  constructor(_expression: Expression, _outputPort: IOutputPort) {
    this.expression = _expression;
    this.outputPort = _outputPort;
  }

  updateExpression = (newVal: string): void => {
    let newExpression = this.getNewExpression(newVal);

    this.expression.setValue(newExpression);
    this.outputPort.displayValue(newExpression);
  };

  private getNewExpression(newVal: string): string {
    let newExpression = ""
    let currentExpression = this.expression.getValue()
    let newNumber = parseInt(newVal)

    if (this.expression.isZero() && newNumber) {
      newExpression = newVal;
    } else if (newVal === "AC") {
      newExpression = "0";
    } else if (newVal === "CE") {
      newExpression = this.expression.getFirstToPenultimateValue();
      if (!newExpression) newExpression = "0";
    } else if (newVal !== "." && !newNumber) {
      newExpression = `${currentExpression} ${newVal} `
    } else {
      newExpression = currentExpression + newVal;
    }
    return newExpression;
  }
}

export default UpdateExpression;
