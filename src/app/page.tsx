"use client";

import { useState } from "react";

export default function Home() {
  const [layout, setLayout] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (val: any) => {
    return setInput(val.target.value);
  };

  const generateLayout = () => {
    setLayout(input);
  };

  const numbers = Array.from({ length: parseInt(layout) }, (_, index) => index);

  return (
    <main className="max-w-7xl mx-auto flex flex-col min-h-screen text-center p-24 select-none">
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-5xl font-bold">4Net Test</h1>
        {/* <input placeholder="Generate Layout" className="border-2 transition duration-500 placeholder-red-400 focus:placeholder-transparent border-red-400 w-4/12 py-2 text-center text-red-400 bg-transparent rounded-md focus:outline-none "/> */}
        <form>
          <div className="flex flex-row gap-4 items-center">
            <label className="block">
              <input
                type="number"
                value={input}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </label>
            <div
              onClick={generateLayout}
              className="bg-sky-500 cursor-pointer hover:bg-sky-700 text-white font-bold rounded-md px-4 py-2"
            >
              Generate
            </div>
          </div>
        </form>
        <div className="grid w-full grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 mt-12">
          {numbers.map((number, index) => (
            <CardGenerate key={index} number={number + 1} />
          ))}
        </div>
      </div>
    </main>
  );
}

export function CardGenerate({ number }: { number: number }) {
  const [numberCard, setNumberCard] = useState(number);
  const randomNumber = Math.floor(Math.random() * 11);

  const generateRandomNumber = () => {
    if (numberCard === number) {
      setNumberCard(randomNumber);
    }
  };

  return (
    <div
      onClick={generateRandomNumber}
      className={` ${
        numberCard === number
          ? "cursor-pointer justify-center text-center font-bold"
          : "cursor-default justify-start text-start"
      } bg-white col-span-1 hover:opacity-80  flex flex-col  shadow-md h-[100px]  rounded-md px-4 py-2`}
    >
      {numberCard}
    </div>
  );
}
