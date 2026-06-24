import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useAuth } from "../context/AuthContext";

function Login() {

  const { setUser } = useAuth();

  const handleLogin = async () => {

    try {

      const result = await signInWithPopup(
        auth,
        provider
      );

      setUser(result.user);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <h1>Chat App Login</h1>

      <button
        onClick={handleLogin}
        style={{
          padding: "12px 20px",
          cursor: "pointer"
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;