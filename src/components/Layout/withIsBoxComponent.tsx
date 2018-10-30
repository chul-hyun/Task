import * as React from 'react';
import BoxComponent from './BoxComponent';

// https://stackoverflow.com/questions/32308370/what-is-the-syntax-for-typescript-arrow-functions-with-generics
const withIsBoxComponent = <OrgProps, JSXProps = OrgProps>() => (
  WrappedComponent: React.ComponentType<OrgProps>,
) =>
  class extends React.Component<JSXProps> implements BoxComponent {
    isBoxComponent: boolean = true;

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withIsBoxComponent;
