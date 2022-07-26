import React, { useEffect } from 'react'

const stats = [
  { name: 'Supporting Chain', stat: '10+' },
  { name: 'Total Value Locked', stat: '$10,000,000+' },
  { name: 'Governance Proposal', stat: '100+' },
]

export const Stats = () => {
  useEffect(() => {
    const downCallback = function (entries: any) {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInDtoU')
        } else {
          entry.target.classList.remove('animate-fadeInDtoU')
        }
      })
    }

    const downObserver = new IntersectionObserver(downCallback)

    const down = document.querySelectorAll('#down')
    down.forEach(function (target) {
      downObserver.observe(target)
    })
  }, [])
  return (
    <div id="down" className="relative z-10">
      <dl className="w-4/5 mt-10 mx-auto py-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="border-2 border-yellow-default px-2 py-9 bg-white shadow rounded-lg overflow-hidden"
          >
            <dt className="text-sm text-center font-medium text-gray-500 truncate">
              {item.name}
            </dt>
            <dd className="mt-1 text-30 text-center font-extrabold text-blue-default">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
