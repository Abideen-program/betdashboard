import Header from "./components/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="px-2 md:px-4 pt-2 text-white">
      <Header />
      <div className="flex">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
