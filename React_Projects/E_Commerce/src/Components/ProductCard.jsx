import { Heart, Star, ShoppingCart } from "lucide-react";


function ProductCard({
  image,
  title,
  price,
  dealPrice,
  rating,

  discount,

  showDiscount = false,
  showWishlist = true,
  showCartButton = true,
  showOriginalPrice = true,

  buttonText = "Add to Cart",

  onWishlist,
  onButtonClick,
}) {
  
  return (
    
    
    <div 
    // onClick={navigate}
    className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
        />

        {showDiscount && discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        {showWishlist && (
          <button
            onClick={onWishlist}
            className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition"
          >
            <Heart size={18} />
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star size={16} fill="currentColor" />
          <span className="text-sm text-gray-600">
            {rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-green-600">
            ${dealPrice || price}
          </span>

          {showOriginalPrice &&
            dealPrice &&
            price !== dealPrice && (
              <span className="text-gray-400 line-through">
                ${price}
              </span>
            )}
        </div>

        {/* Action Button */}
        {showCartButton && (
          <button
            onClick={onButtonClick}
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