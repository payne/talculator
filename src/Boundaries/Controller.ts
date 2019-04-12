import IInputPort from "../UseCases/UpdateExpression/InputPort/IInputPort"
import IRequest from "./InputPort/IRequest";

class Controller implements IRequest {
  private inputPort: IInputPort

  constructor (inputPort: IInputPort) {
    this.inputPort = inputPort
  }

  updateExpression (value: any) {
    this.inputPort.updateExpression(value)
  }
}

export default Controller