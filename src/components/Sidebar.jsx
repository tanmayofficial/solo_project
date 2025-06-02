import React, { useState } from 'react';
import './Sidebar.css';
import { LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

function Sidebar({ isOpen }) {
  const [isEventsOpen, setIsEventsOpen] = useState(true);
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('New Requests');
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === 'Events') {
      navigate('/events');
    } else if (item === 'New Requests') {
      navigate('/');
    } else if (item === 'Estimate') {
      
    } else if(item === 'Events Requests')  {
      navigate('/events-requests');
    }
    else if (item === 'Partial Requests') {
      
    } else if (item === 'Positions') {
      
    } else if (item === 'Contractors') {
      
    } else if (item === 'Admins') {
      
    } else if (item === 'Clients') {
      
    } else if (item === 'Coordinators') {
      
    } else if (item === 'Profile') {
      
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">

        <div className="sidebar-header">

        </div>
        <ul className="sidebar-menu">

          <li className={`menu-item ${isEventsOpen ? 'open' : ''}`} onClick={() => setIsEventsOpen(!isEventsOpen)}>
            Events <span className="arrow">{isEventsOpen ? '▲' : '▼'}</span>
          </li>
          {isEventsOpen && (
            <ul className="submenu">
              <li className={selectedItem === 'New Requests' ? 'selected' : ''} onClick={() => handleItemClick('New Requests')}>New Requests</li>
              <li className={selectedItem === 'Estimate' ? 'selected' : ''} onClick={() => handleItemClick('Estimate')}>Estimate</li>
              <li className={selectedItem === 'Events Requests' ? 'selected' : ''} onClick={() => handleItemClick('Events Requests')}>Events</li>
              <li className={selectedItem === 'Partial Requests' ? 'selected' : ''} onClick={() => handleItemClick('Partial Requests')}>Partial Requests</li>
            </ul>
          )}


          <li className={selectedItem === 'Positions' ? 'selected' : ''} onClick={() => handleItemClick('Positions')}>Positions</li>
          <li className={selectedItem === 'Contractors' ? 'selected' : ''} onClick={() => handleItemClick('Contractors')}>Contractors</li>


          <li className={`menu-item ${isUsersOpen ? 'open' : ''}`} onClick={() => setIsUsersOpen(!isUsersOpen)}>
            Users <span className="arrow">{isUsersOpen ? '▲' : '▼'}</span>
          </li>
          {isUsersOpen && (
            <ul className="submenu">
              <li className={selectedItem === 'Admins' ? 'selected' : ''} onClick={() => handleItemClick('Admins')}>Admins</li>
              <li className={selectedItem === 'Clients' ? 'selected' : ''} onClick={() => handleItemClick('Clients')}>Clients</li>
              <li className={selectedItem === 'Coordinators' ? 'selected' : ''} onClick={() => handleItemClick('Coordinators')}>Coordinators</li>
            </ul>
          )}

          <li className={selectedItem === 'Profile' ? 'selected' : ''} onClick={() => handleItemClick('Profile')}>Profile</li>

        </ul>
        <div className="sidebar-footer">

          <button>
            <span><LuLogOut /></span>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;