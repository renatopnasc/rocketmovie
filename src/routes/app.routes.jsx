import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Create } from "../pages/Create";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<Create />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
