"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status == "loading") {
    return (
      <div className="w-[35px] h-[35px] bg-red-400 absolute top-4 right-4 p-2 rounded-full text-white text-xl">
        <AiOutlineLoading3Quarters className="w-full h-full animate-spin    " />
      </div>
    );
  }
  if (status == "unauthenticated" || !data?.user.isAdmin) return;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      method: "DELETE",
    });
    console.log(res);
    if (res.status == 200) {
      router.push("/menu");
      toast.success("Product has been deleted!");
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };

  return (
    <button
      className="bg-red-400 p-2 rounded-full absolute top-4 right-4"
      onClick={handleDelete}
    >
      <Image src="/delete.png" alt="" width={20} height={20} />
    </button>
  );
};

export default DeleteButton;
