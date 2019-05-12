import Expression from '../../Entities/Expression'
import IUseCaseOutputPort from '../UseCaseOutputPort/OutputPort'
import ICalculatorInputPort from './InputPort/ICalculatorInputPort'

class Calculator implements ICalculatorInputPort {
  constructor (private expression: Expression,
    private outputPort: IUseCaseOutputPort) {}

  public evaluateExpression () {
    const currentVal = this.expression.getValue().replace(' ','')
    if (this.expression.isEvaluable(currentVal)) {
      // tslint:disable-next-line: no-eval
      const result = eval(this.expression.getValue())
      const newVal = result.toString()

      this.expression.setValue(newVal)
      this.outputPort.displayValue(newVal)
    } else {
      return
    }
  }
}

export default Calculator
