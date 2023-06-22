import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="px-4 pt-2 text-white">
      <Header />
      <div>
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
