"use client"
import { get_products_category } from "@/lib/actions/product.action";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [productCategory, setProductCategory] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await get_products_category();
        console.log(response)
        if(response){
          setProductCategory(response);
        }
      } catch (error) {
        console.log("product category error", error);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  console.log(productCategory);
  
  
  return (
    <section className="flex flex-col gap-2 p-3">
      <div className="flex items-center">
        <h1 className="text-black font-bold">Product Categories</h1>
      </div>
      <div className="flex flex-row gap-4 overflow-x-auto">
        {productCategory.map((category: any) => (
          <div className="flex flex-col">
            <div className="flex rounded-full items-center justify-center border-1 border-black h-32 w-32 bg-[#223127]">
              <Image src={`http://localhost:8002/uploads/category_image/${category.file_name.split('/').pop()}`} alt="image" height="80" width="80" content=""/>
            </div>
            <div className="flex items-center justify-center mt-3">
              <h3 className="text-black">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;