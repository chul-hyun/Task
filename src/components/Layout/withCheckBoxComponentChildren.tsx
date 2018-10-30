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
      children !== null ||
      children !== undefined ||
      'isBoxComponent' in children === false
    ) {
      console.error(
        'Col, Row 의 자식은 BoxComponent | BoxComponent[] 타입이여야 합니다.',
      );
    }
  });
};

const withCheckBoxComponentChildren = <OrgProps, DefaultProps = {} | undefined>(
  defaultProps?: DefaultProps,
) => (WrappedComponent: React.ComponentType<OrgProps>) =>
  class extends React.PureComponent<OrgProps> {
    static defaultProps?: DefaultProps = defaultProps;

    render() {
      if (isDev) {
        checkChildrenType(this.props);
      }

      return <WrappedComponent {...this.props} />;
    }
  };

export default withCheckBoxComponentChildren;
