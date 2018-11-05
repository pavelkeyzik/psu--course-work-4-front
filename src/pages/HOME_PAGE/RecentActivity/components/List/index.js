import React from 'react';
import {
  Feed,
} from 'semantic-ui-react';

export default ({ data }) => (
  <Feed>
    {data.map((item) => (
      <Feed.Event key={item.id}>
        <Feed.Label image={item.image} />
        <Feed.Content>
          <Feed.Date content={item.date} />
          <Feed.Summary>{item.summary}</Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    ))}
  </Feed>
);
