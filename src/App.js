import React from "react";
import Sidebar from "./Components/Sidebar";
import Topbar from "./Components/Topbar";
import MainSection from "./Components/MainSection";

function App() {
  return (
    <>
      <Sidebar />
      <div className="container w-full">
        <Topbar />
        <MainSection />
      </div>
    </>
  );
}

export default App;
