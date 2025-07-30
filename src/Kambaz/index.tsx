import { Routes, Route, Navigate } from "react-router";
import "./styles.css";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectedRoute";
import ProtectedCourseRoute from "./ProtectedCourseRoute"

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account/*" element={<Account />} />
          <Route path="Dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="Courses/:cid/*" element={
            <ProtectedRoute>
              <ProtectedCourseRoute>
                <Courses />
              </ProtectedCourseRoute>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </div>
  );
}