import React from 'react'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

export default function Contact() {
  return (
    <div className=' max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8
        rounded-lg space-y-8 lg:space-y-0 lg:space-x-8     '  id='contact'>
            
            <div className= 'flex justify-center items-center ' > 
            <ul className="space-y-4">
  <li className="flex items-center">
    <img src={phone} className="h-[110px] w-auto mr-6" alt="phone" />
    <a href="tel:+917762074220" className="text-xl text-white/70 hover:underline">
      +91 7762074220
    </a>
  </li>
  <li className="flex items-center">
    <img src={mail} className="h-[110px] w-auto mr-6" alt="mail" />
    <a href="mailto:sauravkumarobra50@gmail.com" className="text-xl text-white/70 hover:underline">
      sauravkumarobra50@gmail.com
    </a>
  </li>
</ul>

            </div>

            <div className='bg-white/10 p-6 rounded-xl mx-auto max-w-[550px]' >
                <h2 className='text-5xl font-bold text-orange-400 mb-4' >Let's connect</h2>
                <p className='text-white/70 mb-6' >Send me a message and lets schedule a call!</p>
                <form action="https://getform.io/f/bwnnkyva" method="POST" className=' space-y-4 ' >
                    <div className='grid md:grid-cols-2 gap-2' >
                        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' type="text" name='name' placeholder='First Name'  />
                        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' type="text" name='name' placeholder='Last Name'  />
                        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' type="email" name='email' placeholder='Your Email'  />
                        <input className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' type="number" name='phone' placeholder='Phone'  />
                    </div>
                    <textarea className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400'  />
                    <button
                        className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold
                         text-xl rounded-xl  '
                    >Send Message</button>
                </form>
            </div>
    </div>
  )
}
