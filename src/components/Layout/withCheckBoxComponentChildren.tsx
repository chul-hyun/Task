import * as React from 'react';
import BoxComponent from './BoxComponent';
import { isDev } from './utils';

export const checkChildrenType = (props: {
  children?: React.ReactNode | BoxComponent | BoxComponent[];
}) => {
  const { children } = props;
  const childList = Array.isArray(children) ? children : [children];

  childList.forEach(child => {
    if (
      child !== null ||
      child !== undefined ||
      'isBoxComponent' in child === false
    ) {
      console.error(
        'Col, Row 의 자식은 BoxComponent | BoxComponent[] 타입이여야 합니다.',
        child,
      );
    }
  });
};

const withCheckBoxComponentChildren = <OrgProps, JSXProps = OrgProps>() => (
  WrappedComponent: React.ComponentType<OrgProps>,
) =>
  class extends React.PureComponent<JSXProps> {
    render() {
      if (isDev) {
        checkChildrenType(this.props);
      }

      return <WrappedComponent {...this.props} />;
    }
  };

export default withCheckBoxComponentChildren;
