import Image from "next/image";
import RootLayout from "./layout";
import ProtectedRoute from "@/components/protectedRoute";
import Home from "@/components/home/home";

export default function main() {
  return (
<ProtectedRoute>
  <Home></Home>
</ProtectedRoute>

  );
}
