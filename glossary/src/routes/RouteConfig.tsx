import { Route, Routes } from "react-router-dom";
import Top from "../pages/Top";
import ShowTermList from "../pages/terms/list/ShowTermList";
import RegisterTerm from "../pages/terms/register/RegisterTerm";
import ShowTerm from "../pages/terms/detail/ShowTerm";
import EditTerm from "../pages/terms/edit/EditTerm";

const RouteConfig = () => {
  return (
    <Routes>
      <Route key="top" path='/' element={<Top />} />
      <Route key="terms/list" path="/terms/list" element={<ShowTermList />} />
      <Route key="terms/register" path="/terms/register" element={<RegisterTerm />} />
      <Route key="terms/detail" path="/terms/:id/detail" element={<ShowTerm />} />
      <Route key="terms/edit" path="/terms/:id/edit" element={<EditTerm />} />
    </Routes>
  );
};

export default RouteConfig;
