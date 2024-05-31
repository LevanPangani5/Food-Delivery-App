"use client";
import { ProductType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

type Props = {
  product: ProductType;
};
const Price = ({ product }: Props) => {
  const [counter, setCounter] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [selected, setSelected] = useState(0);

  const { addToCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  useEffect(() => {
    if (product.options?.length) {
      setTotalPrice(
        counter * product.price + product.options[selected].additionalPrice
      );
    }
  }, [counter, selected, product]);

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: totalPrice,
      ...(product.options?.length && {
        optionTitle: product.options[selected].title,
      }),
      quantity: counter,
    });
    toast.success("item was added was added to the cart!");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${totalPrice}</h2>
      {/*Options container */}
      <div className="flex gap-4">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              key={option.additionalPrice}
              className="p-2 ring-1 ring-red-400 rounded-md min-w-[6rem]"
              style={{
                background: selected === index ? "rgb(248 113 113)" : "white",
                color: selected === index ? "white" : "red",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div>
      {/*quantity container & add btn container*/}
      <div className="flex justiy-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-400 ">
          <span> Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setCounter((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{counter}</span>
            <button
              onClick={() => setCounter((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/*cart button*/}
        <button
          className={`bg-${
            counter === 0 ? "red-400" : "red-500"
          } w-56 uppercase text-white p-3 ring-1 ring-red-500 ${
            counter === 0 && "cursor-not-allowed"
          }`}
          disabled={counter === 0}
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
