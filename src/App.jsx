import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import RegisterSubmit from "./pages/RegisterSubmit";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register-submit" element={<RegisterSubmit />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
