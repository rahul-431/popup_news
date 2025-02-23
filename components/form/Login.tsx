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
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import {
  FaApple,
  FaFacebookF,
  FaGoogle,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";

const loginFormSchema = z.object({
  email: z.string().trim().email().nonempty({ message: "Email is required" }),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be 8 character long" }),
});

const Login = () => {
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
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 text-center">
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
          <div className="flex flex-col items-center justify-center gap-2">
            <Button type="submit" className="rounded-full w-full">
              Login
            </Button>
            <p className="text-sm">
              Don't have an account?{" "}
              <Link href="/?authType=signup" className="font-semibold">
                Register now
              </Link>
            </p>
            <Link href="#" className="text-sm font-semibold">
              Forget Passoword?
            </Link>
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

export default Login;
