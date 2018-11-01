import React, { PureComponent } from 'react';
import {
  InterestingFact,
} from './containers';
import './index.scss';

class PreviewPage extends PureComponent {
  render() {
    return (
      <div className="preview">
        <InterestingFact
          value="American law enforcement agents only solve around 21% of all reported crime" />
      </div>
    );
  }
}

export default PreviewPage;