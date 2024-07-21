// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotificationProvider } from './NotificationContext'; // Import the NotificationProvider
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import LoginForm from './pages/signIn';
import LabBooking from './pages/booking';
import CalendarView from './pages/View';
import Errmsg from './pages/errmsg';
import Notification from './pages/Notification'; // Import the Notification component
import UserSingIn from './pages/userSingIn';
import AdminLogin from './pages/AdminLogin';
import { UserProvider } from './components/UserContext';
import ForgotPassword from './pages/ForgotPassword';
import AdminHome from './pages/AdminHome';
import AdminProfile from './pages/AdminProfile';
import AddUser from './pages/AddUser';
import ViewUser from './pages/ViewUser';
import UserList from './pages/UserList';
import EditUser from './pages/editUser';
import ToHome from './pages/ToHome';
import CalendarViewTo from './pages/ToView';
import ToProfile from './pages/ToProfile';
import ToNotification from './pages/ToNotification';
import LecturerInstructorProfile from './pages/LecturerInstructorProfile';
import UploadPage from './pages/UploadPage';
import DisplayImagesPage from './pages/DisplayImagesPage';
import EditImg from './pages/EditImg';

function App() {
  return (
    <UserProvider>
    <NotificationProvider> {/* Wrap the entire application with NotificationProvider */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/signin" element={<LoginForm />} />
            <Route path="/booking" element={<LabBooking />} />
            <Route path="/view" element={<CalendarView />} />
            <Route path="/errmsg" element={<Errmsg />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/userSingIn" element={<UserSingIn />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/adminprofile" element={<AdminProfile />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/viewuser" element={<ViewUser />} />
            <Route path="/UserList" element={<UserList />} />
            <Route path="/editUser" element={<EditUser />} />
            <Route path="/toHome" element={<ToHome />} />
            <Route path="/ToView" element={<CalendarViewTo />} />
            <Route path="/toProfile" element={<ToProfile />} />
            <Route path="/lecturerInstructorProfile" element={<LecturerInstructorProfile />} />
            <Route path="toNotification" element={<ToNotification />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/display" element={<DisplayImagesPage />} />
            <Route path="/editImg" element={<EditImg />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NotificationProvider>
    </UserProvider>
  );
}

export default App;
