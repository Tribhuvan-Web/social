import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import toast from "react-hot-toast";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsGenderAmbiguous } from "react-icons/bs";
import TextField from "../../Components/TextField";

const Register = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post("/auth/signup", data);
      reset();
      navigate("/login");
      toast.success("Registration successful!");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-black to-gray-900 flex justify-center items-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row shadow-2xl rounded-xl overflow-hidden bg-gray-800">
        {/* Image Section */}
        <div className="hidden sm:block w-1/2 relative bg-gradient-to-br from-[#2295E5]/90 to-[#45C3F3]/90">
          <div className="absolute inset-0">
            <img
              src="/social.png"
              alt="Registration illustration"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
            <h2 className="text-white text-2xl font-bold drop-shadow-lg">
              Welcome to Our Community!
            </h2>
            <p className="text-white font-semibold text-sm">
              Join thousands of users already registered
            </p>
          </div>
        </div>
        {/* Form Section */}
        <div className="w-full sm:w-1/2 p-6 sm:p-8 lg:p-12">
          <form onSubmit={handleSubmit(registerHandler)}>
            <h1 className="text-center font-bold text-3xl mb-6 bg-gradient-to-r from-[#2295E5] to-[#45C3F3] bg-clip-text text-transparent">
              Create Account
            </h1>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2295E5] to-transparent mb-8"></div>

            <div className="flex flex-col gap-2">
              {/* Username Field */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <FaUser className="text-[#2295E5] text-lg" />
                  <label htmlFor="name" className="text-gray-300 font-medium">
                    Username
                  </label>
                </div>
                <TextField
                  required
                  id="name"
                  type="text"
                  message="Username is required"
                  placeholder="Enter your username"
                  register={register}
                  errors={errors}
                  className="bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2295E5]"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <MdEmail className="text-[#2295E5] text-lg" />
                  <label htmlFor="email" className="text-gray-300 font-medium">
                    Email
                  </label>
                </div>
                <TextField
                  required
                  id="email"
                  type="email"
                  message="Valid email is required"
                  placeholder="Enter your email"
                  register={register}
                  errors={errors}
                  className="bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2295E5]"
                />
              </div>

              {/* Gender Field */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <BsGenderAmbiguous className="text-[#2295E5] text-lg" />
                  <label htmlFor="gender" className="text-gray-300 font-medium">
                    Gender
                  </label>
                </div>
                <select
                  id="gender"
                  {...register("gender", { required: "Gender is required" })}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2295E5] transition-all"
                  defaultValue=""
                >
                  <option value="" disabled className="text-gray-400">
                    Select your gender
                  </option>
                  <option value="Male" className="bg-gray-800">
                    Male
                  </option>
                  <option value="Female" className="bg-gray-800">
                    Female
                  </option>
                  <option value="Other" className="bg-gray-800">
                    Other
                  </option>
                  <option value="Prefer not to say" className="bg-gray-800">
                    Prefer not to say
                  </option>
                </select>
                {errors.gender && (
                  <p className="text-red-400 text-sm mt-1 animate-pulse">
                    {errors.gender.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <RiLockPasswordFill className="text-[#2295E5] text-lg" />
                  <label
                    htmlFor="password"
                    className="text-gray-300 font-medium"
                  >
                    Password
                  </label>
                </div>
                <div className="relative w-full">
                  <TextField
                    required
                    id="password"
                    type={showPassword ? "text" : "password"}
                    message="Password must be at least 6 characters"
                    placeholder="Enter your password"
                    register={register}
                    min={6}
                    errors={errors}
                    className="bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2295E5] pr-12"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-[#2295E5] transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex="-1"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-xl" />
                    ) : (
                      <FaEye className="text-xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                disabled={loader}
                type="submit"
                className="w-full bg-gradient-to-r from-[#2295E5] to-[#45C3F3] text-white font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-[#2295E5] focus:ring-offset-2 disabled:opacity-70 shadow-lg"
              >
                {loader ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-400 mt-6">
              Already have an account?{" "}
              <Link
                className="font-semibold text-[#2295E5] hover:text-[#45C3F3] transition-colors"
                to="/login"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
