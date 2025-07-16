"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Línea divisoria */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-xs sm:text-sm text-gray-400">
          <p>© 2025 Patio de Memorias — Un espacio para escuchar, sanar y recordar.</p>
        </div>
      </div>
    </footer>
  );
}
