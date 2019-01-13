import * as React from 'react'

export interface MatrixProps {
  // 数据源
  dataSources: any[];
  // 每行长度
  length: number;
  // 子元素
  children?: React.ReactNode;
  // 间隔
  gutter?: number
}