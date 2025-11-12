import React from "react";
import { Outlet } from "react-router-dom";
import TeacherNavbar from "@/features/teacher/components/TeacherNavbar";
import Footer from "@/components/common/Footer";

const TeacherLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TeacherNavbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default TeacherLayout;
