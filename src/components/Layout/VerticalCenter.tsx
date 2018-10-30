import * as React from 'react';
import Box, { Props as BoxProps } from './Box';
import withIsBoxComponent from './withIsBoxComponent';

export type Props = Omit<BoxProps, 'alignItems'>;

export interface State {}

class VerticalCenter extends React.PureComponent<Props, State> {
  render() {
    return <Box alignItems="center" {...this.props} />;
  }
}

export default withIsBoxComponent<Props>()(VerticalCenter);
