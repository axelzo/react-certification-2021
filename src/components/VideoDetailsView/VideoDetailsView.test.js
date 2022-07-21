import React from 'react';
import { render, screen } from '@testing-library/react';

import { ConfigProvider } from '../../context/State/state';

import VideoDetailsView from './index';

beforeEach(() => {
  const valueContextMock = {
    profile: {
      showDropdown: false,
    },
    video: {
      search: 'wizeline',
      selectedVideo: {
        kind: 'youtube#searchResult',
        etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
        id: {
          kind: 'youtube#video',
          videoId: 'nmXMgqjQzls',
        },
        snippet: {
          publishedAt: '2019-09-30T23:54:32Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Video Tour | Welcome to Wizeline Guadalajara',
          description:
            'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'none',
          publishTime: '2019-09-30T23:54:32Z',
        },
      },
      videos: {
        items: [
          {
            kind: 'youtube#searchResult',
            etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
            id: {
              kind: 'youtube#video',
              videoId: 'nmXMgqjQzls',
            },
            snippet: {
              publishedAt: '2019-09-30T23:54:32Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Video Title',
              description:
                'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-09-30T23:54:32Z',
            },
          },
        ],
      },
    },
    darkMode: false,
  };

  render(
    <ConfigProvider value={valueContextMock}>
      <VideoDetailsView />
    </ConfigProvider>
  );
});

describe('VideoDetails', () => {
  test('should contains Title', () => {
    const titleTag = screen.getByText(/Video Tour/i);
    expect(titleTag).toBeInTheDocument();
  });

  test('should render description', () => {
    const pTag = screen.getByText(/Wizeline Director of Engineering/i);
    expect(pTag).toBeInTheDocument();
  });
});
