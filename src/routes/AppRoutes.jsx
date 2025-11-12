import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import TeacherLayout from "../layouts/TeacherLayout";

// General Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admissions from "../pages/Admissions";
import Programmes from "../pages/Programmes";
import NotFound from "../pages/NotFound";

// Auth Pages
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

// Admin Pages
import AdminDashboard from "../features/admin/pages/AdminDashboard";
import AdminUsers from "../features/admin/pages/Users";
import AdminCourses from "../features/admin/pages/Courses";
import AdminPayments from "../features/admin/pages/Payments";

// Teacher Pages
import TeacherDashboard from "../features/teacher/pages/Dashboard";
import TeacherCoursesPage from "../features/teacher/pages/CoursesPage";
import TeacherGradesPage from "../features/teacher/pages/GradesPage";

// Student Pages
import StudentDashboard from "../features/student/pages/Dashboard";
import StudentCourses from "../features/student/pages/Courses";
import StudentGrades from "../features/student/pages/Grades";
import StudentSchedule from "../features/student/pages/Schedule";
import StudentPayment from "../features/student/pages/Payment";
import StudentReclamations from "../features/student/pages/Reclamations";

// Shared Dashboard Pages
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Notifications from "../pages/Notifications";

// Route Protection
import ProtectedRoute from "../routes/ProtectedRoute";

const AppRoutes = () => {
    // role is available via userReducer when needed; do not shadow unused variable here
    // const { role } = useSelector((state) => state.userReducer);

    return (
        <Routes>
            {/* Routes Publiques */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/programmes" element={<Programmes />} />
            </Route>

            {/* Routes d'Authentification */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Routes Protégées pour l'Admin */}
            <Route 
                path="/admin" 
                element={
                    <ProtectedRoute allowedRoles={['admin']}>
                        <MainLayout />
                    </ProtectedRoute>
                }
            >
                {/* Rediriger /admin vers /admin/dashboard */}
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="courses" element={<AdminCourses />} />
                <Route path="payments" element={<AdminPayments />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Route>

            {/* Routes Protégées pour les Enseignants */}
            <Route 
                path="/teacher" 
                element={
                    <ProtectedRoute allowedRoles={['teacher']}>
                        <TeacherLayout />
                    </ProtectedRoute>
                }
            >
                {/* Rediriger /teacher vers /teacher/dashboard */}
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<TeacherDashboard />} />
                <Route path="courses" element={<TeacherCoursesPage />} />
                <Route path="grades" element={<TeacherGradesPage />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="notifications" element={<Notifications />} />
            </Route>

            {/* Routes Protégées pour les Étudiants */}
            <Route 
                path="/student" 
                element={
                    <ProtectedRoute allowedRoles={['student']}>
                        <MainLayout />
                    </ProtectedRoute>
                }
            >
                {/* Rediriger /student vers /student/dashboard */}
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<StudentDashboard />} />
                <Route path="courses" element={<StudentCourses />} />
                <Route path="grades" element={<StudentGrades />} />
                <Route path="schedule" element={<StudentSchedule />} />
                <Route path="payment" element={<StudentPayment />} />
                <Route path="reclamations" element={<StudentReclamations />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="notifications" element={<Notifications />} />
            </Route>

            {/* Page non trouvée */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
