import React from 'react'
import NavBar from '../components/NavBar'
import Swiping from '../components/Swiping'
import {User} from 'lucide-react'
import ChatBot from '../components/ChatBot'

export default function LandingPage() {
  return (
    <div className=' bg-secondary h-full w-full flex flex-col py-6'>
        <NavBar/>
        <div className=' mt-10 mx-10 border-b-4 pb-8 border-primary w-auto'>
            <Swiping/>
        </div>
        <div className=' mt-10 mx-10 border-b-4 pb-8 border-primary w-auto'>
            <ChatBot/>
        </div>
        <div className='  mt-10 mx-10 border-b-4 pb-8 border-primary w-auto bg-secondary'>
            <div className='w-full flex justify-center items-center space-x-40'>
                <div>
                    confia@gmail.com <br />
                    +213 123456789 <br />
                    Les issers
                </div>
                <div>
                    2022-2023 All rights reserved <br />
                    Innobyte Hackathon - Byte craft
                </div>
            </div>
        </div>
    </div>
  )
}
