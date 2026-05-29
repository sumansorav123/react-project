import React from 'react'
import {useState} from 'react'
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix
} from "react-icons/fa";

function Dice1() {
 const diceSide = [
    <FaDiceOne />,
    <FaDiceTwo />,
    <FaDiceThree />,
    <FaDiceFour />,
    <FaDiceFive />,
    <FaDiceSix />
  ];

    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(1);

    const rolling = () => {
       
        setDice1(Math.floor(Math.random() * diceSide.length))
        setDice2(Math.floor(Math.random() * diceSide.length))
    }

  return (
    <div className='h-screen w-screen bg-gray-900 flex flex-col items-center justify-center text-white'>
        <div className='flex flex-col items-center gap-10 bg-gray-800 p-10 rounded-lg'>
        <h1 className='text-2xl font-bold  text-orange-400'>Dice Rolling Game</h1>
        <div className='flex gap-5 text-9xl text-cyan-600'>
            <div className='hover:scale-110 transition duration-300 ease-in-out hover:text-cyan-300'>
                   {diceSide[dice1]}
            </div>
            <div className='hover:scale-110 transition duration-300 ease-in-out hover:text-cyan-300'>
                     {diceSide[dice2]}
            </div>
            
               
        </div>
        <button className="bg-cyan-400 hover:bg-cyan-300 hover:scale-105 transition duration-300 text-gray-900 font-bold px-8 py-3 rounded-2xl text-xl shadow-lg"
          onClick={rolling}
         >Roll  Dice</button>
        </div>
    </div>
  )
}

export default Dice1