export type InputData = {
  value: string,
  type: string
} 

interface IInputPort {
  updateExpression (inputData: InputData): void
}

export default IInputPort