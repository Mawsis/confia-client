import React from 'react'
import {User} from 'lucide-react'

export default function ChatBot() {
  return (
    <div className='flex justify-center items-center mt-10'>
            <div className='bg-white w-4/6 flex flex-col items-center space-y-4 border-8 border-primary rounded-md p-7'>
                <h2 className=' text-primary'>Chat bot</h2>
                <div className='flex flex-col space-y-3 w-full'>
                    <div className='flex justify-start space-x-2 items-center
                     '>
                        <div className=' flex justify-center items-center space-x-3 border border-[#222222] rounded-lg px-5 py-3 '>
                            <div className='bg-primary rounded-xl text-white p-[6px]'>
                                <User />
                            </div>
                            <div>
                                Welcome! How can i help you!
                            </div>
                        </div>
                    </div>
                    <div className=' flex justify-end'>
                        <div className='border border-[#222222] rounded-lg px-5 py-3'>
                            I am looking to book a room for me and my wife
                        </div>
                        
                    </div>
                    <div className='flex justify-start space-x-2 items-center
                     '>
                        <div className=' flex justify-center items-center space-x-3 border border-[#222222] rounded-lg px-5 py-3 max-w-md'>
                            <div className='bg-primary rounded-xl text-white p-[6px]'>
                                <User />
                            </div>
                            <div>
                                There is various choices, from 3 stars such as HM Hotel or 5 stars like Syphax, do you have additional preferences ( swiming pool, close to the beach ...etc )
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="text" className='border-2 border-primary w-full rounded-md py-2 px-3' placeholder='Talk with me'/>
                    </div>
                </div>
            </div>
        </div>
  )
}
