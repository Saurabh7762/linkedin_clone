export const initState = {
  articles: [],
  loading: false,
  commentInputVisibility: [],
};


const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ARTICLES":
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
    case "SET_LOADING_STATUS":
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

    //comment
    case "ADD_COMMENT":
      const { articleIndexc, comment } = action.payload;
      const updatedArticles = [...state.articles];
      const existingComments = updatedArticles[articleIndexc].comments;

      // Check if the comment already exists before adding
      if (
        !existingComments.some(
          (existingComment) => existingComment.text === comment.text
        )
      ) {
        updatedArticles[articleIndexc].comments.push(comment);
      }

      return {
        ...state,
        articles: updatedArticles,
      };
    
    default:
      return state;
  }
};

export default articleReducer;
