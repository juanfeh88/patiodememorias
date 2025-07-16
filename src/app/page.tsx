'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Cormorant_Garamond } from 'next/font/google'
import './inicio.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: '700' })

export default function Home() {
  const [animationKey, setAnimationKey] = useState(0)
  const router = useRouter()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

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
      style: { top: '35%', right: '15%', rotate: '8deg' },
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
  ]


  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
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
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 w-full max-w-4xl text-left text-animate">
        <h1 className={`text-5xl md:text-7xl leading-tight whitespace-nowrap ${cormorant.className}`}>
          Patio de Memorias
        </h1>

        <p className="mt-2 text-sm text-gray-300 max-w-4xl">
          <span className="text-2xl font-bold block mb-4 whitespace-nowrap">
            PATIO DE MEMORIAS: UN HOMENAJE A LA INFANCIA MARCADA POR LA GUERRA
          </span>
          Este espacio recoge los recuerdos de quienes vivieron el conflicto armado colombiano desde su niñez. A través de objetos personales que sobrevivieron al tiempo y al dolor, reconstruimos fragmentos de vida, dignidad y humanidad.
          <br />
          <br />
          Patio de Memorias es un acto de memoria, reconciliación y escucha profunda. Un lugar donde las voces silenciadas florecen nuevamente.
        </p>
        <button
          onClick={() => router.push('/patio')}
          className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold transition duration-300 w-fit cursor-pointer relative overflow-hidden group"
        >
          <span className="relative z-10">Iniciar el recorrido</span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 group-hover:animate-pulse-flash"></span>
        </button>


      </div>


    </div>
  )
}
