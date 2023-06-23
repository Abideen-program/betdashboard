import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative px-2 md:px-4 pt-2 text-white">
      <Header onToggle={toggleHandler} />
      <div className="flex">
        <div
          className={`${
            toggle ? "" : "hidden"
          } absolute lg:relative lg:block bg-black`}
        >
          <Sidebar />
        </div>
        <div className="flex-1 w-full">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
