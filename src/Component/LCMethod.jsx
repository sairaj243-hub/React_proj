import React from 'react';

class LCMethod extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor Method Called');
    this.state = { count: 0 };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps Method Called');
    // console.log(nextProps);
    // console.log(nextState);
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate Method Called');
    return nextState.count % 2 === 0; // Only re-render if count is even
  }

  componentDidMount() {
    console.log('componentDidMount Method Called');
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log('render Method Called');
    return (
      <div>
        <p>This is Life Cycle Methods</p>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LCMethod;