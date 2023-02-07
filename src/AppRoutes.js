import { Route, Routes } from "react-router-dom";

import { Favourites } from "./pages/Favourites";
import { Home } from "./pages/Home";
import { Popular } from "./pages/Popular";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/popular" element={<Popular />} />
    </Routes>
  );
};
