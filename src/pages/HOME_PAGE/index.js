import React from 'react';
import RecentActivity from './RecentActivity';

const RecentActivityMock = [
  {
    id: 1,
    image: 'https://picsum.photos/60?random',
    date: '2018-11-03T18:31:21Z',
    summary: 'Over speed',
  },
  {
    id: 2,
    image: 'https://picsum.photos/60?random',
    date: '2018-11-04T17:31:21Z',
    summary: 'Ignore pedestrian',
  },
];

export default () => (
  <main>
    <RecentActivity data={RecentActivityMock}/>
  </main>
);