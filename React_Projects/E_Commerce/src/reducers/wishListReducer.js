export const wishlistReducer = (state, action) => {
  console.log("Reducer called:", action.type);
  console.log("Current state:", state);

  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const exists = state.find((item) => item.id === action.payload.id);

      if (exists) {
        return state;
      }

      return [...state, action.payload];
    }

    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
