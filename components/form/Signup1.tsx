"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import {
  FaApple,
  FaFacebookF,
  FaGoogle,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { passwordSchema } from "@/lib/utils";

const signupFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: "This field can not be empty" })
      .email(),
    password: passwordSchema,
    cpassword: z
      .string()
      .trim()
      .min(1, { message: "This field can not be empty" }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords did not match",
    path: ["cpassword"],
  });

const Signup1 = () => {
  const [showPassword, setShowPassword] = useState(false);

  //define form
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      cpassword: "",
    },
  });

  //submit handler
  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.log(values);
    form.reset();
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl ">Create Your account</h1>
        {/* <p className="text-sm ">Login to your account</p> */}
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="font-semibold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="tom@holland.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-left">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                    />
                    <span
                      className="absolute right-5 cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {!showPassword ? (
                        <FaRegEye color="gray" />
                      ) : (
                        <FaRegEyeSlash />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                    />
                    <span
                      className="absolute right-5 cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {!showPassword ? (
                        <FaRegEye color="gray" />
                      ) : (
                        <FaRegEyeSlash />
                      )}
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center gap-4">
            <button
              type="submit"
              className="rounded-full px-2 sm:px-4 py-1 w-24 sm:min-w-32 bg-black text-white"
            >
              Signup
            </button>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-center text-sm my-2 font-light">
              Or Register with
            </h1>
            <div className="flex gap-3 items-center">
              <button className="p-1 text-sm bg-black rounded-full text-white">
                <FaGoogle />
              </button>
              <button className="p-1 text-sm bg-black rounded-full text-white">
                <FaFacebookF />
              </button>
              <button className="p-1 text-base bg-black rounded-full text-white">
                <FaApple />
              </button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Signup1;
