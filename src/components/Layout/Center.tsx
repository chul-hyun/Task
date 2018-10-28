import * as React from 'react';
import Box, { Props as BoxProps } from './Box';

export type Props = Omit<BoxProps, 'alignItems' | 'justifyContent'>;

export interface State {}

const Center = (props: Props) => (
  <Box alignItems="center" justifyContent="center" {...props} />
);

export default Center;
