import React from "react";
import Image from "next/image";
import Price from "@/app/components/Price";
import { ProductType } from "@/types/types";
import DeleteButton from "@/app/components/DeleteButton";

const getProduct = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed fetching product!");
  }
  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getProduct(params.id);
  return (
    <div
      className="p-4 lg-px-20 xl:px-40 h-screen flex flex-col justify-around
     text-red-500 md:flex-row md:gap-8 md:items-center md:justify-center relative"
    >
      {/*image container */}
      {singleProduct?.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}

      {/*text cintainer*/}
      <div className="h-1/2 md:h-[70%] md:justify-center flex flex-col gap-4 md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price product={singleProduct} />
      </div>
      <DeleteButton id={singleProduct.id} />
    </div>
  );
};

export default SingleProductPage;
