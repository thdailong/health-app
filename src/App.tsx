import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import MyRecordPage from "./pages/my-record";
import MyColumnPage from "./pages/MyColumnPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="my-record" element={<MyRecordPage />} />
          <Route path="my-column" element={<MyColumnPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
