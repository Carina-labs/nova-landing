import Image from 'next/image'
import React from 'react'

const stats = [
  {
    name: 'ATOM',
    desc: 'Lorem ipsum dolor sit amet, nonummy nibh euismod.',
    src: '../../assets/ATOM.svg',
  },
  {
    name: 'OSMO',
    desc: 'Lorem ipsum dolor sit amet, nonummy nibh euismod.',
    src: '../../assets/OSMO.svg',
  },
  {
    name: 'JUNO',
    desc: 'Lorem ipsum dolor sit amet, nonummy nibh euismod.',
    src: '../../assets/JUNO.svg',
  },
]

export const Ecosystem = () => {
  return (
    <div className="relative pt-16 pb-12 overflow-hidden">
      <h1 className="text-tw-white text-34 font-extrabold text-center tracking-tight mb-8">
        Supernova Ecosystem
      </h1>
      <div className="max-w-5xl mx-auto">
        <dl className="mt-10 py-3 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="flex border-2 border-yellow-default py-2 bg-white shadow rounded-lg overflow-hidden sm:p-6"
            >
              <div className="flex items-center mr-4">
                <img className="w-36 h-36" src={item.src} />
              </div>
              <div className="mt-3">
                <dt className="text-left text-24 font-bold text-gray-500 truncate">
                  {item.name}
                </dt>
                <dd className="mt-1 text-left text-sm font-medium text-black">
                  {item.desc}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
