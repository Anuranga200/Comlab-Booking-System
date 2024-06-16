import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import '../components/notification.css';
import Profile from '../components/Profile';

export default function Notification() {
  const [previewContent, setPreviewContent] = useState([]);
  const [labDetails, setLabDetails] = useState(null);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [showOkButton, setShowOkButton] = useState(false);
  const profileRef = useRef(null);
  const labDetailsRef = useRef(null); // Add this ref for the lab details box

  const notifications = {
    All: ['Notification 1 for All', 'Notification 2 for All', 'Notification 3 for All'],
    Unread: ['Notification 1 for Unread', 'Notification 2 for Unread', 'Notification 3 for Unread'],
    'Booking Confirmations': ['Notification 1 for Booking Confirmations', 'Notification 2 for Booking Confirmations', 'Notification 3 for Booking Confirmations'],
    Requests: ['Notification 1 for Requests', 'Notification 2 for Requests', 'Notification 3 for Requests'],
    Cancellations: ['Notification 1 for Cancellations', 'Notification 2 for Cancellations', 'Notification 3 for Cancellations'],
    Reminders: ['Notification 1 for Reminders', 'Notification 2 for Reminders', 'Notification 3 for Reminders'],
  };

  const labDetailsData = {
    'Notification 1 for All': 'Lab details for Notification 1 for All',
    'Notification 2 for All': 'Lab details for Notification 2 for All',
    'Notification 3 for All': 'Lab details for Notification 3 for All',
    'Notification 1 for Unread': 'Lab details for Notification 1 for Unread',
    'Notification 2 for Unread': 'Lab details for Notification 2 for Unread',
    'Notification 3 for Unread': 'Lab details for Notification 3 for Unread',
    'Notification 1 for Booking Confirmations': 'Lab details for Notification 1 for Booking Confirmations',
    'Notification 2 for Booking Confirmations': 'Lab details for Notification 2 for Booking Confirmations',
    'Notification 3 for Booking Confirmations': 'Lab details for Notification 3 for Booking Confirmations',
    'Notification 1 for Requests': 'Lab details for Notification 1 for Requests',
    'Notification 2 for Requests': 'Lab details for Notification 2 for Requests',
    'Notification 3 for Requests': 'Lab details for Notification 3 for Requests',
    'Notification 1 for Cancellations': 'Lab details for Notification 1 for Cancellations',
    'Notification 2 for Cancellations': 'Lab details for Notification 2 for Cancellations',
    'Notification 3 for Cancellations': 'Lab details for Notification 3 for Cancellations',
    'Notification 1 for Reminders': 'Lab details for Notification 1 for Reminders',
    'Notification 2 for Reminders': 'Lab details for Notification 2 for Reminders',
    'Notification 3 for Reminders': 'Lab details for Notification 3 for Reminders',
  };

  const handleButtonClick = (content) => {
    const notificationsContent = notifications[content] || [];
    setPreviewContent(notificationsContent);
    setLabDetails(null);
    setSelectedNotification(null);
    setShowOkButton(false);
  };

  const handleNotificationClick = (notification) => {
    setLabDetails(labDetailsData[notification]);
    setSelectedNotification(notification);
    setShowOkButton(notification.includes('Cancellations'));
  };

  const handleOkClick = () => {
    setLabDetails(null);
    setSelectedNotification(null);
    setShowOkButton(false);
  };

  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleUserIconClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  const handleClickOutside = (event) => {
    if (
      labDetailsRef.current && !labDetailsRef.current.contains(event.target)
    ) {
      setLabDetails(null);
      setSelectedNotification(null);
    }
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setIsBoxVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Header onUserIconClick={handleUserIconClick} isProfileVisible={isBoxVisible} />
      <div className="notification-container">
        <div className="left-side">
          <h2 className='title'>Notifications</h2>
          <ul className='toolbars'>
            <button className="toolbar-button" onClick={() => handleButtonClick('All')}>All</button>
            <button className="toolbar-button" onClick={() => handleButtonClick('Unread')}>Unread</button>
            <button className="toolbar-button" onClick={() => handleButtonClick('Booking Confirmations')}>Booking Confirmations</button>
            <button className="toolbar-button" onClick={() => handleButtonClick('Requests')}>Requests</button>
            <button className="toolbar-button" onClick={() => handleButtonClick('Cancellations')}>Cancellations</button>
            <button className="toolbar-button" onClick={() => handleButtonClick('Reminders')}>Reminders</button>
          </ul>
        </div>
        <div className="right-side">
          <div className="scroll-container">
            <ul className="preview-list">
              {previewContent.map((notification, index) => (
                <li
                  key={index}
                  onClick={() => handleNotificationClick(notification)}
                  className={notification === selectedNotification ? 'selected' : ''}
                >
                  {notification}
                </li>
              ))}
            </ul>
          </div>
          {labDetails && (
            <div ref={labDetailsRef} className="lab-details-box">
              <div className="lab-details">
                <h2>Lab Details</h2>
                <p style={{ color: '#205464' }}>{labDetails}</p>
                {showOkButton && (
                  <button onClick={handleOkClick} className="ok-button">
                    OK
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        {isBoxVisible && <Profile profileRef={profileRef} />}
      </div>
    </div>
  );
}
