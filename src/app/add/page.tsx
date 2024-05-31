"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

type Option = {
  title: string;
  additionalPrice: number;
};

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

const AddPage = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [file, setFile] = useState<FileList | null>();

  const [options, setOptions] = useState<Option[]>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOption = (e: ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify({
          ...inputs,
          options,
        }),
      });

      const data = await res.json();
      if (data.id.length > 0) {
        toast.success("added product succesfully!");
        router.push(`/product/${data.id}`);
      }
    } catch (err) {
      toast.error("failed adding product");
    }
  };

  return (
    <div>
      <form
        className="shadow-lg flex flex-wrap gap-4 p-8"
        onSubmit={handleSubmit}
      >
        <h1>Add new product</h1>
        <div className="w-full flex flex-col gap-2">
          <label>Image</label>
          <input
            onChange={(e) => setFile(e.target.files)}
            className="ring-1 ring-red-200 rounded-sm"
            type="file"
            name="img"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Title</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-red-200 rounded-sm"
            type="text"
            name="title"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Description</label>
          <textarea
            onChange={handleChange}
            className="ring-1 ring-red-200 rounded-sm"
            name="desc"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Price</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-red-200 rounded-sm"
            type="number"
            name="price"
            min={0}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Category</label>
          <input
            onChange={handleChange}
            className="ring-1 ring-red-200 rounded-sm"
            type="text"
            name="catSlug"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Options</label>
          <div>
            <input
              onChange={handleOption}
              className="ring-1 ring-red-200 rounded-sm"
              type="text"
              placeholder="Title"
              name="title"
            />
            <input
              onChange={handleOption}
              className="ring-1 ring-red-200 rounded-sm"
              type="number"
              placeholder="AdditionalPrice"
              name="additionalPrice"
              min={0}
            />
          </div>
          <div
            className="w-52 bg-red-500 text-white p-2"
            onClick={() => {
              setOptions((prev) => [...prev, option]);
            }}
          >
            Add Option
          </div>
        </div>
        <div>
          {options.map((item) => (
            <div
              className="ring-1 p-2 ring-red-500 rounded-md cursor-pointer"
              key={item.title}
              onClick={() =>
                setOptions(options.filter((op) => op.title !== item.title))
              }
            >
              <span>{item.title}</span>
              <span>{item.additionalPrice}$</span>
            </div>
          ))}
        </div>
        <button type="submit" className="p-2 w-full bg-red-500 text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPage;
