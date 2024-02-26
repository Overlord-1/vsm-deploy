import React, { useState } from "react";
import NewsCard from "../components/NewsCard";

const News = ({}) => {
  

  
  
  return (
    <>

      <div className="newsHeader w-[80%] max-w-[1240px] p-5 bg-[#1E1F26] mx-auto mt-6 rounded-lg md:mt-10">
        <h1 className="text-white font-bold text-opacity-70 text-2xl md:text-4xl ">
          NEWS 📰
        </h1>
        <p className="text-white mt-4 font-light text-xl md:text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          provident minima deleniti aliquam minus, unde expedita molestiae! Quo
          provident, eaque libero voluptatibus minus nobis unde officia. Ut odio
          non assumenda.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto flex flex-col">
        <h1 className="text-[#6cff73] mx-auto rounded-lg font-bold bg-[#1E1F26] p-4 text-opacity-70 text-2xl my-7 px-10 md:text-4xl ">
          Remaining Funds = 1212
        </h1>
        <div className="row1 flex flex-col md:grid md:grid-cols-2">
          <NewsCard name={"Facebook"} stockprice={2323} funds={10000} />
          <NewsCard name={"Netflix"} stockprice={2323} funds={10000} />
        </div>
        <div className="row2 flex flex-col md:grid md:grid-cols-2">
          <NewsCard name={"Apple"} stockprice={2323} funds={10000} />
          <NewsCard name={"Microsoft"} stockprice={2323} funds={10000} />
        </div>
      </div>
    </>
  );
};

export default News;
