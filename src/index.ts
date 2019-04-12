import Expression from "./Entities/Expression"
import UpdateExpression from "./UseCases/UpdateExpression/UpdateExpression"
import Presenter from "./Boundaries/Presenter"
import Gui from "./infrastructure/CalculatorUI"
import Controller from "./Boundaries/Controller"
import Keypad from "./infrastructure/Keypad"
import Display from "./infrastructure/Display"

const display = new Display()
const expression = new Expression()
const presenter  = new Presenter(display)
const updateExpression = new UpdateExpression (expression, presenter)
const controller = new Controller(updateExpression)
const keypad = new Keypad(controller)

const gui = new Gui(keypad, display)

gui.showGui()
