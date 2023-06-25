import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Fragment } from "react";
import AuthState from "./context/Auth/AuthState";
import AdminDashBoard from "./pages/Admin/admindashboard";
import AdminAddUser from "./pages/Admin/adminadduser";
import AdminViewUser from "./pages/Admin/adminviewuser";
import AdminProfile from "./pages/Admin/adminprofile";
import StaffProfile from "./pages/Staff/staffprofile";
import StaffAddUser from "./pages/Staff/staffadduser";
import StaffDashBoard from "./pages/Staff/staffdashboard";
import StaffViewUser from "./pages/Staff/staffviewuser";
import UserProfile from "./pages/User/userprofile";
import { BackRoutes, options } from "./Data/Dashboarddata";
import UserDashBoard from "./pages/User/userdashboard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthState>
      <Fragment>
        <div className="App">
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              success: {
                iconTheme: {
                  primary: "#E8A9A9",
                  secondary: "#fff",
                },
              },
            }}
          />
          <Routes>
            <Route path="/" element={<Home />} />

            {/*+++++++++++++++++++++++++++++++++++++++++Admin++++++++++++++++++++++++++++++++++++++++ */}

            <Route
              path="/AdminDashBoard"
              element={<AdminDashBoard DashBoardLinks={options[0].Navs} />}
            />
            <Route path="/adminaddUser" element={<AdminAddUser BackRoutes={BackRoutes[0]}/>} />
            <Route path="/adminviewUser" element={<AdminViewUser BackRoutes={BackRoutes[0]}/>} />
            <Route path="/adminmyProfile" element={<AdminProfile BackRoutes={BackRoutes[0]}/>} />

            {/*+++++++++++++++++++++++++++++++++++++++++Staff++++++++++++++++++++++++++++++++++++++++ */}

            <Route
              path="/StaffDashBoard"
              element={<StaffDashBoard DashBoardLinks={options[1].Navs} />}
            />
            <Route path="/staffaddUser" element={<StaffAddUser BackRoutes={BackRoutes[1]}/>} />
            <Route path="/staffviewUser" element={<StaffViewUser BackRoutes={BackRoutes[1]}/>} />
            <Route path="/staffmyProfile" element={<StaffProfile BackRoutes={BackRoutes[1]}/>} />

            {/*+++++++++++++++++++++++++++++++++++++++++User++++++++++++++++++++++++++++++++++++++++ */}

            <Route
              path="/UserDashBoard"
              element={<UserDashBoard DashBoardLinks={options[2].Navs} />}
            />
            <Route path="/usermyProfile" element={<UserProfile BackRoutes={BackRoutes[2]}/>} />
          </Routes>
        </div>
      </Fragment>
    </AuthState>
  );
}

export default App;
