import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className=" rounded-lg hero lg:h-[480px] bg-base-200 mb-[100px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="lg:h-[300px] h-[200px]"
            src="https://i.ibb.co/VtP0Fzf/pngwing-1.png"
          />
          <div className=" lg:text-left text-center">
            <h1 className="lg:text-5xl mb-9 text-3xl lg:w-[700px] font-bold">
              Books to freshen up your bookshelf
            </h1>
            <Link to="/listedBook/readBook">
              {/* <button className="btn btn-primary" >View The List</button> */}
              <Link to="/listedBook/readBook" className="relative inline-block text-lg group">
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">View The List</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
