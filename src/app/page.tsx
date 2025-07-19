'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Cormorant_Garamond } from 'next/font/google'
import './inicio.css'
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '700' })

export default function Home() {
  const [animationKey, setAnimationKey] = useState(0)
  const router = useRouter()

  // Reinicia las animaciones al entrar a la página
  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [])

  const collage = [
    {
      src: '/imagenes/c1.png',
      className: 'absolute object-cover grayscale opacity-0 float-after-up-down',
      style: { top: '10%', right: '5%', rotate: '-5deg' },
    },
    {
      src: '/imagenes/c2.png',
      className: 'absolute object-cover grayscale opacity-0 float-after-diagonal-1',
      style: { top: '35%', right: '25%', rotate: '8deg' },
    },
    {
      src: '/imagenes/c3.png',
      className: 'absolute object-cover grayscale opacity-0 float-after-left-right',
      style: { top: '60%', right: '8%', rotate: '-3deg' },
    },
    {
      src: '/imagenes/c4.png',
      className: 'absolute object-cover grayscale opacity-0 float-after-diagonal-2',
      style: { top: '20%', right: '30%', rotate: '12deg' },
    },
    {
      src: '/imagenes/c5.png',
      className: 'absolute object-cover grayscale opacity-0 float-after-diagonal-2',
      style: { top: '50%', right: '40%', rotate: '12deg' },
    },
  ]


  return (
    <div className="relative w-full min-h-screen overflow-y-auto md:overflow-hidden bg-black text-white">
      {/* Fondo collage con key para reiniciar animaciones */}
      <div key={animationKey} className="absolute inset-0 overflow-hidden z-0">
        {collage.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={`collage-${index}`}
            width={300}
            height={300}
            className={`absolute object-cover grayscale opacity-0 ${img.className}`}
            style={{ ...img.style, position: 'absolute' }}
          />
        ))}
      </div>

      {/* Texto izquierdo hasta el centro */}
<div className="relative z-10 flex flex-col justify-center items-start px-8 md:px-20 pt-24 md:pt-2 w-full max-w-4xl text-left text-animate min-h-screen">
        <h1 className={`text-5xl md:text-7xl leading-tight whitespace-nowrap ${cormorant.className}`}>
          Patio de Memorias
        </h1>

        <p className="mt-2 text-sm text-gray-300 max-w-4xl text-justify leading-loose">
          Patio de Memorias es un museo digital interactivo creado en la plataforma ArtSteps. En este espacio simbólico de memoria, infancia y resistencia, los visitantes pueden recorrer las cartas escritas por cuatro personas que fueron ingresaron a las FARC siendo menores de edad o habitaron espacios atravesados directamente por el contexto del conflicto armado colombiano.
          <br /><br />
          A través de un ejercicio de escritura creativa, cada participante evocó su infancia y le escribió una carta a un objeto o juguete significativo de esa etapa. Cada texto está acompañado por una voz en off, generando una experiencia íntima, sensorial y profundamente humana.
          <br /><br />
          Este museo parte de una verdad compartida: todos fuimos niños y niñas alguna vez, y muchos aún conservamos un objeto que nos conecta con esos años. Sin embargo, para quienes vivieron el conflicto siendo menores, ese derecho fue interrumpido o arrebatado, junto con la posibilidad de recordar sin dolor.
          <br /><br />
          Esta es una propuesta comunicativa que busca activar la memoria desde lo humano y la ternura resistida, prevenir el reclutamiento forzado desde la empatía y resignificar las infancias interrumpidas con dignidad, cuidado y escucha.
        </p>

        <div className="mt-6 flex items-center gap-6">
          <button
            onClick={() => router.push('/patio')}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold transition duration-300 w-fit cursor-pointer relative overflow-hidden group "
          >
            <span className="relative z-10 ">Iniciar el recorrido</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 group-hover:animate-pulse-flash "></span>
          </button>

          {/* Imagen QR al lado derecho */}
          <Image
            src="/imagenes/qr2.png"
            alt="Código QR"
            width={180}
            height={180}
            className="hidden md:block rounded-lg border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
          />


        </div>



      </div>

      <Footer />

    </div>
  )
}
