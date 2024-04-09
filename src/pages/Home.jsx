import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

export default function Home(){
    return(
        <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="text-3xl font-bold text-center mb-4">Бажаєте швидко та легко знайти місця, щоб провести час із своїми чотирилапими улюбленцями?</h1>
            <Link to="/locations" className='bg-[#915634] rounded block hover:bg-[#7b492b] active:bg-[#653c25]'> Перегляньте пет-френдлі заклади у Львові </Link>
        </div>      
    )
}
