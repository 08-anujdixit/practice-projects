import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://dummyjson.com/products/categories"
      );

      const data = await res.json();

      const categoriesWithImages = await Promise.all(
        data.slice(0, 8).map(async (category) => {
          const response = await fetch(
            `https://dummyjson.com/products/category/${category.slug}?limit=1`
          );

          const productData = await response.json();

          return {
            name: category.name,
            slug: category.slug,
            image: productData.products[0].thumbnail,
          };
        })
      );

      setCategories(categoriesWithImages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchCategories();
}, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">
        Shop by Category
      </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {loading ? (
    <div className="col-span-full flex items-center justify-center py-10">
      <div className="flex items-center gap-3 text-gray-600">
        <span className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></span>
        <span className="text-lg">Loading categories...</span>
      </div>
    </div>
  ) : (
    categories.map((category) => (
      <CategoryCard
        key={category.slug}
        name={category.name}
        image={category.image}
        slug={category.slug}
      />
    ))
  )}
</div>
    </section>
  );
}

export default Categories;