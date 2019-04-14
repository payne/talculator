import test from "tape"
import Expression from "./Expression"

const expression = new Expression()

test('Expression getLastNumber tests', (t) => {

  expression.setValue("22 + 33 - ")
  t.equal(expression.getLastNumber(), "33")

  expression.setValue("22 + 33")
  t.equal(expression.getLastNumber(), "33")

  expression.setValue("22 * 3 + - /")
  t.equal(expression.getLastNumber(), "3")

  expression.setValue("+")
  t.equal(expression.getLastNumber(), undefined)

  t.end()
})
