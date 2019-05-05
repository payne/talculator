// tslint:disable-next-line: max-line-length
type valueType = 'digit' | 'operator' | 'decimal' | 'clearLastValue' | 'clearExpression'
export interface IExpressionUpdaterDTO {
  value: string,
  valueType: valueType
}

interface IExpressionUpdaterRequest {
  updateExpression (value: any): void
}

export default IExpressionUpdaterRequest
