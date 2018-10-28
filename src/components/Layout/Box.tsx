import * as React from 'react';
import { SizeProp, cloneElements, Elements, sizeToStyle } from './util';

const isDev = process.env.NODE_ENV === 'development';

type BoxStyleKey =
  | 'flexGrow'
  | 'width'
  | 'height'
  | 'padding'
  | 'justifyContent'
  | 'alignItems'
  | 'flexDirection'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingTop';
type BoxStyleProps = Pick<React.CSSProperties, BoxStyleKey>;
type NonBoxStyleProps = Omit<React.CSSProperties, BoxStyleKey>;

export type Props = {
  children?: Elements;
  size?: SizeProp;
  className?: string;
  style?: NonBoxStyleProps;
} & BoxStyleProps;

export interface State {}

const fillStyle: React.CSSProperties = {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
};

const Empty = (
  <div
    style={{
      background: `repeating-linear-gradient(
        45deg,
        #606dbc,
        #606dbc 10px,
        #465298 10px,
        #465298 20px
      )`,
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
    }}>
    Empty
  </div>
);

const renderChildren = (children?: Elements) =>
  cloneElements({
    elements: children,
    getProps: childProps => ({
      ...childProps,
      style: {
        ...fillStyle,
        ...childProps.style,
      },
    }),
  });

export default class Box extends React.PureComponent<Props, State> {
  render() {
    const { children, className, style, size, ...boxStyle } = this.props;

    const sizeStyle = sizeToStyle(size);

    const wrapperStyle = {
      ...fillStyle,
      ...style,
      ...sizeStyle,
      ...boxStyle,
    };

    return (
      <div style={wrapperStyle} className={className}>
        {children === undefined && isDev
          ? renderChildren(Empty)
          : renderChildren(children)}
      </div>
    );
  }
}
