export const metadata = {
  title: "EcoRuta",
  description: "Logística ecológica"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ background: "black", color: "white", fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
