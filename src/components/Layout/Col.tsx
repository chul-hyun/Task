import * as React from 'react';
import Box, { Props as BoxProps } from './Box';
import withIsBoxComponent from './withIsBoxComponent';
import withCheckBoxComponentChildren from './withCheckBoxComponentChildren';

export type Props = Omit<BoxProps, 'flexDirection'>;

export interface State {}

class Col extends React.PureComponent<Props, State> {
  render() {
    return <Box flexDirection="column" {...this.props} />;
  }
}

export default withIsBoxComponent<Props>()(Col);
