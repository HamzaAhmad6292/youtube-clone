"use Client"

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
      <body className={inter.className}>{children}</body>
      </StoreProvider>
    
    </html>
  );  
}
