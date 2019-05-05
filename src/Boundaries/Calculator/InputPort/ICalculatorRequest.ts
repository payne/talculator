type type = 'equals'
export interface ICalculatorDTO {
  type: type
}
interface ICalculatorRequest {
  evaluateExpression (): void
}

export default ICalculatorRequest
