import * as React from 'react';
import Box, { Props as BoxProps } from './Box';

export type Props = Omit<BoxProps, 'flexDirection'>;

export interface State {}

const Row = (props: Props) => <Box flexDirection="row" {...props} />;

export default Row;
