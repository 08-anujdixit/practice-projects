


function CategoryCard({ name, image }) {
  return (
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
  );
}

export default CategoryCard;