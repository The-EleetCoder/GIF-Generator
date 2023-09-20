import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full flex flex-col items-center background">
      <h1 className="px-10 py-2 bg-white rounded-md w-11/12 text-center mt-[40px] text-4xl font-bold">Random GIF</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
