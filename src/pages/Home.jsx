import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import background from '../assets/фон.jpg'; // Замініть цей шлях на правильний шлях до вашого фонового зображення

export default function Home(){
    return(
        <div className="flex justify-end items-center min-h-screen bg-cover" style={{ backgroundImage: `url(${background})` }}>
            <div className="flex flex-col justify-center items-end p-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-right mb-6 max-w-lg">Бажаєте швидко та легко знайти місця, щоб провести час із своїми чотирилапими улюбленцями?</h1>
                <Link to="/locations" className="block text-center bg-white text-black font-bold rounded-full py-2 px-4 my-4 hover:bg-[#6986ca] hover:text-white hover:border-black active:bg-[#4f6496] active:text-white active:border-black">
                    Перегляньте пет-френдлі заклади у Львові
                </Link>
            </div>
        </div>
    )
}
