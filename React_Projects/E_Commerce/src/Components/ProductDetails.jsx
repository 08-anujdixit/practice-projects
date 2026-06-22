import { Heart, ShoppingCart, Star } from "lucide-react";

function ProductDetail() {
  const product = {
    title: "Wireless Bluetooth Headphones",
    image:  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    price: 2999,
    dealPrice: 1999,
    discount: 33,
    rating: 4.5,
    reviews: 128,
    description:
      "Experience premium sound quality with active noise cancellation, long battery life, and comfortable over-ear cushions for all-day listening.",
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-2 gap-12">

        {/* Product Image */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[500px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <Star
              size={18}
              fill="currentColor"
              className="text-yellow-500"
            />
            <span className="font-medium">
              {product.rating}
            </span>
            <span className="text-gray-500">
              ({product.reviews} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mt-6">
            <span className="text-4xl font-bold text-green-600">
              ₹{product.dealPrice}
            </span>

            <span className="text-xl text-gray-400 line-through">
              ₹{product.price}
            </span>

            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
              {product.discount}% OFF
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity */}
          <div className="mt-8">
            <h3 className="font-semibold mb-3">
              Quantity
            </h3>

            <div className="flex items-center w-fit border rounded-lg overflow-hidden">
              <button className="px-4 py-2 hover:bg-gray-100">
                -
              </button>

              <span className="px-6 py-2 border-x">
                1
              </span>

              <button className="px-4 py-2 hover:bg-gray-100">
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button className="flex-1 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button className="border border-gray-300 p-3 rounded-xl hover:bg-gray-100 transition">
              <Heart size={22} />
            </button>

          </div>

          {/* Features */}
          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="bg-gray-50 p-4 rounded-xl">
              🚚 Free Shipping
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              🔄 Easy Returns
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              🔒 Secure Payment
            </div>

            <div className="bg-gray-50 p-4 rounded-xl">
              ⭐ Premium Quality
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;