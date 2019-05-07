import IIUseCaseOutputPort from '../UseCases/UseCaseOutputPort/OutputPort'
import IResponse from './OutputPort/IResponse'

class Presenter implements IIUseCaseOutputPort {
  constructor (private response: IResponse) {}

  public displayValue (value: string): void {
    this.response.displayValue(value)
  }
}

export default Presenter
