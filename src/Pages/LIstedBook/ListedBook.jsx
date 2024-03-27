import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ReadBook from "../../Components/ReadBook/ReadBook";


const ListedBook = () => {
    const [tabIndex , setTabIndex] = useState(0)
  return (
    <div>
      <div className="bg-base-200 h-[80px] rounded-xl flex justify-center items-center mb-8">
        <h1 className="text-[36px] font-bold ">Books</h1>
      </div>
      {/* drodown menu */}
      <div className="flex justify-center items-center mb-36">
        <details className="dropdown">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>

      {/* tab  */}
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <Link to={`readBook`}
          onClick={()=>{
            setTabIndex(0);
            

            
          }}
          rel="noopener noreferrer"
          href="#"
          className= {`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex == 0 ? 'border border-b-0': 'border-b'} dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Read Books</span>
        </Link>
        <Link to={`wishListBook`}
        onClick={()=> setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex == 1 ? 'border border-b-0': 'border-b'} dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Wishlist Book</span>
        </Link>
     
           
       
      </div>
        <Outlet></Outlet>
    </div>
  );
};

export default ListedBook;
