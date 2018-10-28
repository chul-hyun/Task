import * as React from 'react';
import TaskInput from './TaskInput';
import * as className from './index.scss';
import L from '../../../../Layout';
import HeaderLine from './HeaderLine';

const defaultProps = {
  color: '#99EA8E',
};

interface Props extends Unpacked<typeof defaultProps> {
  title: string;
  taskNum: number;
}

export interface State {}

export default class TaskHeader extends React.PureComponent<Props, State> {
  static defaultProps = defaultProps;

  public render() {
    const { title, taskNum, color } = this.props;

    return (
      <L.Col className={className.root}>
        <L.Row height="58px">
          <L.VerticalCenter
            flexGrow={1}
            paddingLeft={21}
            className={className.title}>
            {title}
          </L.VerticalCenter>
          <L.Center width="61px" className={className.taskNum}>
            {taskNum}
          </L.Center>
        </L.Row>
        <L.Box height="1px">
          <HeaderLine color={color} />
        </L.Box>
        <L.HorizontalCenter height="87px" padding="19px 15px">
          {/* <TaskInput color={color} /> */}
        </L.HorizontalCenter>
      </L.Col>
    );
  }
}
