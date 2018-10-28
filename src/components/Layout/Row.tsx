import * as React from 'react';
import Box, { Props as BoxProps } from './Box';

export type Props = Omit<
  JSX.LibraryManagedAttributes<typeof Box, BoxProps>,
  'flexDirection'
>;

export interface State {}

const Row = (props: Props) => <Box flexDirection="row" {...props} />;

export default Row;
