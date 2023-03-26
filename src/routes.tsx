import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/classes/classes";
import ClassPage from "./pages/classPage/classPage";
import Index from "./pages/index";
import Layout from "./pages/layout";
import LoginPage from "./pages/login/login";
import MessagesPage from "./pages/messages/messages";
import Students from "./pages/classes/components/students"
import Assignments from "./pages/classes/components/assignments";
import LessonPlan from "./pages/classes/components/lessonPlan";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:classID" element={<ClassPage />} />
          <Route path="/classes/classID/students" element={<Students />}/>
          <Route  path='/classes/classID/assignments' element={<Assignments />}/>
          <Route path="/classes/classID/plan" element={<LessonPlan />}/>
          <Route path="/messages" element={<MessagesPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
