import * as React from 'react';
import Box, { Props as BoxProps } from './Box';

export type Props = Omit<
  JSX.LibraryManagedAttributes<typeof Box, BoxProps>,
  'alignItems'
>;

export interface State {}

const VerticalCenter = (props: Props) => <Box alignItems="center" {...props} />;

export default VerticalCenter;
