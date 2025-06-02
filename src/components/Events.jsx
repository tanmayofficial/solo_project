import React, { useState } from 'react';
import './Events.css';

const Events = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedDate, setSelectedDate] = useState('');

    // Sample events data - replace with actual data from your backend
    const events = [
        {
            id: 1,
            name: "Tech Conference 2024",
            venue: "Convention Center",
            date: "2024-03-15",
            status: "upcoming",
            coordinator: "John Doe",
            contractor: "ABC Events"
        },
        {
            id: 2,
            name: "Annual Gala",
            venue: "Grand Hotel",
            date: "2024-04-20",
            status: "upcoming",
            coordinator: "Jane Smith",
            contractor: "XYZ Productions"
        },
        // Add more sample events as needed
    ];

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.venue.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;
        const matchesDate = !selectedDate || event.date === selectedDate;

        return matchesSearch && matchesStatus && matchesDate;
    });

    return (
        <div className="events-page">
            <div className="events-header">
                <h2>Events</h2>
                <div className="events-actions">
                    <button className="add-event-button">
                        <span className="plus-icon">+</span> Add New Event
                    </button>
                </div>
            </div>

            <div className="events-filters">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>

                <div className="filter-container">
                    <select
                        value={selectedStatus}
                        onChange={handleStatusChange}
                        className="filter-select"
                    >
                        <option value="all">All Status</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                    </select>

                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="date-filter"
                    />
                </div>
            </div>

            <div className="events-table-container">
                <table className="events-table">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Venue</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Coordinator</th>
                            <th>Contractor</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEvents.map(event => (
                            <tr key={event.id}>
                                <td>{event.name}</td>
                                <td>{event.venue}</td>
                                <td>{new Date(event.date).toLocaleDateString()}</td>
                                <td>
                                    <span className={`status-badge ${event.status}`}>
                                        {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                                    </span>
                                </td>
                                <td>{event.coordinator}</td>
                                <td>{event.contractor}</td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="edit-button">Edit</button>
                                        <button className="delete-button">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button className="pagination-arrow" disabled>←</button>
                <span className="pagination-dot active"></span>
                <span className="pagination-dot"></span>
                <span className="pagination-dot"></span>
                <button className="pagination-arrow">→</button>
            </div>
        </div>
    );
};

export default Events;