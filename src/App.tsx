// import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from "@/components/layout/theme-provider";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        {/* <Toaster theme='dark' richColors/> */}
      </Router>
    </ThemeProvider>
  )
}

export default App
