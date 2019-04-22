import Gui from './infrastructure/CalculatorUI'
import Display from './infrastructure/Display'
import Keypad from './infrastructure/Keypad'
import Controller from './Boundaries/Controller'
import Presenter from './Boundaries/Presenter'
import Expression from './Entities/Expression'
import ExpressionUpdater from './UseCases/ExpressionUpdater/ExpressionUpdater'

const display = new Display()
const expression = new Expression()
const presenter  = new Presenter(display)
const expressionUpdater = new ExpressionUpdater(expression, presenter)
const controller = new Controller(expressionUpdater)
const keypad = new Keypad(controller)

const gui = new Gui(keypad, display)

gui.showGui()
