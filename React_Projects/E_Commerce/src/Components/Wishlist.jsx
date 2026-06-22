import { Heart } from "lucide-react";
import ProductCard from "./ProductCard";

function Wishlist() {
  const wishlistItems = [
    {
      id: 1,
      title: "Wireless Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      price: 2999,
      dealPrice: 1999,
      rating: 4.5,
      discount: 33,
    },
    {
      id: 2,
      title: "Gaming Mouse",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",
      price: 1499,
      dealPrice: 999,
      rating: 4.3,
      discount: 25,
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      price: 4999,
      dealPrice: 3499,
      rating: 4.8,
      discount: 30,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Saved Items
        </h1>

        <p className="text-gray-500 mt-2">
          Products you've saved for later.
        </p>
      </div>

      {wishlistItems.length > 0 ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              {wishlistItems.length} items saved
            </p>

            <button className="text-red-500 hover:text-red-600 font-medium">
              Clear All
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                showDiscount={true}
                buttonText="Move to Cart"
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-24">

          <Heart
            size={80}
            className="text-gray-300"
          />

          <h2 className="text-2xl font-semibold mt-6">
            Your wishlist is empty
          </h2>

          <p className="text-gray-500 mt-2 text-center">
            Save products you love and they'll appear here.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
            Explore Products
          </button>

        </div>
      )}
    </div>
  );
}

export default Wishlist;