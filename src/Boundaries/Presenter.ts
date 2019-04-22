import IOutputPort from '../UseCases/ExpressionUpdater/OutputPort/IOutputPort'
import IResponse from './OutputPort/IResponse'

class Presenter implements IOutputPort {
  private response: IResponse

  constructor (response: IResponse) {
    this.response = response
  }

  public displayValue (value: string): void {
    this.response.displayValue(value)
  }
}

export default Presenter
