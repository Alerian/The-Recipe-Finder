import { Route, Routes } from "react-router-dom";

import { Favourites } from "./pages/Favourites";
import { Home } from "./pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
};
