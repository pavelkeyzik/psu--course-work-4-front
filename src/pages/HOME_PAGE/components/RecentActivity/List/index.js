import React from 'react';
import {
  Feed,
} from 'semantic-ui-react';
import moment from 'moment';
import {
  format,
} from '../../../../../shared';

export default ({ data }) => (
  <Feed>
    {data.map((item) => (
      <Feed.Event key={item.id}>
        <Feed.Label image={item.person.avatar} />
        <Feed.Content>
          <Feed.Date content={moment(item.date).format(format.DATETIME)} />
          <Feed.Summary>{item.description}</Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    ))}
  </Feed>
);
