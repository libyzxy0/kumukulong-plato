import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";

export default function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
    </>
  );
}