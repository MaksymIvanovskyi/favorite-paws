import React from 'react';
import 'tailwindcss/tailwind.css';

export default function Home() {
    return (
        <div className="flex flex-col justify-start items-center h-screen">
            <div className="">
                <h1 className="bg-[#733a19] text-white text-3xl rounded font-bold py-2 px-3">Домашня сторінка</h1>
            </div>
            <div>
                <h1>Сервіс "Улюблені Лапки" допоможе вам швидко знайти пет-френдлі заклади, для відпочинку з вашими домашніми улюбленцями</h1>
            </div>
            <div>
                <h1>Перейдіть до вкладки "Локації", використовуючи навігаційне меню у правому верхньому куті.</h1>
            </div>
        </div>
    )
}
