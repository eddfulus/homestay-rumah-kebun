import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Homestay Rumah Kebun",
  description: "Spend Quality Time with your Family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        
        {children}
        
      </body>
    </html>
  );
}
