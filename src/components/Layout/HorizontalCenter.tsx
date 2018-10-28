import * as React from 'react';
import Box, { Props as BoxProps } from './Box';

export type Props = Omit<
  JSX.LibraryManagedAttributes<typeof Box, BoxProps>,
  'justifyContent'
>;

export interface State {}

const HorizontalCenter = (props: Props) => (
  <Box justifyContent="center" {...props} />
);

export default HorizontalCenter;
