import ProductCard from "../ProductCard";

function BestDeals() {

    
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">🔥 Best Deals</h2>
          <p className="text-gray-500 mt-1">
            Handpicked products at unbeatable prices
          </p>
        </div>

        <button className="hidden md:block border px-4 py-2 rounded-lg hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>

      {/* Products Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal) => (
          <ProductCard key={deal.id} {...deal} showDiscount={true} />
        ))}
      </div> */}
    </section>
  );
}

export default BestDeals;