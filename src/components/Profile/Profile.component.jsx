/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { StateContext } from '../../context/State/state';
import { useAuth } from '../../providers/Auth';

import './Profile.styles.css';

const Container = styled.div`
  padding: 10px 24px 10px 10px;
  color: ${(props) => (props.mode ? '#ccc' : '#303030')};
  margin-left: ${(props) => (props.authenticated ? 'auto' : '10px')};
`;

const Dropdown = styled.div`
  position: absolute;
  right: 10px;
  border: 3px solid ${(props) => (props.mode ? '#ffffff' : '#303030')};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.mode ? '#303030' : '#ffffff')};
  color: ${(props) => (props.mode ? '#ccc' : '#303030')};
`;

const Profile = () => {
  const { authenticated, logout } = useAuth();
  const history = useHistory();
  const stateContext = useContext(StateContext);
  const { hideProfileDropdown, showProfileDropdown, darkMode } = stateContext;

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  return (
    <Container
      authenticated
      onMouseDown={showProfileDropdown}
      onMouseLeave={hideProfileDropdown}
    >
      {authenticated ? (
        <img
          src="data:image/jpeg;base64,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"
          alt="Profile"
          className="profile"
        />
      ) : (
        <img
          src="https://i1.sndcdn.com/avatars-fuFi52Szkbdm16Gg-arzAGQ-t500x500.jpg"
          alt="Profile"
          className="profile"
        />
      )}
      <div>
        {!stateContext.profile.showDropdown ? (
          <div />
        ) : (
          <Dropdown mode={darkMode}>
            {authenticated ? (
              <span className="sign-out" onClick={deAuthenticate}>
                Sign Out
              </span>
            ) : (
              <span data-testid="sign-in" onClick={() => history.push('/login')}>
                Sign In
              </span>
            )}
          </Dropdown>
        )}
      </div>
    </Container>
  );
};

export default Profile;
