import Image from "next/image";

const Loading = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-3rem)] flex  items-start justify-center">
      <Image
        className="object-contain"
        src="https://cdn.hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif"
        alt=""
        width={500}
        height={400}
      />
    </div>
  );
};

export default Loading;
