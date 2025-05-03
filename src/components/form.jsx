import React, { useState } from 'react'

const Form = () => {
  const [result, setResult] = useState('')
  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'd960514b-d740-4e1b-ac20-b132726e82ae')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }
  return (
    <form
      onSubmit={onSubmit}
      className='  lg:max-w-md 2xl:lg:max-w-xl  flex flex-col gap-8 bg-white p-2  space-y-4 rounded-lg shadow-lg '>
      <h2 className=' self-center text-md md:text-2xl font-medium text-[#0b0c3f] font-display'>
        Contactate con nosotros
      </h2>
      <div>
        <input
          className='w-full border-b border-[#0b0c3f]/25 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b0c3f] text-sm md:text-md'
          type='text'
          name='name'
          placeholder='Tu nombre'
          required
        />

        <input
          className='w-full  border-b border-[#0b0c3f]/25 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b0c3f] text-sm md:text-md'
          type='email'
          name='email'
          placeholder='Tu correo'
          required
        />
        <input
          className='w-full  border-b border-[#0b0c3f]/25 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b0c3f] text-sm md:text-md'
          type='phone'
          name='Telefono'
          placeholder='Telefono'
          required
        />
        <input
          type='hidden'
          name='webhook'
          value='https://hooks.zapier.com/hooks/catch/22741200/2pjcsr7/'
        />

        <textarea
          className='w-full  border-b border-[#0b0c3f]/25 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b0c3f] text-sm md:text-md'
          name='message'
          placeholder='Mensaje (opcional)'
          rows='2'></textarea>
      </div>
      <div className='self-end '>
        <button
          type='submit'
          className='shadow-xl/20
        text-light text-sm  
        hover:bg-[#0b0c3f] bg-white  
        text-[#0b0c3f] hover:text-white
        transition duration-200 p-2 border border-gray-300 rounded'>
          Contactate Ahora
        </button>
      </div>

      {result && (
        <span className='block text-sm text-green-600 mt-2'>{result}</span>
      )}
    </form>
  )
}

export default Form
