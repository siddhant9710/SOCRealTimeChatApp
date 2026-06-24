import "./App.css";
import Sidebar from "./components/sidebar";
import ChatWindow from "./components/chatwindow";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <ProtectedRoute>
    <div className="container">
      <Sidebar />
      <ChatWindow />
    </div>
    </ProtectedRoute>
  );
}

export default App;