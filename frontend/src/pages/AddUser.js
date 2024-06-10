import React, {useState} from 'react'
import HeaderAdmin from '../components/HeaderAdmin';
import Buttons from '../components/submitButton';
import UserImageAdmin from '../images/user-image.png';
import { Link } from 'react-router-dom';
import '../components/adduser.css'
import Profile from '../components/Profile'
import axios from 'axios';

export default function AddUser() {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const [textContainerText, setTextContainerText] = useState("Add User Details");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const token = localStorage.getItem('token');
    
    

  const handleUserIconClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };
  const handleSave = async (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password,
      role
    }

    console.log('Attempting to add user with:', userData);
    try {
      const response = await axios.post('/api/users/add', userData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Add user response:', response.data);
      alert('User added successfully!');
      window.location.reload();
    } catch (error) {
    console.error('Error saving user:', error);
    alert('Error saving user');
  }
};

  return (
    <div className='main-container-admin'>
    
      <HeaderAdmin onUserIconClick={handleUserIconClick} isProfileVisible={isBoxVisible}/>
      <hr style={{height: '2px', backgroundColor: 'black', borderStyle: 'none', margin: 0}}/>
      <div className='container-1-admin'>
        <div className='container-2-admin'>
            <h3 className='text-container-admin'>{textContainerText}</h3>
          

          <div className='user-input-details-admin'>
          <form onSubmit={handleSave}>
        <label htmlFor="firstName" className="input-label-admin">First Name</label><br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="input-field-admin"
          onChange={(e) => setFirstName(e.target.value)}
        /><br />

        <label htmlFor="lastName" className="input-label-admin">Last Name</label><br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="input-field-admin"
          onChange={(e) => setLastName(e.target.value)}
        /><br />

        <label htmlFor="password" className="input-label-admin">Password</label><br />
            <input
              type="password"
              id="password"
              name="password"
              className="input-field-admin"
              onChange={(e) => setPassword(e.target.value)}
              />

        <label htmlFor="email" className="input-label-admin">Email</label><br />
        <input
          type="text"
          id="email"
          name="email"
          className="input-field-admin"
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label htmlFor="role" className="input-label-admin">Role</label><br />
              <select
                id="role"
                name="role"
                className="input-field-admin"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="to">To</option>
                <option value="lecturer">Lecturer</option>
                <option value="instructor">Instructor</option>
              </select><br />
      
            
              
              <div className="buttons">
                <Buttons type = "submit" text="Save" borderRadius="50px" width="125px"  height="50px" marginTop="20px" />
                <Link to='/adminhome'>
                <Buttons text="Cancel" borderRadius="50px" width="125px" height="50px" marginTop="20px" />
                </Link>
              </div>
              </form>
          </div>
        </div>
        <div className='container-3-admin'>
        <div className='user-logo-details-admin'>
            <img src={UserImageAdmin} alt="user-photograph" className='userImageAdmin' />
          </div>
        </div>
        {isBoxVisible && <Profile />}
        
      </div>
    </div>
  )
}