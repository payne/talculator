/**
 * An expression is made up of one or more numbers and zero or more operators.
 * Each number or operator is followed by a space.
 **/

class Expression {
  private value: string = "0"

  setValue (newValue: string) {
    this.value = newValue
  }

  getValue () {
    return this.value
  }

  getLength () {
    return this.value.length
  }

  getLastValue () {
    return this.value[-1]
  }

  isZero () {
    return this.value === "0"
  }

  isNumber () {
    let num = parseFloat(this.value)
    return typeof num === "number"
  }

  getFirstToPenultimateValue () {
    return this.value.substr(0, this.getLength() - 1)
  }
  
  getLastNumber () {
    let components = this.value.split(" ")
    let l = components.length - 1
    
    while (l >= 0) {
      let num = parseFloat(components[l])
      if(!isNaN(num)) {
        return components[l]
      } else {
        l -= 1
      }
    }
    return
  }
}

export default Expression