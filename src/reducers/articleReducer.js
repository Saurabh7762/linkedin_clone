import {
  SET_LOADING_STATUS,
  GET_ARTICLES,
  TOGGLE_COMMENT_INPUT,
} from "../actions/actionType";

export const initState = {
  articles: [],
  loading: false,
  commentInputVisibility: [],
};

const articleReducer = (state = initState, action) => {
  switch (action.type) {
    // articles case
    case GET_ARTICLES:
      // so it return the article existing state along with payloads
      return {
        ...state,
        articles: action.payload,
        ids: action.id,
      };
    // loading case
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case "TOGGLE_COMMENT_INPUT":
      const { articleIndex } = action.payload;
      const newVisibility = [...state.commentInputVisibility];
      newVisibility[articleIndex] = !newVisibility[articleIndex];
      return {
        ...state,
        commentInputVisibility: newVisibility,
      };
    default:
      return state;
  }
};

export default articleReducer;
