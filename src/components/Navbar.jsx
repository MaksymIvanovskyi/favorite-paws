import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import fav_paw from '../assets/preview.png';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Locations from '../pages/Locations';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
        setError('Будь ласка, введіть текст');
    } else if (inputValue.trim() === "йди нахуй") {
        setError('кусай за хуй');
    } else if (inputValue.trim().length < 9) {
        setError('Мінімальна кількість символів: 9!');
    } else {
        setError('');
        console.log(inputValue)
    }
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[auto] text-[#915634]'>
      <img className='w-[180px] mx-1 mt-[50px] ' src={fav_paw} alt='/' />
      <form onSubmit={handleSubmit}>
        <input  type='text' className='rounded-xl text-black border border-2 border-[#915634] font-bold p-2 rounded' placeholder="Введіть текст" value={inputValue} onChange={(e)  => setInputValue(e.target.value)}/>
        <button type="submit" className='rounded-xl m-2 p-2 text-white bg-[#915634] font-bold rounded hover:bg-[#7b492b] active:bg-[#653c25]' >Відправити</button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <div onClick={handleNav} className='m-5 block md:show'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[35%] h-full border-[#ffd3ba] bg-[#ffd3ba] ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%]'}>
        <h1 className='p-10 flex justify-center w-full text-3xl font-bold text-[#824421] m-4'style={{ fontSize: "3rem" }}>Улюблені лапки</h1>
        <Link to="/" className="p-10 flex justify-center items-center   border-gray-600 text-[#733a19] font-bold block hover:text-[#ffd3ba] hover:bg-[#733a19] "style={{ fontSize: "3rem" }}>Home</Link>
        <Link to="/locations" className="p-10 flex justify-center items-center   border-gray-600 text-[#733a19] font-bold block hover:text-[#ffd3ba] hover:bg-[#733a19] "style={{ fontSize: "3rem" }}>Locations</Link>
        <Link to="/about" className="p-10 flex justify-center items-center   border-gray-600 text-[#733a19] font-bold block hover:text-[#ffd3ba] hover:bg-[#733a19] "style={{ fontSize: "3rem" }}>About</Link>
        <Link to="/contact" className="p-10 flex justify-center items-center   border-gray-600 text-[#733a19] font-bold block hover:text-[#ffd3ba] hover:bg-[#733a19] "style={{ fontSize: "3rem" }}>Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
