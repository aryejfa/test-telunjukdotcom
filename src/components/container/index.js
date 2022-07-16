import React from 'react'

export default function Container({ children, colors, padding, margin }) {
  return (
    <div className={`items-stretch bg-grey-lighter bg-white-500  ${margin} ${colors} `}>
      <div className={`text-grey-darker bg-grey-light px-0  mx-8 ${padding} lg:mx-12`}>
        {children}
      </div>
    </div>
  )
}
