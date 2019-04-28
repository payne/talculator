import IIUseCaseOutputPort from '../UseCases/UseCaseOutputPort/OutputPort'
import IResponse from './OutputPort/IResponse'

class Presenter implements IIUseCaseOutputPort {
  private response: IResponse

  constructor (response: IResponse) {
    this.response = response
  }

  public displayValue (value: string): void {
    this.response.displayValue(value)
  }
}

export default Presenter
