import { Heart, Star, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import toast from "react-hot-toast";

function ProductCard({
  product,
  image,
  title,
  price,
  rating,

  discountPercentage,

  showDiscount = false,
  showWishlist = true,
  showCartButton = true,
  showOriginalPrice = true,

  buttonText = "Add to Cart",

  onWishlist,
  onButtonClick,
}) {
  const { cart, dispatch } = useCart();
  const { wishlist, dispatch: wishlistDispatch } = useWishlist();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const originalPrice =
    discountPercentage && showDiscount
      ? Math.round(price / (1 - discountPercentage / 100))
      : price;

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isWishlisted) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product.id,
      });

      toast("Removed From Saved Items", {
        icon: "💔",
      });
    } else {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: {
          id: product.id,
          title: product.title,
          image: product.thumbnail,
          price: product.price,
          rating: product.rating,
        },
      });

      toast.success("Added To Saved Items");
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const alreadyInCart = cart.some((item) => item.id === product.id);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        rating: product.rating,
      },
    });

    if (alreadyInCart) {
      toast("Cart Updated", {
        icon: "🛒",
      });
    } else {
      toast.success(`Added to cart!`);
    }
  };

  return (
    <div
      // onClick={navigate}
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
        />
        {showDiscount && discountPercentage && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            -{Math.round(discountPercentage)}%
          </span>
        )}

        {showWishlist && (
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 active:scale-95 transition"
          >
            <Heart
              size={18}
              className={`transition-colors duration-200 ${
                isWishlisted
                  ? "fill-red-500 text-red-500"
                  : "text-gray-700 hover:text-red-500"
              }`}
            />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star size={16} fill="currentColor" />
          <span className="text-sm text-gray-600">{rating}</span>
        </div>

        {/* Price */}
<div className="flex items-center gap-2 mt-3">
  <span className="text-xl font-bold text-green-600">
    ${price}
  </span>

  {showDiscount && showOriginalPrice && (
    <span className="text-gray-400 line-through">
      ${originalPrice}
    </span>
  )}
</div>

        {/* Action Button */}
        {showCartButton && (
          <button
            onClick={onButtonClick || handleAddToCart}
            className="w-full mt-4 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            <ShoppingCart size={18} />
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
