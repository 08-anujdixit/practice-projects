import React from "react";

function Hero() {
  return (
    <div className=" container py-10 mx-auto flex flex-col items-center justify-center rounded-md bg-black border md:border-indigo-600 my-9">
      <section className=" flex flex-col text-center">
        <h1 className="max-w-xl text-3xl md:text-4xl font-bold text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-xl text-gray-600 my-4">
          Lorem ipsum dolor sit amet.
        </p>
      </section>

      {/* button section  */}
      <section className=" flex justify-around my-10">
        <button className="cursor-pointer text-white mx-1 flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-lg hover:bg-indigo-700 hover:shadow-sm shadow-indigo-500">
          Create Your First Blog
        </button>
      </section>
    </div>
  );
}
export default Hero;
