import React, { useState } from 'react';
import '../components/booking.css';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import Profile from '../components/Profile'

export default function MyApp() {
  const [selectedDate, setSelectedDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [selectedRange, setSelectedRange] = useState("");
  const [description, setDescription] = useState("");
  const [showScheduling, setShowScheduling] = useState(false);

  const handleDateChange = (event) => {
    const inputDate = new Date(event.target.value);
    const options = { month: 'long', day: '2-digit', year: 'numeric' };
    const formattedDate = inputDate.toLocaleDateString('en-US', options);
    setSelectedDate(formattedDate);
  };

  const handleCheckButton = () => {
    setSelectedRange(`${fromTime} - ${toTime}`);
  };

  const handleSchedulingButtonClick = () => {
    setShowScheduling(true); // Show scheduling div when the button is clicked
  };

  const handleHideScheduling = () => {
    setShowScheduling(false); // Hide scheduling div when the close button is clicked
  };
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleUserIconClick = () => {
    setIsBoxVisible(!isBoxVisible);
  };

  return (
    <div>
      <Header onUserIconClick={handleUserIconClick} isProfileVisible={isBoxVisible}/>
      <div className="my-app">
        <div className="booking-body">
          <div class="right">
            <div class="Scheduling-button">
              <button className="scheduling" onClick={handleSchedulingButtonClick}>Scheduling poll</button>
            </div>
            {showScheduling && (
              <div class="scheduling-box" style={{ width: '40%', height: '30%', backgroundColor: '#055366', color: 'white' }}>
                <h3>Scheduling Poll</h3>
                <button className="close-button" onClick={handleHideScheduling}>X</button>
              </div>
            )}
            {!showScheduling && (
              <div className="container-11">
                <h3>CO1 Lab Availability</h3>
                <div className="green-rectangle">
                  {selectedDate}
                  <br />
                  {selectedRange}
                </div>
              </div>
            )}
          </div>
          <div class="left">
            <h1>Book Lab Session</h1>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
              <label htmlFor="InviteAttendees">Invite Attendees:</label>
              <input type="text" id="username" name="username" />
              <label htmlFor="date">Date:</label>
              <div className="inline-container">
                <input type="date" id="date" name="date" style={{ width: '150px' }} onChange={handleDateChange}/>
                <label htmlFor="fromDate">From:</label>
                <input type="text" id="fromDate" name="fromDate" style={{ width: '50px' }} onChange={(e) => setFromTime(e.target.value)} />
                <label htmlFor="toDate">To:</label>
                <input type="text" id="toDate" name="toDate" style={{ width: '50px' }} onChange={(e) => setToTime(e.target.value)} />
                <button className="check-button" onClick={handleCheckButton}>Check</button>
              </div>
              
              <label htmlFor="description">Description (Optional):</label>
              <textarea id="description" name="description" rows="2" cols="30" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short Description"/>
              <button className="check-button">Save</button>
              <button className="check-button">Cancel</button>
            </div>
          </div>
        </div>
        {isBoxVisible && <Profile />}
      </div>
    </div>
  );
}
