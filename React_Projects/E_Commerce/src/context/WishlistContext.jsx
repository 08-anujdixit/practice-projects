import {
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { wishlistReducer } from "../reducers/wishListReducer";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(
    wishlistReducer,
    [],
    () => {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};