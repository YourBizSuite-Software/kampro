import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import VehicleCard from "../components/VehicleCard.jsx";
import { vehicles } from "../data/vehicles.js";
import logo from "../assets/kamLogo.png"; // 👈 import logo

export default function Home() {
  const featured = vehicles.slice(0, 6);

  return (
    <>
      {/* ---------- Logo Banner Section ---------- */}
      <section className="bg-slate-50 py-10">
        <div className="container flex justify-center">
          <img
            src={logo}
            alt="Kam Pro Auto Logo"
            className="h-60 md:h-72 w-auto object-contain"
          />
        </div>
      </section>

      {/* ---------- Hero Section ---------- */}
      <Hero />

      {/* ---------- Featured Vehicles ---------- */}
      <section className="container py-10">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Vehicles</h2>
          <Link to="/inventory" className="text-blue-600 underline">
            See all
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map((c) => (
            <VehicleCard key={c.id} car={c} />
          ))}
        </div>
      </section>
    </>
  );
}