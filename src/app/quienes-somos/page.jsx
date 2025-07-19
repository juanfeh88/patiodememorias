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
      nombre: "Marcela Santander Sánchez",
      descripcion:
        "Soy politóloga y comunicadora social de la Universidad del Cauca, con formación en investigación social por CLACSO. Me interesa la creación de contenidos, el análisis de medios y la comunicación política con enfoque de género, derechos humanos y construcción de paz. Me apasiona desarrollar proyectos creativos que articulen memoria, narrativa y participación desde una mirada sensible y crítica.",
      imagen: "/imagenes/i1.png",
    },
    {
      nombre: "Jineth Córdoba Calvo",
      descripcion:
        "Estudiante de Comunicación Social en la Universidad del Cauca. Se enfoca en la creación de contenido audiovisual y proyectos creativos, con especial interés en la memoria histórica y la paz. Su trabajo busca documentar y analizar el conflicto armado desde una perspectiva crítica, utilizando herramientas digitales para generar conciencia sobre temas sociales relevantes.",
      imagen: "/imagenes/i2.png",
    },
    {
      nombre: "Santiago Prieto",
      descripcion:
        "Patojo. Periodista. Estudiante de Comunicación Social de la Universidad del Cauca con énfasis en producción mediática y especial interés en el trabajo en comunidad, la investigación y el enfoque de región. Su trabajo se desarrolla en todo el espectro de la creatividad.",
      imagen: "/imagenes/i3.png",
    },
    {
      nombre: "Laura Sofía Cerón",
      descripcion:
        "Artista, defensora de Derechos Humanos desde hace 7 años y Comunicadora Social de la Universidad del Cauca. Con un interés especial en la educación popular, los procesos de vida comunitaria y las justas luchas en defensa y protección de la vida. Mi hogar y raíz es Pancitará, un pueblo Yanakuna de La Vega, Cauca, Macizo Colombiano.",
      imagen: "/imagenes/i4.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-350 via-gray-900 to-black text-white">
      <Header />

      {/* HERO */}
      <main className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-16">
        <h1
          className="text-5xl font-extrabold text-white"
          data-aos="fade-up"
        >
          ¿Quiénes somos?
        </h1>
      </main>

      {/* HISTORIA */}
      <section className="flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-16 gap-12">


        <div className="md:w-1/2 text-center md:text-left" data-aos="fade-left">

          <p className="text-lg text-gray-300 leading-relaxed">
            Nosotros somos un grupo conformado en el marco de un diplomado, que hace parte de un colectivo de comunicadores del departamento del Cauca. A través de este espacio, nos unimos con el propósito de compartir y fortalecer nuestras experiencias en el campo de la comunicación, aportando nuestra visión y compromiso con los temas sociales más relevantes de la región. Somos cuatro personas que creemos en el poder transformador de la comunicación y buscamos generar un impacto positivo en nuestras comunidades, siempre desde un enfoque crítico y colaborativo.
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
              className="bg-gray-900 p-9 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={persona.imagen}
                alt={persona.nombre}
                className="w-70 h-90 mx-auto mb-8 object-cover"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{persona.nombre}</h3>
              <p className="text-sm text-gray-300">{persona.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />

    </div>
  );
}
