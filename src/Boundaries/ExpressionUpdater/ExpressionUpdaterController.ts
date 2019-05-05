import IExpressionUpdaterInputPort from '../../UseCases/ExpressionUpdater/InputPort/IExpressionUpdaterInputPort'
import {IExpressionUpdaterRequestModel} from '../../UseCases/ExpressionUpdater/InputPort/IExpressionUpdaterInputPort'
import IRequest from './InputPort/IExpressionUpdaterRequest'
import {IExpressionUpdaterDTO} from './InputPort/IExpressionUpdaterRequest'

class Controller implements IRequest {
  private inputPort: IExpressionUpdaterInputPort

  constructor (inputPort: IExpressionUpdaterInputPort) {
    this.inputPort = inputPort
  }

  public updateExpression (inputData: IExpressionUpdaterDTO) {
    this.inputPort.updateExpression(inputData as IExpressionUpdaterRequestModel)
  }
}

export default Controller
