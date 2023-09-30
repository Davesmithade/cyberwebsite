import React from "react";

function NewsLetter() {
  return <div className="flex bg-[#040918eb] justify-center items-center py-12 mt-10 w-full">
    <div className="news bg-[#13286513] flex bg-opacity-80 p-16 rounded-lg shadow-lg">
        <div className="flex items-center gap-5">
            <h1 className="text-[26px] text-white font-bold">Subscribe <br/> to our Newsletter</h1>
            <div className="flex items-center py-2 px-4 bg-white rounded-[10px]">
            <form action="" className="">
                <input type="text" placeholder="Enter Your Email" className="h-[55px] rounded-[4px] px-4 w-[40vw] outline-none"/>
            </form>

            <div>
                <button className="px-6 py-3 bg-[#0f2961cc] text-white font-medium rounded-[10px] hover:bg-[#071430cc]">Subscribe👆🏻</button>
            </div>
            </div>
        </div>
    </div>
  </div>;
}

export default NewsLetter;
