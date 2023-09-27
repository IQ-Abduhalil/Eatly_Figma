"use client";
import { memo } from "react";
import Image from "next/image";
import Sign_In_Image from "../public/assets/images/hero-bg-sm.png";
import Logo_Sign_Up from "../public/assets/icons/Logo.svg";
import axios from "axios";
import { useFormik } from "@/node_modules/formik/dist/index";
import Link from "@/node_modules/next/link";
import { useRouter } from "@/node_modules/next/navigation";

const initialValues: any = {
  name: "",
  email: "",
  password: "",
};

const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = "To'ldirishing Shart";
  }

  if (!values.email) {
    errors.email = "To'ldirishing Shart";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Emailga Muvofiq to'g'ri Email Format Kiriting !!!";
  }

  if (!values.password) {
    errors.password = "To'ldirishing Shart";
  }

  return errors;
};

const Register = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await axios.post(
          "http://207.154.221.44:4002/api/register",
          values
        );
        console.log(res);
        sessionStorage.setItem("authToken", res?.data?.data);
        console.log(values);
        if (res?.data?.status === 201) {
          router.push("/home");
        } else {
          router.push("/");
        }
      } catch (err) {
        alert(
          "Bu foyalanuvchi oldin ro'yxatdan o'tgan! Iltimos login qismiga o'ting!"
        );
      }
    },
    validate,
  });

  return (
    <div className="flex box-border w-full h-[100vh]">
      <div className="flex flex-col justify-between w-full">
        <div className="py-[2rem] px-[3rem]">
          <Image
            className="w-[3.313rem] h-[3.051rem] "
            src={Logo_Sign_Up}
            alt="Logo_Sign_Up"
          />
        </div>
        <div className="rounded-lg flex flex-col items-center justify-center">
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="w-[23.938rem]"
          >
            <h2 className="text-center text-[#323142] text-[2.203rem] font-semibold leading-[2.754rem] tracking-tighter-[1.41pxrem] pb-[1.875rem]">
              Sign Up To eatly
            </h2>

            <div className="relative mb-6">
              <input
                required
                autoComplete="name"
                id="name"
                name="name"
                defaultValue={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className="bg-[#F5F5F5] py-[1.5rem] rounded-[0.892rem] peer block min-h-[auto] w-full border-0 bg-transparent px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Enter Full Name"
              />
              {formik.touched.name && formik.errors.name ? (
                <span className="text-red-600">error</span>
              ) : null}
              <label
                htmlFor="label"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Full Name
              </label>
            </div>

            <div className="relative mb-6 bg-[#F5F5F5] p-[1.5rem] rounded-[0.892rem]">
              <input
                required
                autoComplete="password"
                id="password"
                name="password"
                defaultValue={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Enter Password"
              />
              <label
                htmlFor="label"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Password
              </label>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <span className="text-red-600">error</span>
            ) : null}

            <div className="relative mb-6">
              <input
                required
                autoComplete="email"
                id="email"
                name="email"
                defaultValue={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                className="bg-[#F5F5F5] py-[1.5rem] rounded-[0.892rem] peer block min-h-[auto] w-full border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Enter email"
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-red-600">error</span>
              ) : null}
              <label
                htmlFor="label"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Email address
              </label>
            </div>

            <div className="mb-6 flex items-center justify-between">
              <div className="block min-h-[1.5rem] pl-[1.5rem]"></div>
              <a
                href="#"
                className="text-[#6C5FBC]  text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Forget Password ?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#6C5FBC] rounded-[0.973rem] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full bg-primary px-6 py-[1.5rem] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              <span className="text-[1.112rem] font-semibold tracking-tighter-[0.033rem]">
                SIGN UP
              </span>
            </button>
            <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
              Already Have An Account?
              <Link
                href="/login"
                className="pl-[0.3rem] text-primary text-[1.181rem] font-semibold tracking-tighter-[0.012rem] text-[#6C5FBC] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Log In
              </Link>
            </p>
          </form>
        </div>
        <ul className="flex justify-between p-[3rem]">
          <li className="flex">
            <span className="">Privacy Policy</span>
          </li>
          <ul className="flex items-center justify-center gap-[1.8rem]">
            <li className="footeritem">
              <span className="">Copyright 2022</span>
            </li>
          </ul>
        </ul>
      </div>
      <div className="flex justify-center w-full items-center flex-col bg-[#6C5FBC] h-[100vh]">
        <Image
          className="w-[34.125rem] h-[26.026rem]"
          src={Sign_In_Image}
          alt="Sign_In_Image"
        />
        <h2 className="pt-[1.875rem] text-[2.5rem] font-extrabold leading-[2.75rem] text-[#FFFFFF]">
          Find Foods With Love
        </h2>
        <p className="max-w-[31.25rem] pt-[1.25rem] text-[0.875rem] tracking-tighter-[0.2rem] font-medium leading-[1.313rem] text-[#FFFFFF]">
          Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
          Including Asian, Chinese, Italians And Many More. Our Dashboard Helps
          You To Manage Orders And Money.
        </p>
      </div>
    </div>
  );
};

export default memo(Register);
