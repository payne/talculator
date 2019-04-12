import IOutputPort from "../UseCases/UpdateExpression/OutputPort/IOutputPort";
import IResponse from "./OutputPort/IResponse";

class Presenter implements IOutputPort {
  private response: IResponse

  constructor (_response: IResponse) {
    this.response = _response
  }

  displayValue (value: string): void {
    this.response.presentValue(value)
  }
}

export default Presenter