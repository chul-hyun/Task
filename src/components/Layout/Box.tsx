import * as React from 'react';
import Empty from './Empty';
import { SizeProp, cloneElements, Elements, sizeToStyle, isDev } from './util';

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
  isColItem: boolean;
  isRowItem: boolean;
} & BoxStyleProps;

export interface State {}

const fillStyle: React.CSSProperties = {
  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
};

export default class Box extends React.PureComponent<Props, State> {
  static defaultProps = {
    isColItem: false,
    isRowItem: false,
  };

  get isRow() {
    const { flexDirection } = this.props;
    return flexDirection === 'row' || flexDirection === 'row-reverse';
  }

  get isCol() {
    return !this.isRow;
  }

  get flexGrow() {
    const { flexGrow, isRowItem, isColItem, width, height } = this.props;
    const isFlexGrow = flexGrow !== undefined;

    if (isFlexGrow) {
      return flexGrow;
    }

    const isHeight = height !== undefined;
    const isWidth = width !== undefined;

    if ((isColItem && isHeight === false) || (isRowItem && isWidth === false)) {
      return 1;
    }

    return undefined;
  }

  get wrapperStyle(): React.CSSProperties {
    const {
      children,
      className,
      style,
      size,
      isColItem,
      isRowItem,
      ...boxStyle
    } = this.props;

    return {
      ...fillStyle,
      height: isColItem ? '' : '100%',
      width: isRowItem ? '' : '100%',
      flexGrow: this.flexGrow,
      ...style,
      ...sizeToStyle(size),
      ...boxStyle,
    };
  }

  get childStyle(): React.CSSProperties {
    return {
      ...fillStyle,
      height: this.isCol ? '' : '100%',
      width: this.isRow ? '' : '100%',
    };
  }

  get childProps() {
    return {
      isColItem: this.isCol,
      isRowItem: this.isRow,
    };
  }

  renderChildren = (children?: Elements) =>
    cloneElements({
      elements: children,
      getProps: childProps => ({
        ...childProps,
        ...this.childProps,
        style: {
          ...this.childStyle,
          ...childProps.style,
        },
      }),
    });

  render() {
    const { children, className } = this.props;

    return (
      <div style={this.wrapperStyle} className={className}>
        {children === undefined && isDev
          ? this.renderChildren(Empty)
          : this.renderChildren(children)}
      </div>
    );
  }
}
