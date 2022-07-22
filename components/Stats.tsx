import React from 'react'

const stats = [
  { name: 'Supporting Chain', stat: '10+' },
  { name: 'Total Value Locked', stat: '$10,000,000+' },
  { name: 'Governance Proposal', stat: '100+' },
]

export const Stats = () => {
  return (
    <div className="relative bg-tw-black overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <dl className="mt-10 py-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="border-2 border-yellow-default py-3 bg-white shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm text-center font-medium text-gray-500 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-24 text-center font-extrabold text-blue-default">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
