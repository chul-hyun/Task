import * as React from 'react';
import { Plus } from 'react-feather';
import * as className from './index.scss';
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
      <div
        className={className.root}
        style={{ boxShadow: `0px 0px 6px ${color}` }}>
        <input
          className={className.textInput}
          type="text"
          placeholder="Add Task"
        />
        <div className={className.iconWrapper}>
          <Plus className={className.icon} />
        </div>
      </div>
    );
  }
}
