import * as React from 'react';

export interface Props {}

export interface State {}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  public render() {
    return <div />;
  }
}
