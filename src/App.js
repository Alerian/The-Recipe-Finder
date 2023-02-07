import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <section className="app">
        <Navbar />
        <AppRoutes />
      </section>
    </BrowserRouter>
  );
};
