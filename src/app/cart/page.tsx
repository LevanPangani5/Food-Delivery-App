"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/utils/store";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 justify-start lg:flex-row">
      {/*Products container*/}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll  no-scrollbar lg:w-2/3 lg:h-full 2xl:w-1/2 lg:px-20 xl:px-40">
        {/*Single item Container*/}
        {products.map((product) => (
          <div
            className="flex items-center justify-between mb-4"
            key={product.id}
          >
            {product?.img && (
              <Image src={product.img} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-xl font-bold">
                {product.title} x{product.quantity}
              </h1>
              <span className="font-bold cursor-pointer">
                {product.optionTitle}
              </span>
            </div>
            <h2>{product.price}</h2>
            <span
              className="cursor-pointer"
              onClick={() => removeFromCart(product)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      {/*Payment Container*/}
      <div className="h-1/2 p-4 bg-fuchsia-50 gap-4 flex flex-col justify-center lg:w-1/3 lg:h-full 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal ({totalItems} items)</span>
          <span className="">${totalPrice}</span>
        </div>

        <div className="flex justify-between">
          <span>Service Cost</span>
          <span className="">$0.99</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className=" my-2" />
        <div className="flex justify-between">
          <span>TOTAL(INCL,WAT)</span>
          <span className="font-bold">${totalPrice}</span>
        </div>
        <button className="bg-red-500 text-white rounded-md p-3 w-[70%] self-end flex justify-center">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
