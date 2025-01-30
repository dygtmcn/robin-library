import React from "react";
import "../styles/DashboardContent.css";
import BookList from "./BookList";
import Footer from "./Footer"; // Footer bileşenini ekledik

const DashboardContent = () => {
  return (
    <div className="dashboard-summary">
      <div className="dashboard-box-container">
        {/* Profil ve Okuma İstatistikleri */}
        <div className="dashboard-box color-red profile-box">
          <div className="profile-header">
            <div className="profile-picture">A</div>
            <h2 className="profile-name">Ada</h2>
          </div>
          <div className="profile-info">
            <p>Books Read This Year: 11</p>
            <p>Active Challenges: 3</p>
            <p>Currently Reading: The Magic Treehouse</p>
            <p>Favorite Genre: Fantasy</p>
            <p>Last Book Finished: The Little Prince</p>
          </div>
        </div>

        {/* Sağdaki Kutuda Butonlar */}
        <div className="dashboard-box color-blue action-box">
          <h2>Track Your Progress</h2>
          <p>Monitor your reading habits, track books you've read, and stay motivated with challenges.</p>

          {/* Butonlar */}
          <div className="dashboard-buttons">
            <button className="dashboard-btn">Challenges</button>
            <button className="dashboard-btn">Reading Recommendations</button>
            <button className="dashboard-btn">Reports</button>
            <button className="dashboard-btn">Wish List</button>
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        {/* Kitap Listesi */}
        <BookList />
      </div>
    </div>
  );
};

export default DashboardContent;

