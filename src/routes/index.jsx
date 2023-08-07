import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/notfound";
import Home from "../pages/home";


const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp