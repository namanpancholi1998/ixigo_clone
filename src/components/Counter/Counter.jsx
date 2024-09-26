import React from "react";

export default function Counter({
  name,
  desc,
  count,
  disabledNeg,
  disabledPos,
  handleClick,
}) {
  const handleIncrease = () => {
    handleClick("increase");
  };
  const handleDecrease = () => {
    handleClick("decrease");
  };

  return (
    <div className="flex w-full justify-between m-auto my-3 ">
      <div className={disabledPos ? `text-red-500` : ""}>
        <p className="font-medium">{name}</p>
        <p className="font-thin text-xs">{desc}</p>
      </div>
      <div className="counter w-10 bg-white flex mx-4">
        <button
          className="text-blue-600 p-2 rounded-sm disabled:text-slate-200 outline-none"
          disabled={disabledNeg}
          onClick={handleDecrease}
        >
          −
        </button>
        <span className="font-medium p-2">{count}</span>
        <button
          className="text-blue-600 p-2 rounded-sm disabled:text-slate-200 outline-none"
          disabled={disabledPos}
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
}
