import {
  HOVER_PROFILE,
  BLUR_PROFILE,
  TYPE_INPUT,
  LOAD_VIDEOS,
  SELECT_VIDEO,
  TOGGLE_DARK_MODE,
} from '../types';

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case HOVER_PROFILE:
      return {
        ...state,
        profile: {
          showDropdown: payload,
        },
      };

    case BLUR_PROFILE:
      return {
        ...state,
        profile: {
          showDropdown: payload,
        },
      };

    case TYPE_INPUT:
      return {
        ...state,
        video: {
          ...state.video,
          search: payload,
        },
      };

    case LOAD_VIDEOS:
      return {
        ...state,
        video: {
          ...state.video,
          videos: payload,
        },
      };

    case SELECT_VIDEO:
      return {
        ...state,
        video: {
          ...state.video,
          selectedVideo: payload,
        },
      };

    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: payload,
      };

    default:
      return state;
  }
};

export default reducer;
