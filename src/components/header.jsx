import React from 'react'

const header = () => {
  return (
    <header className='w-full absolute top-0 left-0 bg-[#0e0f42] shadow-md py-4 px-6 z-100'>
      <div className=' mx-auto flex flex-row items-center justify-between'>
        <div className='flex-1 md:block hidden'></div>
        <div className='  flex-1 flex justify-center sm:justify-center mb-4 sm:mb-0'>
          <img
            src='/images/lupaRecurso 3.svg'
            alt='PORQUE NO LA ENCUNETRA'
            className='md:h-10 h-8'
          />
        </div>

        <div className='flex-1 justify-end flex '>
          <a
            href='https://wenelenrentals.com/'
            className='relative text-white   px-4 py-2 rounded-xl transition group'>
            <span
              href='https://wenelenrentals.com/'
              className="after:content-[''] font-light md-text-lg text-sm after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
              MÁS INFO
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default header
