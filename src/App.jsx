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
        <div className='logoConteiner flex  absolute  gap-16 justify-center  items-center bg-[#0b0c3f] z-100 l:w-[25%] w-[35%] h-[15%] left-[65%] l:left-[75%] top-[85%]'>
          <div className=' flex flex-col items-center'>
            <p className='text-white font-light'>Desarrolladora</p>
            <img
              className='l:w-20  w-12 '
              src='/images/lupaRecurso1.svg'
              alt=''
            />
          </div>
          <div className='h-[70%] w-[1px] bg-white my-4' />
          <div className='flex flex-col items-center'>
            <p className='text-white font-light'>Gerencia</p>
            <img
              src='/images/lupaRecurso2.svg'
              className='l:w-32  w-24'
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
          <div className='rectangulo absolute top-0 left-0 bg-white w-full lg:w-[80vw] h-full flex flex-col'>
            <div className=' h-full flex flex-col justify-around gap-8 px-4  lg:w-2/3  md:px-8 md:py-24 xl:px-8 xl:py-24 '>
              <div
                id='contenedorTexto'
                className='flex lg:flex-1  pt-18 md:pt-4 responsive  lg:w-[100%] flex-col xl:gap-4 gap-4 '>
                {/* Título animado letra por letra */}
                <motion.h1
                  className=' sm:text-3xl lg:text-3xl text-2xl md:text-4xl xl:text-4xl 2xl:text-5xl  font-sans font-bold text-[#0b0c3f] mb-8 flex flex-wrap '
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                  }}>
                  ESTA ES TU OPORTUNIDAD PARA INVERTIR EN VACA MUERTA
                </motion.h1>

                {/* Subtítulo */}
                <div className='flex flex-row  justify-between lg:pr-8 '>
                  <motion.p
                    className='xl:text-3xl md:text-2xl text-lg font-medium text-[#0b0c3f] mb-4 lg:self-end'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}>
                    Rentabilidad del 12% Anual.
                  </motion.p>

                  <motion.p
                    className='rounded border border-[#0b0c3f] lg:py-2 lg:px-4 lg:text-[0.9rem] xl:text-xl text-lg font-light text-[#0b0c3f] text-center  leading-tight'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.4,
                      duration: 0.8,
                      ease: 'easeOut',
                    }}>
                    Enterga inmediata
                    <br className='lg:block hidden' /> Agosto 2025
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
              <div className='text-[#0b0c3f] font-light text-lg pl-16 p-2 flex align-center items-center content-center justify-start gap-4'>
                <a href='https://www.instagram.com/wenelenrentals/'>
                  @wenelenrentals
                </a>
                <h4 className='text-sm'>©2025 WENELEN</h4>
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
