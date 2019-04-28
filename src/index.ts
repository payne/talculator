// infrastructure layer
import Gui from './infrastructure/CalculatorUI'
import Display from './infrastructure/Display'
import Keypad from './infrastructure/Keypad'

// boundary layer
import CalculatorController from './Boundaries/Calculator/CalculatorController'
import ExpressionUpdaterController from './Boundaries/ExpressionUpdater/ExpressionUpdaterController'
import Presenter from './Boundaries/Presenter'

// use-case layer
import Calculator from './UseCases/Calculator/Calculator'
import ExpressionUpdater from './UseCases/ExpressionUpdater/ExpressionUpdater'

// entity layer
import Expression from './Entities/Expression'

const expression = new Expression()
const display = new Display()
const presenter  = new Presenter(display)
const expressionUpdater = new ExpressionUpdater(expression, presenter)
const calculator = new Calculator(expression, presenter)
const expressionUpdaterController = new ExpressionUpdaterController(expressionUpdater)
const calculatorController = new CalculatorController(calculator)
const keypad = new Keypad(expressionUpdaterController, calculatorController)

const gui = new Gui(keypad, display)

gui.showGui()
