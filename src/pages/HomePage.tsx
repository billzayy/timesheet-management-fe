import Navbar from "@/components/layout/navbar";
import Sidebar from "@/components/layout/sidebar";

function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div>Main Content</div>
      </div>
    </div>
  )
}

export default HomePage;
