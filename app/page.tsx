"use client";
import Login from "@/components/form/Login";
import Login1 from "@/components/form/Login1";
import Signup from "@/components/form/signup";
import Signup1 from "@/components/form/Signup1";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const Home = () => {
  //for testing only --from here

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const handleLogin = () => {
    const params = new URLSearchParams(searchParams);
    params.set("authType", "login");
    router.push(`${pathname}?${params.toString()}`);
  };
  const handleSignup = () => {
    const params = new URLSearchParams(searchParams);
    params.set("authType", "signup");
    router.push(`${pathname}?${params.toString()}`);
  };
  const [activeUrl, setActiveUrl] = useState<string>("");
  useEffect(() => {
    const auth = searchParams.get("authType");
    setActiveUrl(auth as string);
  }, [activeUrl, searchParams]);

  // ----to here
  return (
    <div className="flex mt-24 justify-center font-serif w-full gap-4">
      {/* Design 1 */}
      <Dialog>
        <DialogTrigger className="font-serif px-2 py-1 rounded-md border-2 font-semibold border-green-600 hover:bg-green-600">
          Auth design 1
        </DialogTrigger>
        <DialogContent className="px-4 sm:px-20 md:px-32 overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="hidden">Register user</DialogTitle>
          </DialogHeader>
          <Tabs
            defaultValue={activeUrl ? activeUrl : "login"}
            className="w-full flex flex-col items-center justify-center gap-3 sm:gap-5"
          >
            <TabsList className="rounded-full p-2 bg-gray-200  font-semibold sm:text-lg">
              <TabsTrigger
                onClick={handleLogin}
                value="login"
                className="rounded-full w-full"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                onClick={handleSignup}
                value="signup"
                className="rounded-full w-full"
              >
                Signup
              </TabsTrigger>
            </TabsList>
            <TabsContent className="w-72 sm:w-full" value="login">
              <Login />
            </TabsContent>
            <TabsContent className="w-72 sm:w-full" value="signup">
              <Signup />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      {/* Design 2 */}
      <Dialog>
        <DialogTrigger className="font-serif px-2 py-1 rounded-md border-2 font-semibold border-green-600 hover:bg-green-600">
          Auth design 2
        </DialogTrigger>
        <DialogContent className="px-4 sm:px-20 md:px-32 overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="hidden">Register user</DialogTitle>
          </DialogHeader>
          <Tabs
            defaultValue="login"
            className="w-full flex flex-col items-center justify-center gap-3 sm:gap-5"
          >
            <TabsList className="rounded-full p-2 bg-gray-200  font-semibold sm:text-lg">
              <TabsTrigger value="login" className="rounded-full w-full">
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" className="rounded-full w-full">
                Signup
              </TabsTrigger>
            </TabsList>
            <TabsContent className="w-72 sm:w-full" value="login">
              <Login1 />
            </TabsContent>
            <TabsContent className="w-72 sm:w-full" value="signup">
              <Signup1 />
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
