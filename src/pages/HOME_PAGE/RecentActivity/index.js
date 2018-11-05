import React from 'react';
import {
  Card,
} from 'semantic-ui-react';
import {
  Header,
  List,
  Footer,
} from './components';

const RecentActivity = ({ data }) => {
  return (
    <Card>
      <Card.Content>
        <Header title="Recent Activity" />
      </Card.Content>
      <Card.Content>
        <List data={data} />
      </Card.Content>
      <Card.Content extra>
        <Footer />
      </Card.Content>
    </Card>
  );
};

export default RecentActivity;