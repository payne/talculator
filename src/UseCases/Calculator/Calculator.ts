import Expression from '../../Entities/Expression'
import IUseCaseOutputPort from '../UseCaseOutputPort/OutputPort'
import ICalculatorInputPort from './InputPort/ICalculatorInputPort'

class Calculator implements ICalculatorInputPort {
  constructor (private expression: Expression,
    private outputPort: IUseCaseOutputPort) {}

  public evaluateExpression () {
    // tslint:disable-next-line: no-eval
    const result = eval(this.expression.getValue())
    const newVal = result.toString()

    this.expression.setValue(newVal)
    this.outputPort.displayValue(newVal)
  }
}

export default Calculator
