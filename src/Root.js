import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home1 } from "./components/Home1";
import { Home2 } from "./components/Home2";
import { Home3 } from "./components/Home3";
import { Login } from "./components/LogIn";
import { AddHouse } from "./components/AddHouse";

function Root() {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route exact path="/" element={<Home1 />}  />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route
            path="/addhouse"
            element={token ? <AddHouse /> : <Navigate to={"/login"} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<p>Bunaqa manzil yo'q!</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default Root;
