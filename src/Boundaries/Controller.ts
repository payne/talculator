import IExpressionUpdaterInputPort from '../UseCases/ExpressionUpdater/InputPort/IExpressionUpdaterInputPort'
import {IExpressionUpdaterInputData} from '../UseCases/ExpressionUpdater/InputPort/IExpressionUpdaterInputPort'
import IRequest from './InputPort/IRequest'

class Controller implements IRequest {
  private inputPort: IExpressionUpdaterInputPort

  constructor (inputPort: IExpressionUpdaterInputPort) {
    this.inputPort = inputPort
  }

  public updateExpression (inputData: IExpressionUpdaterInputData) {
    this.inputPort.updateExpression(inputData)
  }
}

export default Controller
