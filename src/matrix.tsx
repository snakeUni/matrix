import * as React from 'react'
import { MatrixProps } from './interface'
import './index.css'

export default class Matrix extends React.Component<MatrixProps, any> {
  static defaultProps: MatrixProps = {
    length: 4,
    dataSources: []
  }

  getSourcesData = () => {
    const { dataSources, length } = this.props;
    let matrix = [];
    const row = Math.ceil(dataSources.length / length);
    for (let i = 0; i < row; i++) {
      if (i === row - 1) {
        const lastArray = dataSources.slice(i * length);
        if (lastArray.length < length) {
          for (let j = lastArray.length; j < length; j++) {
            lastArray.push({ _type: "blank" });
          }
        }
        matrix.push(lastArray);
      } else {
        matrix.push(dataSources.slice(i * length, (i + 1) * length));
      }
    }
    return matrix;
  };

  render() {
    const { children, gutter } = this.props;
    const sources = this.getSourcesData();
    let style: any = {}
    if (gutter) {
      (style as any).marginLeft = gutter / 2;
      (style as any).marginRight = gutter / 2;
    }
    return (
      <div className="matrix">
        {sources.map((source, i) => {
          return (
            <div className="matrix-row" key={`row-${i}`}>
              {source.map((src: any, j) => {
                if (src._type === "blank") {
                  return (
                    <div
                      className="matrix-row-item item-blank"
                      key={`item-${i}-${j}`}
                      style={style}
                    />
                  );
                } else {
                  return (
                    <div
                      className="matrix-row-item item-item"
                      key={`item-${i}-${j}`}
                      style={style}
                    >
                      {React.cloneElement(children as any, { src })}
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    )
  }
}