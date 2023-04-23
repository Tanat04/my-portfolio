import React from "react"

import { logo2 } from "../assets"

const Footer = () => {
  return (
    <div className="bg-black-200 sm:px-16 px-16 sm:py-12 py-10 min-h-[25px] mt-20">
      <img src={logo2} alt="logo" className="w-14 m-auto mb-5" />

      <p className="text-secondary text-[17px] leading-[30px] text-center absolute bottom-8 left-0 right-0 mx-auto select-none">
        {new Date().getFullYear()} &copy; Tanat. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
