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
      className=' w-full md:w-3/4 xl:w-full xl:max-w-lg max-w-lg flex flex-col gap-8 bg-white p-2  space-y-4 rounded-lg shadow-lg '>
      <h2 className=' self-center text-2xl font-medium text-[#0b0c3f] font-display'>
        Contactate con nosotros
      </h2>
      <div>
        <input
          className='w-full border-b border-[#0b0c3f] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b0c3f]'
          type='text'
          name='name'
          placeholder='Tu nombre'
          required
        />

        <input
          className='w-full  border-b border-[#0b0c3f] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b0c3f]'
          type='email'
          name='email'
          placeholder='Tu correo'
          required
        />
        <input
          className='w-full  border-b border-[#0b0c3f] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b0c3f]'
          type='phone'
          name='Telefono'
          placeholder='Telefono'
          required
        />

        <textarea
          className='w-full  border-b border-[#0b0c3f] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0b0c3f]'
          name='message'
          placeholder='Mensaje (opcional)'
          rows='2'
          ></textarea>
      </div>

      <button
        type='submit'
        className='w-full shadow-xl/20  hover:bg-[#0b0c3f] bg-white   text-[#0b0c3f] hover:text-white   px-4  transition duration-200 font-light'>
        NO PIERDAS MÁS TIEMPO, CONTACTATE YA!
      </button>

      {result && (
        <span className='block text-sm text-green-600 mt-2'>{result}</span>
      )}
    </form>
  )
}

export default Form
