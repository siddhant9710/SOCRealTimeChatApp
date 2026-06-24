import { useAuth } from "../context/AuthContext";

function Sidebar() {

  const { user } = useAuth();

  return (
    <div className="sidebar">

      <div className="logo">

        {user && (
          <>
            <img
              src={user.photoURL}
              alt="Profile"
              width="60"
              height="60"
              style={{
                borderRadius: "50%",
                marginBottom: "10px"
              }}
            />

            <h3>{user.displayName}</h3>
          </>
        )}

        <h2>Chat App</h2>

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