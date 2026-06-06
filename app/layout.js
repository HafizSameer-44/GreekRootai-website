import "./globals.css";

export const metadata = {
  title: "Greek Root AI",
  description: "Building Future With AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}