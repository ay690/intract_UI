import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Academy } from "./components/index";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/academy");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-custom-black">
      <Routes>
        <Route path="/academy" element={<Academy />} />
      </Routes>
    </div>
  );
}

export default App;
