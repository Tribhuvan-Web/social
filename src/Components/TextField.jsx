import React from "react";

const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  placeholder,
  readOnly,
}) => {
  const validationRules = {
    required: { value: required, message },
    minLength: min
      ? {
          value: min,
          message: "Password must be at least 8 characters long",
        }
      : null,
  };

  if (type === "email") {
    validationRules.pattern = {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email address",
    };
  } else if (type === "password") {
    validationRules.pattern = {
      // value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      message:
        "Password must contain at least 8 characters, including letters and numbers",
    };
  }

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className={`${className ? className : " "} font-semibold`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${
          className ? className : ""
        } px-2 py-2 border outline-none bg-transparent text-slate-700 rounded-md ${
          errors[id]?.message ? "border-red-500" : "border-slate-600"
        }`}
        {...register(id, validationRules)}
        readOnly={readOnly}
      />

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-600 mt-0">
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
};

export default TextField;