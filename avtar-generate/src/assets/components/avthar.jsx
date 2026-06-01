 import React from 'react'
import axios from 'axios';
import {useState} from 'react'

 function Avthar() {
  
    const [avatarUrl, setAvatarUrl] = useState('');
    const [sprite , setSprite] = useState('human')
   const[seed ,setSeed] = useState(1000)

   function handleSprit(spriteType) {
  setSprite(spriteType);
  setAvatarUrl(`https://api.dicebear.com/9.x/${spriteType}/svg?seed=${seed}`);
}

   function handleGenerate() {
  const x = Math.floor(Math.random() * 1000);
  setSeed(x);
  setAvatarUrl(`https://api.dicebear.com/9.x/${sprite}/svg?seed=${x}`);
}
   

     function AvtarDownload() {
    if (!avatarUrl) return;
    axios.get(avatarUrl, { responseType: 'blob' })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'avatar.svg');
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => {
        console.error('Error downloading avatar:', error);
      });
}
 

  return (
  <div className='flex justify-center items-center h-screen bg-[#111115]'>
    <div className='w-[500px] rounded-[15px] overflow-hidden text-white bg-[#1a1a1ef1] p-8 hover:shadow-[0px_0px_40px_0px_rgb(248,113,113)] transition-all duration-300 ease-in-out'>
      
      <h1 className='text-3xl font-bold mb-4'>Avatar Generator</h1>

      <p className='text-sm mb-4'>
        Generate unique avatars with ease. Customize your avatar's features and create a personalized look.
      </p>

      <div className='w-full h-[300px] bg-white rounded mb-4 flex justify-center items-center overflow-hidden'>
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt='Avatar'
            className='w-full h-full object-contain'
          />
        ) : (
          <p className='text-gray-500'>Generate Avatar</p>
        )}
      </div>

      <p className='mb-3'>Choose any avatar:</p>

      <div className='grid grid-cols-3 gap-4 mb-4'>
        <button onClick={() => handleSprit('adventurer')} className='px-4 py-2 bg-[#f87171] rounded'>
          Human
        </button>

        <button onClick={() => handleSprit('avataaars')} className='px-4 py-2 bg-[#f87171] rounded'>
          Pixel
        </button>

        <button onClick={() => handleSprit('bottts')} className='px-4 py-2 bg-[#f87171] rounded'>
          Robot
        </button>

        <button onClick={() => handleSprit('fun-emoji')} className='px-4 py-2 bg-[#f87171] rounded'>
          Emoji
        </button>

        <button onClick={() => handleSprit('lorelei')} className='px-4 py-2 bg-[#f87171] rounded'>
          Lorelei
        </button>

        <button onClick={() => handleSprit('pixel-art')} className='px-4 py-2 bg-[#f87171] rounded'>
          Pixel Art
        </button>
      </div>

      <div className='flex justify-center gap-4 mt-4'>
        <button
          onClick={handleGenerate}
          className='px-4 py-2 bg-[#f77161] rounded'
        >
          Generate Avatar
        </button>

        <button
          onClick={AvtarDownload}
          className='px-4 py-2 bg-[#f77161] rounded'
        >
          Download Avatar
        </button>
      </div>

    </div>
  </div>
);
 }
 export default Avthar