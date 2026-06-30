import { Link } from "react-router-dom";



function CategoryCard({ name, image, slug }) {
  return (
    <Link to={`/products?category=${slug}`}>
    
    <div className="group cursor-pointer overflow-hidden rounded-xl shadow-md">
      <img
        src={image}
        alt={name}
        className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">
          {name}
        </h3>
      </div>
    </div>
    </Link>
  );
}

export default CategoryCard;