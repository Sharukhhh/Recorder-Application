import React from 'react'
import { Toaster } from 'react-hot-toast'

const ToasterComponent = () => {
  return (
    <Toaster
    position='top-right'
    toastOptions={{
        className: '',
        duration: 3000,
        style: {
            background: '#000',
            color: '#fff',
        },
    }}
    />
  )
}

export default ToasterComponent