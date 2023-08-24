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

/*export const initState = {
  articles: [],
  loading: false,
  commentInputVisibility: [],
};
*/
const articleReducer = (state = initState, action) => {
  switch (action.type) {
    // articles case
    /*// articles case
    case GET_ARTICLES:
      // so it return the article existing state along with payloads
      return {
        ...state,
        articles: action.payload,
        ids: action.id,
      };*/
    case GET_ARTICLES:
      const articleCount = action.payload.length;
      const initialCommentVisibility = new Array(articleCount).fill(false);
      // so it return the article existing state along with payloads

      return {
        ...state,
        articles: action.payload,
        ids: action.id,
        commentInputVisibility: initialCommentVisibility,
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
    case "SET_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };

    //comment
    /*case "ADD_COMMENT":
      const { articleIndexc, comment } = action.payload;
      const updatedArticles = [...state.articles];
      updatedArticles[articleIndexc].comments.push(comment);

      return {
        ...state,
        articles: updatedArticles,
      };*/
    case "ADD_COMMENT":
      const { articleIndexc, comment } = action.payload;
      return {
        ...state,
        articles: state.articles.map((article, index) => {
          if (index === articleIndexc) {
            return {
              ...article,
              comments: [...article.comments, comment],
            };
          }
          return article;
        }),
      };

    default:
      return state;
  }
};

export default articleReducer;
