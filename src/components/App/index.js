import React, { PureComponent } from 'react';
import PreviewPage from '../../pages/PREVIEW_PAGE';

class App extends PureComponent {
  componentDidMount() {
    const { initApplication } = this.props;

    initApplication();
  }

  render() {
    const { app } = this.props;

    if (app.isLoading) return (
      <PreviewPage />
    );

    if (app.error) return (
      <p>{app.error}</p>
    );

    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
};

export default App;
