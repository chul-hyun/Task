import * as React from 'react';
import Box, { Props as BoxProps } from './Box';
import withIsBoxComponent from './withIsBoxComponent';

export type Props = Omit<BoxProps, 'alignItems' | 'justifyContent'>;

export interface State {}

class Center extends React.PureComponent<Props, State> {
  render() {
    return <Box alignItems="center" justifyContent="center" {...this.props} />;
  }
}

export default withIsBoxComponent<Props>()(Center);
