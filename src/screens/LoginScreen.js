
import React, { useState, useContext } from "react";
import { UserContext } from "./../context/UserContext";

const LoginScreen = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const { setUser, setIsAdmin } = useContext(UserContext);

  const handleLogin = () => {
    if (!name) return;
    localStorage.setItem("geriapp-user", name);
    localStorage.setItem("geriapp-admin", pass === "1985" ? "true" : "false");
    setUser(name);
    setIsAdmin(pass === "1985");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {showInstallButton && (
        <button onClick={handleInstallClick} style={{ marginTop: '1rem', padding: '0.5rem', background: '#00ffff', border: 'none', borderRadius: '4px', color: '#000' }}>
          Nainstalovat GeriApp
        </button>
      )}

      {showInstallButton && (
        <button onClick={handleInstallClick} style={{ marginTop: "1rem", padding: "0.5rem", background: "#00ffff", border: "none", borderRadius: "4px", color: "#000" }}>
          Nainstalovat GeriApp
        </button>
      )}
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Georgia, serif"
    }}>
      <h2 style={{ marginBottom: 20 }}>Přihlášení do GeriApp Alfa</h2>
      <input
        type="text"
        placeholder="Jméno"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 10, marginBottom: 10, fontSize: 16 }}
      />
      <input
        type="password"
        placeholder="Heslo (pro admina)"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        style={{ padding: 10, marginBottom: 20, fontSize: 16 }}
      />
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          fontSize: 16,
          backgroundColor: "#0a369d",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: "pointer"
        }}
      >
        Přihlásit se
      </button>
    </div>
    </div>
  );
};

export default LoginScreen;
