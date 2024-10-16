import { Route, Routes } from "react-router-dom";
import Top from "../pages/Top";
import ShowTermList from "../pages/terms/list/ShowTermList";
import RegisterTerm from "../pages/terms/register/RegisterTerm";
import ShowTermDetail from "../pages/terms/detail/ShowTermDetail";
import EditTerm from "../pages/terms/edit/EditTerm";

const RouteConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Top />} />
      <Route path="/terms/list" element={<ShowTermList />} />
      <Route path="/terms/register" element={<RegisterTerm />} />
      <Route path="/terms/:id/detail" element={<ShowTermDetail />} />
      <Route path="/terms/:id/edit" element={<EditTerm />} />
    </Routes>
  );
};

export default RouteConfig;
