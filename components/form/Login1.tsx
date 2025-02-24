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

const loginFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: "This field can not be empty" })
      .email(),
    password: passwordSchema,
  })
  .required();

const Login1 = () => {
  const [showPassword, setShowPassword] = useState(false);

  //define form
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //submit handler
  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
    form.reset({
      email: "",
      password: "",
    });
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl ">Welcome Back</h1>
        <p className="text-sm ">Login to your account</p>
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
                <FormLabel className="font-semibold">Password</FormLabel>
                <FormControl>
                  <div className="flex items-center justify-between relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      {...field}
                      className=""
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

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="rounded-full px-4 py-1 min-w-32 bg-black text-white"
            >
              Login
            </button>
            <Link href="#" className="text-sm font-semibold">
              Forget Passoword?
            </Link>
          </div>
          <div className="flex items-center flex-col">
            <h1 className="text-center text-sm my-2 font-light">
              Or login with
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

export default Login1;
