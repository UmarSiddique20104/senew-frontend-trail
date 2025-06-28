import React from "react";
import Table from "./components/Table/Table";

const App = () => (
  <main className="min-h-screen w-full bg-[#e0e1e3] py-10">
    <h1 className="text-2xl text-center font-inter font-bold mb-6">
      Users Table
    </h1>
    <Table />
  </main>
);

export default App;
