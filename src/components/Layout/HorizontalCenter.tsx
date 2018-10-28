import * as React from 'react';
import Box, { Props as BoxProps } from './Box';

export type Props = Omit<BoxProps, 'justifyContent'>;

export interface State {}

const HorizontalCenter = (props: Props) => (
  <Box justifyContent="center" {...props} />
);

export default HorizontalCenter;
