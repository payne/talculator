import Expression from '../../Entities/Expression'
import IUseCaseOutputPort from '../UseCaseOutputPort/OutputPort'
import ICalculatorInputPort from './InputPort/ICalculatorInputPort'

class Calculator implements ICalculatorInputPort {
  private expression: Expression
  private outputPort: IUseCaseOutputPort

  constructor (expression: Expression, outputPort: IUseCaseOutputPort) {
    this.expression = expression
    this.outputPort = outputPort
  }

  public evaluateExpression () {
    // tslint:disable-next-line: no-eval
    const result = eval(this.expression.getValue())
    const newVal = result.toString()

    this.expression.setValue(newVal)
    this.outputPort.displayValue(newVal)
  }
}

export default Calculator
