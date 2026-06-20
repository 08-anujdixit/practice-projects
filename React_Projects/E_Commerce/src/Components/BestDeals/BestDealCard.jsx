import { Heart, Star, ShoppingCart } from "lucide-react";

function BestDealCard({
  image,
  title,
  price,
  dealPrice,
  rating,
  discount,
}) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
          -{discount}%
        </span>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition">
          <Heart size={18} />
        </button>
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
            ₹{dealPrice}
          </span>
          <span className="text-gray-400 line-through">
            ₹{price}
          </span>
        </div>

        {/* Add to Cart */}
        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BestDealCard;