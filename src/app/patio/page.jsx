'use client'
import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function PatioVirtual() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <Header />

      <main className="flex flex-col items-center justify-center px-4 pt-28 pb-12 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          data-aos="fade-up"
        >
          Recorrido Virtual
        </h1>

        <p
          className="text-lg text-gray-300 mb-8 max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explora nuestro espacio interactivo en 3D, donde los objetos y memorias toman forma viva.
        </p>

        <div
          className="w-full max-w-5xl aspect-video"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.artsteps.com/embed/6875bb8ce502dbb47b82fe03/560/315"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
