import Gui from './infrastructure/CalculatorUI'
import Display from './infrastructure/Display'
import Keypad from './infrastructure/Keypad'
import ExpressionUpdaterController from './Boundaries/ExpressionUpdater/ExpressionUpdaterController'
import CalculatorController from './Boundaries/Calculator/CalculatorController'
import Presenter from './Boundaries/Presenter'
import Expression from './Entities/Expression'
import ExpressionUpdater from './UseCases/ExpressionUpdater/ExpressionUpdater'
import Calculator from './UseCases/Calculator/Calculator'

const display = new Display()
const expression = new Expression()
const presenter  = new Presenter(display)
const expressionUpdater = new ExpressionUpdater(expression, presenter)
const calculator = new Calculator(expression, presenter)
const expressionUpdaterController = new ExpressionUpdaterController(expressionUpdater)
const calculatorController = new CalculatorController(calculator)
const keypad = new Keypad(expressionUpdaterController, calculatorController)

const gui = new Gui(keypad, display)

gui.showGui()
