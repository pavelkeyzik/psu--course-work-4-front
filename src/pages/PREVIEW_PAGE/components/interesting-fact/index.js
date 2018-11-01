import React, { PureComponent } from 'react';
import './index.scss';

class InterestingFact extends PureComponent {
  componentDidMount() {
    const { loadFact } = this.props;
    loadFact();
  }

  render() {
    const { fact } = this.props;

    return (
      <div className="fact">
        <div className="fact__text">{fact.value}</div>
      </div>
    );
  }
}

export default InterestingFact;