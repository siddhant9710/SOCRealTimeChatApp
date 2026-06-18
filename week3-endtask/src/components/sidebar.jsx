function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        Chat App
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search contacts..."
        />
      </div>

      <div className="contact-list">

        <div className="contact-card">John Doe</div>
        <div className="contact-card">Jane Smith</div>
        <div className="contact-card">Alex</div>
        <div className="contact-card">Sarah</div>

      </div>

    </div>
  );
}

export default Sidebar;