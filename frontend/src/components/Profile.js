import React, { useState, useEffect } from 'react';
import userIconProfile from '../images/user.png';
import Buttons from '../components/editButton';
import { Link, useNavigate } from 'react-router-dom';
import settingIcon from '../images/setting_icon.png';
import '../components/profile.css';
import axios from 'axios';

export default function Profile({ profileRef }) {
  const navigate = useNavigate();
  const [userData, setUser] = useState('');
  const token = localStorage.getItem('token');
  console.log('token from admin profile component:', token);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users/tokenUser', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setUser(response.data);
        console.log('token details:', response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, [token]);

  useEffect(() => {
    if (!token) {
      setUser('');
    }
  }, [token]);

  const handleProfileSettingsClick = () => {
    if (userData.role === 'admin') {
      navigate('/adminprofile');
    } else if(userData.role === 'to') {
      navigate('/toProfile')
    } else {
      navigate('/user');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser('');
  };

  return (
    <div className='profile-container' ref={profileRef}>

      <div className='containerProfile-2'>
        <img src={userIconProfile} alt="user-icon" className='userIconProfile' />

        <div className='info'>
          <h4 className='infoh1'>
            {`${userData.firstName} ${userData.lastName}`}
          </h4>
          <h4 className='infoh2'>
            {userData.email}
          </h4>
        </div>

        <Link to="/" > 
          <Buttons className='profilebutton'text="Sign out"  onClick={handleSignOut}/>
        </Link>

      </div>

      <div className='containerProfile-3'>

        <img src={settingIcon} alt="setting-icon" className='settingIcon' />
        <span className='profile-settings-text' onClick={handleProfileSettingsClick}>
          Profile settings
        </span>
        
      </div>

    </div>
  );
}
