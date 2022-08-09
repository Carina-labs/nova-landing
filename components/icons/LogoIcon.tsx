import React from 'react'

export const LogoIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        className="block w-auto h-5 md:h-7"
        src="/assets/Logo.svg"
        alt="Logo"
      />
      <img
        className="block ml-2 w-auto h-4 md:h-5"
        src="/assets/Supernova.svg"
        alt="Supernova"
      />
    </div>
  )
}
