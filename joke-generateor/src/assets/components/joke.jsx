import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Joke() {
  const [joke, setJoke] = useState('');
  const [punchline, setPunchline] = useState('');


  const generateJoke = async () => {
  
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(response.data.setup);
      setPunchline(response.data.punchline);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };



  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#5c3023] to-[#000000]'>
        {/* joke content */}
        <div className=" bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl border border-white/20 hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] transition-all duration-500 w-200">
        
         {/* Header with bounce animation on hover */}
          <div className='flex items-center gap-3 mb-8 group'>
            <div className='text-5xl animate-bounce-slow group-hover:animate-spin-slow'>🎭</div>
            <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent'>
              Joke Generator
            </h1>
          </div>

          {/* Joke display */}
            <div className='space-y-6'>
            <div className='bg-black/20 rounded-xl p-6 border-l-4 border-amber-500 transition-all duration-300 hover:scale-[1.02] hover:bg-black/30'>
             <div className='transition-all duration-500 ease-in-out animate-fade-in'>
                <span className='text-amber-400 text-sm font-semibold uppercase tracking-wider mb-2 block'>🤔 Setup</span>
                <p className='text-lg md:text-xl text-white/90'>{joke}</p>
             </div>
              <div className='mt-4 transition-all duration-500 ease-in-out animate-fade-in-delay'>
                <span className='text-amber-400 text-sm font-semibold uppercase tracking-wider mb-2 block'>😂 Punchline</span>
                <p className='text-md text-white/90'>{punchline}</p>
              </div>
            </div>
          </div>

          {/* joke generator button */}
          <div className='mt-10 flex justify-center group '>
            <button
              onClick={generateJoke}
              className='px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-200 text-black font-semibold rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all duration-300 group-hover:scale-105'
            >
              <span className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 animate-spin-slow">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 .001h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Generate Joke
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Joke