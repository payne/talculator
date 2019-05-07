import IExpressionUpdaterInputPort from '../../UseCases/ExpressionUpdater/InputPort/IExpressionUpdaterInputPort'
import {IExpressionUpdaterRequestModel} from '../../UseCases/ExpressionUpdater/InputPort/IExpressionUpdaterInputPort'
import IRequest from './InputPort/IExpressionUpdaterRequest'
import {IExpressionUpdaterDTO} from './InputPort/IExpressionUpdaterRequest'

class Controller implements IRequest {
  constructor (private inputPort: IExpressionUpdaterInputPort) {}

  public updateExpression (inputData: IExpressionUpdaterDTO) {
    this.inputPort.updateExpression(inputData as IExpressionUpdaterRequestModel)
  }
}

export default Controller
