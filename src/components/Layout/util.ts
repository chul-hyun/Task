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

type Element = React.ReactElement<any> | React.ReactText;

export type Elements = Element | Element[];

export const isReactText = (target: Element): target is React.ReactText =>
  typeof target === 'string' || typeof target === 'number';

// (elements: Elements),
// (getProps = (props: any): object => ({})),
// (renderReactText = (element: React.ReactText): Element => element),

type cloneElementsArg = {
  elements?: Elements;
  getProps?: (props: any) => object;
  renderReactText?: (element: React.ReactText) => Element;
};
export const cloneElements = ({
  elements = [],
  getProps = () => ({}),
  renderReactText = element => element,
}: cloneElementsArg): Elements => {
  if (Array.isArray(elements)) {
    return elements.map(
      element =>
        isReactText(element)
          ? renderReactText(element)
          : React.cloneElement(element, getProps(element.props)),
    );
  }

  if (isReactText(elements)) {
    return renderReactText(elements);
  }

  return React.cloneElement(elements, getProps(elements.props));
};
