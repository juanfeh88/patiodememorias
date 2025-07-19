"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
const [hoveredSection, setHoveredSection] = useState(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrollPercent);

      if (window.innerHeight + scrollTop >= document.body.offsetHeight - 5) {
        setIsAtBottom(true);
      } else if (scrollTop < lastScrollY) {
        setIsAtBottom(false);
      }

      setLastScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const getHeaderColor = () => {
    if (scrollPercentage < 20) {
      return "rgba(0, 0, 0, 0.6)";
    } else if (scrollPercentage < 60) {
      return "rgba(0, 0, 0, 0.7)";
    } else {
      return "rgba(0, 0, 0, 0.9)";
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-700 ease-in-out transform ${
        isAtBottom ? "-translate-y-full" : "translate-y-0"
      } ${scrollPercentage > 5 ? "py-2 shadow-md" : "py-4"}`}
    >
      <div
        className="absolute inset-0 w-full h-full backdrop-blur-sm transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: getHeaderColor() }}
      />

      <div className="relative flex items-center justify-between px-6 container mx-auto">
{/* Espacio reservado para mantener el grosor del header */}
<div className="w-[50px] h-[50px] z-10" />


        {/* Menú centrado */}
        <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2 text-white font-medium z-10">
          <div className="flex space-x-6">
            <div
              className="relative group"
              onMouseEnter={() => setHoveredSection("inicio")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <Link href="/">Inicio</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>

            </div>

            <div
              className="relative group"
              onMouseEnter={() => setHoveredSection("patio")}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <Link href="/patio">Patio de memorias</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>

            </div>

            <div
              className="relative group"
              onMouseEnter={() => setHoveredSection("quienes")}
              onMouseLeave={() => setHoveredSection(null)}
            >
            <Link href="/quienes-somos">¿Quiénes somos?</Link>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              {hoveredSection === "quienes" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-10 w-72 bg-gray-800 text-white text-sm px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 text-justify">
                  Conoce al equipo detrás de este proyecto de memoria, reconciliación y escucha.
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* Botón menú móvil */}
        <button className="lg:hidden text-white z-10" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white z-40 flex flex-col justify-evenly items-center text-2xl font-semibold lg:hidden overflow-hidden"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
              <X size={40} />
            </button>

            {[
              { href: "/", text: "Inicio" },
              { href: "/patio", text: "Patio de memorias" },
              { href: "/quienes-somos", text: "¿Quiénes somos?" },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
