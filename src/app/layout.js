import "./globals.css";
import NavBar from "@/components/navBar/NavBar";

export const metadata = {
  title: "Space Tourism Website",
  description: "Using Next.js",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <main>
        <NavBar />
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
