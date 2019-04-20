import IInputPort from "../UseCases/ExpressionUpdater/InputPort/IInputPort"
import {InputData} from "../UseCases/ExpressionUpdater/InputPort/IInputPort"
import IRequest from "./InputPort/IRequest"

class Controller implements IRequest {
  private inputPort: IInputPort

  constructor (inputPort: IInputPort) {
    this.inputPort = inputPort
  }

  updateExpression (inputData: InputData) {
    this.inputPort.updateExpression(inputData)
  }
}

export default Controller