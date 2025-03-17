import React from 'react'

const Button = ({bgcolor, color, size, text,borderRadius }) => {
  return (
    <button
     type='button'
     style={{backgroundcolor: bgcolor, color, borderRadius}}
     classname={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}

    </button>
  )
}

export default Button