import { Heart } from "lucide-react";
import ProductCard from "./ProductCard";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, dispatch: wishlistDispatch } = useWishlist();
  const { cart, dispatch: cartDispatch } = useCart();

  const handleClearWishlist = () => {
    wishlistDispatch({
      type: "CLEAR_WISHLIST",
    });

    toast("Saved Items Cleared", {
      icon: "🗑️",
    });
  };

  const handleRemove = (id) => {
    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: id,
    });

    toast("Removed from Saved Items", {
      icon: "💔",
    });
  };

  const handleMoveToCart = (item) => {
    const alreadyInCart = cart.some((cartItem) => cartItem.id === item.id);

    cartDispatch({
      type: "ADD_TO_CART",
      payload: item,
    });

    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: item.id,
    });

    if (alreadyInCart) {
      toast("Cart Updated", {
        icon: "🛒",
      });
    } else {
      toast.success("Moved to Cart");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Saved Items</h1>

        <p className="text-gray-500 mt-2">Products you've saved for later.</p>
      </div>

      {wishlist.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{wishlist.length} items saved</p>

            {wishlist.length > 0 && (
              <button
                onClick={handleClearWishlist}
                className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                {...product}
                showDiscount={true}
                buttonText="Move to Cart"
                onButtonClick={() => handleMoveToCart(product)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-24">
          <Heart size={80} className="text-gray-300" />

          <h2 className="text-2xl font-semibold mt-6">
            No saved items found :(
          </h2>

          <p className="text-gray-500 mt-2 text-center">
            Save products you love and they'll appear here.
          </p>

          <Link to="/products">
          <button 
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Explore Products
          </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Wishlist;
