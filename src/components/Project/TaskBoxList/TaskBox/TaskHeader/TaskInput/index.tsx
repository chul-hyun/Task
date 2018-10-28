import * as React from 'react';
import { Plus } from 'react-feather';
import * as className from './index.scss';
import L from '../../../../../Layout';

// TODO Helvetica Neue 폰트 적용하기

interface Props {
  color: string;
}

export default class InputTask extends React.PureComponent<Props> {
  static readonly defaultProps = {
    color: '#99EA8E',
  };

  render() {
    const { color } = this.props;

    return (
      <L.Row
        className={className.root}
        style={{ boxShadow: `0px 0px 6px ${color}` }}>
        <L.Box>
          <input
            className={className.textInput}
            type="text"
            placeholder="Add Task"
          />
        </L.Box>
        <L.Center width="50px">
          <L.Box size="24px">
            <Plus className={className.icon} />
          </L.Box>
        </L.Center>
      </L.Row>
    );
  }
}
