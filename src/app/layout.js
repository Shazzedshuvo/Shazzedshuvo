import "./globals.css";

export const metadata = {
  title: "Shazzed Portfolio",
  description: "Next.js Smooth Scroll Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}