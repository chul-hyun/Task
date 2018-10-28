import * as React from 'react';
import { SizeProp, cloneElements, Elements, sizeToStyle } from './util';

type BoxStyleKey =
  | 'flexGrow'
  | 'width'
  | 'height'
  | 'padding'
  | 'justifyContent'
  | 'alignItems'
  | 'flexDirection';
type BoxStyleProps = Pick<React.CSSProperties, BoxStyleKey>;
type NonBoxStyleProps = Omit<React.CSSProperties, BoxStyleKey>;

export type Props = {
  children?: Elements | string;
  size?: SizeProp;
  className?: string;
  style?: NonBoxStyleProps;
} & BoxStyleProps;

export interface State {}

const commonStyle: React.CSSProperties = {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
};

export default class Box extends React.PureComponent<Props, State> {
  render() {
    const { children, className, style, size, ...boxStyle } = this.props;

    const sizeStyle = sizeToStyle(size);

    return (
      <div
        style={{
          ...commonStyle,
          ...style,
          ...sizeStyle,
          ...boxStyle,
        }}
        className={className}>
        {cloneElements({
          elements: children,
          getProps: childProps => ({
            style: {
              ...commonStyle,
              ...childProps.style,
            },
            ...childProps,
          }),
        })}
      </div>
    );
  }
}
