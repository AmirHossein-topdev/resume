"use client";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
}
