const initState = {
  loggedIn: false,
  user: {}
};

const isLoggedReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loggedIn: true
        // user: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

export default isLoggedReducer;
