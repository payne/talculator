import ICalculatorInputPort from '../../UseCases/Calculator/InputPort/ICalculatorInputPort'
import ICalculatorRequest from './InputPort/ICalculatorRequest'

class CalculatorController implements ICalculatorRequest {
  private inputPort: ICalculatorInputPort

  constructor (inputPort: ICalculatorInputPort) {
    this.inputPort = inputPort
  }

  public evaluateExpression () {
    this.inputPort.evaluateExpression()
  }
}

export default CalculatorController
