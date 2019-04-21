import IOutputPort from "../UseCases/ExpressionUpdater/OutputPort/IOutputPort"
import IResponse from "./OutputPort/IResponse"

class Presenter implements IOutputPort {
  private response: IResponse

  constructor (_response: IResponse) {
    this.response = _response
  }

  displayValue (value: string): void {
    this.response.displayValue(value)
  }
}

export default Presenter