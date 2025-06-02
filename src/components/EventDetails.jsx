import React, { useState } from 'react';
import './EventDetails.css';

function EventDetails() {
  const meetingRooms = [
    { id: 1, name: 'Meeting Room 1', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
    { id: 2, name: 'Meeting Room 2', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
    { id: 3, name: 'Meeting Room 3', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
    { id: 4, name: 'Meeting Room 4', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
    { id: 5, name: 'Meeting Room 5', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
  ];

  const allPositions = [
    { id: 1, position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20, contractor: 'Select Contractor' },
    { id: 2, position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20, contractor: 'Select Contractor' },
    { id: 3, position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20, contractor: 'Select Contractor' },
    { id: 4, position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20, contractor: 'Select Contractor' },
    { id: 5, position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20, contractor: 'Select Contractor' },
    { id: 6, position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20, contractor: 'Select Contractor' },
    { id: 7, position: 'Camera 2 (Video)', time: '10 am - 8 pm', info: 'LP backup', quantity: 15, contractor: 'Select Contractor' },
    { id: 8, position: 'Sound Mixer', time: '9 am - 7 pm', info: 'Digital', quantity: 5, contractor: 'Select Contractor' },
    { id: 9, position: 'Lighting Technician', time: '10 am - 6 pm', info: 'Stage Lighting', quantity: 10, contractor: 'Select Contractor' },
    { id: 10, position: 'Stage Manager', time: '8 am - 9 pm', info: 'Main Stage', quantity: 2, contractor: 'Select Contractor' },
    { id: 11, position: 'Camera 3 (Still)', time: '11 am - 5 pm', info: 'Photography', quantity: 8, contractor: 'Select Contractor' },
    { id: 12, position: 'Camera 4 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20, contractor: 'Select Contractor' },
    { id: 13, position: 'Sound Engineer', time: '10 am - 8 pm', info: 'Audio Setup', quantity: 7, contractor: 'Select Contractor' },
    { id: 14, position: 'Lighting Assistant', time: '10 am - 6 pm', info: 'Stage Lighting', quantity: 10, contractor: 'Select Contractor' },
    { id: 15, position: 'Production Assistant', time: '8 am - 9 pm', info: 'General Support', quantity: 5, contractor: 'Select Contractor' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalItems = allPositions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPositions = allPositions.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="event-details-content">
      <div className="header-row">
        <span className="back-arrow">←</span>
        <h2>Event Name (Venue Details)</h2>
      </div>

      <div className="tabs">
        <button className="tab-button">Event Details</button>
        <button className="tab-button active">Assign Coordinator/Contractor</button>
        <button className="tab-button">Session Management</button>
        <button className="tab-button">Generate SOW</button>
      </div>

      <div className="content-sections-container">
        <div className="left-section">
          <div className="content-section assign-coordinator-section">
            <h3>Assign Coordinator</h3>
            <div className="coordinator-inputs">
              <input type="text" placeholder="Search Coordinator" />
            </div>
            <span className="add-new-coordinator-button">Add New Coordinator</span>
          </div>
          <h3>Assign Contractor</h3>

          <div className="meeting-rooms-list">
            {meetingRooms.map(room => (
              <div key={room.id} className="meeting-room-card">
                <h4>
                  {room.name} <span className="star-icon">✦</span><span className="position-count">{room.positions} Positions</span>
                </h4>
                <p>Start from {room.startDate} - Ends at {room.endDate}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="right-section">
          <div className="event-details-header">
            <h3>Event Name (Venue Here)</h3>
            <div className="date-venue-info">
              <div className="date-input-container">
                Start: <input type="date" defaultValue="2023-12-12" />
              </div>
              <div className="date-input-container">
                Ends: <input type="date" defaultValue="2023-12-15" />
              </div>
            </div>
          </div>
          <p className="venue-address">Venue Address: Some Location 12, Name Here, City, State.</p>

          <div className="positions-table">
            <h4>Positions</h4>
            <table>
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Time</th>
                  <th>Info</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentPositions.map(pos => (
                  <tr key={pos.id}>
                    <td>{pos.position}</td>
                    <td>{pos.time}</td>
                    <td>{pos.info}</td>
                    <td>{pos.quantity}</td>
                    <td>
                      <select>
                        <option>{pos.contractor}</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <span
                className={`pagination-arrow ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={handlePrevPage}
              >
                ←
              </span>

              {[...Array(totalPages)].map((_, index) => (
                <span
                  key={index}
                  className={`pagination-dot ${currentPage === index + 1 ? 'active' : ''}`}
                >
                </span>
              ))}
              <span
                className={`pagination-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={handleNextPage}
              >
                →
              </span>
            </div>
          </div>

          <div className="save-button-container">
            <button className="save-edits-button">Save Edits</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;