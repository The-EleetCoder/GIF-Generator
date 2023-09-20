import useGif from "../hooks/useGif";
import { Spinner } from "./Spinner";
import { useState } from "react";

export default function Tag() {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-7">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <input
        className="w-10/12 opacity-80 text-lg py-2 rounded-lg mb-[2px] text-center"
        onChange={(e) => {
          setTag(e.target.value);
        }}
        value={tag}
        placeholder="Enter text..."
      />
      <button
        className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
}
