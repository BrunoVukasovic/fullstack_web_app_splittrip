const initState = {
  isAuthenticated: false,
  user: {}
};

const isLoggedReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    default:
      return {
        ...state
      };
  }
};

export default isLoggedReducer;
