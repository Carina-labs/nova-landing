import React from 'react'

export const LogoIcon = () => {
  return (
    <div className="flex justify-start items-center">
      <img
        className="block h-5 lg:h-7 w-auto xl:h-9"
        src="/assets/Logo.svg"
        alt="Logo"
      />
      <img
        className="block h-3 lg:h-4 w-auto ml-2 xl:h-5"
        src="/assets/Supernova.svg"
        alt="Supernova"
      />
    </div>
  )
}
