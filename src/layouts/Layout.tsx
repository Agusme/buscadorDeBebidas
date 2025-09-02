import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
    <Header/>
    <main className="container mx-auto py-16">
    <Outlet/> {/* permite que se renderice el contenido que tenga cada una de lass paginas envueltas en el layout */}
    </main>
    </>
  )
}
