import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/header'
import './App.css'
import Form from './components/form'

function App() {
  const [imageIndex, setImageIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev === 1 ? 2 : 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const imagePath = `/images/hero${imageIndex}.jpg`

  return (
    <>
      <div className=' overflow-hidden relative w-screen z-10'>
        {/* Logos */}
        <div
          className='logoConteiner 
        absolute
        flex px-6 gap-4 lg:gap-8 lg:justify-center lg:pl-16 justify-end items-center 
        bg-[#0b0c3f] 
        z-100 
        lg:w-[25%] w-[35%] h-[15%] 
        right-0 bottom-0'>
          <div className=' flex flex-col items-center gap-2 content-top'>
            <p className='text-gray-400 font-light text-sm'>Desarrolla</p>
            <img
              className='lg:w-16  w-12 '
              src='/images/lupaRecurso1.svg'
              alt=''
            />
          </div>
          <div className='h-[70%] w-[1px] bg-white/50 my-4' />
          <div className='flex flex-col items-center'>
            <p className='text-gray-400 font-light text-sm'>Gerencia</p>
            <img
              src='/images/lupaRecurso2.svg'
              className='w-24 h-16'
              alt=''
            />
          </div>
        </div>

        {/* Imagen de fondo animada */}
        <div className='  relative  h-screen justify-end items-center'>
          <div className=' w-3/3 h-3/3 '>
            <AnimatePresence mode='wait'>
              <motion.img
                key={imageIndex}
                src={imagePath}
                className='object-cover absolute w-full h-full'
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{
                  opacity: 0,
                  scale: 1,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                alt=''
              />
            </AnimatePresence>
          </div>

          {/* Rectángulo blanco con texto y formulario */}
          <div
            className='rectangulo absolute top-0 left-0
        bg-white
          w-full lg:w-[90vw] 2xl:w-[80vw] h-full 
          flex flex-col '>
            <div
              className='
              flex flex-col justify-around gap-4  
              lg:w-2/3 px-4 md:px-8 md:py-24 xl:px-16 xl:py-28  pt-24 
              h-full
              '>
              <div
                id='contenedorTexto'
                className='flex lg:flex-1   md:pt-2  responsive  lg:w-[100%] flex-col xl:gap-8 md:gap-4 gap-2 '>
                {/* Título animado letra por letra */}
                <motion.h1
                  className=' 
                  text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl  font-sans font-medium md:font-bold text-[#0b0c3f] mb-8 flex flex-wrap '
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                  }}>
                  ESTA ES TU OPORTUNIDAD PARA INVERTIR EN VACA MUERTA
                </motion.h1>

                {/* Subtítulo */}
                <div className='font-light md:font-medium flex flex-col  justify-between md:gap-4 '>
                  <motion.p
                    className='xl:text-3xl md:text-2xl text-lg  text-[#0b0c3f] mb-4 '
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}>
                    Rentabilidad estimada:12% anual.
                  </motion.p>

                  <motion.p
                    className='xl:text-3xl md:text-2xl text-lg  text-[#0b0c3f] mb-4 '
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}>
                    Enterga inmediata agosto 2025
                  </motion.p>
                </div>
              </div>

              {/* Formulario animado */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
                className='flex lg:flex-1  flex-col'>
                <Form />
              </motion.div>
              <div className='text-[#0b0c3f] font-light md:text-lg  p-2 flex align-center items-center content-center justify-between gap-4'>
                <div className='md:flex md:content-center justify-center gap-2 items-center'>
                  <a href='https://www.instagram.com/wenelenrentals/'>
                    @wenelenrentals
                  </a>
                  <p className='text-sm'>©2025 WENELEN</p>
                </div>
                <div className='flex gap-2 lg:hidden'>
                  <img
                    src='/images/lupaRecurso1.svg'
                    alt='hola'
                    className='w-16 '
                  />
                  <img
                    src='/images/lupaRecurso2.svg'
                    alt='hola'
                    className='w-16 '
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
