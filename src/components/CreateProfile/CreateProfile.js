import React, { useState } from "react";
import ReactIcon from "../ReactIcon/ReactIcon";

function CreateProfile() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div className="fixed flex justify-center w-full bottom-6 bg-transparent">
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Button text
          </button>
          <ReactIcon
            icon={"FaPlus"}
            onClick={() => setShow(false)}
            className="text-red-500 cursor-pointer"
          />
        </div>
      )}
    </>
  );
}

export default CreateProfile;
