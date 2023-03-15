import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/classes/classes";
import ClassPage from "./pages/classPage/classPage";
import Index from "./pages/index";
import Layout from "./pages/layout";
import LoginPage from "./pages/login/login";
import MessagesPage from "./pages/messages/messages";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:classID" element={<ClassPage />} />
          <Route path="/messages" element={<MessagesPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
