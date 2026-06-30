import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import { getAllProducts } from "../../Services/productsService";

function BestDeals() {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const products = await getAllProducts();

        const bestDeals = [...products]
          .sort((a, b) => b.discountPercentage - a.discountPercentage)
          .slice(0, 8);

        setDeals(bestDeals);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">🔥 Best Deals</h2>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="flex items-center gap-3 text-gray-600">
            <span className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></span>
            <span>Loading deals...</span>
          </div>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard
                product={product}
                image={product.thumbnail}
                title={product.title}
                price={product.price}
                rating={product.rating}
                discountPercentage={product.discountPercentage}
                showDiscount={true}
              />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default BestDeals;