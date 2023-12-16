import React from 'react'
import {User} from 'lucide-react'


export default function NavBar() {
  return (
    <div className='flex justify-between items-center mx-10 border-b-4 pb-6 border-primary rounded-sm'>
            <div className=''>
                <img src="./src/assets/Group.svg" alt="Logo" />
            </div>
            <div className='flex justify-center items-center space-x-7 text-gray'>
                <div>Home</div>
                <div>Booking</div>
                <div>Q&A</div>
                <button className='bg-white border border-primary text-black rounded-xl font-bold py-2 px-5
                hover:bg-primary hover:text-white'>Start Booking</button>
                <div className='bg-primary rounded-xl text-white p-[6px]'>
                    <User />
                </div>
                <div className='text-primary'>
                    1337 pts
                </div>
            </div>
        </div>
    )
}
