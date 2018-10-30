import * as React from 'react';
import Box, { Props as BoxProps } from './Box';
import withIsBoxComponent from './withIsBoxComponent';

export type Props = Omit<BoxProps, 'justifyContent'>;

export interface State {}

class HorizontalCenter extends React.PureComponent<Props, State> {
  render() {
    return <Box justifyContent="center" {...this.props} />;
  }
}

export default withIsBoxComponent<Props>()(HorizontalCenter);
