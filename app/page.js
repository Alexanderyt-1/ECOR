export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      <h1 style={{ color: "#22c55e", fontSize: "40px" }}>EcoRuta</h1>
      <p>App funcionando sin errores 🚀</p>

      <button style={{
        marginTop: "20px",
        padding: "12px",
        background: "#22c55e",
        border: "none",
        borderRadius: "8px"
      }}>
        Solicitar servicio
      </button>
    </main>
  );
}
