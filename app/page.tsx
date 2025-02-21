import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Home = () => {
  return (
    <div className="flex mt-24 justify-center font-serif">
      <Dialog>
        <DialogTrigger className=" font-serif px-2 py-1 rounded-md border-2 font-semibold border-green-600 hover:bg-green-600">
          Login
        </DialogTrigger>
        <DialogContent className="w-3/4 h-3/4">
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
