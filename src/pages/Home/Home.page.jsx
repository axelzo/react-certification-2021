import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import VideoList from '../../components/VideoList';

import './Home.styles.css';

function HomePage({ search }) {
  const { authenticated } = useAuth();
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      {authenticated ? (
        <>
          <VideoList search={search} />
          <span>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link style={{ color: 'black' }} to="/login">
          let me in →
        </Link>
      )}
    </section>
  );
}

export default HomePage;
