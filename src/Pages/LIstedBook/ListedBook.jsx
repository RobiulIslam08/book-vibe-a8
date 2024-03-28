import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadBookDataLS, getWishListBookDataLS } from "../../Utils/LocalStorage";
import { Link } from "react-router-dom";
import { HiMiniUsers } from "react-icons/hi2";
import { GrDocument } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

const ListedBook = () => {

 
  const [readData , setReadData] = useState([])
  useEffect(()=>{
     setReadData(getReadBookDataLS())
    
  },[])
  const [WishListData, setWishlistData] = useState([])
  useEffect(()=>{
    setWishlistData(getWishListBookDataLS())
  },[])
  const [displaySortRead, setDisplaySortRead] = useState([])

   


  // handle sorting function
  function sortByRating(sorting){
   if(sorting == "rating"){
    const sortRatingData = [...readData].sort((a, b) => b.rating - a.rating)
    setReadData(sortRatingData)
    setWishlistData(sortRatingData)
    console.log('rating')
   }
   }


   function sortByPage(sorting){
    if(sorting == 'pages'){
      const sortPagesData =  [...readData].sort((a, b) => b.totalPages - a.totalPages)
      setReadData(sortPagesData)
      setWishlistData(sortPagesData)
    }
  }

  function sortByYear(sorting){
    if(sorting == 'year'){
      const sortYear = [...readData].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      setReadData(sortYear)
      setWishlistData(sortYear)
    }
  }

 
  return (
    <div>
      <div className="bg-base-200 h-[80px] rounded-xl flex justify-center items-center mb-8">
        <h1 className="text-[36px] font-bold ">Books</h1>
      </div>

      {/* Sorting dropdown menu */}
     <div className="flex justify-center items-center mb-14">
     <details className="dropdown ">
  <summary className="m-1 bg-green-400 px-10 hover:bg-green-300 btn">Sort By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={()=>sortByRating('rating')}><a>Rating</a></li>
    <li onClick={()=>sortByPage('pages')}><a>Number of Pages</a></li>
    <li onClick={()=>sortByYear('year')}><a>Published Year</a></li>
  </ul>
</details>
     </div>

      {/* React-tabs */}
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        
        <TabPanel>
          {/* Display Read Books */}
          {readData.map((book, index) => (
        <div key={index}>
          <div className="mb-5 shadow-xl p-3 flex flex-col lg:flex-row gap-4 mt-5 w-[100%]">
            {/* image */}
            <div
              className="lg:w-[18%] w-full   flex justify-center
"
            >
              <div className="bg-base-200 rounded-lg p-5">
                <img
                  src={book.image}
                  className="h-[220px] "
                  alt=""
                />
              </div>
            </div>

            {/* detail */}
            <div className="lg:w-[74%] w-full  space-y-4">
              <h1 className="text-[#131313] font-bold text-2xl">{book.bookName}</h1>
              <h1 className="text-[#131313d2] text-base font-medium">
                By: {book.author}
              </h1>
              {/* tag line */}
              <div className="flex gap-2 lg:gap-10 items-center">
                {/* tag */}
                <div className="flex gap-2">
                  <p>Tag:</p>
                  {
                    book.tags.map(tag=> <p key={book.bookId}>{tag}</p>)
                  }
                </div>
                <div className="text-[#131313d2] text-base font-medium flex items-center">
                  <IoLocationOutline />
                  <p>Year of Publishing: {book.yearOfPublishing}</p>
                </div>
              </div>
              {/* tag line end */}

              {/* profile line */}
              <div className="flex gap-2 lg:gap-10 text-[#13131399] text-base items-center">
                <div className="flex gap-1 items-center">
                  <HiMiniUsers />
                  <h1>Publisher: {book.publisher}</h1>
                </div>
                <div className="flex gap-1 items-center">
                  <GrDocument />
                  <p>Page: {book.totalPages}</p>
                </div>
              </div>
              {/* profile line end */}

              <hr />
              <div className="flex gap-3">
              <button className="btn rounded-3xl text-purple-500   bg-base-200">Category: {book.category}</button>
                <button className="btn bg-base-200 text-sky-600 rounded-3xl">Rating: {book.rating}</button>
                <Link to={`/bookDetail/${book.bookId}`} ><button className="btn rounded-3xl bg-green-500">view Details</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
        
        
        </TabPanel>
        
        <TabPanel>
         
          {/* Display Wishlist Books */}
          {WishListData.map((book, index) => (
          <div key={book.bookId}>
            <div className="mb-5 shadow-xl p-3 flex flex-col lg:flex-row gap-4 mt-5 w-[100%]">
              {/* image */}
              <div
                className="lg:w-[18%] w-full   flex justify-center
  "
              >
                <div className="bg-base-200 rounded-lg p-5">
                  <img
                    src={book.image}
                    className="h-[220px] "
                    alt=""
                  />
                </div>
              </div>
  
              {/* detail */}
              <div className="lg:w-[74%] w-full  space-y-4">
                <h1 className="text-[#131313] font-bold text-2xl">{book.bookName}</h1>
                <h1 className="text-[#131313d2] text-base font-medium">
                  By: {book.author}
                </h1>
                {/* tag line */}
                <div className="flex gap-2 lg:gap-10 items-center">
                  {/* tag */}
                  <div className="flex gap-2">
                    <p>Tag:</p>
                    {
                      book.tags.map(tag=> <p key={book.bookId}>{tag}</p>)
                    }
                  </div>
                  <div className="text-[#131313d2] text-base font-medium flex items-center">
                    <IoLocationOutline />
                    <p>Year of Publishing: {book.yearOfPublishing}</p>
                  </div>
                </div>
                {/* tag line end */}
  
                {/* profile line */}
                <div className="flex gap-2 lg:gap-10 text-[#13131399] text-base items-center">
                  <div className="flex gap-1 items-center">
                    <HiMiniUsers />
                    <h1>Publisher: {book.publisher}</h1>
                  </div>
                  <div className="flex gap-1 items-center">
                    <GrDocument />
                    <p>Page: {book.totalPages}</p>
                  </div>
                </div>
                {/* profile line end */}
  
                <hr />
                <div className="flex gap-3">
                <button className="btn rounded-3xl text-purple-500   bg-base-200">Category: {book.category}</button>
                <button className="btn bg-base-200 text-sky-600 rounded-3xl">Rating: {book.rating}</button>
                <Link to={`/bookDetail/${book.bookId}`} ><button className="btn rounded-3xl bg-green-500">view Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
