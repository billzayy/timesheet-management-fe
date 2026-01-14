import { ThemeProvider } from "@/components/layout/theme-provider";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import MyTimesheetPage from "./pages/MyTimesheet";
import MyProfilePage from "./pages/MyProfilePage";
import LoginPage from "./pages/LoginPage"
import { Toaster } from "sonner";
import UserManagement from "./pages/UserManagement";


function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route element={<HomePage />}>
            <Route index element={<Navigate to="/mytimesheet" replace />} />
            <Route path="mytimesheet" element={<MyTimesheetPage />} />
            <Route path="myprofile" element={<MyProfilePage />} />
            <Route path="user" element={<UserManagement />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
        <Toaster theme='light' richColors />
      </Router>
    </ThemeProvider>
  )
}

export default App
