/* eslint-disable no-multi-assign */
import reducer from './reducer';

const initialStateMock = {
  profile: {
    showDropdown: false,
  },
  video: {
    search: 'wizeline',
    selectedVideo: {},
    videos: [],
  },
  darkMode: false,
};

it('should dispatch new state with action TOGGLE_DARK_MODE', () => {
  const updateAction = { type: 'TOGGLE_DARK_MODE', payload: true };
  const updatedState = reducer(initialStateMock, updateAction);
  expect(updatedState.darkMode).toEqual(true);
});

it('should dispatch new state with action SELECT_VIDEO', () => {
  const updateAction = { type: 'SELECT_VIDEO', payload: { data: 'test' } };
  const updatedState = reducer(initialStateMock, updateAction);
  expect(updatedState.video.selectedVideo).toEqual({ data: 'test' });
});

it('should dispatch action TYPE_INPUT', () => {
  const updateAction = { type: 'TYPE_INPUT', payload: 'test' };
  const updatedState = reducer(initialStateMock, updateAction);
  expect(updatedState.video.search).toEqual('test');
});

it('should dispatch new state with action HOVER_PROFILE', () => {
  const updateAction = { type: 'HOVER_PROFILE', payload: true };
  const updatedState = reducer(initialStateMock, updateAction);

  expect(updatedState.profile.showDropdown).toEqual(true);
});

it('should dispatch new state with action BLUR_PROFILE', () => {
  const updateAction = { type: 'BLUR_PROFILE', payload: true };
  const updatedState = reducer(initialStateMock, updateAction);

  expect(updatedState.profile.showDropdown).toEqual(true);
});

it('should dispatch new state with action DEFAULT', () => {
  const updateAction = { type: 'DEFAULT' };
  const updatedState = reducer(initialStateMock, updateAction);

  expect(updatedState).toEqual(initialStateMock);
});
