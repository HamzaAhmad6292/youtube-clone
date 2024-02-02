"use Client"

import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';

import rootReducer from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Provider store={rootReducer}>
      <body className={inter.className}>{children}</body>
        </Provider>
    
        </html>
  );  
}
