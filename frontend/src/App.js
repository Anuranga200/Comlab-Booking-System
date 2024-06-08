// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotificationProvider } from './NotificationContext'; // Import the NotificationProvider
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import AccountCreation from './pages/signup';
import LoginForm from './pages/signIn';
import MyApp from './pages/booking';
import CalendarView from './pages/View';
import Errmsg from './pages/errmsg';
import Notification from './pages/Notification'; // Import the Notification component
import UserSingIn from './pages/userSingIn';
import GetAllUsers from './pages/GetAllUsers';

function App() {
  return (
    <NotificationProvider> {/* Wrap the entire application with NotificationProvider */}
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/signup" element={<AccountCreation />} />
            <Route path="/signin" element={<LoginForm />} />
            <Route path="/booking" element={<MyApp />} />
            <Route path="/view" element={<CalendarView />} />
            <Route path="/errmsg" element={<Errmsg />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/userSingIn" element={<UserSingIn />} />
            <Route path="/getallusers" element={<GetAllUsers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NotificationProvider>
  );
}

export default App;
