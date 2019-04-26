import IInputPort from '../UseCases/ExpressionUpdater/InputPort/IInputPort'
import {IInputData} from '../UseCases/ExpressionUpdater/InputPort/IInputPort'
import IRequest from './InputPort/IRequest'

class Controller implements IRequest {
  private inputPort: IInputPort

  constructor (inputPort: IInputPort) {
    this.inputPort = inputPort
  }

  public updateExpression (inputData: IInputData) {
    this.inputPort.updateExpression(inputData)
  }
}

export default Controller
