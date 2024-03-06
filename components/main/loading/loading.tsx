// import { ReloadIcon } from "@radix-ui/react-icons";
// import ReactDOM from "react-dom";

import { ReloadIcon } from "@radix-ui/react-icons";

export const SuspenseLoading = () => {
  // Create a portal that renders the modal into 'document.body' (top-level)
  //   return ReactDOM.createPortal(
  //     // The modal overlay
  //     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
  //       {/* The modal content */}
  //       <div className="bg-white p-6 rounded shadow-lg flex items-center">
  //         <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
  //         <span>Loading...</span>
  //       </div>
  //     </div>,
  //     document.body // The target container for the portal
  //   );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      {/* The modal content */}
      <div className="bg-white p-6 rounded shadow-lg flex items-center">
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
};
