import React, { forwardRef } from "react";


const Input = forwardRef(function Input({ textarea, label, ...props },ref) {
  const styledInput =
    " w-full p-1 border-b-2 rounded-sm border-stone-100 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className=" text-sm uppercase font-bold text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea {...props} className={styledInput} ref={ref}/>
      ) : (
        <input {...props} className={styledInput} ref={ref}/>
      )}
    </p>
  );
});

export default Input;
