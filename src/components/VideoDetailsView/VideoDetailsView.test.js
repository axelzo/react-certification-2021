import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoDetailsView from './index';

const dataItemMock = {
  kind: 'youtube#searchResult',
  etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
  id: {
    kind: 'youtube#video',
    videoId: 'nmXMgqjQzls',
  },
  snippet: {
    publishedAt: '2019-09-30T23:54:32Z',
    channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
    title: 'test',
    description: 'Wizeline Director of Engineering',
    thumbnails: {
      default: {
        url: 'http://localhost/src',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'http://localhost/src',
        width: 320,
        height: 180,
      },
      high: {
        url: 'http://localhost/src',
        width: 480,
        height: 360,
      },
    },
    channelTitle: 'Wizeline',
    liveBroadcastContent: 'none',
    publishTime: '2019-09-30T23:54:32Z',
  },
};

beforeEach(() => {
  render(<VideoDetailsView dataItem={dataItemMock} search="wizeline" />);
});

describe('VideoDetails', () => {
  test('should contains Title', () => {
    const titleTag = screen.getByText(/test/i);
    expect(titleTag).toBeInTheDocument();
  });

  test('should render description', () => {
    const pTag = screen.getByText(/Wizeline Director of Engineering/i);
    expect(pTag).toBeInTheDocument();
  });
});
