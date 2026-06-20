import React from "react";
import CategoryCard from "./CategoryCard";

function Categories() {
  
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
{/* 
            {
                categories.map((category)=> {
                    <CategoryCard 
                        key={category.id}
                        name={category.name}
                        image={category.image}
                    />
                })
            } */}
         </div>
    </section>
  );
}

export default Categories;
