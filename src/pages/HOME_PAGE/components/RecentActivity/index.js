import React, { PureComponent } from 'react';
import {
  Card,
} from 'semantic-ui-react';
import Header from './Header';
import List from './List';
import Footer from './Footer';

class RecentActivity extends PureComponent {
  componentDidMount() {
    const { gerRecentActivity } = this.props;
    gerRecentActivity();
  }

  render() {
    const { data } = this.props;

    if (!data) return null;

    return (
        <Card>
        <Card.Content>
          <Header title="Recent Activity" />
        </Card.Content>
        <Card.Content>
          <List data={data.activity} />
        </Card.Content>
        <Card.Content extra>
          <Footer />
        </Card.Content>
      </Card>
    );
  }
};

export default RecentActivity;