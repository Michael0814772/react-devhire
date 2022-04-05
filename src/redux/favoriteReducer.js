const initialData = {
  favorites: [],
};

function favoriteReducer(state = initialData, action) {
  switch (action.type) {
    case "ADD_FAV":
      let fav = action.payload;
      let itemFromFavorite = state.favorites.find(
        (favItem) => fav.id === favItem.id
      );
      return {
        ...state,
        favorites: itemFromFavorite
          ? [...state.favorites.filter((fav) => fav.id !== itemFromFavorite.id)]
          : [...state.favorites, action.payload],
      };

    case "DELETE_FAV":
      return {
        ...state,
        favorites: state.favorites.filter((task) => task !== action.payload),
      };

    default:
      return state;
  }
}

export default favoriteReducer;
