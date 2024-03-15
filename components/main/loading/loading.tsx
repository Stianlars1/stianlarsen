import { ReloadIcon } from "@radix-ui/react-icons";

export const SuspenseLoading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[1000000] flex justify-center items-center">
      {/* The modal content */}
      <div className="bg-white p-6 rounded shadow-lg flex items-center">
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
};
