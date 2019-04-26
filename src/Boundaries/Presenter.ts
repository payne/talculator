import IExpressionUpdaterOutputPort from '../UseCases/ExpressionUpdater/OutputPort/IExpressionUpdaterOutputPort'
import IResponse from './OutputPort/IResponse'

class Presenter implements IExpressionUpdaterOutputPort {
  private response: IResponse

  constructor (response: IResponse) {
    this.response = response
  }

  public displayValue (value: string): void {
    this.response.displayValue(value)
  }
}

export default Presenter
