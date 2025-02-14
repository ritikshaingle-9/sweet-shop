import React from 'react'
import Sweetshop from "./sweetshop.jpg"
import { WEBSITE_NAME,WEBSITE_DESCRIPTION,SHOP_IMG,BUTTON1,BUTTON2,BUTTON_STYLE } from './config'

export default function App() {
  return (
    <div>
        <h1 className='text-center text-red-300 text-5xl my-7 underline decoration-dotted'>{WEBSITE_NAME}</h1>
        <p className='text-center text-2xl mt-14 mx-16'>{WEBSITE_DESCRIPTION}</p>
        <img
         src={Sweetshop}
         className='h-[300px] object-cover block mx-auto my-8'/>

        <div className='flex justify-center'>
        <button className='bg-pink-800 text-white px-4 py-2 mx-4 rounded-md '>{BUTTON1}</button>
        <button className='bg-pink-800 text-white px-4 py-2 mx-4 rounded-md'>{BUTTON2}</button>
        </div>
    </div>
  )
}
 