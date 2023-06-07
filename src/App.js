import React from "react";
import {Title} from "./components/Title";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-colmax-w-xl">
        <Title />
      </div>
    </div>
  );
};

export default App;

