import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Hero() {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()


  function onClickHandler (){
    if(authStatus){
      navigate('/addblog');
    }else{
      navigate('/login');
    }
  }

  return (
    <section className="relative flex items-center justify-center min-h-[85vh] px-6  text-white bg-gradient-to-b from-indigo-700 via-gray-950 to-black">
      {/* CONTENT */}
      <div className="text-center max-w-3xl">
        {/* HEADING */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Share Your Ideas. <br />
          Build Your Story.
        </h1>

        {/* SUBTEXT */}
        <p className="text-gray-400 mt-6 text-base md:text-lg">
          A modern blogging platform where developers and creators can write,
          explore, and publish their thoughts instantly.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            onClick={onClickHandler}
            className="px-6 py-3 bg-indigo-600 hover:bg-blue-700 rounded-lg font-medium transition"
          >
            Start Writing →
          </Link>
          <button
            onClick={() => {
              document
                .getElementById("community-blogs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 border border-white/20 hover:bg-white/10 rounded-lg font-medium transition"
          >
            Explore Blogs
          </button>
        </div>

        {/* SMALL INFO */}
        <p className="text-xs text-gray-500 mt-6">
          No complexity. Just write and publish.
        </p>
      </div>
    </section>
  );
}

export default Hero;
