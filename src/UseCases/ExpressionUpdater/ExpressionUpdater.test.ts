import test from "tape"
import Expression from "../../Entities/Expression"
import ExpressionUpdater from "./ExpressionUpdater"

const expression = new Expression()
const expressionUpdater = new ExpressionUpdater(expression, {
  displayValue (value: string) {
    console.log(value)
  }
})

// isNumber tests

test("isNumber should return whether the expression is a number or not", (t) => {  
  t.true(expressionUpdater.isNumber("22"), "22 is a number")
  
  t.false(expressionUpdater.isNumber("26 - 3"), "26 - 3 is not a number")

  t.true(expressionUpdater.isNumber("0.2"), "0.2 is a number")

  t.true(expressionUpdater.isNumber(".2"), ".2 is a number")

  t.false(expressionUpdater.isNumber("0.2 + .34 - "), "0.2 + .34 - is not a number")

  t.false(expressionUpdater.isNumber(" + "), "+ is not a number")

  t.false(expressionUpdater.isNumber("_"))
  
  t.end()
})


// getLastNumber tests

test("getLastNumber should return the last number from the expression", (t) => {
  t.equal(expressionUpdater.getLastNumber("22 + 33 - "), "33")

  t.equal(expressionUpdater.getLastNumber("22 + 33"), "33")

  t.equal(expressionUpdater.getLastNumber("22 + .33"), ".33")

  t.equal(expressionUpdater.getLastNumber("0.03 - "), "0.03")

  t.end()
})

// getLastValue tests 

test("getLastValue should return the last value from the expression", (t) => {
  t.equal(expressionUpdater.getLastValue("234 - "), "-")

  t.equal(expressionUpdater.getLastValue("234 * 556"), "556")

  t.end()
})

// getFirstToPenultimateValue tests 

test("getFirstToPenultimateValue should return everything but the last value from the"+ 
  " expression", (t) => {
  t.equal(expressionUpdater.getFirstToPenultimateValue("234"), "23")
  
  t.equal(expressionUpdater.getFirstToPenultimateValue("234 + "), "234")

  t.end()
})

// isLastValueOperator tests 

test("isLastValueOperator should return if the last value of the expression"
+ " is an operator", (t) => {
  t.true(expressionUpdater.isLastValueOperator("234 + 33 -"))

  t.false(expressionUpdater.isLastValueOperator("234 - 467"))

  t.false(expressionUpdater.isLastValueOperator("0"))

  t.end()
})