import React from "react";
import "./dashbord.css";

export const Home = () => {
  return (
    <div className="feed-container">
      <div className="feed-header">
        <h1 className="feed-title">Dashboard</h1>
        <span className="feed-count">Overview</span>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <div className="stat-info">
            <h3>Total Bookings</h3>
            <p>24</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-stethoscope"></i>
          </div>
          <div className="stat-info">
            <h3>Active Doctors</h3>
            <p>8</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-message"></i>
          </div>
          <div className="stat-info">
            <h3>New Messages</h3>
            <p>12</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <i className="fa-solid fa-users"></i>
          </div>
          <div className="stat-info">
            <h3>Total Patients</h3>
            <p>156</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-text">New booking from John Doe</span>
            <span className="activity-time">2 hours ago</span>
          </div>
          <div className="activity-item">
            <span className="activity-text">Dr. Ahmed added new schedule</span>
            <span className="activity-time">5 hours ago</span>
          </div>
          <div className="activity-item">
            <span className="activity-text">New message from Jane Smith</span>
            <span className="activity-time">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
