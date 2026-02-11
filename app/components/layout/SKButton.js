import React from 'react'
import { CircleChevronRight } from 'lucide-react'

const SKButton = ({text}) => {
  return (
  <button className="flex items-center w-[fit-content] gap-3 bg-white/90 border border-gray-300 text-black px-6 py-2 rounded-full text-[18px] font-[400] hover:bg-[#D0F94A] hover:text-[#051C24] hover:border-[#D0F94A] transition">
                  {text}
                  <CircleChevronRight />
                </button>
  )
}

export default SKButton