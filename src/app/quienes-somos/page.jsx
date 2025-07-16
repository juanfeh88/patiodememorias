"use client";
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const integrantes = [
    {
      nombre: "Astrid Marcela Santander Sanchez",
      descripcion:
        "Comunicadora social y politóloga .",
      imagen: "/imagenes/Presi2.png",
    },
    {
      nombre: "Carlos Rodríguez",
      descripcion:
        "Antropólogo con experiencia en trabajo con víctimas del conflicto armado.",
      imagen: "/imagenes/integrante2.jpg",
    },
    {
      nombre: "Lucía Gómez",
      descripcion:
        "Diseñadora visual especializada en narrativas gráficas para la paz.",
      imagen: "/imagenes/integrante3.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <Header />

      {/* HERO */}
      <main className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <h1
          className="text-5xl font-extrabold text-white"
          data-aos="fade-up"
        >
          ¿Quiénes somos?
        </h1>
        <p
          className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Somos un equipo comprometido con la escucha, la memoria y la dignificación
          de las voces silenciadas. Creemos que, a través de los recuerdos, los objetos y las
          palabras, es posible sanar y construir paz.
        </p>
      </main>

      {/* HISTORIA */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-16 gap-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src="/imagenes/1.png"
            alt="Nuestro equipo"
            className="rounded-xl shadow-lg grayscale hover:grayscale-0 transition duration-500 w-full max-w-md mx-auto"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4 text-white">Nuestra historia</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            El Patio de Memorias nació del encuentro con jóvenes y adultos marcados por
            la guerra. Nos acercamos a sus historias no desde el juicio, sino desde la escucha.
            Este espacio recoge objetos cargados de memoria y humanidad, y busca sembrar
            semillas de reconciliación.
          </p>
        </div>
      </section>

      {/* INTEGRANTES */}
      <section className="bg-black-900 py-16 px-8 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-12" data-aos="zoom-in">
          Integrantes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {integrantes.map((persona, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{persona.nombre}</h3>
              <p className="text-sm text-gray-400">{persona.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
            <Footer />
      
    </div>
  );
}
