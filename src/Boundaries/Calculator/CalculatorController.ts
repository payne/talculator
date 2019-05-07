import ICalculatorInputPort from '../../UseCases/Calculator/InputPort/ICalculatorInputPort'
import ICalculatorRequest, {ICalculatorDTO} from './InputPort/ICalculatorRequest'

class CalculatorController implements ICalculatorRequest {
  constructor (private inputPort: ICalculatorInputPort) {}

  public evaluateExpression () {
    this.inputPort.evaluateExpression()
  }
}

export default CalculatorController
