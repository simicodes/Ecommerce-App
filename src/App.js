import React from "react";
import { CreateContainer, Header, MainContainer } from "./components";

import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-16 md:mt-24 p-8 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            {/* Admin */}
            <Route path="/createitem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
