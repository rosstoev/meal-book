import { createContext, useState } from "react";

export const FavoriteMealsContext = createContext({
  ids: [],
  addFavoriteMealId: (mealId) => {},
  removeFavoriteMealId: (mealId) => {},
});

function FavoriteMealsContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavoriteMealId(id) {
    setFavoriteMealIds((currentFavoriteMealsId) => [
      ...currentFavoriteMealsId,
      id,
    ]);
  }

  function removeFavoriteMealId(id) {
    setFavoriteMealIds((currentFavoriteMealsId) =>
      currentFavoriteMealsId.filter((favoriteId) => favoriteId != id)
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavoriteMealId: addFavoriteMealId,
    removeFavoriteMealId: removeFavoriteMealId
  }

  return (
    <FavoriteMealsContext.Provider value={value}>
      {children}
    </FavoriteMealsContext.Provider>
  );
}

export default FavoriteMealsContextProvider;
