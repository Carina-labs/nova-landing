import React from 'react'

export const LogoIcon = () => {
  return (
    <div className="flex justify-center items-center">
      <img
        className="block w-auto h-5 lg:h-8 2xl:h-9 3xl:h-10"
        src="/assets/Logo.svg"
        alt="Logo"
      />
      <img
        className="block ml-2 w-auto h-4 2xl:h-5 3xl:h-6"
        src="/assets/Supernova.svg"
        alt="Supernova"
      />
    </div>
  )
}
