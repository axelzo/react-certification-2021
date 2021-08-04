import { useState, useEffect } from 'react';

// const API_URL =
//   'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json';

function useFetchVideos(search) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(`${API_URL}`);
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?${new URLSearchParams(
          {
            key: `${process.env.REACT_APP_API_KEY}`,
            part: 'id,snippet',
            q: search,
            maxResults: 25,
          },
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )}`
      );

      const responseData = await response.json();
      setData(responseData);
      console.log('hook');
      console.log(search);
      console.log(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return { data };
}

export { useFetchVideos };
