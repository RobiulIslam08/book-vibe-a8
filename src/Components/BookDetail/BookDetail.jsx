import React from "react";

const BookDetail = () => {
  return (
    <div>
        {/* main div */}
     <div className="flex flex-col lg:flex-row gap-10 mb-4">
        {/* img */}
        <div className="bg-base-200 flex justify-center items-center h-[600px] w-full lg:w-[48%]">
           <img src="https://i.ibb.co/JC6FnLX/great-gatsby.jpg" className="h-[400px] w-[300px]" alt="" />
        </div>
        {/* detail */}
        <div className="h-[600px] w-full lg:w-[48%]" >
            <h1 className="text-[#131313] text-[40px] font-bold mb-5">Book Name</h1>
            <h1 className="text-[#131313d2] text-xl font-medium mb-5">By: autor name</h1>
            <hr className="mb-4"/>
            <h1 className="text-[#131313d2] text-xl font-medium mb-[14px]">catagory</h1>
            <hr className="mb-6"/>
            <h1 className="mb-12"><span className="text-[#131313] text-base font-medium ">Review :</span></h1>
            <div className="flex gap-6 mb-7">
                <p className="font-bold">Tag</p>
                <p className="text-[#23BE0A] font-bold text-base">#young</p>
                <p className="text-[#23BE0A] font-bold text-base">#yount</p>
            </div>
            <hr className="mb-6"/>
            <div className="space-y-4">
            <div className="flex w-[300px] justify-between">
                <p className="w-[150px] text-[#131313B3] text-base font-medium">Number of Pages:</p>
                <p className="w-[150px] text-[#131313] font-semibold text-base">281</p>
            </div>
            <div className="flex w-[300px] justify-between ">
                <p className="w-[150px] text-[#131313B3] text-base font-medium">Publisher:</p>
                <p className="w-[150px] text-[#131313] font-semibold text-base">J.B Lipping</p>
            </div>
            <div className="flex justify-between w-[300px] ">
                <p className="w-[150px] text-[#131313B3] text-base font-medium">Yerar of Publishing:</p>
                <p className="w-[150px] text-[#131313] font-semibold text-base">1960</p>

            </div>
            <div className=" flex justify-between w-[300px] ">
                <p className="w-[150px] text-[#131313B3] text-base font-medium">Rating:</p>
                <p className="w-[150px] text-[#131313] font-semibold text-base">4.8</p>
            </div>
            </div>

            <div className="mt-8 flex gap-4">
                <button className="btn bg-green-500">Read</button>
                <button className="btn bg-green-500">Wishlist</button>
            </div>
        </div>
     </div>
    </div>
  );
};

export default BookDetail;
