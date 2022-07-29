import React from 'react'

export const LogoIcon = () => {
  return (
    <a href="#" className="flex justify-start items-center">
      <img className="block h-5 w-auto" src="/assets/Logo.svg" alt="Logo" />
      <img
        className="block h-3 w-auto ml-2"
        src="/assets/Supernova.svg"
        alt="Supernova"
      />
    </a>
  )
}
