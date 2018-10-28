import * as React from 'react';
import Box, { Props as BoxProps } from './Box';

export type Props = Omit<BoxProps, 'flexDirection'>;

export interface State {}

const Col = (props: Props) => <Box flexDirection="column" {...props} />;

export default Col;
