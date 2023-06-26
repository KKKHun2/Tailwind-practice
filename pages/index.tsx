import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen items-center justify-center gap-10 bg-slate-400 px-2 py-10">
    <div className=" flex  w-72 flex-col rounded-3xl bg-yellow-300 px-5 shadow-xl">
      <span className="text-l ml-2 mt-80 font-semibold">Select Destination</span>
  
      <div className="border-line mt-2  border-t-2 border-black pl-4 pt-2"></div>
        
        <div className="mt-2 flex pl-2 pt-1  hover:text-white">
      <button className="flex aspect-square w-8 items-center justify-center rounded-3xl bg-black text-sm text-white hover:bg-white hover:text-yellow-300">V</button>
      <span className="ml-2 cursor-pointer text-xl font-bold">Vancouver</span>
    </div>


    <div className="mt-2 flex pl-2 pt-1 hover:text-white">
      <span className="flex aspect-square w-8 items-center justify-center rounded-3xl bg-black text-sm text-white hover:bg-white hover:text-yellow-300">S</span>
      <span className="ml-2 cursor-pointer text-xl font-bold">Seattle</span>
    </div>

    <div className="mt-2 flex pl-2 pt-1 hover:text-white">
      <span className="flex aspect-square w-8 items-center justify-center rounded-3xl bg-black text-sm text-white hover:bg-white hover:text-yellow-300">P</span>
      <span className="ml-2 cursor-pointer text-xl font-bold">Portland</span>
    </div>
    <div className="mt-2 flex pl-2 pt-1 hover:text-white">
      <span className="flex aspect-square w-8 items-center justify-center rounded-3xl bg-black text-sm text-white hover:bg-white hover:text-yellow-300">S</span>
      <span className="ml-2 cursor-pointer text-xl font-bold">Seattle</span>
    </div>
    <div className="mt-2 flex pl-2 pt-1 hover:text-white">
      <span className="flex aspect-square w-8 items-center justify-center rounded-3xl bg-black text-sm text-white hover:bg-white hover:text-yellow-300">S</span>
      <span className="ml-2 cursor-pointer text-xl font-bold">San Francisco</span>
    </div>
    <div className="mt-2 flex pl-2 pt-1 hover:text-white">
      <span className="flex aspect-square w-8 items-center justify-center rounded-3xl bg-black text-sm text-white hover:bg-white hover:text-yellow-300">L</span>
      <span className="ml-2 cursor-pointer text-xl font-bold">Los Angeles</span>
    </div>
    <div className="mb-7 mt-2 flex pl-2 pt-1 hover:text-white">
      <span className="flex aspect-square w-8 items-center justify-center rounded-3xl bg-black text-sm text-white hover:bg-white hover:text-yellow-300">S</span>
      <span className="ml-2 cursor-pointer text-xl font-bold">San Diego</span>
    </div>
      </div>
      {/* <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-300 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-14 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>

    </div> */}
    </div>
  );
};
export default Home;