import * as React from 'react';

export type SizeProp = string | number | undefined;

export const sizeToStyle = (size: SizeProp): React.CSSProperties => {
  if (size === undefined) {
    return {};
  }
  if (typeof size === 'string') {
    const [width, height] = size.split(' ');
    return { width, height: height === undefined ? width : height };
  }
  return {
    flexGrow: size,
  };
};

export type Elements = React.ReactElement<any> | React.ReactElement<any>[];

export const cloneElements = (
  children?: Elements,
  getProps = (child: any): object => ({}),
): Elements => {
  if (children === undefined) {
    return [];
  }
  if (Array.isArray(children)) {
    return children.map(child =>
      React.cloneElement(child, getProps(child.props)),
    );
  }

  return React.cloneElement(children, getProps(children.props));
};
