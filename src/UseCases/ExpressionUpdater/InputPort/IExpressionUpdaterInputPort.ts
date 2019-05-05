 // tslint:disable-next-line: max-line-length
type valueType = 'digit' | 'operator' | 'decimal' | 'clearLastValue' | 'clearExpression'
export interface IExpressionUpdaterRequestModel {
  value: string,
  valueType: valueType
}

interface IExpressionUpdaterInputPort {
  updateExpression (inputData: IExpressionUpdaterRequestModel): void
}

export default IExpressionUpdaterInputPort
