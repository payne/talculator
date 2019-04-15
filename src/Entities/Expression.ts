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
    let components = this.value.split(" ")
    let l = components.length - 1

    // make sure that the last child is not an empty string
    while(l >= 0) {
    if (!components[l]) {
        l -= 1
      } else {
        break
      }
    }

    return components[l]
  }

  isZero () {
    return this.value === "0"
  }

  isNumber () {
    let value = this.value

    if(!value) return false

    return (value.match(/\D/) === null)
  }

  getFirstToPenultimateValue () {
    let value = this.value
    let components = value.split("")
    let l = components.length - 1

    if(l === 0) return "0"    
    /**
     *  an operator is preceded and followed by a space
     *  remove the spaces and return the valid expression
     **/
    if(components[l] === " ") l = l - 2

    return value.substr(0, l)
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